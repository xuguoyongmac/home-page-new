import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['打通业务底座', '让智能能力直达业务流程'],
      summary: '通过业务插件、MCP 工具与开放接口，将数字员工接入现有业务系统，让工作从内容生成走向业务执行。',
    },
    pain: {
      title: '让智能产出接上真实业务',
      items: [
        '业务系统分散，智能工具难以接触实际业务对象。',
        '接口协议与身份认证各不相同，重复开发接入能力。',
        '生成的内容仍需人工转录，业务流程停在最后一步。',
      ],
    },
    concept: {
      title: '在现有业务底座上，延伸智能操作能力',
      body: '业务插件承接业务页面、服务与员工工具，MCP 为数字员工连接外部能力；开放接口让业务系统提交任务、接收成果。接入与执行沿用实际身份和资源权限。',
      labels: ['数字员工', '插件与 MCP', '业务系统', '开放接口'],
    },
    features: [
      { icon: 'plug', title: '业务插件扩展', body: '连接 CRM、EHS 等业务模块，按身份与数据范围开展工作。' },
      { icon: 'network', title: 'MCP 工具接入', body: '从工具目录添加或配置外部服务，完成相应认证后调用。' },
      { icon: 'terminal', title: '开放接口集成', body: '业务系统提交任务与附件，通过查询或事件流接收成果。' },
    ],
    scenarios: [
      {
        title: 'CRM 客户跟进记录',
        body: '整理客户沟通内容，将通话、会议和跟进事项记入客户或商机时间线，让后续工作接得上。',
        flow: ['沟通纪要', '整理跟进事项', '写入 CRM'],
      },
      {
        title: 'EHS 巡检材料整理',
        body: '读取检查、隐患与附件证据，形成台账或报告草稿，交由负责人审核采纳。',
        flow: ['巡检证据', '形成待审草稿', '负责人采纳'],
      },
    ],
    benefits: [
      { title: '连接业务对象', body: '让智能工作围绕客户、项目和单据开展。' },
      { title: '延续现有投入', body: '保留现有系统，通过接口与工具逐步接入。' },
      { title: '按需扩展能力', body: '按业务需要组合插件、工具和开放接口。' },
      { title: '遵循业务授权', body: '调用能力与数据访问继续执行各自权限规则。' },
    ],
    closing: '把智能能力嵌入现有业务系统',
    related: ['governance', 'multi-agent'],
  },
  en: {
    hero: {
      lines: ['Connect Your Business Stack', 'Bring Intelligence Into the Workflow'],
      summary: 'Connect digital employees to existing business systems through plugins, MCP tools and open APIs, moving work from generated content to business actions.',
    },
    pain: {
      title: 'Connect Intelligent Output to Business Work',
      items: [
        'Disconnected systems keep intelligent tools away from business records.',
        'Different protocols and authentication methods create repeated integration work.',
        'Generated content still needs manual entry before the workflow can continue.',
      ],
    },
    concept: {
      title: 'Extend Intelligent Actions Across Your Existing Stack',
      body: 'Business plugins provide pages, services and employee tools. MCP connects employees to external capabilities, while open APIs let business systems submit tasks and receive results. Actions follow the actual identity and resource permissions.',
      labels: ['Digital Employee', 'Plugins & MCP', 'Business Systems', 'Open APIs'],
    },
    features: [
      { icon: 'plug', title: 'Business Plugins', body: 'Work with CRM, EHS and other business modules within the permitted data scope.' },
      { icon: 'network', title: 'MCP Tool Connections', body: 'Add services from the tool catalog or configure external tools with their required authentication.' },
      { icon: 'terminal', title: 'Open API Integration', body: 'Submit tasks and attachments from business systems, then receive results by polling or event stream.' },
    ],
    scenarios: [
      {
        title: 'CRM Follow-up Records',
        body: 'Organize customer conversations and record calls, meetings and follow-up items on the customer or deal timeline, keeping the next action connected.',
        flow: ['Conversation Notes', 'Follow-up Items', 'CRM Timeline'],
      },
      {
        title: 'EHS Inspection Materials',
        body: 'Read inspection records, hazards and supporting evidence to prepare register or report drafts for the responsible person to review and adopt.',
        flow: ['Inspection Evidence', 'Draft for Review', 'Owner Adoption'],
      },
    ],
    benefits: [
      { title: 'Work With Business Records', body: 'Center intelligent work on customers, projects and business documents.' },
      { title: 'Build on Existing Investments', body: 'Connect existing systems incrementally through tools and interfaces.' },
      { title: 'Extend as Needs Grow', body: 'Combine plugins, tools and open APIs for the work at hand.' },
      { title: 'Respect Business Permissions', body: 'Tool calls and data access retain their respective authorization rules.' },
    ],
    closing: 'Bring Intelligence Into Your Existing Business Systems',
    related: ['governance', 'multi-agent'],
  },
} satisfies LandingTranslations;
