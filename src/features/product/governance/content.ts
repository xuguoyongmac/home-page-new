import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "governance",
  order: 5,
  icon: "shield",
  copy: {
    zh: {
      name: "可信权限与审计",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "管理访问范围与业务委托，追溯任务执行。",
      features: landing.zh.features,
      related: [{"path": "enterprise", "label": "了解企业部署"}],
    },
    en: {
      name: "Secure Access & Audit",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Control access and delegation. Trace task execution.",
      features: landing.en.features,
      related: [{"path": "enterprise", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
