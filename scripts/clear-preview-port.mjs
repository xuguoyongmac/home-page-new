import { spawnSync } from 'node:child_process';
import { setTimeout } from 'node:timers/promises';

const port = 4350;
const listeners = () => {
  const result = spawnSync('lsof', ['-nP', '-t', `-iTCP:${port}`, '-sTCP:LISTEN'], { encoding: 'utf8' });
  if (result.error || (result.status !== 0 && result.status !== 1)) {
    throw new Error(`无法检查 ${port} 端口：${result.error?.message || result.stderr.trim()}`);
  }
  return [...new Set(result.stdout.trim().split(/\s+/).filter(Boolean).map(Number))];
};

try {
  const previous = listeners();
  for (const pid of previous) {
    if (pid === process.pid || pid === process.ppid) throw new Error('端口进程与启动进程重叠，请检查启动方式。');
    try { process.kill(pid, 'SIGTERM'); }
    catch (error) { if (error.code !== 'ESRCH') throw error; }
  }
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (listeners().length === 0) {
      console.log(previous.length ? `已停止 ${port} 端口旧服务，准备重新启动。` : `${port} 端口可用，准备启动。`);
      process.exit(0);
    }
    await setTimeout(125);
  }
  throw new Error(`${port} 端口旧服务尚未退出，本次启动已停止。`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
