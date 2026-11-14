import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "digital-employees",
  order: 0,
  icon: "network",
  copy: {
    zh: {
      name: "岗位数字员工",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "将岗位职责与专业能力沉淀为可复用模板。",
      features: landing.zh.features,
      related: [{"path": "product", "label": "查看平台能力"}],
    },
    en: {
      name: "Digital Employee for Roles",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Reuse role expertise through digital employee templates.",
      features: landing.en.features,
      related: [{"path": "product", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
