import type { Locale } from '../../../data/types';

export interface BankingEmployee {
  role: string;
  avatar: string;
  skills: string[];
  process: string[];
  outputs: string[];
  value: string;
}

export interface BankingFeature {
  title: string;
  problem: string;
  body: string;
}

export interface BankingPresentation {
  headings: { scenarios: string };
  features: BankingFeature[];
  deployment: { title: string; body: string };
  employees: BankingEmployee[];
}

export const bankingPresentation: Record<Locale, BankingPresentation> = {
  zh: {
    headings: {
      scenarios: '银行数字员工团队',
    },
    features: [
      {
        title: '依托制度知识库，实现带原文依据的信贷审查',
        problem: '制度查找、资料比对耗力，审查缺少溯源依据。',
        body: '调用行内知识库，匹配制度原文，交叉核验财务与合同内容，输出带依据的审查底稿；访问全程审计，结果由业务人员复核，审批交由有权岗位确认。',
      },
      {
        title: '多源业务数据打通，实现风险线索自动归集分拨',
        problem: '预警信号分散，人工汇总筛选效率低。',
        body: '对接行内业务系统，自动归并客户风险线索、关联授信背景，形成核查清单并分派岗位；数据在行内闭环流转，调用行为可审计追溯。',
      },
      {
        title: '会话化业务协作，经营分析直接转化客户经理行动',
        problem: '经营指标难以转化为可落地的客户跟进动作。',
        body: '整合多维度经营信息分析，输出客户跟进材料；按岗位隔离权限，成果支持版本留存，内容经人工复核后落地，操作全程留痕。',
      },
    ],
    deployment: {
      title: '安全可控的私有化落地',
      body: '支持内网私有化、信创适配，数据留存在行内；分级最小权限管控，全链路操作留痕审计，契合银行内控与监管追溯要求。',
    },
    employees: [
      {
        role: '尽调审查数字员工',
        avatar: '/images/home/employee-avatar-proposal_V1.0.webp',
        skills: ['资料归集', '字段比对', '审查准备'],
        process: ['归集企业、财务与合同资料', '对照行内清单核对关键差异', '汇总审查重点与业务依据'],
        outputs: ['尽调报告初稿', '财务核查底稿', '授信审查要点'],
        value: '让信贷人员聚焦关键判断',
      },
      {
        role: '贷后风险数字员工',
        avatar: '/images/home/employee-avatar-risk_V1.0.webp',
        skills: ['预警归并', '风险关联', '核查跟进'],
        process: ['按客户归并多源风险线索', '关联授信与经营变化依据', '整理待核查事项与跟进重点'],
        outputs: ['客户风险摘要', '预警分析报告', '贷后核查清单'],
        value: '将分散预警转成重点核查',
      },
      {
        role: '合规审阅数字员工',
        avatar: '/images/home/employee-avatar-admin_V1.0.webp',
        skills: ['条款检索', '材料审阅', '整改整理'],
        process: ['检索适用监管及行内制度', '定位材料差异与缺项', '关联条款原文并整理整改事项'],
        outputs: ['条款对照材料', '合规审阅底稿', '整改事项清单'],
        value: '复核问题关联条款依据',
      },
      {
        role: '客户经营数字员工',
        avatar: '/images/home/employee-avatar-business_V1.0.webp',
        skills: ['经营分析', '客户识别', '服务准备'],
        process: ['分析网点、客群与产品变化', '关联客户服务记录', '梳理重点客户与跟进事项'],
        outputs: ['网点经营简报', '客户服务准备材料', '客户经理跟进表'],
        value: '让经营重点落到客户行动',
      },
      {
        role: '制度支持数字员工',
        avatar: '/images/home/employee-avatar-knowledge_V1.0.webp',
        skills: ['制度检索', '条款引用', '口径支持'],
        process: ['匹配业务问题与适用条款', '保留制度出处和原文', '整理产品与业务办理要求'],
        outputs: ['带条款出处的业务答复', '条款对照材料'],
        value: '让一线业务答复有据可查',
      },
      {
        role: '会议协同数字员工',
        avatar: '/images/home/employee-avatar-project_V1.0.webp',
        skills: ['纪要整理', '责任归集', '行动接续'],
        process: ['梳理会议决议与责任分工', '关联经营材料和业务附件', '整理后续审阅、核查与待办'],
        outputs: ['结构化会议纪要', '任务行动清单', '配套项目材料'],
        value: '让会议决议接续到业务行动',
      },
    ],
  },
  en: {
    headings: {
      scenarios: 'Your banking digital employee team',
    },
    features: [
      {
        title: 'Source-backed credit review with the policy knowledge base',
        problem: 'Finding policies and comparing records takes time, while reviews lack traceable evidence.',
        body: 'Use the bank’s knowledge base to retrieve original policy text, cross-check financial and contract content, and produce evidence-backed review workbooks. All access is audited. Business staff review the results; authorized roles confirm approvals.',
      },
      {
        title: 'Connect business data to collect and route risk signals automatically',
        problem: 'Scattered alerts make manual collection and screening inefficient.',
        body: 'Connect internal business systems to automatically group client risk signals, link credit history, and create checklists assigned to the right teams. Data stays within the bank, with every system call auditable and traceable.',
      },
      {
        title: 'Conversations turn analysis into action for relationship managers',
        problem: 'Business metrics are difficult to turn into practical client follow-up actions.',
        body: 'Analyze business information across multiple dimensions to prepare client follow-up materials. Permissions are separated by role, and deliverables retain version history. Staff review content before acting, with all operations recorded.',
      },
    ],
    deployment: {
      title: 'Secure, controlled private deployment',
      body: 'Supports private deployment on internal networks and compatibility with China’s Xinchuang IT ecosystem, with data retained within the bank. Tiered, least-privilege access and end-to-end audit trails support banking controls and regulatory traceability.',
    },
    employees: [
      {
        role: 'Credit Review Digital Employee',
        avatar: '/images/home/employee-avatar-proposal_V1.0.webp',
        skills: ['Record collection', 'Field comparison', 'Review preparation'],
        process: ['Collect company, financial and contract records', 'Check key differences against internal requirements', 'Organize review priorities and supporting evidence'],
        outputs: ['Due diligence draft', 'Financial review workbook', 'Credit review priorities'],
        value: 'Keep credit staff focused on key judgments',
      },
      {
        role: 'Post-loan Risk Digital Employee',
        avatar: '/images/home/employee-avatar-risk_V1.0.webp',
        skills: ['Alert grouping', 'Risk context', 'Follow-up checks'],
        process: ['Group risk signals by client', 'Connect credit history with operating changes', 'Prepare checks and follow-up priorities'],
        outputs: ['Client risk brief', 'Alert analysis', 'Post-loan checklist'],
        value: 'Turn scattered alerts into focused checks',
      },
      {
        role: 'Compliance Review Digital Employee',
        avatar: '/images/home/employee-avatar-admin_V1.0.webp',
        skills: ['Policy retrieval', 'Document review', 'Remediation'],
        process: ['Retrieve applicable regulatory and internal policies', 'Locate discrepancies and missing items', 'Attach source provisions and remediation actions'],
        outputs: ['Provision comparisons', 'Compliance review workbook', 'Remediation list'],
        value: 'Link review findings to policy evidence',
      },
      {
        role: 'Client Management Digital Employee',
        avatar: '/images/home/employee-avatar-business_V1.0.webp',
        skills: ['Business analysis', 'Client priorities', 'Service preparation'],
        process: ['Analyze changes by branch, segment and product', 'Connect client service records', 'Identify priority clients and follow-up actions'],
        outputs: ['Branch brief', 'Client service materials', 'Relationship-manager follow-up list'],
        value: 'Turn business priorities into client action',
      },
      {
        role: 'Policy Support Digital Employee',
        avatar: '/images/home/employee-avatar-knowledge_V1.0.webp',
        skills: ['Policy search', 'Source references', 'Frontline support'],
        process: ['Match business questions with applicable provisions', 'Retain policy sources and original text', 'Organize product and processing requirements'],
        outputs: ['Referenced business answers', 'Provision comparisons'],
        value: 'Give frontline answers a clear policy basis',
      },
      {
        role: 'Meeting Coordination Digital Employee',
        avatar: '/images/home/employee-avatar-project_V1.0.webp',
        skills: ['Meeting minutes', 'Responsibility mapping', 'Action follow-up'],
        process: ['Organize decisions and responsible teams', 'Connect operating records and business attachments', 'Prepare subsequent reviews, checks and actions'],
        outputs: ['Structured minutes', 'Action list', 'Supporting project materials'],
        value: 'Connect meeting decisions to business action',
      },
    ],
  },
};
