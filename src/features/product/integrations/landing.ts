import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['打通业务底座', '让智能能力直达业务流程'],
      summary: '通过业务插件、MCP、RESTful API 与数据库连接，将数字员工接入现有业务系统，让工作从内容生成走向业务执行。',
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
      body: '业务插件承接业务页面与员工工具，MCP、RESTful API 和数据库连接分别接入工具、业务接口与数据；平台 OpenAPI 让外部系统提交任务、接收成果。各类连接分别配置身份与权限。',
      labels: ['数字员工', '系统连接', '业务系统', '平台 OpenAPI'],
    },
    features: [
      {
            "icon": "plug",
            "title": "业务插件扩展",
            "body": "通过已安装、授权的 CRM、招投标与 EHS 等插件，围绕客户、项目和业务单据开展工作。"
      },
      {
            "icon": "network",
            "title": "MCP 工具接入",
            "body": "配置外部 MCP 服务与认证，将专业工具接入数字员工的任务执行。"
      },
      {
            "icon": "terminal",
            "title": "RESTful API 连接",
            "body": "配置企业接口的认证与请求参数，在接口权限范围内查询业务信息、办理业务并衔接流程。"
      },
      {
            "icon": "chart",
            "title": "数据库连接",
            "body": "在数据库账号与授权范围内查询、汇总和分析业务数据，为经营问答与报告提供依据。"
      },
      {
            "icon": "layers",
            "title": "平台 OpenAPI",
            "body": "由外部系统提交任务与附件，通过同步、异步或流式接口获取状态、结果和平台服务。"
      },
      {
            "icon": "monitor",
            "title": "授权设备与文件工具",
            "body": "结合桌面设备节点、浏览器和文件工具执行工作，按节点状态、平台与权限接入。"
      }
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
      summary: 'Connect digital employees to existing systems through business plugins, MCP, RESTful APIs and databases, moving work from generated content to business actions.',
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
      body: 'Business plugins provide pages and employee tools. MCP, RESTful APIs and database connections bring tools, business operations and data into the work. Platform OpenAPI lets external systems submit tasks and receive results. Each connection has its own identity and permissions.',
      labels: ['Digital Employee', 'Connections', 'Business Systems', 'Platform OpenAPI'],
    },
    features: [
      {
            "icon": "plug",
            "title": "Business plugins",
            "body": "Work with clients, projects and business records through installed, authorized CRM, bidding and EHS plugins."
      },
      {
            "icon": "network",
            "title": "MCP tools",
            "body": "Configure external MCP services and authentication to bring specialist tools into task execution."
      },
      {
            "icon": "terminal",
            "title": "RESTful APIs",
            "body": "Configure authentication and request parameters to read information and carry out work within API permissions."
      },
      {
            "icon": "chart",
            "title": "Database connections",
            "body": "Query, aggregate and analyze data within the database account’s authorized scope for answers and reports."
      },
      {
            "icon": "layers",
            "title": "Platform OpenAPI",
            "body": "External systems submit tasks and files and receive results through synchronous, asynchronous or streaming interfaces."
      },
      {
            "icon": "monitor",
            "title": "Authorized devices and files",
            "body": "Use desktop nodes, browser and file tools according to node state, platform support and access permissions."
      }
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
