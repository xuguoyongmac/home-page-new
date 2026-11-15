import test from 'node:test';
import assert from 'node:assert/strict';
import { DutyPlayback, dutyFrame } from '../src/features/home/duty-playback.ts';
import { DUTY_CYCLE_DURATION, DUTY_SCENE_DURATION, dutyCopy } from '../src/features/home/outcomes-data.ts';

function driver() {
  let time = 0, sequence = 0;
  const pending = new Map();
  return { now: () => time,
    request(callback) { pending.set(++sequence, callback); return sequence; },
    cancel(id) { pending.delete(id); },
    advance(milliseconds) { time += milliseconds; const callbacks = [...pending.values()]; pending.clear(); callbacks.forEach(callback => callback(time)); },
    get count() { return pending.size; },
  };
}
test('duty assignments deliver a result before moving to the next time of day', () => {
  assert.deepEqual(dutyFrame(0), { scene: 0, step: 0, delivered: false, progress: 0 });
  assert.equal(dutyFrame(2_399).delivered, false);
  assert.equal(dutyFrame(2_400).delivered, true);
  assert.equal(dutyFrame(DUTY_SCENE_DURATION).scene, 1);
  assert.equal(dutyFrame(DUTY_CYCLE_DURATION - 1).scene, 3);
  assert.deepEqual(dutyFrame(DUTY_CYCLE_DURATION), dutyFrame(0));
});
test('leaving the banner cancels work and resumes the exact playback position', () => {
  const frames = [], scheduler = driver();
  const clock = new DutyPlayback(frame => frames.push(frame), scheduler);
  clock.setRunning(true); scheduler.advance(1_600); clock.setRunning(false);
  const paused = frames.at(-1);
  assert.equal(scheduler.count, 0);
  scheduler.advance(60_000); assert.equal(frames.at(-1), paused);
  clock.setRunning(true); assert.deepEqual(frames.at(-1), paused);
  scheduler.advance(900);
  assert.equal(frames.at(-1).delivered, true);
  assert.equal(frames.at(-1).scene, 0);
  clock.dispose(); assert.equal(scheduler.count, 0);
});
test('repeated activation does not duplicate frames or affect another region', () => {
  const firstScheduler = driver(), secondScheduler = driver(); let secondFrame;
  const first = new DutyPlayback(() => {}, firstScheduler);
  const second = new DutyPlayback(frame => { secondFrame = frame; }, secondScheduler);
  first.setRunning(true); first.setRunning(true); second.setRunning(true);
  assert.equal(firstScheduler.count, 1);
  first.setRunning(false); secondScheduler.advance(5_300);
  assert.equal(secondFrame.scene, 1); assert.equal(firstScheduler.count, 0);
  first.dispose(); second.dispose();
});
test('reconciliation amounts, news groups and chart values reconcile with the result', () => {
  for (const locale of ['zh', 'en']) {
    const copy = dutyCopy(locale);
    assert.equal(copy.reconciliation.rows.reduce((sum, row) => sum + Number(row[1]), 0), 17);
    const amount = copy.reconciliation.rows.reduce((sum, row) => sum + Number(row[2].replaceAll(',', '')), 0);
    assert.equal(Math.round(amount * 100), 4_832_765);
    assert.equal(copy.trends.rows.reduce((sum, row) => sum + Number(row[1]), 0), 61);
    assert.equal(copy.scenes.length, 4);
  }
  assert.equal(Math.round([18.46, 27.92, 43.68, 56.17, 40.51].reduce((sum, value) => sum + value, 0) * 100), 18_674);
  assert.equal(((43.68 + 56.17) / 186.74 * 100).toFixed(1), '53.5');
});
