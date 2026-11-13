import type { Locale } from '../../data/types';

interface PricingPlan {
  id: string; icon: string; name: string; audience: string; description: string;
  price: string; unit: string; includes: string; items: string[]; action: string;
}
export const pricingPlans: Record<Locale, PricingPlan[]> = {
  zh: [
    { id: 'community', icon: 'network', name: '社区版', audience: '免费使用', description: '体验数字员工与 AI 协作的核心能力。', price: '¥0', unit: '免费', includes: '基础能力', items: ['数字员工与工作会话', '基础任务编排', '社区 MCP 工具', '工作空间与文件管理', '社区技术支持'], action: '获取社区版' },
    { id: 'subscription', icon: 'shield', name: '订阅版', audience: '私有化部署 · 年度订阅', description: '面向企业团队，按年订阅并部署在自有环境。', price: '¥50,000', unit: '/ 年起', includes: '包含社区版能力，以及', items: ['多 Agent 专业协作与任务分工', '并行任务执行与进度管理', '工作记忆与经验复用', '企业角色与资源权限管理', '私有化环境部署', '一对一客户支持与代维服务'], action: '咨询订阅版' },
    { id: 'enterprise', icon: 'cpu', name: '企业版', audience: '私有化部署 · 企业定制', description: '面向组织集成、品牌定制与专属交付需求。', price: '定制报价', unit: '按企业需求', includes: '包含订阅版能力，以及', items: ['企业协作渠道集成服务', 'LDAP / OIDC 身份源集成', '审计与可观测配置', '自主品牌形象定制', '部署与 POC 支持服务'], action: '获取企业报价' },
  ],
  en: [
    { id: 'community', icon: 'network', name: 'Community', audience: 'FREE', description: 'Explore core digital employee and AI collaboration capabilities.', price: '¥0', unit: 'Free', includes: 'Core capabilities', items: ['Digital employees and conversations', 'Basic task orchestration', 'Community MCP tools', 'Workspaces and file management', 'Community support'], action: 'Get Community' },
    { id: 'subscription', icon: 'shield', name: 'Subscription', audience: 'PRIVATE DEPLOYMENT · ANNUAL', description: 'An annual subscription deployed in your organization’s environment.', price: '¥50,000', unit: '/ year, starting at', includes: 'Everything in Community, plus', items: ['Multi-Agent collaboration and delegation', 'Parallel tasks and progress tracking', 'Work memory and experience reuse', 'Enterprise roles and resource permissions', 'Private environment deployment', 'Dedicated support and managed operations'], action: 'Discuss Subscription' },
    { id: 'enterprise', icon: 'cpu', name: 'Enterprise', audience: 'PRIVATE DEPLOYMENT · CUSTOM', description: 'For enterprise integrations, branding and dedicated delivery.', price: 'Custom quote', unit: 'Tailored to your organization', includes: 'Everything in Subscription, plus', items: ['Enterprise channel integration services', 'LDAP / OIDC identity integration', 'Audit and observability configuration', 'Custom branding', 'Deployment and POC support'], action: 'Get an enterprise quote' },
  ],
};

