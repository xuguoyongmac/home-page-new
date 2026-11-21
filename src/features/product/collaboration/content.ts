import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "collaboration",
  order: 3,
  icon: "folder",
  copy: {
    zh: {
      name: "项目协作与交付",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "让成员与数字员工围绕同一项目和成果持续协作。",
      features: landing.zh.features,
      related: [{"path": "product", "label": "查看平台能力"}],
    },
    en: {
      name: "Project Collaboration & Delivery",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Keep people and digital employees working from the same project context.",
      features: landing.en.features,
      related: [{"path": "product", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
