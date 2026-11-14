import type { Locale } from '../../../data/types';

interface Workflow {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  activities: { title: string; body: string }[];
  task: string;
  sources: string[];
  request: string;
  outputs: { format: string; title: string; body: string }[];
  review: string;
}

interface Experience {
  eyebrow: string;
  headline: string[];
  description: string;
  primary: string;
  secondary: string;
  hero: {
    label: string;
    title: string;
    sources: string[];
    employee: string;
    actions: string;
    result: string;
    files: string[];
    review: string;
    capabilities: string[];
  };
  scenarios: { eyebrow: string; title: string; description: string; label: string };
  labels: { task: string; sources: string; request: string; outputs: string; review: string };
  workflows: Workflow[];
  collaboration: {
    eyebrow: string;
    title: string[];
    body: string;
    link: string;
    main: { icon: string; title: string; body: string }[];
    branch: string;
    question: string;
    reply: string;
    version: string;
    versionBody: string;
  };
  foundations: {
    eyebrow: string;
    title: string;
    knowledge: { title: string; body: string; items: { icon: string; title: string; body: string }[]; link: string };
    connections: { title: string; body: string; file: string; workspace: string; plugin: string; tools: string; external: string; permission: string; link: string };
  };
  closing: { eyebrow: string; title: string; body: string; secondary: string };
}