interface CapabilityGroup {
  id: string; icon: string; title: string; path: string;
  rows: { name: string; capability: string; boundary: string }[];
}
export const capabilityGroups: Record<Locale, CapabilityGroup[]> = {
  zh: [
    { id: 'employees', icon: 'network', title: '数字员工与岗位能力', path: 'product/digital-employees', rows: [
      { name: '岗位配置与招募', capability: '从数字员工模板招募，配置职责、模型、知识、技能与插件。', boundary: '模板资产与已运行的数字员工分别维护。' },
      { name: '专业分工', capability: '主 Agent 委派专业子 Agent，跟进任务进度并汇总结果。', boundary: '按数字员工的 Agent 配置与委派权限使用。' },
      { name: '技能复用', capability: '临时选用技能，或将常用技能安装到指定数字员工的 Agent。', boundary: '外部账号、工具与执行环境需要单独授权。' },
    ] },
    { id: 'collaboration', icon: 'folder', title: '团队协作与成果交付', path: 'product/collaboration', rows: [
      { name: '共享项目', capability: '集中目标、成员与文件，围绕同一份资料开展工作。', boundary: '项目资料按成员角色访问。' },
      { name: '人工参与', capability: '通过问询、审批和接手事项，引入同事判断并续办任务。', boundary: '按事项权限与实际处理状态推进。' },
      { name: '办公成果与版本', capability: '预览、编辑办公成果，保留草稿、项目版本与冲突副本。', boundary: 'Word、演示支持 Web 与桌面编辑；表格 Web 只读、桌面编辑。' },
    ] },
    { id: 'knowledge', icon: 'book', title: '企业知识与工作记忆', path: 'product/knowledge', rows: [
      { name: '资料检索与引用', capability: '导入企业文档，检索原文片段，在回答中引用资料。', boundary: '按知识库授权，文档继承所属知识库的访问范围。' },
      { name: '项目资料检索', capability: '在项目内查找相关文件内容，为当前工作补充依据。', boundary: '限定本项目；需要知识引擎和向量模型，不进入全局检索。' },
      { name: '持续工作上下文', capability: '在话题中续改工作，通过记忆保留可延续的信息。', boundary: '话题、记忆与知识库分别维护。' },
    ] },
    { id: 'connections', icon: 'plug', title: '业务连接与周期工作', path: 'product/integrations', rows: [
      { name: '业务系统集成', capability: '通过业务插件、MCP 与授权工具连接系统；通过 OpenAPI 调用平台服务。', boundary: '每条连接分别配置接口、身份和权限。' },
      { name: '周期任务', capability: '安排定时工作，查看运行记录并接收结果。', boundary: '执行看板属于扩展能力，按安装与配置启用。' },
      { name: '消息与设备入口', capability: '接入企业微信、钉钉、飞书；通过授权设备执行操作。', boundary: '外部渠道需要身份绑定，设备操作受系统权限控制。' },
    ] },
    { id: 'governance', icon: 'shield', title: '企业管理与执行审计', path: 'product/governance', rows: [
      { name: '组织与资源授权', capability: '管理租户、组织、角色及数字员工和知识的可用范围。', boundary: '可见范围、使用权限与管理权限分别控制。' },
      { name: '业务委托与人工确认', capability: '按发起人的授权执行工作，在需要时引入确认或接手。', boundary: '授权可撤销，实际执行仍受工具和资源权限约束。' },
      { name: '审计与用量', capability: '关联任务过程、工具调用和成果来源，查看模型用量。', boundary: '审计摘要、正文、导出与策略管理分别授权。' },
    ] },
    { id: 'deployment', icon: 'monitor', title: '部署与使用入口', path: 'enterprise', rows: [
      { name: '多端工作空间', capability: '通过 Web、桌面与移动端处理任务、会话与资料。', boundary: '各端编辑、设备接入和通知能力不同。' },
      { name: '私有化与本地模型', capability: '使用 Compose 或 Kubernetes 部署，接入兼容的模型服务。', boundary: '联网搜索、云模型和外部系统按企业网络策略使用。' },
      { name: '国产终端交付', capability: '提供银河麒麟桌面专项安装与构建通道。', boundary: '当前重点为 ARM64，具体软硬件组合按交付方案确认。' },
    ] },
  ],
  en: [
    { id: 'employees', icon: 'network', title: 'Digital employees and role capabilities', path: 'product/digital-employees', rows: [
      { name: 'Role setup and recruitment', capability: 'Recruit from templates and configure responsibilities, models, knowledge, skills and plugins.', boundary: 'Templates and running employees are maintained separately.' },
      { name: 'Specialist delegation', capability: 'A main Agent delegates to specialists, tracks progress and collects results.', boundary: 'Depends on the configured Agents and delegation permissions.' },
      { name: 'Reusable skills', capability: 'Select a skill for a request or install it on an employee’s Agent.', boundary: 'External accounts, tools and runtime access require authorization.' },
    ] },
    { id: 'collaboration', icon: 'folder', title: 'Team collaboration and deliverables', path: 'product/collaboration', rows: [
      { name: 'Shared projects', capability: 'Keep goals, members and files together around the same work.', boundary: 'Project access follows member roles.' },
      { name: 'Human participation', capability: 'Ask colleagues, request approval or hand off work, then continue the task.', boundary: 'Actions follow item permissions and processing state.' },
      { name: 'Office files and versions', capability: 'Preview and edit deliverables, preserving drafts, project versions and conflict copies.', boundary: 'Word and slides: web and desktop editing. Spreadsheets: web preview, desktop editing.' },
    ] },
    { id: 'knowledge', icon: 'book', title: 'Company knowledge and memory', path: 'product/knowledge', rows: [
      { name: 'Retrieval and references', capability: 'Import documents, retrieve relevant passages and cite sources in answers.', boundary: 'Access is granted by knowledge base and inherited by its documents.' },
      { name: 'Project retrieval', capability: 'Find relevant project file content to support the current task.', boundary: 'Project-only; requires a knowledge engine and embedding model. Excluded from global retrieval.' },
      { name: 'Continuing context', capability: 'Revise work in the same topic and retain useful information in memory.', boundary: 'Topics, memory and knowledge bases are maintained separately.' },
    ] },
    { id: 'connections', icon: 'plug', title: 'Business connections and recurring work', path: 'product/integrations', rows: [
      { name: 'Business integration', capability: 'Connect plugins, MCP and authorized tools; call platform services through OpenAPI.', boundary: 'Configure each interface, identity and permission separately.' },
      { name: 'Recurring tasks', capability: 'Schedule work, inspect run records and receive results.', boundary: 'The execution board is an extension requiring installation and setup.' },
      { name: 'Messaging and devices', capability: 'Connect WeCom, DingTalk and Feishu; operate authorized devices.', boundary: 'Channels require identity binding. Device actions follow system permissions.' },
    ] },
    { id: 'governance', icon: 'shield', title: 'Enterprise management and audit', path: 'product/governance', rows: [
      { name: 'Organizations and access', capability: 'Manage tenants, organizations, roles, employee access and knowledge scope.', boundary: 'Visibility, use and management permissions are separate.' },
      { name: 'Delegation and confirmation', capability: 'Work within the requester’s authorization, with confirmation or handoff when needed.', boundary: 'Delegation is revocable. Tool and resource permissions still apply.' },
      { name: 'Audit and usage', capability: 'Link task records, tool calls and deliverable sources; inspect model usage.', boundary: 'Audit summaries, content, exports and policy management have separate permissions.' },
    ] },
    { id: 'deployment', icon: 'monitor', title: 'Deployment and client access', path: 'enterprise', rows: [
      { name: 'Web, desktop and mobile', capability: 'Access tasks, conversations and materials across supported clients.', boundary: 'Editing, device access and notifications vary by client.' },
      { name: 'Private deployment and models', capability: 'Deploy with Compose or Kubernetes and connect compatible model services.', boundary: 'Search, cloud models and external services follow enterprise network policies.' },
      { name: 'Kylin desktop delivery', capability: 'Dedicated installation and build channels for Kylin desktop.', boundary: 'ARM64 is the current focus. Confirm the specific delivery configuration.' },
    ] },
  ],
};

