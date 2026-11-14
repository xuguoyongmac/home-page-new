import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['以企业私有知识为底座', '业务决策有据可依'],
      summary: '沉淀组织文档、项目资料与工作记忆，让数字员工结合授权知识开展工作，引用来源可查。',
    },
    pain: {
      title: '企业的经验，不该散落在各处',
      items: [
        '通用模型不了解内部制度与历史方案，业务回答缺少企业自己的依据。',
        '资料散落在网盘、电脑和聊天记录，找到可用信息需要反复查找。',
        '项目背景和工作成果分散，每次启动任务都要重新整理材料。',
      ],
    },
    concept: {
      title: '企业私有知识驱动的原生智能底座',
      body: '将制度、档案与历史方案纳入企业知识库，在项目空间积累资料和工作背景。数字员工按授权范围检索知识，将相关依据带入问答与写作，并通过引用链接回看来源。',
      labels: ['企业知识', '项目资料', '工作上下文', '引用来源'],
    },
    features: [
      { icon: 'book', title: '企业知识库接入', body: '导入制度、档案和历史方案，集中管理可检索的企业资料。' },
      { icon: 'layers', title: '项目上下文记忆', body: '在项目空间保留资料和工作背景，供后续任务查阅与复用。' },
      { icon: 'search', title: '引用溯源机制', body: '检索结果提供文档来源和引用链接，便于回看原文、核对依据。' },
    ],
    scenarios: [
      {
        title: '内部制度问答与方案撰写',
        body: '结合已授权的投标管理办法、合规制度和业务规范回答问题、起草材料，业务人员通过引用回看依据。',
        flow: ['检索制度', '引用撰写', '原文复核'],
      },
      {
        title: '历史项目经验复用',
        body: '查找同类项目的历史方案与交付材料，将可用资料带入新项目，结合当前目标继续完善。',
        flow: ['查找方案', '复用材料', '迭代成果'],
      },
    ],
    benefits: [
      { title: '工作有依据', body: '把企业制度和业务资料带入回答与成果。' },
      { title: '经验可复用', body: '让沉淀的知识服务同事与数字员工。' },
      { title: '减少重复沟通', body: '在同一项目内延续资料和工作背景。' },
      { title: '来源可核验', body: '通过引用回看原文，方便业务复核。' },
    ],
    closing: '让数字员工基于企业自有知识开展工作',
    related: ['collaboration', 'governance'],
  },
  en: {
    hero: {
      lines: ['Built on enterprise knowledge', 'Grounded in your business'],
      summary: 'Bring documents, project materials and work context together so digital employees can use authorized knowledge and link back to its sources.',
    },
    pain: {
      title: 'Put scattered experience within reach',
      items: [
        'General models lack your internal policies and past proposals, leaving business answers without company context.',
        'Files spread across drives, computers and conversations make useful information hard to find.',
        'Scattered project background and deliverables mean gathering the same materials for each new task.',
      ],
    },
    concept: {
      title: 'Intelligence grounded in private enterprise knowledge',
      body: 'Organize policies, archives and past proposals in enterprise knowledge bases. Keep materials and work context in project spaces. Digital employees search within authorized boundaries, use relevant evidence in answers and drafts, and provide links back to sources.',
      labels: ['Knowledge', 'Project files', 'Work context', 'Sources'],
    },
    features: [
      { icon: 'book', title: 'Private knowledge bases', body: 'Import policies, archives and past proposals into searchable libraries.' },
      { icon: 'layers', title: 'Project context', body: 'Retain project materials and background for later work to reference and reuse.' },
      { icon: 'search', title: 'Source traceability', body: 'Retrieved passages include document sources and links for review.' },
    ],
    scenarios: [
      {
        title: 'Policy answers and business drafts',
        body: 'Use authorized bidding policies, compliance rules and business standards to answer questions and prepare drafts. Follow citations to review the supporting material.',
        flow: ['Find policies', 'Draft with sources', 'Review evidence'],
      },
      {
        title: 'Reuse past project experience',
        body: 'Find proposals and deliverables from similar projects, bring relevant materials into the new project and adapt them to the current objective.',
        flow: ['Find past work', 'Reuse materials', 'Refine results'],
      },
    ],
    benefits: [
      { title: 'Grounded work', body: 'Bring company policies and materials into answers and deliverables.' },
      { title: 'Reusable experience', body: 'Make accumulated knowledge available to colleagues and digital employees.' },
      { title: 'Less repetition', body: 'Carry materials and background forward within the same project.' },
      { title: 'Verifiable sources', body: 'Follow references to the original material for business review.' },
    ],
    closing: 'Put your enterprise knowledge to work',
    related: ['collaboration', 'governance'],
  },
} satisfies LandingTranslations;
