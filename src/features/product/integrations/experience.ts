import type { ProductExperienceTranslations } from '../experience-types';

export default {
  zh: {
    heroAlt: '二维业务工作台：数字员工连接客户资料、专业工具与业务接口，将沟通整理为跟进清单并接回业务系统。',
    sectionTitle: '从连接业务到完成办理',
    sections: [
      {
        id: 'business-context', kind: 'connections',
        title: '把系统里的资料变成任务上下文',
        body: '客户沟通、项目材料和业务单据都能成为工作的起点。通过已安装并授权的业务插件，让数字员工围绕正在处理的对象归集资料，而不只处理孤立的一段文字。',
        points: [
          { title: '业务对象直接关联', body: '通过 CRM、招投标与 EHS 等插件，围绕客户、项目和检查记录开展工作。' },
          { title: '数据查询服务分析', body: '通过数据库连接，在账号授权范围内查询和汇总经营数据，将结果带入问答与报告。' },
        ],
        visual: {
          title: '业务连接工作台', context: '客户经营任务', tabs: ['业务插件', '数据库', '业务接口'],
          request: '整理本周客户沟通和项目进展，汇总商机变化与后续跟进事项。',
          response: '已归集沟通记录与项目材料，跟进事项按客户和商机整理。',
          columns: ['业务对象', '连接方式', '任务资料'],
          rows: [
            ['客户与商机', 'CRM 插件', '沟通记录、跟进事项'],
            ['项目与投标', '招投标插件', '资质清单、项目材料'],
            ['检查与隐患', 'EHS 插件', '检查记录、附件证据'],
            ['经营指标', '数据库', '查询结果、汇总指标'],
          ],
          focus: { label: '任务上下文', title: '业务资料已关联到工作', body: '客户、项目与数据各有来源，数字员工在对应授权范围内继续处理。' },
          files: ['客户沟通纪要.docx', '商机跟进清单.xlsx'],
        },
      },
      {
        id: 'business-actions', kind: 'execution',
        title: '从查询分析接续到业务办理',
        body: '专业工具与业务接口参与同一次任务。数字员工整理沟通要点、调用所需工具，再把跟进事项写入客户时间线，让产出成为后续工作的记录。',
        points: [
          { title: '专业工具按需调用', body: '配置 MCP 服务与认证，将外部专业工具用于任务执行。' },
          { title: '接口与设备接续工作', body: '通过 RESTful API 执行业务动作；按节点状态与权限使用桌面设备、浏览器和文件工具。' },
        ],
        visual: {
          title: '客户跟进任务', context: '沟通整理与业务接续', tabs: ['执行记录', '客户时间线', '任务成果'],
          request: '把本周客户沟通整理成跟进事项，记入对应客户和商机时间线。',
          response: '沟通要点和后续事项已整理，跟进记录已写入对应客户时间线。',
          columns: ['执行环节', '处理内容', '结果'],
          rows: [
            ['资料读取', '归集通话与会议纪要', '已完成'],
            ['对象关联', '匹配客户与商机资料', '已完成'],
            ['事项整理', '归纳沟通结论与后续工作', '已完成'],
            ['业务接续', '写入客户跟进时间线', '已完成'],
          ],
          focus: { label: '办理结果', title: '跟进记录进入客户时间线', body: '沟通结论与后续事项保留在业务对象下，让下一步工作接得上。' },
          files: ['客户跟进摘要.docx', '商机行动清单.xlsx'],
        },
      },
      {
        id: 'platform-api', kind: 'connections',
        title: '让现有系统也能交办智能任务',
        body: '除了让数字员工调用外部工具，也让业务系统调用平台。通过平台 OpenAPI 提交任务与附件，获取执行状态和成果，把智能处理嵌入已有业务入口。',
        points: [
          { title: '任务与附件一并提交', body: '让业务请求带着资料进入平台，围绕原有对象完成处理。' },
          { title: '状态与成果按接口返回', body: '使用同步、异步或流式接口获取状态、结果与平台服务。' },
        ],
        visual: {
          title: '平台 OpenAPI', context: '业务系统调用平台', tabs: ['任务请求', '执行状态', '成果返回'],
          request: '根据项目附件编制服务方案，并整理交付事项清单。',
          response: '任务与附件已接收，服务方案和交付清单按调用方式返回。',
          columns: ['调用方式', '接口交互', '工作接续'],
          rows: [
            ['同步', '提交请求并获取结果', '返回当前业务流程'],
            ['异步', '提交任务并获取状态', '按状态获取任务结果'],
            ['流式', '接收过程与结果输出', '在业务入口呈现处理内容'],
          ],
          focus: { label: '成果返回', title: '智能处理接回原业务入口', body: '业务系统保留自己的工作流程，通过平台接口接入数字员工的处理能力。' },
          files: ['项目服务方案.docx', '交付事项清单.xlsx'],
        },
      },
    ],
  },
  en: {
    heroAlt: 'A flat business workspace connecting a digital employee to customer records, specialist tools and business APIs, with follow-up results returned to the workflow.',
    sectionTitle: 'From business connections to completed actions',
    sections: [
      {
        id: 'business-context', kind: 'connections',
        title: 'Make business records part of the task',
        body: 'Customer conversations, project materials and business records can all be the starting point. Installed, authorized plugins let digital employees gather context around the object they are working with.',
        points: [
          { title: 'Connect the business object', body: 'Use CRM, bidding and EHS plugins to work with customers, projects and inspection records.' },
          { title: 'Use data to support analysis', body: 'Query and aggregate operating data within database account permissions, then use the results in answers and reports.' },
        ],
        visual: {
          title: 'Business connections', context: 'Customer management', tabs: ['Business plugins', 'Databases', 'Business APIs'],
          request: 'Organize this week’s customer conversations and project progress, including deal changes and next actions.',
          response: 'Conversations and project materials are collected. Follow-up items are organized by customer and deal.',
          columns: ['Business object', 'Connection', 'Task context'],
          rows: [
            ['Customers and deals', 'CRM plugin', 'Conversations, follow-up items'],
            ['Projects and bids', 'Bidding plugin', 'Qualifications, project materials'],
            ['Inspections and hazards', 'EHS plugin', 'Inspection records, attachments'],
            ['Operating metrics', 'Database', 'Query results, aggregates'],
          ],
          focus: { label: 'Task context', title: 'Business materials connected to the work', body: 'Customers, projects and data retain their sources. Each connection operates within its authorized scope.' },
          files: ['Customer conversation notes.docx', 'Deal follow-up list.xlsx'],
        },
      },
      {
        id: 'business-actions', kind: 'execution',
        title: 'Carry analysis through to a business action',
        body: 'Bring specialist tools and business APIs into the same task. Organize the conversation, call the required tools and record follow-up items on the customer timeline so the output becomes part of ongoing work.',
        points: [
          { title: 'Call the specialist tools needed', body: 'Configure MCP services and authentication to use external tools during task execution.' },
          { title: 'Continue through APIs and devices', body: 'Use RESTful APIs for business actions and authorized desktop nodes, browser and file tools according to their state and permissions.' },
        ],
        visual: {
          title: 'Customer follow-up task', context: 'From conversation to action', tabs: ['Execution record', 'Customer timeline', 'Deliverables'],
          request: 'Turn this week’s customer conversations into follow-up items and record them on the matching customer and deal timelines.',
          response: 'Conversation takeaways and next actions are organized. Follow-up records are on the matching customer timeline.',
          columns: ['Stage', 'Work', 'Result'],
          rows: [
            ['Read materials', 'Collect call and meeting notes', 'Completed'],
            ['Connect records', 'Match customers and deal context', 'Completed'],
            ['Prepare next actions', 'Organize decisions and follow-ups', 'Completed'],
            ['Continue in CRM', 'Update the customer timeline', 'Completed'],
          ],
          focus: { label: 'Business result', title: 'Follow-up is on the customer timeline', body: 'Conversation decisions and next actions stay with the business record for the next person to continue.' },
          files: ['Customer follow-up brief.docx', 'Deal action list.xlsx'],
        },
      },
      {
        id: 'platform-api', kind: 'connections',
        title: 'Let existing systems hand work to the platform',
        body: 'Digital employees can call external tools, and business systems can call the platform. Submit tasks and attachments through Platform OpenAPI, retrieve execution status and results, and embed the work in existing entry points.',
        points: [
          { title: 'Submit tasks with their files', body: 'Bring the business request and its materials into the platform together.' },
          { title: 'Receive status and results', body: 'Use synchronous, asynchronous or streaming interfaces to retrieve status, results and platform services.' },
        ],
        visual: {
          title: 'Platform OpenAPI', context: 'Business system to platform', tabs: ['Task request', 'Execution status', 'Returned results'],
          request: 'Use the project attachments to prepare a service proposal and a delivery action list.',
          response: 'The task and attachments are received. The proposal and action list return through the chosen interface.',
          columns: ['Interface', 'Interaction', 'Workflow'],
          rows: [
            ['Synchronous', 'Submit a request and receive results', 'Return to the current process'],
            ['Asynchronous', 'Submit a task and retrieve status', 'Get results by task status'],
            ['Streaming', 'Receive progress and output', 'Present output in the business app'],
          ],
          focus: { label: 'Returned results', title: 'Intelligent work returns to its business entry point', body: 'Existing systems keep their workflows and use platform interfaces to bring in digital employee capabilities.' },
          files: ['Project service proposal.docx', 'Delivery action list.xlsx'],
        },
      },
    ],
  },
} satisfies ProductExperienceTranslations;
