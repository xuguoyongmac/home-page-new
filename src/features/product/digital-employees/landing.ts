import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['面向岗位的数字劳动力', '按需招募上岗'],
      summary: '把岗位职责与专业能力封装成可复用模板，按业务需要补充团队劳动力，承接标准化工作。',
    },
    pain: {
      title: '业务高峰来临，专业人力如何补位？',
      items: [
        '专业岗位招聘、培训周期长，阶段性工作缺少稳定的执行人力。',
        '同类工作反复开展，优秀岗位经验难以沉淀和复制。',
        '专项项目启动快，临时交接的资料与工作标准难以统一。',
      ],
    },
    concept: {
      title: '把岗位经验，变成可复用的数字劳动力',
      body: '将岗位职责、技能配置与工作区文件沉淀为数字员工模板。按需招募为独立运行的数字员工，完成配置与所需审批后参与团队工作；知识、插件和使用范围分别授权。',
      labels: ['数字员工模板', '岗位职责', '专业技能', '独立数字员工'],
    },
    features: [
      { icon: 'layers', title: '岗位能力编排', body: '将职责、技能和工作区文件封装为模板，复用成熟工作方法。' },
      { icon: 'key', title: '授权与委托机制', body: '分别配置员工使用范围、知识授权和插件业务委托。' },
      { icon: 'network', title: '按需招募上岗', body: '从模板创建独立数字员工，完成配置与审批后投入工作。' },
    ],
    scenarios: [
      { title: '标书助理岗位', body: '将标书编制要求沉淀为模板，承接资料归集、初稿撰写与资质自查，由业务专家终审。', flow: ['归集投标资料', '编制与自查', '业务专家终审'] },
      { title: '合规预审岗位', body: '配置预审所需制度与检查方法，整理材料初审结果，将需要判断的事项交给业务人员复核。', flow: ['接收业务材料', '按制度预审', '人工复核'] },
    ],
    benefits: [
      { title: '经验资产化', body: '将岗位方法沉淀为可维护、可分发的模板。' },
      { title: '人力弹性化', body: '围绕阶段性业务和专项项目招募数字员工。' },
      { title: '作业标准化', body: '复用同一套职责、技能和资料要求。' },
      { title: '项目更快启动', body: '从既有岗位配置出发，减少重复搭建。' },
    ],
    closing: '搭建属于企业自己的数字岗位团队',
    related: ['multi-agent', 'governance'],
  },
  en: {
    hero: {
      lines: ['A digital workforce', 'built around your roles'],
      summary: 'Package role responsibilities and specialist capabilities into reusable templates. Recruit digital employees as business needs change.',
    },
    pain: {
      title: 'When work peaks, how does your team keep up?',
      items: [
        'Hiring and training take time while specialist work keeps arriving.',
        'Teams repeat the same work without preserving their best methods.',
        'Fast-moving projects make handovers and consistent standards difficult.',
      ],
    },
    concept: {
      title: 'Turn role expertise into a reusable workforce',
      body: 'Capture responsibilities, skills and workspace files in a digital employee template. Recruit an independently running digital employee, complete configuration and any required approval, then bring it into the team. Knowledge, plugins and employee access are authorized separately.',
      labels: ['Role template', 'Responsibilities', 'Specialist skills', 'Digital employee'],
    },
    features: [
      { icon: 'layers', title: 'Configure role capabilities', body: 'Package responsibilities, skills and workspace files into a reusable template.' },
      { icon: 'key', title: 'Authorize and delegate', body: 'Manage employee access, knowledge permissions and plugin delegation separately.' },
      { icon: 'network', title: 'Recruit on demand', body: 'Create independent digital employees and complete the required setup and approval.' },
    ],
    scenarios: [
      { title: 'Bid assistant', body: 'Reuse bid preparation requirements to collect materials, draft documents and check qualifications before a specialist reviews the result.', flow: ['Collect materials', 'Draft and check', 'Specialist review'] },
      { title: 'Compliance pre-review', body: 'Configure policies and review methods, prepare initial findings and bring decisions back to the responsible colleague.', flow: ['Receive materials', 'Review against policy', 'Human review'] },
    ],
    benefits: [
      { title: 'Preserve expertise', body: 'Maintain and distribute proven role methods as templates.' },
      { title: 'Adapt team capacity', body: 'Recruit for changing workloads and focused projects.' },
      { title: 'Reuse work standards', body: 'Start from consistent responsibilities, skills and materials.' },
      { title: 'Start projects sooner', body: 'Build on an existing role configuration.' },
    ],
    closing: 'Build a digital team around your business roles',
    related: ['multi-agent', 'governance'],
  },
} satisfies LandingTranslations;
