import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sirv from 'sirv';
import { createContactApp } from './app.mjs';
import { loadContactConfig, projectRoot } from './config.mjs';

const directory = path.join(projectRoot, 'dist');
if (!existsSync(path.join(directory, 'index.html'))) throw new Error('Run npm run build before npm run preview.');
const files = sirv(directory, { dev: true, extensions: ['html'], etag: true });
const app = createContactApp(loadContactConfig());
const server = createServer((request, response) => {
  app.handle(request, response).then(handled => {
    if (handled) return;
    files(request, response, () => { response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end('Page not found'); });
  }).catch(() => { if (!response.headersSent) response.writeHead(503); response.end(); });
});
server.requestTimeout = 20000;
server.headersTimeout = 10000;
server.on('error', error => { console.error('Preview could not start:', error.code); void app.close(); process.exitCode = 1; });
server.listen(4350, '127.0.0.1', () => console.info('Website and contact API: http://127.0.0.1:4350/zh/contact/'));
async function shutdown() { server.close(); await app.close(); }
process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);