export const experience: Record<Locale, Experience> = {
  zh: {
    eyebrow: '互联网与泛行业',
    headline: ['从需求到交付，', '让工作接得上。'],
    description: '让数字员工参与产品研发、内容运营、客户经营与日常办公。把分散的资料、岗位方法和同事协作，组织成可以继续推进的工作。',
    primary: '交流业务场景',
    secondary: '探索团队工作',
    hero: {
      label: '围绕一项共同的工作', title: '产品上线准备',
      sources: ['需求与用户反馈', '市场与客户资料', '项目进展与记录'],
      employee: '数字员工', actions: '检索 · 分析 · 编制',
      result: '上线准备包', files: ['需求与范围', '上线沟通稿', '待确认事项'],
      review: '交给团队审阅', capabilities: ['企业知识', '岗位技能', '协作项目', '人工确认'],
    },
    scenarios: {
      eyebrow: '团队工作场景', title: '熟悉的工作，有了新的协作方式。',
      description: '从一项具体任务开始，让资料准备、内容编制与后续交接各有承接。',
      label: '选择团队工作场景',
    },
    labels: { task: '一项完整的工作', sources: '输入资料', request: '交办任务', outputs: '交付内容', review: '团队确认' },
    workflows: [
      {
        id: 'product', icon: 'layers', label: '产品与研发', title: '把零散反馈，整理成可讨论的需求。',
        description: '围绕产品迭代，归集反馈、澄清需求、准备评审与发布材料，让团队从同一份上下文继续工作。',
        activities: [
          { title: '需求与反馈归纳', body: '按问题和使用场景组织反馈，保留原始记录与待确认问题。' },
          { title: '方案与评审准备', body: '对照已有说明与约束，整理需求草稿、讨论要点和材料缺口。' },
          { title: '版本与交接材料', body: '根据已确认的变更，编制版本说明、使用指引与交接清单。' },
        ],
        task: '版本评审准备', sources: ['用户反馈', '产品说明', '本期变更记录'],
        request: '整理本期反馈与变更，形成评审材料；标出冲突、资料缺口和需要团队决定的问题。',
        outputs: [
          { format: 'DOCX', title: '需求与评审草稿', body: '需求背景、范围与讨论要点' },
          { format: 'XLSX', title: '问题与待确认清单', body: '问题、原始依据与处理状态' },
          { format: 'DOCX', title: '版本说明草稿', body: '已确认变更与使用影响' },
        ],
        review: '产品与研发人员确认范围、技术判断和发布内容。',
      },
      {
        id: 'operations', icon: 'chart', label: '运营与增长', title: '从市场资料，做到可修改的内容与复盘。',
        description: '围绕选题、活动和经营分析，整理公开信息与获准业务数据，形成有来源的内容草稿和复盘材料。',
        activities: [
          { title: '市场与竞品研究', body: '围绕研究问题收集公开资料，整理变化、出处与待核实信息。' },
          { title: '选题与内容准备', body: '结合品牌规范和产品资料，准备选题、内容草稿与活动材料。' },
          { title: '数据与周期复盘', body: '按确认口径核对指标，整理图表、变化和需要进一步解释的问题。' },
        ],
        task: '活动复盘与下期准备', sources: ['活动记录', '授权数据表', '指标定义'],
        request: '核对本期活动数据，整理内容表现与问题，形成复盘和下一期选题建议。',
        outputs: [
          { format: 'XLSX', title: '指标核对表', body: '统计口径、计算明细与差异' },
          { format: 'DOCX', title: '活动复盘草稿', body: '已知表现、资料依据与待核实原因' },
          { format: 'DOCX', title: '选题与内容清单', body: '候选方向、参考资料与内容结构' },
        ],
        review: '运营人员确认指标口径、原因解释与对外发布内容。',
      },
      {
        id: 'customers', icon: 'message', label: '销售与客户', title: '把一次沟通，接到下一次跟进。',
        description: '汇集客户背景、沟通记录与需求资料，准备方案和后续事项，帮助团队在交接时保留工作脉络。',
        activities: [
          { title: '访前研究与准备', body: '归集公开信息和获准客户资料，形成背景摘要与沟通提纲。' },
          { title: '方案与资料编制', body: '结合已确认需求和产品资料，准备方案草稿、问题答复与交付清单。' },
          { title: '客户记录与跟进', body: '通过已安装并授权的 CRM 插件读取可见记录，准备后续事项与记录更新草稿。' },
        ],
        task: '客户沟通后的方案交接', sources: ['沟通纪要', '客户需求', '产品资料'],
        request: '归纳已确认需求与未答问题，准备方案草稿和交接材料，列清后续需要跟进的事项。',
        outputs: [
          { format: 'DOCX', title: '客户与需求摘要', body: '已确认信息、来源与未答问题' },
          { format: 'PPTX', title: '交流方案草稿', body: '需求对应的能力与交付范围' },
          { format: 'XLSX', title: '后续跟进清单', body: '事项、当前进展与待确认安排' },
        ],
        review: '业务人员核实客户事实，确认报价、承诺与正式发送。',
      },
      {
        id: 'office', icon: 'folder', label: '综合办公', title: '让会议、材料和周报，围绕工作延续。',
        description: '把日常记录整理为可审阅的文件，围绕同一项目汇集进展，按配置周期准备团队简报。',
        activities: [
          { title: '知识查询与材料编制', body: '检索已授权制度与历史材料，整理带出处的答复、文稿和汇报。' },
          { title: '会议与事项整理', body: '从会议记录提取议题、决定和行动项，保留需要人员确认的内容。' },
          { title: '周报与进展归集', body: '汇总项目文件和工作记录，按配置周期生成简报并投递结果。' },
        ],
        task: '团队例会与周报准备', sources: ['会议记录', '项目文件', '本周工作进展'],
        request: '整理会议决定与本周进展，形成纪要和周报，列出未确认事项与需要补充的材料。',
        outputs: [
          { format: 'DOCX', title: '会议纪要草稿', body: '议题、主要意见与决定来源' },
          { format: 'XLSX', title: '事项与反馈清单', body: '经确认的责任、时限与实际反馈' },
          { format: 'DOCX', title: '团队周报', body: '阶段成果、未完成工作与资料缺口' },
        ],
        review: '相关人员确认决定、责任和时限，负责人审阅发布。',
      },
    ],
    collaboration: {
      eyebrow: '协作与交付', title: ['工作不用停在', '下一次交接之前。'],
      body: '项目组织目标、资料与成员。数字员工处理任务，遇到信息缺口时向相应同事问询，再依据回应继续编制；团队在同一份成果上审阅、修改。',
      link: '了解团队协作',
      main: [
        { icon: 'folder', title: '共用资料与目标', body: '以项目权限组织工作上下文' },
        { icon: 'cpu', title: '执行与编制', body: '调用已配置的知识、技能和工具' },
        { icon: 'file', title: '审阅与交付', body: '继续修改，保留项目文件版本' },
      ],
      branch: '需要补充或判断时', question: '向同事问询', reply: '按回应继续工作',
      version: '从当前成果，接着往下做。', versionBody: '个人草稿、运行提交、冲突副本与历史版本，衔接人工修改和数字员工的后续工作。',
    },
    foundations: {
      eyebrow: '能力建设与连接', title: '做成一次，也为下一次留下方法。',
      knowledge: {
        title: '让依据与方法，成为团队可复用的资产。',
        body: '资料、工作方法与岗位配置分别维护，按授权范围交给数字员工使用。',
        items: [
          { icon: 'book', title: '企业知识', body: '组织制度与业务资料，检索时保留来源。' },
          { icon: 'terminal', title: '岗位技能', body: '沉淀处理规则、脚本与配套文件。' },
          { icon: 'layers', title: '数字员工模板', body: '复用岗位职责、Agent 与技能配置。' },
        ],
        link: '了解知识与记忆',
      },
      connections: {
        title: '先用好已有资料，再按需接入业务系统。',
        body: '从授权文件开展工作，通过插件与 MCP 使用业务工具，或由外部系统通过 OpenAPI 调用数字员工。',
        file: '授权文件', workspace: '数字员工', plugin: 'CRM 插件', tools: 'MCP 工具', external: '外部业务系统',
        permission: 'CRM 随插件安装与授权启用；外部连接按实际接口、调用身份和权限配置。', link: '了解系统连接',
      },
    },
    closing: {
      eyebrow: '从团队的一项工作开始', title: '下一次交付，让数字员工一起做。',
      body: '带上工作目标、可用资料和期望成果，一起确定适合团队的首个场景。', secondary: '查看全部解决方案',
    },
  },
  en: {
    eyebrow: 'Internet & cross-industry',
    headline: ['Keep the work moving.', 'From idea to delivery.'],
    description: 'Bring digital employees into product work, operations, customer relationships and everyday office tasks. Connect the sources, methods and people behind each deliverable.',
    primary: 'Discuss your workflow', secondary: 'Explore team workflows',
    hero: {
      label: 'One shared piece of work', title: 'Product launch preparation',
      sources: ['Requirements & feedback', 'Market & customer materials', 'Project updates & records'],
      employee: 'Digital employee', actions: 'Research · Analyze · Draft',
      result: 'Launch preparation pack', files: ['Requirements & scope', 'Launch communications', 'Open questions'],
      review: 'Ready for team review', capabilities: ['Enterprise knowledge', 'Role skills', 'Shared projects', 'Human review'],
    },
    scenarios: {
      eyebrow: 'TEAM WORKFLOWS', title: 'Familiar work. A new way to collaborate.',
      description: 'Start with one task. Keep preparation, drafting and the next handoff connected.', label: 'Choose a team workflow',
    },
    labels: { task: 'ONE COMPLETE TASK', sources: 'Sources', request: 'The request', outputs: 'Deliverables', review: 'Human review' },
    workflows: [
      {
        id: 'product', icon: 'layers', label: 'Product & engineering', title: 'Turn scattered feedback into a shared discussion.',
        description: 'Organize feedback, clarify requirements and prepare review and release materials so the team can continue with the same context.',
        activities: [
          { title: 'Requirements and feedback', body: 'Group feedback by problem and use case, retaining sources and open questions.' },
          { title: 'Review preparation', body: 'Compare existing specifications and constraints to draft requirements and discussion points.' },
          { title: 'Release and handoff materials', body: 'Prepare release notes, guidance and handoff lists from confirmed changes.' },
        ],
        task: 'Prepare a version review', sources: ['User feedback', 'Product specifications', 'Change records'],
        request: 'Organize feedback and changes for review. Flag conflicts, missing information and decisions the team needs to make.',
        outputs: [
          { format: 'DOCX', title: 'Requirements and review draft', body: 'Background, scope and discussion points' },
          { format: 'XLSX', title: 'Questions and decisions list', body: 'Questions, sources and current status' },
          { format: 'DOCX', title: 'Draft release notes', body: 'Confirmed changes and their implications' },
        ],
        review: 'Product and engineering teams confirm scope, technical judgments and release content.',
      },
      {
        id: 'operations', icon: 'chart', label: 'Operations & growth', title: 'Go from sources to editable content and reviews.',
        description: 'Use public research and authorized business data to prepare content, campaign materials and performance reviews with sources.',
        activities: [
          { title: 'Market and competitor research', body: 'Collect public sources around a question and organize changes and unverified information.' },
          { title: 'Content preparation', body: 'Use brand guidance and product materials to draft content and campaign plans.' },
          { title: 'Data and recurring reviews', body: 'Check agreed metrics and prepare charts, changes and questions for follow-up.' },
        ],
        task: 'Review a campaign and prepare the next', sources: ['Campaign records', 'Authorized data', 'Metric definitions'],
        request: 'Check the campaign data, organize content performance and questions, and draft a review with topics for the next campaign.',
        outputs: [
          { format: 'XLSX', title: 'Metric working paper', body: 'Definitions, calculations and differences' },
          { format: 'DOCX', title: 'Campaign review draft', body: 'Findings, sources and causes to verify' },
          { format: 'DOCX', title: 'Content topic list', body: 'Candidate topics, references and structure' },
        ],
        review: 'Operations staff confirm metric definitions, explanations and published content.',
      },
      {
        id: 'customers', icon: 'message', label: 'Sales & customers', title: 'Keep the next conversation connected to the last.',
        description: 'Bring customer context, conversations and requirements together to prepare proposals and next steps with a clear handoff.',
        activities: [
          { title: 'Meeting preparation', body: 'Organize public information and authorized customer materials into briefs and discussion points.' },
          { title: 'Proposal preparation', body: 'Draft proposals, answers and delivery lists using confirmed needs and product information.' },
          { title: 'Records and follow-ups', body: 'Read accessible records through the installed and authorized CRM plugin, then prepare follow-ups and draft record updates.' },
        ],
        task: 'Hand off a customer proposal', sources: ['Meeting notes', 'Customer requirements', 'Product materials'],
        request: 'Summarize confirmed needs and unanswered questions, prepare a proposal draft, and identify the follow-up work.',
        outputs: [
          { format: 'DOCX', title: 'Customer and requirements brief', body: 'Confirmed context, sources and open questions' },
          { format: 'PPTX', title: 'Proposal draft', body: 'Relevant capabilities and delivery scope' },
          { format: 'XLSX', title: 'Follow-up list', body: 'Actions, progress and arrangements to confirm' },
        ],
        review: 'Business staff verify facts, pricing, commitments and the final communication.',
      },
      {
        id: 'office', icon: 'folder', label: 'Everyday office work', title: 'Carry meetings and updates into the next task.',
        description: 'Turn work records into reviewable files, collect progress within a project and prepare team briefs on a configured schedule.',
        activities: [
          { title: 'Knowledge and documents', body: 'Retrieve authorized policies and past materials to prepare answers, documents and presentations.' },
          { title: 'Meetings and actions', body: 'Extract topics, decisions and actions from meeting records, keeping unconfirmed details open.' },
          { title: 'Recurring team briefs', body: 'Combine project files and updates to generate and deliver briefs on a configured schedule.' },
        ],
        task: 'Prepare a team meeting and weekly brief', sources: ['Meeting records', 'Project files', 'Weekly progress'],
        request: 'Organize decisions and progress into minutes and a weekly brief. List open items and missing materials.',
        outputs: [
          { format: 'DOCX', title: 'Draft meeting minutes', body: 'Topics, views and the source of decisions' },
          { format: 'XLSX', title: 'Actions and responses', body: 'Confirmed owners, deadlines and actual feedback' },
          { format: 'DOCX', title: 'Team weekly brief', body: 'Results, unfinished work and information gaps' },
        ],
        review: 'Colleagues confirm decisions, owners and deadlines; the lead reviews publication.',
      },
    ],
    collaboration: {
      eyebrow: 'COLLABORATION & DELIVERY', title: ['Keep the handoff', 'inside the work.'],
      body: 'Projects bring goals, sources and people together. Digital employees work on the task, ask colleagues when information is missing, and continue from their responses. The team reviews and revises the same deliverable.',
      link: 'Explore team collaboration',
      main: [
        { icon: 'folder', title: 'Shared goals and sources', body: 'Organize context within project permissions' },
        { icon: 'cpu', title: 'Execution and drafting', body: 'Use configured knowledge, skills and tools' },
        { icon: 'file', title: 'Review and delivery', body: 'Keep editing with project file versions' },
      ],
      branch: 'When input or judgment is needed', question: 'Ask a colleague', reply: 'Continue from their response',
      version: 'Pick up where the last version left off.', versionBody: 'Drafts, run commits, conflict copies and file history connect human edits with the next digital employee task.',
    },
    foundations: {
      eyebrow: 'REUSE & CONNECTIONS', title: 'Leave a method for the next piece of work.',
      knowledge: {
        title: 'Keep the sources, methods and role configuration.', body: 'Maintain each asset separately and make it available to digital employees within its access scope.',
        items: [
          { icon: 'book', title: 'Enterprise knowledge', body: 'Organize policies and materials with source references.' },
          { icon: 'terminal', title: 'Role skills', body: 'Retain methods, scripts and supporting files.' },
          { icon: 'layers', title: 'Digital employee templates', body: 'Reuse roles, Agents and skill configurations.' },
        ],
        link: 'Explore knowledge and memory',
      },
      connections: {
        title: 'Start with files. Connect systems as the work requires.',
        body: 'Work from authorized files, use business tools through plugins and MCP, or let external systems invoke digital employees through OpenAPI.',
        file: 'Authorized files', workspace: 'Digital employee', plugin: 'CRM plugin', tools: 'MCP tools', external: 'Business systems',
        permission: 'CRM requires its installed and authorized plugin. Connections depend on actual interfaces, calling identities and permissions.', link: 'Explore system connections',
      },
    },
    closing: {
      eyebrow: 'START WITH ONE TEAM TASK', title: 'Bring a digital employee into your next delivery.',
      body: 'Bring your goal, available sources and expected deliverable. We will scope a first workflow together.', secondary: 'All solutions',
    },
  },
};
