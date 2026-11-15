import { DUTY_SCENE_DURATION, DUTY_CYCLE_DURATION } from './outcomes-data.ts';

export interface DutyFrame { scene: number; step: number; delivered: boolean; progress: number; }
export function dutyFrame(elapsed: number): DutyFrame {
  const cycle = ((elapsed % DUTY_CYCLE_DURATION) + DUTY_CYCLE_DURATION) % DUTY_CYCLE_DURATION;
  const withinScene = cycle % DUTY_SCENE_DURATION;
  return { scene: Math.floor(cycle / DUTY_SCENE_DURATION), step: Math.min(2, Math.floor(withinScene / 800)),
    delivered: withinScene >= 2_400, progress: withinScene / DUTY_SCENE_DURATION };
}
interface FrameDriver { now: () => number; request: (callback: FrameRequestCallback) => number; cancel: (id: number) => void; }

/** A region retains its playback position while suspended. */
export class DutyPlayback {
  private elapsed = 0;
  private startedAt: number | undefined;
  private frame: number | undefined;
  private render: (frame: DutyFrame) => void;
  private driver: FrameDriver;
  constructor(render: (frame: DutyFrame) => void, driver: FrameDriver) { this.render = render; this.driver = driver; }
  private tick = (timestamp: number) => {
    if (this.startedAt === undefined) return;
    this.render(dutyFrame(this.elapsed + timestamp - this.startedAt));
    this.frame = this.driver.request(this.tick);
  };
  setRunning(running: boolean) {
    if (running === (this.startedAt !== undefined)) return;
    if (running) {
      this.startedAt = this.driver.now();
      this.render(dutyFrame(this.elapsed));
      this.frame = this.driver.request(this.tick);
    } else {
      this.elapsed += this.driver.now() - this.startedAt!;
      this.startedAt = undefined;
      if (this.frame !== undefined) this.driver.cancel(this.frame);
      this.frame = undefined;
    }
  }
  dispose() { this.setRunning(false); }
}
