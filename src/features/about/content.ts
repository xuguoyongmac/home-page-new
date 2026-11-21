import type { Locale } from '../../data/types';

interface AboutItem { icon: string; title: string; lead: string; }
interface AboutContent {
  title: string;
  meta: string;
  introductionTitle: string;
  introduction: [string, string];
  visionTitle: string;
  vision: [string, string, string];
  valuesTitle: string;
  values: AboutItem[];
}

export const aboutContent: Record<Locale, AboutContent> = {
  zh: {
    title: '关于扎马星辰',
    meta: '深圳市扎马星辰科技有限公司专注企业数字员工的研发与落地，以 TeGo 数字员工协作平台连接岗位、知识、工具与团队，让协作看得见，让成果可验收。',
    introductionTitle: '公司介绍',
    introduction: [
      '深圳市扎马星辰科技有限公司，是一家以 AI 原生力量驱动企业协作变革的科技公司。',
      '我们以 TeGo 数字员工协作平台为核心，将岗位职责、企业知识与业务工具连接起来，让数字员工融入组织，与人类团队围绕共同目标协作，从日常任务走向可审阅、可交付的工作成果。',
    ],
    visionTitle: '我们的愿景',
    vision: ['让每一个企业，都拥有一支', '面向岗位、协同共生、持续进化', '的数字员工团队'],
    valuesTitle: '我们的价值观',
    values: [
      { icon: 'wrench', title: '躬身实践', lead: '以自身为始，以实战为尺。' },
      { icon: 'check', title: '知行合一', lead: '所言即所能，所诺即所成。' },
      { icon: 'shield', title: '信任基石', lead: '坦诚为道，信任为基。' },
      { icon: 'target', title: '价值导向', lead: '以成果为终，以价值为衡。' },
    ],
  },
  en: {
    title: 'About Zhama Xingchen',
    meta: 'Zhama Xingchen builds the TeGo Digital Workforce Collaboration Platform, connecting roles, knowledge, tools and teams to make collaboration visible and outcomes verifiable.',
    introductionTitle: 'Company introduction',
    introduction: [
      'Shenzhen Zhama Xingchen Technology Co., Ltd. is an AI-native technology company transforming enterprise collaboration.',
      'Our core product, the TeGo Digital Workforce Collaboration Platform, connects job responsibilities, enterprise knowledge and business tools. People and digital employees work toward shared goals, turning everyday tasks into outcomes that can be reviewed and delivered.',
    ],
    visionTitle: 'Our vision',
    vision: ['For every enterprise to have', 'a role-focused digital workforce', 'that collaborates and keeps evolving.'],
    valuesTitle: 'Our values',
    values: [
      { icon: 'wrench', title: 'Hands-on practice', lead: 'Start with ourselves. Measure through real work.' },
      { icon: 'check', title: 'Knowledge into action', lead: 'Say what we can do. Deliver what we promise.' },
      { icon: 'shield', title: 'Trust as a foundation', lead: 'Act with candor. Build on trust.' },
      { icon: 'target', title: 'Value-driven work', lead: 'Work toward outcomes. Measure by value.' },
    ],
  },
};
