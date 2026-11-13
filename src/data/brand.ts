import type { Locale } from './types';

export const brand: Record<Locale, { name: string; descriptor: string; slogan: string; headline: [string, string]; vision: string }> = {
  zh: {
    name: 'TeGo 数字员工协作平台',
    descriptor: '数字员工协作平台',
    slogan: '让协作看得见，让成果可验收',
    headline: ['让协作看得见，', '让成果可验收'],
    vision: '让每一个企业，都拥有一支面向岗位、协同共生、持续进化的数字员工团队',
  },
  en: {
    name: 'TeGo Digital Workforce Collaboration Platform',
    descriptor: 'Digital Workforce\nCollaboration Platform',
    slogan: 'Make collaboration visible. Make outcomes verifiable.',
    headline: ['Make collaboration visible.', 'Make outcomes verifiable.'],
    vision: 'For every enterprise to have a role-focused team of digital employees that works in concert and keeps evolving.',
  },
};