export const pricingFaqs: Record<Locale, { question: string; answer: string }[]> = {
  zh: [
    { question: '订阅版起价与最终报价有什么区别？', answer: '订阅版公开起价为 ¥50,000/年。最终报价结合部署规模、启用模块、系统对接和服务范围确定；企业定制需求单独报价。' },
    { question: '报价需要提供哪些信息？', answer: '提供要完成的岗位工作、预计成员与数字员工规模、资料类型、部署环境和需要连接的业务系统。团队据此确认模型、计算资源、实施及服务范围。' },
    { question: '模型调用与算力如何计入方案？', answer: '模型选择、预计用量与计算资源分别评估。使用云端模型、自有模型服务或本地算力，对应的费用与资源责任在报价中明确。' },
    { question: '功能清单是否代表所有版本默认包含？', answer: '功能清单说明平台能力与使用条件。各版本的启用模块、插件、知识配置、接口对接和服务内容，需要在具体报价与交付清单中确定。' },
    { question: '可以从一个岗位场景开始吗？', answer: '可以先选择明确的输入资料、执行动作、交付成果与人工复核点，确定首个岗位场景，再评估扩展到更多数字员工和团队的配置。' },
  ],
  en: [
    { question: 'How does the starting price relate to the final quote?', answer: 'Subscription starts at CNY 50,000 per year. The final quote reflects deployment scale, enabled modules, integrations and service scope. Enterprise customization is quoted separately.' },
    { question: 'What information is needed for a quote?', answer: 'Share the role workflow, expected team and employee scale, material types, deployment environment and business systems. These define model, compute, implementation and service scope.' },
    { question: 'How are models and compute scoped?', answer: 'Model selection, expected usage and compute are assessed separately. The quote identifies costs and responsibilities for cloud models, your model service or local compute.' },
    { question: 'Is every listed capability included in every plan?', answer: 'The list describes platform capabilities and their conditions. Enabled modules, plugins, knowledge setup, integrations and services are defined in the quote and delivery scope.' },
    { question: 'Can we start with one role workflow?', answer: 'Start with defined inputs, actions, deliverables and human review points. Scope the first workflow, then assess configurations for more employees and teams.' },
  ],
};
