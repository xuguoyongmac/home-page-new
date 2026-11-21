import test from 'node:test';
import assert from 'node:assert/strict';
import { sourceStep, normalizeSourceTrail, appendSourceStep, readSourceState, leadJourney, ATTRIBUTION_TTL } from '../shared/contact-attribution.mjs';

test('a real home, solutions menu and banking visit produces a readable source journey', () => {
  let steps = [];
  for (const [path, kind] of [['/zh/', 'page'], ['/zh/solutions/', 'menu'], ['/zh/solutions/banking/', 'page']]) steps = appendSourceStep(steps, sourceStep(path, '', kind));
  assert.equal(leadJourney({ sourceTrail: steps }), '首页 → 解决方案 → 银行解决方案');
  assert.equal(steps[1].kind, 'menu');
  assert.equal(steps.at(-1).path, '/zh/solutions/banking/');
});

test('direct entry does not invent a home page or a prior visit and old leads remain readable', () => {
  assert.equal(leadJourney({ sourceTrail: [sourceStep('/en/solutions/banking/')] }), 'Banking solution');
  assert.equal(leadJourney({ sourceTrail: [] }), '直接进入联系页');
  assert.equal(leadJourney({}), '');
});

test('reloads are deduplicated while a genuine return to an earlier page remains visible', () => {
  const home = sourceStep('/zh/'); const pricing = sourceStep('/zh/pricing/');
  let steps = appendSourceStep([home], home);
  assert.equal(steps.length, 1);
  steps = appendSourceStep(appendSourceStep(steps, pricing), home);
  assert.deepEqual(steps.map(s => s.path), ['/zh/', '/zh/pricing/', '/zh/']);
  for(let i = 0; i < 35; i++) steps = appendSourceStep(steps, i % 2 ? pricing : home);
  assert.equal(steps.length, 20);
});

test('stale or damaged sessions reset and valid sessions retain their source information', () => {
  const state = { updatedAt: 1000, steps: [sourceStep('/zh/pricing/')] };
  assert.equal(readSourceState(state, 1001).steps.length, 1);
  assert.deepEqual(readSourceState(state, 1001 + ATTRIBUTION_TTL).steps, []);
  assert.deepEqual(readSourceState(state, 999).steps, []);
  assert.deepEqual(readSourceState({ ...state, steps: {} }, 1001).steps, []);
});

test('source trails exclude contact pages, query strings, off-site URLs, injected controls and invalid kinds', () => {
  for (const path of ['/zh/contact/', '/zh/contact/submitted/', 'https://reserved.invalid/zh/', '//reserved.invalid/', '/zh/?email=private', '/zh/pricing/#private', '/zh/../pricing/']) assert.equal(sourceStep(path), null);
  for (const value of [null, {}, [{path:'/zh/blog/article/',label:'标题\n注入'}], [{path:'/zh/',label:'首页',kind:'script'}], Array(21).fill({path:'/zh/',label:'首页'})]) assert.equal(normalizeSourceTrail(value), null);
  assert.equal(sourceStep('/zh/blog/article/', '<at id=all>标题</at>').label, '<at id=all>标题</at>');
});
