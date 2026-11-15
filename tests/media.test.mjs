import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import { parse } from 'parse5';
import { optimizeMedia } from '../scripts/optimize-media.mjs';

function elements(tree, name) {
  return [...(tree.tagName === name ? [tree] : []), ...(tree.childNodes || []).flatMap(child => elements(child, name))];
}
const attrs = element => Object.fromEntries(element.attrs.map(item => [item.name, item.value]));

test('media build preserves source art, alpha, deferred loads, and responsive picture selection', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'tego-media-'));
  try {
    const dist = path.join(root, 'dist'), cache = path.join(root, 'cache');
    await mkdir(path.join(dist, 'images'), { recursive: true });
    const pixels = Buffer.alloc(960 * 640 * 4);
    let seed = 17;
    for (let index = 0; index < pixels.length; index += 4) {
      seed = (seed * 16807) % 2147483647;
      pixels[index] = seed % 256; pixels[index + 1] = (seed >> 8) % 256;
      pixels[index + 2] = (seed >> 16) % 256; pixels[index + 3] = index < 960 * 40 ? 0 : 255;
    }
    const original = await sharp(pixels, { raw: { width: 960, height: 640, channels: 4 } }).png().toBuffer();
    const imagePath = path.join(dist, 'images', 'workflow.png');
    await writeFile(imagePath, original);
    await writeFile(path.join(dist, 'index.html'), '<!doctype html><html><body><main><div class="hero-visual-stage"><picture><source media="(max-width:700px)" srcset="/images/workflow.png"><img src="/images/workflow.png" width="960" height="640" alt="执行成果"></picture></div><div data-hero-slide data-active="false"><img data-hero-src="/images/workflow.png" width="960" height="640" alt="值守成果"><video><source data-hero-src="/images/execution.webm" type="video/webm"></video></div></main></body></html>');
    const summary = await optimizeMedia(dist, cache);
    assert.equal(summary.responsiveImages, 2);
    assert.ok(summary.largestVariantBytes < summary.originalBytes);
    assert.deepEqual(await readFile(imagePath), original);
    const tree = parse(await readFile(path.join(dist, 'index.html'), 'utf8'));
    const images = elements(tree, 'img').map(attrs);
    assert.match(images[0].srcset, /480w/);
    assert.match(images[0].sizes, /58vw/);
    assert.equal(images[1].src, undefined);
    assert.equal(images[1].srcset, undefined);
    assert.match(images[1]['data-hero-srcset'], /480w/);
    const sources = elements(tree, 'source').map(attrs);
    assert.match(sources[0].srcset, /480w/);
    assert.equal(sources[1].src, undefined);
    const files = await readdir(path.join(dist, '_media'));
    assert.equal((await sharp(path.join(dist, '_media', files[0])).metadata()).hasAlpha, true);
    const cached = await readdir(cache);
    await optimizeMedia(dist, cache);
    assert.deepEqual(await readdir(cache), cached);
  } finally { await rm(root, { recursive: true, force: true }); }
});
