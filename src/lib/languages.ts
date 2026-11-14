import type { Locale } from '../data/types';

export type WebsiteLanguage = Locale | 'zh-Hant' | 'ja';
export const languages = [
  { id: 'zh', label: '简体中文', short: '简体', tag: 'zh-CN' },
  { id: 'zh-Hant', label: '繁體中文', short: '繁體', tag: 'zh-Hant' },
  { id: 'en', label: 'English', short: 'EN', tag: 'en' },
  { id: 'ja', label: '日本語', short: '日', tag: 'ja' },
] as const;

export const sourceLocaleFor = (language: WebsiteLanguage): Locale => language === 'zh-Hant' ? 'zh' : language === 'ja' ? 'en' : language;
export const languagePathFor = (language: WebsiteLanguage, page = '') => `/${language}/${page && (language === 'zh' || language === 'en') ? `${page}/` : ''}`;
export const websiteLanguageFor = (value?: string): WebsiteLanguage => languages.some(language => language.id === value) ? value as WebsiteLanguage : 'zh';
