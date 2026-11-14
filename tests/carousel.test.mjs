import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = ts.transpileModule(await readFile(new URL('../src/features/home/hero-carousel.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
class ElementStub extends EventTarget {
  dataset = {};
  attrs = new Map();
  inert = false;
  hidden = false;
  textContent = '';
  classList = { toggle() {} };
  setAttribute(key, value) { this.attrs.set(key, value); }
  getAttribute(key) { return this.attrs.get(key) ?? null; }
  removeAttribute(key) { this.attrs.delete(key); }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  matches() { return false; }
  focus() {}
}
function fixture({ pendingPlay = false, rejectPlays = 0 } = {}) {
  const hero = new ElementStub(), toggle = new ElementStub(), workspace = new ElementStub();
  const slides = Array.from({ length: 3 }, () => new ElementStub());
  slides.forEach((slide, index) => { slide.dataset.duration = '8000'; slide.dataset.active = String(index === 0); });
  const selectors = slides.map(() => new ElementStub());
  const video = new ElementStub();
  video.paused = true; video.currentTime = 6.4;
  let resolvePlay;
  let playCalls = 0;
  video.load = () => {};
  video.play = () => {
    playCalls++;
    if (playCalls <= rejectPlays) return Promise.reject(Object.assign(new Error('播放请求被切换中断'), { name: 'AbortError' }));
    return pendingPlay ? new Promise(resolve => { resolvePlay = () => { video.paused = false; resolve(); }; }) : (video.paused = false, Promise.resolve());
  };
  video.pause = () => { video.paused = true; };
  video.closest = () => slides[1];
  const media = new ElementStub(); media.dataset.heroSrc = '/images/task.webp'; media.dataset.heroSrcset = '/images/task-800.webp 800w';
  const videoSource = new ElementStub(); videoSource.dataset.heroSrc = '/images/task.webm';
  video.querySelector = () => videoSource.dataset.heroSrc ? videoSource : null;
  slides[1].querySelector = selector => selector === 'video' ? video : null;
  slides[1].querySelectorAll = () => [media, videoSource].filter(item => item.dataset.heroSrc);
  const region = new ElementStub(); region.clientWidth = 1200;
  region.hasPointerCapture = () => false;
  const elements = { '[data-carousel-toggle]': toggle, '[data-hero-motion-toggle]': workspace, '[data-carousel-announcement]': new ElementStub(), '[data-hero-slides]': region, '[data-hero-task-video]': video };
  hero.querySelector = selector => elements[selector] || null;
  hero.querySelectorAll = selector => selector === '[data-hero-slide]' ? slides : selector === '[data-slide-to]' ? selectors : [];
  const document = new EventTarget(); document.querySelectorAll = () => [hero];
  const window = new EventTarget(); window.matchMedia = () => Object.assign(new EventTarget(), { matches: false });
  let lifecycle;
  const timers = new Map(); let id = 0;
  const module = { exports: {} };
  runInNewContext(source, { exports: module.exports, require: () => ({ observeMotion: (_element, callback) => {
    lifecycle = callback;
    callback({ running: true, reduced: false, suspended: false, paused: false, enabled: true });
  } }), document, window, Element: ElementStub, Event, Error, performance: { now: () => 0 },
  setTimeout: callback => { timers.set(++id, callback); return id; }, clearTimeout: timer => timers.delete(timer) });
  module.exports.initializeHeroCarousels();
  const click = element => element.dispatchEvent(new Event('click'));
  return { hero, toggle, workspace, selectors, slides, video, media, click, timers,
    lifecycle, playCalls: () => playCalls, resolvePlay: () => resolvePlay(), hover: inside => {
      const event = new Event(inside ? 'pointerenter' : 'pointerleave');
      Object.defineProperty(event, 'pointerType', { value: 'mouse' }); hero.dispatchEvent(event);
    } };
}

test('manual selection and hover pause rotation while content remains animated', () => {
  const env = fixture();
  env.hover(true);
  assert.equal(env.timers.size, 0);
  assert.equal(env.hero.dataset.heroMotion, 'running');
  env.hover(false);
  assert.equal(env.timers.size, 1);
  env.click(env.selectors[0]);
  assert.equal(env.hero.dataset.carouselPaused, 'true');
  assert.equal(env.hero.dataset.heroMotion, 'running');
  assert.equal(env.slides[0].dataset.complete, undefined);
});

test('pausing the first visual never pauses the second video; revisiting retains local intent', async () => {
  const env = fixture();
  env.click(env.workspace);
  assert.equal(env.hero.dataset.heroMotion, 'paused');
  env.click(env.selectors[1]);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(env.hero.dataset.heroMotion, 'running');
  assert.equal(env.video.paused, false);
  assert.equal(env.media.getAttribute('srcset'), '/images/task-800.webp 800w');
  env.click(env.selectors[0]);
  assert.equal(env.hero.dataset.heroMotion, 'paused');
  assert.equal(env.video.paused, true);
  assert.equal(env.video.currentTime, 6.4);
});

test('a delayed play promise cannot restart a video after leaving its slide', async () => {
  const env = fixture({ pendingPlay: true });
  env.click(env.selectors[1]);
  env.click(env.selectors[2]);
  env.resolvePlay();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(env.video.paused, true);
});

test('repeated offscreen and restore updates recover the carousel clock', () => {
  const env = fixture();
  for (let index = 0; index < 3; index++) {
    env.lifecycle({ running: false, reduced: false, suspended: true, paused: false, enabled: true });
    assert.equal(env.timers.size, 0);
    env.lifecycle({ running: true, reduced: false, suspended: false, paused: false, enabled: true });
    assert.equal(env.timers.size, 1);
  }
});

test('an interrupted video request retries once when the slide is still active', async () => {
  const env = fixture({ rejectPlays: 1 });
  env.click(env.selectors[1]);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(env.playCalls(), 2);
  assert.equal(env.video.paused, false);
});

test('persistent video rejection settles on the poster without a retry loop', async () => {
  const env = fixture({ rejectPlays: Infinity });
  env.click(env.selectors[1]);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(env.playCalls(), 2);
  assert.equal(env.video.paused, true);
  assert.equal(env.video.dataset.playback, 'blocked');
});
