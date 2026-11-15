import type { Locale } from '../../data/types';

interface CapabilityVisual {
  src: Record<Locale, string>;
  mobile: { src: Record<Locale, string>; width: number; height: number };
  width: number;
  height: number;
  alt: Record<Locale, string>;
}

const mobileVisual = (slug: string): CapabilityVisual['mobile'] => ({
  src: {
    zh: `/images/product/${slug}/capability-visual-zh${slug === 'integrations' ? '_V1.1' : '-mobile_V1.0'}.webp`,
    en: `/images/product/${slug}/capability-visual-en${slug === 'integrations' ? '_V1.1' : '-mobile_V1.0'}.webp`,
  },
  width: 1024,
  height: 1024,
});

export const capabilityVisuals: Record<string, CapabilityVisual> = {
  'digital-employees': {
    mobile: {
      src: {
        zh: '/images/product/digital-employees/intro-hero-zh_V6.0.webp',
        en: '/images/product/digital-employees/intro-hero-en_V6.0.webp',
      },
      width: 1536, height: 1024,
    },
    src: {
      zh: '/images/product/digital-employees/intro-hero-zh_V6.0.webp',
      en: '/images/product/digital-employees/intro-hero-en_V6.0.webp',
    },
    width: 1536, height: 1024,
    alt: {
      zh: '数字员工业务工作台，汇集岗位职责、专业技能、企业知识、任务执行与交付成果。',
      en: 'A digital employee workspace brings together responsibilities, specialist skills, company knowledge, task execution and deliverables.',
    },
  },
  'multi-agent': {
    mobile: mobileVisual('multi-agent'),
    src: {
      zh: '/images/product/multi-agent/capability-visual-zh_V1.1.webp',
      en: '/images/product/multi-agent/capability-visual-en_V1.1.webp',
    },
    width: 1536, height: 1024,
    alt: {
      zh: '多 Agent 协同的概念视觉：主任务分为研究、分析和复核，专业结果返回同一个主任务统一汇总。',
      en: 'Multi-Agent concept: research, analysis and review return their specialist findings to one coordinated task.',
    },
  },
  integrations: {
    mobile: mobileVisual('integrations'),
    src: {
      zh: '/images/product/integrations/capability-visual-zh_V1.1.webp',
      en: '/images/product/integrations/capability-visual-en_V1.1.webp',
    },
    width: 1024, height: 1024,
    alt: {
      zh: '系统连接的概念视觉：数字员工通过授权工具、业务接口与项目数据，整理沟通纪要并更新客户跟进记录。',
      en: 'Integration concept: authorized tools, business APIs and project data help a digital employee prepare actions and update a customer follow-up record.',
    },
  },
  collaboration: {
    mobile: mobileVisual('collaboration'),
    src: {
      zh: '/images/product/collaboration/capability-visual-zh_V1.1.webp',
      en: '/images/product/collaboration/capability-visual-en_V1.1.webp',
    },
    width: 1536, height: 1024,
    alt: {
      zh: '人机协作的概念视觉：项目资料、修改意见和人工确认围绕同一份方案，数字员工接续处理并提交新版本。',
      en: 'Collaboration concept: project files, feedback and human review connect to the same proposal and its next revision.',
    },
  },
  knowledge: {
    mobile: mobileVisual('knowledge'),
    src: {
      zh: '/images/product/knowledge/capability-visual-zh_V1.1.webp',
      en: '/images/product/knowledge/capability-visual-en_V1.1.webp',
    },
    width: 1536, height: 1024,
    alt: {
      zh: '企业知识的概念视觉：项目资料与制度原文中的高亮片段，通过引用与工作回答对应。',
      en: 'Knowledge concept: selected passages from project materials and policies connect directly to citations in an answer.',
    },
  },
  governance: {
    mobile: mobileVisual('governance'),
    src: {
      zh: '/images/product/governance/capability-visual-zh_V1.1.webp',
      en: '/images/product/governance/capability-visual-en_V1.1.webp',
    },
    width: 1536, height: 1024,
    alt: {
      zh: '可信治理的概念视觉：组织身份、知识与项目范围、业务委托和执行记录对应到同一项工作成果。',
      en: 'Governance concept: identity, knowledge and project scope, delegation and execution records connect to the same work result.',
    },
  },
};
