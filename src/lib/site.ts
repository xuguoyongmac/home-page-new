import type { Locale } from '../data/types';

export const locales: Locale[] = ['zh', 'en'];
export const site = {
  name: 'TeGo 数字员工协作平台',
  origin: import.meta.env.PUBLIC_SITE_URL || 'https://www.zhama.com',
  app: 'https://zhama.ai/',
  docs: 'https://docs.zhama.com.cn/',
  blog: 'https://www.zhama.com/zh/blog',
  iosAppStore: {
    url: 'https://apps.apple.com/cn/app/id6744411300',
    version: 'v5.15.0',
    releasedAt: '2026-11-14T20:35:08Z',
  },
  email: 'business@zhama.com',
};
export const pathFor = (locale: Locale, page = '') => `/${locale}/${page ? `${page}/` : ''}`;
export const appFor = (locale: Locale) => `${site.app}?lang=${locale}`;
export const ui = {
  zh: { try: '开始使用', contact: '预约交流', learn: '了解更多', docs: '文档中心', menu: '打开导航', close: '关闭导航', light: '浅色', dark: '深色', system: '跟随系统', theme: '外观', all: '查看全部', arrow: '探索产品能力', footer: '让协作看得见，让成果可验收', privacy: '隐私政策', terms: '服务协议', download: '下载中心', faq: '常见问题', blog: '产品博客', back: '返回首页' },
  en: { try: 'Get started', contact: 'Talk to us', learn: 'Learn more', docs: 'Documentation', menu: 'Open navigation', close: 'Close navigation', light: 'Light', dark: 'Dark', system: 'System', theme: 'Appearance', all: 'View all', arrow: 'Explore the platform', footer: 'Make collaboration visible. Make outcomes verifiable.', privacy: 'Privacy', terms: 'Terms', download: 'Downloads', faq: 'FAQ', blog: 'Blog', back: 'Back to home' },
};
