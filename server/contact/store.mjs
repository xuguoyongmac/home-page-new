import { mkdir, readFile, writeFile, rename, readdir, link, unlink, open } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

export class LeadStore {
  constructor(directory) { this.directory = directory; }
  file(id) { return path.join(this.directory, `${id}.json`); }
  async get(id) {
    try { return JSON.parse(await readFile(this.file(id), 'utf8')); }
    catch (error) { if (error.code === 'ENOENT') return null; throw error; }
  }
  async write(lead, { create = false } = {}) {
    await mkdir(this.directory, { recursive: true, mode: 0o700 });
    const temporary = path.join(this.directory, `.${randomUUID()}.tmp`);
    await writeFile(temporary, JSON.stringify(lead), { flag: 'wx', mode: 0o600 });
    const handle = await open(temporary, 'r+');
    try { await handle.sync(); } finally { await handle.close(); }
    try {
      if (create) await link(temporary, this.file(lead.id));
      else await rename(temporary, this.file(lead.id));
    } finally { await unlink(temporary).catch(error => { if (error.code !== 'ENOENT') throw error; }); }
  }
  async list() {
    await mkdir(this.directory, { recursive: true, mode: 0o700 });
    return (await readdir(this.directory)).filter(name => /^[a-f0-9-]{36}\.json$/.test(name)).map(name => name.slice(0, -5));
  }
}
