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
    zh: '六项岗位能力汇聚到简洁的数字员工岗位图标，由数字员工向下交付业务成果。蓝紫色全景成果驾驶舱展示成果图谱、交付指标、经营分析、收入成本、利润趋势及成果文件。',
    en: 'Six role capabilities converge on a simple digital employee role icon, which delivers business results to the blue-violet panoramic cockpit below. The cockpit shows a results map, delivery gauge, business KPIs, revenue and costs, profit trends and delivered files.',
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
      ? {zh:'/images/product/digital-employees/intro-hero-zh_V18.4.webp',en:'/images/product/digital-employees/intro-hero-en_V18.4.webp'}
      : {zh:`/images/product/${slug}/experience-hero-zh_${version}.webp`,en:`/images/product/${slug}/experience-hero-en_${englishVersion}.webp`};
    return [slug, {src, mobile:{src,width:1536,height:1024},width:1536,height:1024,alt}];
  }),
);
