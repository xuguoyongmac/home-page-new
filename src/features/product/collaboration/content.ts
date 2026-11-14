import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "collaboration",
  order: 3,
  icon: "folder",
  copy: {
    zh: {
      name: "人机协同工作台",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "围绕项目资料，在会话中协作与交接。",
      features: landing.zh.features,
      related: [{"path": "product", "label": "查看平台能力"}],
    },
    en: {
      name: "Human-Agent Collaboration",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Share project context, conversations and handoffs.",
      features: landing.en.features,
      related: [{"path": "product", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
