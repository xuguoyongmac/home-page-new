import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

const legacy = {
  cloud: 'enterprise/#cloud',
  'cloud-agent': 'product/#collaboration',
  platform: 'ecosystem/#integrations',
  technical: 'product/#execution',
  'plugin-system': 'ecosystem/#integrations',
  'multi-agent': 'product/#execution',
  guide: 'resources/#manual',
  station: 'enterprise/#station',
};

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://www.zhama.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  devToolbar: { enabled: false },
  server: { port: 4350, host: '127.0.0.1' },
  vite: { server: { strictPort: true }, preview: { strictPort: true } },
  markdown: { shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } }, processor: satteri({ hastPlugins: [{
    name: 'tego-article-headings',
    element: { filter: ['h1'], visit(node, context) { context.setField(node, 'tagName', 'h2'); } },
  }] }) },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [sitemap({
    i18n: { defaultLocale: 'zh', locales: { zh: 'zh-CN', en: 'en' } },
    filter: (page) => !page.includes('/404') && !Object.keys(legacy).some(slug => new URL(page).pathname.endsWith(`/${slug}/`)),
  })],
  redirects: {
    '/': '/zh/',
    ...Object.fromEntries(['zh', 'en'].flatMap(locale => Object.entries(legacy).map(([from, to]) => [`/${locale}/${from}/`, `/${locale}/${to}`]))),
  },
});
