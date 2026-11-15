import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile, copyFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, serialize } from 'parse5';
import sharp from 'sharp';

const widths = [480, 800, 1200, 1600, 2000, 2400];
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
function setAttr(node, name, value) {
  const existing = node.attrs.find(item => item.name === name);
  if (existing) existing.value = value;
  else node.attrs.push({ name, value });
}
const walkFiles = async directory => (await Promise.all((await readdir(directory, { withFileTypes: true }))
  .map(entry => entry.isDirectory() ? walkFiles(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();

export function imageSizes(classes) {
  if (classes.includes('matrix-art')) return '(max-width: 700px) 840px, (max-width: 1300px) 74vw, 980px';
  if (classes.includes('workspace-scene')) return '(max-width: 700px) 1600px, (max-width: 1440px) 94vw, 1320px';
  if (classes.includes('hero-visual-stage')) return '(max-width: 700px) 100vw, (max-width: 1100px) 90vw, 58vw';
  return '(max-width: 700px) 100vw, (max-width: 1300px) 94vw, 1200px';
}

/** Build-time derivatives leave public source art intact and reuse a content-addressed cache. */
export async function optimizeMedia(dist, cacheDirectory) {
  const outputDirectory = path.join(dist, '_media');
  await mkdir(outputDirectory, { recursive: true });
  await mkdir(cacheDirectory, { recursive: true });
  const converted = new Map();
  let originalBytes = 0;
  let largestVariantBytes = 0;
  let responsiveImages = 0;

  const variantsFor = source => {
    if (!source?.startsWith('/') || !/\.(png|jpe?g|webp)$/i.test(source) || source.startsWith('/_astro/')) return undefined;
    if (converted.has(source)) return converted.get(source);
    const pending = (async () => {
      const input = path.resolve(dist, '.' + source);
      if (!input.startsWith(dist + path.sep)) throw new Error(`图片路径越界：${source}`);
      const buffer = await readFile(input);
      const metadata = await sharp(buffer).metadata();
      if (!metadata.width || metadata.width < 600 || metadata.pages > 1 || buffer.length < 24000) return undefined;
      const maxWidth = Math.min(metadata.width, 2400);
      const candidates = [...new Set([...widths.filter(width => width < maxWidth), maxWidth])];
      const hash = createHash('sha256').update(buffer).update('webp-quality88-effort4-v1').digest('hex').slice(0, 16);
      const variants = [];
      for (const width of candidates) {
        const filename = `${hash}-${width}.webp`;
        const cached = path.join(cacheDirectory, filename);
        let size;
        try { size = (await stat(cached)).size; }
        catch (error) {
          if (error.code !== 'ENOENT') throw error;
          const optimized = await sharp(buffer).rotate().resize({ width, withoutEnlargement: true })
            .webp({ quality: 88, alphaQuality: 100, effort: 4 }).toBuffer();
          size = optimized.length;
          await writeFile(cached, optimized, { flag: 'wx' });
        }
        // Never replace a smaller original with a larger re-encode.
        if (size >= buffer.length) {
          variants.push({ width: metadata.width, url: source, bytes: buffer.length });
          break;
        }
        await copyFile(cached, path.join(outputDirectory, filename));
        variants.push({ width, url: `/_media/${filename}`, bytes: size });
      }
      if (!variants.length) return undefined;
      originalBytes += buffer.length;
      largestVariantBytes += variants.at(-1).bytes;
      return variants.map(item => `${item.url} ${item.width}w`).join(', ');
    })();
    converted.set(source, pending);
    return pending;
  };

  for (const file of (await walkFiles(dist)).filter(file => file.endsWith('.html'))) {
    const html = await readFile(file, 'utf8');
    const tree = parse(html);
    let changed = false;
    const walk = async (node, ancestors = []) => {
      if (node.tagName === 'img') {
        const classes = ancestors.map(parent => attr(parent, 'class') || '').join(' ');
        const deferred = attr(node, 'data-hero-src');
        const srcset = await variantsFor(deferred || attr(node, 'src'));
        if (srcset && !attr(node, 'srcset')) {
          setAttr(node, deferred ? 'data-hero-srcset' : 'srcset', srcset);
          setAttr(node, 'sizes', attr(node, 'sizes') || imageSizes(classes));
          responsiveImages++;
          changed = true;
        }
        if (!attr(node, 'decoding')) { setAttr(node, 'decoding', 'async'); changed = true; }
        if (!attr(node, 'loading')) {
          const firstScreen = /(?:site-header|page-hero|capability-hero|station-hero|about-hero|value-hero|pricing-hero)/.test(classes);
          setAttr(node, 'loading', firstScreen ? 'eager' : 'lazy');
          changed = true;
        }
      }
      if (node.tagName === 'source' && node.parentNode?.tagName === 'picture') {
        const source = attr(node, 'srcset');
        const srcset = source && !/[\s,]/.test(source) ? await variantsFor(source) : undefined;
        if (srcset) {
          const classes = ancestors.map(parent => attr(parent, 'class') || '').join(' ');
          setAttr(node, 'srcset', srcset);
          setAttr(node, 'sizes', attr(node, 'sizes') || imageSizes(classes));
          node.attrs = node.attrs.filter(item => item.name !== 'type');
          changed = true;
        }
      }
      for (const child of node.childNodes || []) await walk(child, [...ancestors, node]);
    };
    await walk(tree);
    if (changed) await writeFile(file, serialize(tree));
  }
  return { responsiveImages, originalBytes, largestVariantBytes };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const summary = await optimizeMedia(path.join(root, 'dist'), path.join(root, '.astro/media-cache'));
  console.log('响应式图片构建完成：' + JSON.stringify(summary));
}
