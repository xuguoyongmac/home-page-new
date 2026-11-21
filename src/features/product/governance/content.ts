import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "governance",
  order: 5,
  icon: "shield",
  copy: {
    zh: {
      name: "企业权限与审计",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "分别管理资源权限与业务委托，沿任务回看执行。",
      features: landing.zh.features,
      related: [{"path": "enterprise", "label": "了解企业部署"}],
    },
    en: {
      name: "Enterprise Access & Audit",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Manage resource access and delegation, then inspect execution by task.",
      features: landing.en.features,
      related: [{"path": "enterprise", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
