import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
if (!existsSync(dist)) {
  console.error('未找到 dist，请先运行 npm run build。');
  process.exit(1);
}

let checks = 0;
let localReferences = 0;
let fragmentReferences = 0;
const failures = [];
const check = (condition, message) => {
  checks += 1;
  if (!condition) failures.push(message);
};
const relative = file => path.relative(dist, file).split(path.sep).join('/');
const walk = directory => readdirSync(directory, { withFileTypes: true })
  .sort((a, b) => a.name.localeCompare(b.name))
  .flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const allFiles = walk(dist);
const htmlFiles = allFiles.filter(file => file.endsWith('.html'));
const namedEntities = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
const decodeEntities = value => value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, code) => {
  if (!code.startsWith('#')) return namedEntities[code.toLowerCase()] ?? entity;
  const point = code[1].toLowerCase() === 'x' ? Number.parseInt(code.slice(2), 16) : Number.parseInt(code.slice(1), 10);
  return point >= 0 && point <= 0x10ffff ? String.fromCodePoint(point) : entity;
});
const attributes = source => {
  const result = {};
  const pattern = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of source.matchAll(pattern)) result[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? '');
  return result;
};
const documents = new Map();
const urlPath = file => `/${relative(file).replace(/index\.html$/, '')}`;
const documentFor = file => {
  if (documents.has(file)) return documents.get(file);
  const html = readFileSync(file, 'utf8');
  const markup = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
  const tags = [...markup.matchAll(/<([A-Za-z][\w:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/g)]
    .map(match => ({ name: match[1].toLowerCase(), attrs: attributes(match[2]), start: match.index, end: match.index + match[0].length }));
  const refresh = tags.find(tag => tag.name === 'meta' && tag.attrs['http-equiv']?.toLowerCase() === 'refresh');
  const redirect = refresh?.attrs.content?.match(/(?:^|;)\s*url\s*=\s*(.+)$/i)?.[1]?.replace(/^['"]|['"]$/g, '');
  const ids = new Set(tags.flatMap(tag => [tag.attrs.id, tag.name === 'a' ? tag.attrs.name : undefined].filter(Boolean)));
  const record = { file, html, markup, tags, ids, redirect, pathname: urlPath(file) };
  documents.set(file, record);
  return record;
};
for (const file of htmlFiles) documentFor(file);
const firstHome = documents.get(path.join(dist, 'zh/index.html'));
const homeCanonical = firstHome?.tags.find(tag => tag.name === 'link' && tag.attrs.rel === 'canonical')?.attrs.href;
const origin = new URL(process.env.PUBLIC_SITE_URL || homeCanonical || 'https://www.zhama.com').origin;

const localTarget = (reference, fromPath) => {
  let url;
  try { url = new URL(reference, new URL(fromPath, origin)); }
  catch { return { error: `无效地址 ${reference}` }; }
  if (!['http:', 'https:'].includes(url.protocol) || url.origin !== origin) return { external: true };
  let decodedPath;
  try { decodedPath = decodeURIComponent(url.pathname); }
  catch { return { error: `无法解码地址 ${reference}` }; }
  const target = path.resolve(dist, `.${decodedPath}`);
  if (target !== dist && !target.startsWith(`${dist}${path.sep}`)) return { error: `地址越出构建目录 ${reference}` };
  const candidates = [target];
  if (!path.extname(decodedPath)) candidates.push(path.join(target, 'index.html'), `${target}.html`);
  else if (decodedPath.endsWith('/')) candidates.push(path.join(target, 'index.html'));
  const file = candidates.find(candidate => existsSync(candidate) && statSync(candidate).isFile());
  return { file, url, error: file ? undefined : `目标不存在 ${reference}` };
};

const validateReference = (reference, from, category = '链接') => {
  if (!reference) return;
  const target = localTarget(reference, from.pathname);
  if (target.external) return;
  localReferences += 1;
  check(Boolean(target.file), `${relative(from.file)}：${category}${target.error ? ` — ${target.error}` : ''}`);
  if (!target.file || !target.url.hash || !target.file.endsWith('.html')) return;
  fragmentReferences += 1;
  let document = documentFor(target.file);
  let fragment = target.url.hash;
  let remaining = 8;
  while (document.redirect && remaining > 0) {
    const next = localTarget(document.redirect, document.pathname);
    if (!next.file || !next.file.endsWith('.html')) break;
    fragment = next.url.hash || fragment;
    document = documentFor(next.file);
    remaining -= 1;
  }
  let id;
  try { id = decodeURIComponent(fragment.slice(1)); }
  catch { id = fragment.slice(1); }
  if (id.startsWith(':~:text=')) return;
  id = id.split(':~:text=')[0];
  check(!id || document.ids.has(id), `${relative(from.file)}：锚点不存在 ${reference} → ${relative(document.file)}#${id}`);
};

let regularPages=0, redirectPages=0;
for(const document of documents.values()) {
 const {tags,html,redirect,pathname}=document;
 const label=relative(document.file);
 if(redirect){redirectPages++;validateReference(redirect,document,'重定向');}
 else {
  regularPages++;
  check(tags.filter(t=>t.name==='h1').length===1,`${label}：h1 必须唯一`);
  check(/<title[^>]*>[^<]+<\/title>/.test(html),`${label}：缺少标题`);
  check(tags.some(t=>t.name==='meta'&&t.attrs.name==='description'&&t.attrs.content?.trim()),`${label}：缺少描述`);
  const ids=tags.map(t=>t.attrs.id).filter(Boolean);
  check(new Set(ids).size===ids.length,`${label}：ID 重复`);
  const locale=({'en':'en','zh':'zh-CN','zh-Hant':'zh-Hant','ja':'ja'})[pathname.split('/')[1]] || 'zh-CN';
  check(tags.find(t=>t.name==='html')?.attrs.lang===locale,`${label}：页面语言不符`);
  const canonical=tags.find(t=>t.name==='link'&&t.attrs.rel==='canonical');
  check(Boolean(canonical),`${label}：缺少 canonical`);
  for(const lang of ['zh-CN','en']) {
   const alternate=tags.find(t=>t.name==='link'&&t.attrs.hreflang===lang);
   check(Boolean(alternate),`${label}：缺少 ${lang} 对应页`);
   if(alternate)validateReference(alternate.attrs.href,document,'语言对应页');
  }
  for(const image of tags.filter(t=>t.name==='img')) {
   check(image.attrs.alt!==undefined,`${label}：图片缺少 alt`);
   if(!/^\/(zh|en)\/blog\/.+/.test(pathname)) check(Boolean(image.attrs.width&&image.attrs.height),`${label}：新页面图片缺少固有尺寸`);
   check(!/saaslauncher\/.*_V1\.0/.test(image.attrs.src??''),`${label}：仍引用人像旧图`);
  }
 }
 for(const tag of tags){
  if(tag.attrs.href!==undefined)validateReference(tag.attrs.href,document);
  if(tag.attrs.src!==undefined)validateReference(tag.attrs.src,document,'资源');
  for(const attribute of ['data-hero-src','data-hero-poster'])if(tag.attrs[attribute])validateReference(tag.attrs[attribute],document,'延迟媒体');
  for(const attribute of ['srcset','data-hero-srcset'])if(tag.attrs[attribute]){
   for(const candidate of tag.attrs[attribute].split(','))validateReference(candidate.trim().split(/\s+/)[0],document,'响应式图片');
   if(tag.name==='img'&&/\d+w(?:,|$)/.test(tag.attrs[attribute]))check(Boolean(tag.attrs.sizes),`${label}：响应式图片缺少 sizes`);
  }
 }
 for(const match of html.matchAll(/<script\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)) {
  const src=attributes(match[1]).src;if(src)validateReference(src,document,'脚本');
 }
}
const industries=['government','securities','general','insurance','state-owned','banking','internet','appliance'];
const capabilities=['digital-employees','collaboration','multi-agent','knowledge','integrations','governance'];
const routes=['','product','solutions','ecosystem','enterprise','resources','download','releases','faq','contact','privacy','terms','blog'];
for(const locale of ['zh','en']){
 for(const route of [...routes,...industries.map(i=>`solutions/${i}`), 'pricing', ...capabilities.map(i=>`product/${i}`)])check(existsSync(path.join(dist,locale,route,'index.html')),`${locale}/${route} 页面缺失`);
 const home=documentFor(path.join(dist,locale,'index.html'));
 for(const id of ['desktop-product','desktop-solutions','mobile-product','mobile-solutions'])check(home.ids.has(id),`${locale} 缺少导航分组 ${id}`);
 check(home.tags.some(t=>t.name==='a'&&t.attrs.href==='https://docs.zhama.com.cn/'),`${locale} 文档中心链接不正确`);
 check(home.tags.some(t=>t.name==='a'&&t.attrs.href==='https://www.zhama.com/zh/blog'),`${locale} 博客链接不正确`);
 for(const slug of capabilities)check(home.tags.some(t=>t.name==='a'&&t.attrs.href===`/${locale}/product/${slug}/`),`${locale} 能力菜单缺失 ${slug}`);

 check(home.tags.filter(t=>t.attrs.role==='tab'&&t.attrs.id?.startsWith('tab-')).length===5,`${locale} 首页应保留五类行业方案`);
 check(home.tags.filter(t=>t.attrs.role==='tabpanel'&&t.attrs.id?.startsWith('panel-')&&t.attrs.hidden===undefined).length===1,`${locale} 首页行业页签初始选中不唯一`);
 const visible=decodeEntities(home.markup.replace(/<[^>]+>/g,' '));
 check(!/example\.com|TODO|FIXME|仅供演示|占位数据|100%|零风险/.test(visible),`${locale} 首页存在未完成或绝对化文案`);
}
const baseline=JSON.parse(readFileSync(path.join(root,'docs/content-baseline_V1.0.json'),'utf8'));
const digest=text=>createHash('sha256').update(text).digest('hex');
const normalizedBody=text=>text.split('---').slice(2).join('---').trim().replaceAll('/blog-assets/images/','/images/').replaceAll('https://www.zhama.com/','https://zhama.com/');
for(const post of baseline.articles){
 const file=path.join(root,'src/content/blog',post.locale,post.filename);
 check(existsSync(file),`历史文章缺失：${post.filename}`);
 if(existsSync(file))check(digest(readFileSync(file,'utf8'))===post.migratedSha256,`历史文章非预期变化：${post.filename}`);
 if(existsSync(file))check(digest(normalizedBody(readFileSync(file,'utf8')))===post.normalizedBodySha256,`历史文章正文与原站不符：${post.filename}`);
 check(existsSync(path.join(dist,post.locale,'blog',post.slug,'index.html')),`历史文章路由缺失：${post.slug}`);
}
check(digest(readFileSync(path.join(root,'src/data/legacy.ts'),'utf8'))===baseline.legacyDataSha256,'法律文本与发行数据非预期变化');
let releaseCount=0;
try{
 const index=JSON.parse(readFileSync(path.join(dist,'releases/index.json'),'utf8'));
 releaseCount=index.files.length;
 check(releaseCount===baseline.releaseCount,'发行索引条数变化');
 for(const file of index.files){validateReference(file.path,documentFor(path.join(dist,'zh/download/index.html')),'发行清单');}
}catch(error){check(false,`发行索引异常：${error.message}`);}
const imageFiles=allFiles.filter(f=>f.includes('/images/saaslauncher/'));
check(imageFiles.every(f=>f.endsWith('_V1.2.webp')),'发布目录含非当前品牌版本的配图或制图原件');
check(imageFiles.length===4,'应发布四张软件概念配图');
const summary={checks,regularPages,redirectPages,localReferences,fragmentReferences,articles:baseline.articles.length,releaseCount,failures};
console.log(JSON.stringify(summary,null,2));
process.exitCode=failures.length?1:0;
