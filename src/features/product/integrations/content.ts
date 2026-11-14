import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "integrations",
  order: 2,
  icon: "plug",
  copy: {
    zh: {
      name: "业务系统连通",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "连接业务插件、MCP 工具与开放接口。",
      features: landing.zh.features,
      related: [{"path": "ecosystem", "label": "了解开放生态"}],
    },
    en: {
      name: "Business System Integration",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Connect business plugins, MCP tools and open APIs.",
      features: landing.en.features,
      related: [{"path": "ecosystem", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
