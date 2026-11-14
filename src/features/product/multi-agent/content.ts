import type { CapabilityModule } from '../types';
import landing from './landing';

export default {
  slug: "multi-agent",
  order: 1,
  icon: "layers",
  copy: {
    zh: {
      name: "分布式任务协同",
      title: landing.zh.hero.lines.join("，"),
      description: landing.zh.hero.summary,
      navigationDescription: "围绕业务目标分工，跟踪进度并汇总成果。",
      features: landing.zh.features,
      related: [{"path": "product", "label": "查看平台能力"}],
    },
    en: {
      name: "Distributed Task Orchestration",
      title: landing.en.hero.lines.join(" "),
      description: landing.en.hero.summary,
      navigationDescription: "Delegate specialist work and bring the results together.",
      features: landing.en.features,
      related: [{"path": "product", "label": "Explore the platform"}],
    },
  },
} satisfies CapabilityModule;
