import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['全链路可信管控', '智能作业可授权、可追溯'],
      summary: '对齐组织身份与业务委托规则，管理数字员工的访问范围，通过执行记录追溯工作过程与成果。',
    },
    pain: {
      title: '业务交给数字员工，边界也要交代清楚',
      items: [
        '敏感资料和业务系统各有权限，数字员工需要明确的访问边界。',
        '只有最终答案，缺少执行记录，出问题时难以还原工作过程。',
        '专项工作授权缺少统一管理，任务完成后容易留下不再需要的权限。',
      ],
    },
    concept: {
      title: '面向数字劳动力的企业可信控制面',
      body: '以组织身份和角色管理访问，分别配置知识权限、项目权限与插件业务委托。明确数字员工可以处理的工作，并通过任务步骤、工具调用和管理变更记录追溯执行过程。',
      labels: ['组织身份', '访问权限', '业务委托', '审计记录'],
    },
    features: [
      { icon: 'network', title: '组织身份对齐', body: '结合组织角色管理访问，按人员、角色与团队配置资源权限。' },
      { icon: 'key', title: '业务委托授权', body: '明确授权数字员工处理插件工作，按需启用，并可随时撤销。' },
      { icon: 'shield', title: '执行过程审计', body: '按任务查看执行步骤、工具调用与成果记录，追溯管理变更。' },
    ],
    scenarios: [
      {
        title: '敏感材料访问管控',
        body: '为尽调文档设置知识访问权限，数字员工在授权范围内检索；项目文件按委托人当前的项目角色访问。',
        flow: ['明确身份', '校验权限', '按范围访问'],
      },
      {
        title: '专项工作授权',
        body: '为专项工作授权数字员工读取本人可见的插件记录、准备工作内容。工作完成后主动撤销委托，并查阅授权变更记录。',
        flow: ['授予委托', '处理工作', '撤销授权'],
      },
    ],
    benefits: [
      { title: '权限可控', body: '按资源和业务需要设定访问范围。' },
      { title: '过程可审计', body: '集中查看任务步骤与执行记录。' },
      { title: '授权可调整', body: '按需启用业务委托，及时撤销权限。' },
      { title: '问题可追溯', body: '结合调用记录与管理变更还原工作过程。' },
    ],
    closing: '构建数字劳动力的可信安全底座',
    related: ['digital-employees', 'integrations', 'knowledge'],
  },
  en: {
    hero: {
      lines: ['Trusted control across work', 'Authorized actions, traceable results'],
      summary: 'Align identity and business delegation, control what digital employees can access, and use execution records to trace work and deliverables.',
    },
    pain: {
      title: 'Delegate the work. Define the boundaries.',
      items: [
        'Sensitive documents and business systems have distinct permissions. Digital employees need explicit access boundaries.',
        'A final answer alone cannot explain what happened when execution records are missing.',
        'Project-specific access can outlast the work when delegation is not actively managed.',
      ],
    },
    concept: {
      title: 'An enterprise control plane for digital work',
      body: 'Manage access through organizational identity and roles. Configure knowledge permissions, project access and plugin work delegation separately. Define the work digital employees may handle, then trace execution through task steps, tool calls and governance records.',
      labels: ['Identity', 'Access', 'Delegation', 'Audit trail'],
    },
    features: [
      { icon: 'network', title: 'Identity alignment', body: 'Manage access by organizational role and grant resource permissions to people, roles and teams.' },
      { icon: 'key', title: 'Business delegation', body: 'Explicitly authorize plugin work, enable it as needed and revoke it at any time.' },
      { icon: 'shield', title: 'Execution audit', body: 'Review task steps, tool calls and deliverable records alongside governance changes.' },
    ],
    scenarios: [
      {
        title: 'Control access to sensitive materials',
        body: 'Set knowledge permissions for due diligence documents and keep retrieval within the authorized scope. Project file access follows the delegating person’s current project role.',
        flow: ['Identify caller', 'Check permission', 'Scope access'],
      },
      {
        title: 'Authorize a specific assignment',
        body: 'Allow a digital employee to read plugin records visible to you and prepare work on your behalf. Revoke the delegation when the assignment ends and review the authorization history.',
        flow: ['Grant access', 'Carry out work', 'Revoke delegation'],
      },
    ],
    benefits: [
      { title: 'Controlled access', body: 'Define resource access around the work that needs to be done.' },
      { title: 'Auditable execution', body: 'Review task steps and execution records in one place.' },
      { title: 'Adjustable authorization', body: 'Enable delegation as needed and withdraw access when it is no longer required.' },
      { title: 'Traceable work', body: 'Use tool records and governance changes to reconstruct the process.' },
    ],
    closing: 'Build a trusted foundation for digital work',
    related: ['digital-employees', 'integrations', 'knowledge'],
  },
} satisfies LandingTranslations;
