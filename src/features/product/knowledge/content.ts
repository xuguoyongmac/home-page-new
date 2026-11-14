import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "knowledge",
  order: 4,
  icon: "book",
  copy: {
    zh: {
      name: "企业知识原生智能",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "检索授权知识，延续项目背景，回看原文。",
      features: landing.zh.features,
      related: [{"path": "ecosystem", "label": "了解开放生态"}],
    },
    en: {
      name: "Knowledge-Native Intelligence",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Use authorized knowledge and review original sources.",
      features: landing.en.features,
      related: [{"path": "ecosystem", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
