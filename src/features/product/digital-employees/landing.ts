import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['专业岗位随需加入', '日常工作持续交付'],
      summary: '将岗位职责、专业技能与工作资料沉淀为模板，招募独立运行的数字员工，承接材料整理、方案编制与周期任务，让团队把精力放在关键判断上。',
    },
    pain: {
      title: '把反复做的工作交出去，把专业经验留下来',
      items: [
        '岗位经验跟着个人走，同类工作每次都要重新交代要求和方法。',
        '资料归集、文稿编制与初步核对反复占用专业人员的工作时间。',
        '周期任务依赖人工记住和跟进，历史工作背景难以接续。',
      ],
    },
    concept: {
      title: '从一套成熟做法，到一个能承接工作的数字员工',
      body: '数字员工模板保存岗位职责、技能和工作区文件。按业务需要招募为独立运行的数字员工，完成配置与所需审批，再分别授予员工使用、知识访问和插件业务委托，让岗位方法进入具体工作。',
      labels: ['岗位职责', '技能与工作文件', '招募数字员工', '承接业务任务'],
    },
    features: [
      { icon: 'layers', title: '成熟做法沉淀为岗位模板', body: '将职责、技能与工作区文件集中封装，维护并分发同一套岗位方法，让后续招募有标准可循。' },
      { icon: 'network', title: '按业务需要招募独立员工', body: '从模板创建独立运行的数字员工，完成配置与所需审批，为专项项目和日常工作补充执行力量。' },
      { icon: 'key', title: '使用、知识和业务委托分别授权', body: '分别管理数字员工使用范围、知识访问和插件业务委托，让每项工作在相应授权内开展。' },
      { icon: 'clock', title: '周期工作按计划接续', body: '配置定时任务，承接周期性资料整理与报告工作；查看运行记录和投递结果，掌握每次执行的去向。' },
      { icon: 'book', title: '工作经验成为下一次的能力', body: '按使用者隔离保存个人档案、长期记忆与工作日记，在组织策略下复盘工作，将成熟方法沉淀为技能。' },
    ],
    scenarios: [
      { title: '投标资料归集、编制与自查', body: '标书助理复用既定编制要求，归集资质与项目资料、形成初稿并完成自查，把投标材料交给业务专家终审。', flow: ['岗位模板与投标资料', '归集、编制与自查', '投标初稿与检查清单'] },
      { title: '业务材料合规预审', body: '合规预审岗位结合已配置的制度与检查方法整理材料，形成初审意见，将需要专业判断的问题交给业务人员复核。', flow: ['业务材料与适用制度', '逐项预审与问题整理', '初审意见与复核事项'] },
    ],
    benefits: [
      { title: '成熟经验留在企业', body: '将个人做法沉淀为可维护、可分发的岗位模板。' },
      { title: '执行力量按需补充', body: '围绕业务高峰和专项项目招募数字员工。' },
      { title: '同类工作有章可循', body: '沿用一致的职责、技能与资料要求。' },
      { title: '工作背景持续接续', body: '保留工作记忆与日记，为后续任务积累背景。' },
    ],
    closing: '让企业的岗位经验成为团队的持续生产力',
    related: ['multi-agent', 'governance'],
  },
  en: {
    hero: {
      lines: ['Role expertise on demand', 'Work delivered continuously'],
      summary: 'Turn responsibilities, specialist skills and work materials into templates. Recruit independently running digital employees for preparation, drafting and recurring work, so your team can focus on key judgments.',
    },
    pain: {
      title: 'Delegate repeatable work and keep expertise in the business',
      items: [
        'Role knowledge stays with individuals, so teams explain the same methods and requirements again.',
        'Collecting materials, drafting documents and initial checks repeatedly consume specialist time.',
        'Recurring work relies on manual follow-up, while the context from previous tasks is difficult to carry forward.',
      ],
    },
    concept: {
      title: 'From a proven method to a digital employee ready for work',
      body: 'A digital employee template holds role responsibilities, skills and workspace files. Recruit an independently running digital employee, complete configuration and any required approval, then grant employee access, knowledge permissions and plugin delegation separately.',
      labels: ['Responsibilities', 'Skills and work files', 'Recruit an employee', 'Delegate business work'],
    },
    features: [
      { icon: 'layers', title: 'Package proven role methods', body: 'Maintain and distribute responsibilities, skills and workspace files in a role template, giving future recruits a consistent starting point.' },
      { icon: 'network', title: 'Recruit independent employees as needed', body: 'Create independently running digital employees from templates, complete setup and any required approval, and add capacity for projects and daily work.' },
      { icon: 'key', title: 'Authorize access and delegation separately', body: 'Manage digital employee access, knowledge permissions and plugin delegation separately, keeping each task within its applicable authorization.' },
      { icon: 'clock', title: 'Keep recurring work on schedule', body: 'Schedule recurring preparation and reporting. Review run and delivery records to see what happened to each execution.' },
      { icon: 'book', title: 'Carry experience into the next task', body: 'Keep profiles, long-term memory and work diaries isolated by user. Reflect under organizational policy and preserve proven methods as skills.' },
    ],
    scenarios: [
      { title: 'Collect, draft and check bid materials', body: 'A bid assistant follows established requirements, gathers qualifications and project materials, prepares a draft and checks it before final specialist review.', flow: ['Role template and bid materials', 'Collect, draft and check', 'Bid draft and review checklist'] },
      { title: 'Prepare compliance review findings', body: 'A compliance pre-review role uses configured policies and checking methods to organize initial findings, leaving professional judgments with the responsible reviewer.', flow: ['Business records and policies', 'Review and organize findings', 'Initial findings and review items'] },
    ],
    benefits: [
      { title: 'Keep expertise in the business', body: 'Preserve individual methods as maintainable, distributable role templates.' },
      { title: 'Add execution capacity as needed', body: 'Recruit digital employees around workload peaks and focused projects.' },
      { title: 'Give repeatable work a standard', body: 'Reuse consistent responsibilities, skills and material requirements.' },
      { title: 'Carry work context forward', body: 'Build context for future tasks through work memory and diaries.' },
    ],
    closing: 'Turn role expertise into lasting team capacity',
    related: ['multi-agent', 'governance'],
  },
} satisfies LandingTranslations;
