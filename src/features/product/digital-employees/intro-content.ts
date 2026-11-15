import type { Locale } from '../../../data/types';

interface IntroductionSection {
  id: 'recruit' | 'work' | 'continuity';
  title: string[];
  body: string;
  alt: string;
}

interface IntroductionCopy {
  hero: {
    title: string[];
    body: string;
    action: string;
    alt: string;
  };
  sections: IntroductionSection[];
  closing: {
    title: string;
    action: string;
  };
}

export default {
  zh: {
    hero: {
      title: ['数字员工，', '让岗位能力成为', '团队生产力'],
      body: '数字员工是能够承接岗位工作的数字劳动力。带着明确职责、专业技能与工作资料加入团队，从理解任务到执行工作，交付可继续使用的成果。',
      action: '开始使用',
      alt: '数字员工业务工作台，汇集岗位职责、专业技能、企业知识、任务执行与交付成果。',
    },
    sections: [
      {
        id: 'recruit',
        title: ['从成熟岗位出发，', '招募你的数字员工'],
        body: '将岗位职责、技能和工作区文件沉淀为模板，按需招募独立运行的数字员工。完成配置与所需审批后投入工作，分别配置员工使用范围、知识访问和插件业务委托。',
        alt: '岗位模板与数字员工配置面板，展示职责、技能、工作文件和业务授权。',
      },
      {
        id: 'work',
        title: ['把任务交出去，', '把工作成果带回来'],
        body: '围绕具体业务交办工作，让数字员工整理材料、撰写初稿、完成检查。标书助理完成编制与自查，交给业务专家终审；合规预审对照制度形成意见，由业务人员复核。',
        alt: '标书编制与合规预审业务面板，展示工作任务、文档成果、专家终审与业务复核状态。',
      },
      {
        id: 'continuity',
        title: ['持续工作，', '让经验成为下一次的能力'],
        body: '让数字员工按计划执行周期任务，查看运行记录与投递结果。个人档案、长期记忆和工作日记按使用者隔离，在组织策略下复盘工作，将成熟方法沉淀为技能。',
        alt: '持续工作业务面板，展示周期任务、运行与投递记录、个人工作记忆和可复用技能。',
      },
    ],
    closing: {
      title: '搭建属于企业自己的数字岗位团队',
      action: '预约产品演示',
    },
  },
  en: {
    hero: {
      title: ['Digital employees.', 'Role expertise.', 'Team productivity.'],
      body: 'Digital employees take on role-based work with clear responsibilities, specialist skills and work materials. Bring them into your team to understand tasks, carry out work and deliver usable results.',
      action: 'Get started',
      alt: 'A digital employee workspace brings together responsibilities, specialist skills, company knowledge, task execution and deliverables.',
    },
    sections: [
      {
        id: 'recruit',
        title: ['Start with role expertise.', 'Recruit your digital team.'],
        body: 'Capture responsibilities, skills and workspace files in a role template. Recruit an independent digital employee, complete setup and any required approval, then configure employee access, knowledge permissions and plugin delegation separately.',
        alt: 'Role templates and digital employee setup panels show responsibilities, skills, workspace files and business authorizations.',
      },
      {
        id: 'work',
        title: ['Hand over the task.', 'Bring back the deliverable.'],
        body: 'Delegate concrete work: organize materials, prepare drafts and complete checks. A bid assistant drafts and checks the bid for final specialist review. Compliance pre-review checks against policies and sends findings to the responsible colleague for review.',
        alt: 'Bid preparation and compliance pre-review panels show tasks, document deliverables, final specialist review and business review status.',
      },
      {
        id: 'continuity',
        title: ['Keep work moving.', 'Make experience reusable.'],
        body: 'Schedule recurring work and review run and delivery records. Profiles, long-term memory and work diaries remain isolated by user. Under organizational policy, employees reflect on work and preserve proven methods as skills.',
        alt: 'A continuous work panel shows recurring tasks, run and delivery records, personal work memory and reusable skills.',
      },
    ],
    closing: {
      title: 'Build a digital team around your business roles',
      action: 'Book a product demo',
    },
  },
} satisfies Record<Locale, IntroductionCopy>;
