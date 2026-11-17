import type { Locale } from '../../data/types';
interface CapabilityVisual {
  src: Record<Locale, string>;
  mobile: { src: Record<Locale, string>; width: number; height: number };
  width: number;
  height: number;
  alt: Record<Locale, string>;
}
const descriptions: Record<string, Record<Locale, string>> = {
  'digital-employees': {
    zh: 'TeGo 数字员工工牌位于曲面业务工作台中央，上方连接岗位定义、知识与记忆、技能与插件、任务协同、系统与工具连接、权限与审计，工作台展示经营分析、执行计划、业务看板和文档成果。',
    en: 'A TeGo digital employee badge sits at the center of a curved workspace, connected to role definition, knowledge and memory, skills and plugins, task collaboration, systems and tools, and permissions and audit. The workspace shows business analysis, execution plans, a business board and work documents.',
  },
  'multi-agent': {zh:'尽调任务按资料检索、数据提取和风险梳理分工，返回结果汇总为报告与差异清单。',en:'Specialist research, data extraction and risk checks return to one due diligence report and difference checklist.'},
  integrations: {zh:'授权连接接入客户资料，数字员工整理交流纪要并更新客户跟进记录。',en:'Authorized connections provide customer context, prepare meeting notes and update the follow-up record.'},
  collaboration: {zh:'项目工作台把资料目录、方案正文、修改意见和成果版本放在同一上下文。',en:'A project workspace connects source files, the proposal, review comments and document versions.'},
  knowledge: {zh:'企业知识检索界面将采购材料要求与制度原文、引用来源并列展示。',en:'An enterprise knowledge workspace connects a procurement answer to original policy passages and citations.'},
  governance: {zh:'权限与审计界面区分员工使用、知识、项目与业务委托，并展示审核和任务执行记录。',en:'An access and audit console separates employee, knowledge, project and delegation scope with review and execution records.'},
};
export const capabilityVisuals: Record<string, CapabilityVisual> = Object.fromEntries(
  Object.entries(descriptions).map(([slug, alt]) => {
    const version = ['integrations', 'governance'].includes(slug) ? 'V2.1' : 'V2.0';
    const englishVersion = slug === 'governance' ? 'V2.2' : version;
    const src = slug === 'digital-employees'
      ? {zh:'/images/product/digital-employees/intro-hero-zh_V13.1.webp',en:'/images/product/digital-employees/intro-hero-en_V13.1.webp'}
      : {zh:`/images/product/${slug}/experience-hero-zh_${version}.webp`,en:`/images/product/${slug}/experience-hero-en_${englishVersion}.webp`};
    return [slug, {src, mobile:{src,width:1536,height:1024},width:1536,height:1024,alt}];
  }),
);
