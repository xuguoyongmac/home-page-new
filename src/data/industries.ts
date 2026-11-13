import type { Locale } from './types';

export interface Industry {
  slug: string; icon: string; name: string; tag: string; title: string; description: string;
  tasks: { title: string; input: string; action: string; output: string }[];
  scope: string; image: string;
}
export const industries: Record<Locale, Industry[]> = {
  zh: [
    { slug:'government', icon:'book', name:'政务解决方案', tag:'政务办公', title:'让资料与制度，接到具体工作',
      description:'围绕政策资料整理、会议材料和内部协作，组合企业知识、数字员工与项目文件，衔接人工审阅和成果归档。',
      tasks:[
        {title:'政策资料整理',input:'已授权政策文件与办事资料',action:'检索条款、整理出处，形成按主题组织的材料',output:'带引用的资料摘要与条款清单'},
        {title:'会议材料编制',input:'议程、会议记录与相关附件',action:'整理讨论要点、决议草稿和待办事项',output:'会议纪要草稿与行动项清单'},
        {title:'制度知识查询',input:'已授权的制度知识库',action:'按问题检索制度内容，返回引用与原文依据',output:'知识答复与文件引用'},
      ], scope:'基于平台通用能力组合建设。公文格式、资料范围、政务系统连接与发布权限按项目确定；正式文件由责任人员审定。',image:'knowledge-research'},
    { slug:'securities', icon:'chart', name:'券商解决方案', tag:'证券业务', title:'从研究资料，到可复核的工作成果',
      description:'围绕研报阅读、主题研究与经营分析，组合岗位技能和授权数据工具，在项目中保留资料、过程与人工复核。',
      tasks:[
        {title:'研究资料速读',input:'研报、公告和已授权研究资料',action:'提取事件、关键指标与观点，整理材料引用',output:'研究摘要与问题清单'},
        {title:'主题研究支持',input:'研究目标、公告与授权金融数据',action:'按岗位技能组织分析，保留数据口径与来源',output:'主题研究底稿与报告草稿'},
        {title:'经营分析',input:'经授权接入的经营指标与明细',action:'核对指标口径，整理趋势、结构和异常线索',output:'分析表格、图表与经营简报'},
      ],scope:'可围绕研究与经营分析配置岗位技能。数据许可、系统接入和交付范围在项目中确定；投资判断、适当性和对客内容由业务人员复核。',image:'knowledge-research'},
    { slug:'general', icon:'folder', name:'通用解决方案', tag:'企业办公', title:'把日常工作，连成一条协作链路',
      description:'围绕资料研究、方案编制、客户跟进和周期报告，让人与数字员工共用项目资料，在熟悉的工作入口推进任务。',
      tasks:[
        {title:'方案与报告',input:'任务目标、模板、业务资料与工作规范',action:'检索知识、组织内容，衔接审阅与修改',output:'可继续编辑的文档、表格和演示文稿'},
        {title:'销售与客户经营',input:'客户沟通记录和业务跟进信息',action:'通过 CRM 业务插件维护客户、商机和跟进事项',output:'客户资料、跟进清单与工作简报'},
        {title:'周期工作',input:'固定任务、执行周期与投递对象',action:'配置定时任务，跟踪运行状态和结果投递',output:'周期报告与运行记录'},
      ],scope:'企业办公由平台通用能力承接；CRM、招投标及 EHS 业务能力随对应插件安装与授权启用。',image:'collaborative-review'},
    { slug:'insurance', icon:'shield', name:'保险解决方案', tag:'保险业务', title:'让岗位知识，支持每一次业务准备',
      description:'从产品知识、销售支持和资料整理切入，定义数字员工的工作范围、资料依据和人工复核环节。',
      tasks:[
        {title:'产品知识支持',input:'经授权的产品条款、培训资料和服务规范',action:'围绕业务问题检索资料，整理条款出处',output:'知识答复、条款对照与引用'},
        {title:'销售材料准备',input:'已确认的产品资料与沟通目标',action:'按业务规范准备沟通材料和问答草稿',output:'销售支持材料与沟通草稿'},
        {title:'保单资料整理',input:'在授权范围内提供的保单和附件',action:'按确认的字段与清单要求整理资料',output:'资料清单与待补事项'},
      ],scope:'保险为可配置的方案建设方向，需结合产品知识、业务流程与客户系统实施。核保、理赔、质检结论及对客承诺由有权人员作出。',image:'collaborative-review'},
    { slug:'state-owned', icon:'network', name:'央国企解决方案', tag:'企业协同', title:'围绕知识、项目与成果，组织团队协作',
      description:'组合制度知识、项目协作、招投标与企业管理能力，在企业部署环境中开展资料处理和成果交付。',
      tasks:[
        {title:'文书与制度知识',input:'制度文件、材料模板与已授权业务资料',action:'检索依据、组织文书内容，提交人工审阅',output:'文书草稿、制度摘要与引用'},
        {title:'招投标协作',input:'招标文件、资质、产品资料与团队材料',action:'通过标书业务插件组织分析、编制与协作',output:'响应资料、编制成果与项目版本'},
        {title:'项目与安全管理',input:'项目文件、任务事项与安全业务材料',action:'组织成员协作，结合 EHS 插件推进相关工作',output:'项目成果、待办与安全工作材料'},
      ],scope:'由通用平台、招投标和 EHS 等能力组合建设。LDAP、私有化、本地模型和银河麒麟专项交付按具体环境确定。',image:'enterprise-connections'},
  ],
  en: [],
};
industries.en = industries.zh.map((item, index) => ({...item,
  name:['Government','Securities','General business','Insurance','State-owned enterprises'][index],
  tag:['Public sector','Financial services','Business operations','Insurance operations','Enterprise collaboration'][index],
  title:['Connect policies and knowledge to everyday work','Turn research into reviewable deliverables','Bring everyday work into a shared workflow','Put role knowledge to work','Organize knowledge, projects and deliverables'][index],
  description:[
    'Combine authorized knowledge, digital employees and shared projects for policy research, meeting materials and internal collaboration.',
    'Combine role skills and licensed data tools for research reading, thematic analysis and business reporting, with human review.',
    'Work with digital employees on proposals, customer follow-ups and recurring reports using shared project materials.',
    'Define the knowledge sources, responsibilities and review steps for product knowledge, sales preparation and document organization.',
    'Combine knowledge, projects, bid preparation and enterprise governance in your deployment environment.',
  ][index],
  tasks: [
    [
      {title:'Policy research',input:'Authorized policies and service documents',action:'Find relevant provisions, record sources and organize material by topic',output:'A referenced brief and provision checklist'},
      {title:'Meeting materials',input:'Agenda, meeting notes and relevant attachments',action:'Organize discussion points, draft decisions and follow-up work',output:'Draft minutes and an action list'},
      {title:'Policy knowledge queries',input:'An authorized policy knowledge base',action:'Retrieve relevant provisions and return original sources',output:'Answers with document references'},
    ],
    [
      {title:'Research reading',input:'Research reports, announcements and authorized materials',action:'Extract events, indicators and viewpoints with source references',output:'Research summaries and questions for review'},
      {title:'Thematic research',input:'Research goals, announcements and licensed financial data',action:'Apply role skills and retain metric definitions and sources',output:'Research working papers and draft reports'},
      {title:'Business analysis',input:'Authorized business metrics and transaction details',action:'Check metric definitions and identify trends, structures and exceptions',output:'Analysis tables, charts and business briefs'},
    ],
    [
      {title:'Proposals and reports',input:'Goals, templates, business materials and working standards',action:'Retrieve knowledge, organize content and coordinate review and revision',output:'Editable documents, spreadsheets and presentations'},
      {title:'Sales and customer operations',input:'Customer communication records and follow-up information',action:'Maintain customers, opportunities and follow-ups through the CRM plugin',output:'Customer records, follow-up lists and briefs'},
      {title:'Recurring work',input:'Defined tasks, schedules and delivery recipients',action:'Schedule tasks and follow execution and result delivery',output:'Recurring reports and execution records'},
    ],
    [
      {title:'Product knowledge',input:'Authorized product terms, training materials and service standards',action:'Retrieve relevant materials and record provision references',output:'Answers, term comparisons and references'},
      {title:'Sales preparation',input:'Approved product information and communication goals',action:'Prepare materials and draft responses under business standards',output:'Sales support materials and communication drafts'},
      {title:'Policy document organization',input:'Authorized policy documents and attachments',action:'Organize documents using agreed fields and checklists',output:'Document lists and missing-information requests'},
    ],
    [
      {title:'Documents and policy knowledge',input:'Policies, templates and authorized business materials',action:'Retrieve sources, prepare drafts and submit them for human review',output:'Document drafts, policy summaries and references'},
      {title:'Bid collaboration',input:'Tender documents, qualifications, product and team materials',action:'Use the bidding plugin for analysis, preparation and collaboration',output:'Response materials, prepared documents and project versions'},
      {title:'Projects and safety',input:'Project files, tasks and safety management materials',action:'Coordinate team work and use the EHS plugin for relevant activities',output:'Project deliverables, tasks and safety documents'},
    ],
  ][index],
  scope:[
    'A solution assembled from general platform capabilities. Public-sector connections and document approval require project-specific implementation.',
    'Configure role skills for research and business analysis. Data licensing, integrations and delivery scope are agreed for each project; business professionals review investment-related content.',
    'General office work uses platform capabilities. CRM, bid preparation and EHS require the corresponding plugins and permissions.',
    'A configurable solution direction requiring knowledge, process and integration implementation. Authorized staff make underwriting, claims and customer-facing decisions.',
    'Assembled from the platform, bid and EHS capabilities. Private deployment, local models, LDAP and Kylin delivery depend on the agreed environment.',
  ][index],
}));
