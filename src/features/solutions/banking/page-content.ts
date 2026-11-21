import type { IndustryEmployee, IndustrySolutionPresentation } from '../shared/types';

export type BankingEmployee = IndustryEmployee;

export const bankingPresentation: IndustrySolutionPresentation = {
  "zh": {
    "home": {
      "title": "让专业作业提速，让客户经营深入",
      "pain": "授信资料反复核对，风险信息分散在不同系统；客户经理忙于准备材料，经营分析也难以接续到具体服务。",
      "value": "数字员工连接行内知识与业务工具，承接信贷尽调、贷后跟踪、客户经营与运营分析，让专业人员把精力放在风险判断、客户沟通和业务发展。",
      "scenarios": [
        "信贷尽调",
        "授信审查",
        "贷后管理",
        "对公经营",
        "合规制度",
        "网点运营"
      ],
      "benefits": [
        {
          "title": "专业审查更聚焦",
          "description": "企业资料、财务关系与行内规则共同进入审查，关键差异带着原文依据交到专业人员手中。"
        },
        {
          "title": "客户经营更深入",
          "description": "把客户经营变化、产品需求和服务历史转为拜访议题与综合服务方案，让一线沟通更有准备。"
        },
        {
          "title": "条线协作更顺畅",
          "description": "贷后核查、运营分析和制度更新按计划推进，业务背景、责任事项与最新成果持续接续。"
        }
      ]
    },
    "hero": {
      "lines": [
        "让专业作业提速",
        "让客户经营深入"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp"
    },
    "sources": [
      "企业资料与财务报表",
      "授信记录与风险预警",
      "客户经营与服务数据",
      "行内制度与业务规则"
    ],
    "outputs": [
      "授信尽调与审查报告",
      "客户风险跟踪简报",
      "对公客户服务方案",
      "经营分析与行动建议"
    ],
    "features": [
      {
        "title": "把重复核验交出去，让信贷审查更深入",
        "problem": "客户资料与合同分批提交，财务口径、本行规则和报告要求各有差异，信审准备占用大量时间。",
        "body": "将财务核验、资料分析和报告编制交给数字员工，按本行方法对应主体、期间、科目与审查要求。专业人员可围绕差异补充事实、修订报告，少做重复摘录与勾稽，把更多精力放在经营真实性和授信风险判断。",
        "outcomes": [
          "财务关系核验",
          "本行模板编制",
          "审查依据定位"
        ]
      },
      {
        "title": "贯通客户风险变化，贷后跟进更有重点",
        "problem": "财务变化、舆情与预警各自更新，贷后人员需要反复查找客户背景，才能明确本次核查重点。",
        "body": "按计划归集授权风险信息，将新信号与客户授信、经营和历史核查情况关联。数字员工整理变化脉络、影响事项和核查重点，把持续监测接到对应岗位的跟进工作中，保留现场反馈与后续处理记录。",
        "outcomes": [
          "客户风险归并",
          "贷后核查准备",
          "跟进反馈接续"
        ]
      },
      {
        "title": "带着客户洞察，准备更贴近需求的服务",
        "problem": "客户经营、结算与融资需求分散在多处记录，客户经理准备拜访和方案时，需要重新拼接信息。",
        "body": "围绕目标客户与重点客群，结合经营资料、产品知识和已授权服务记录，梳理业务变化、潜在需求与沟通议题。数字员工协同准备客户画像、拜访材料和综合服务方案，让客户经理从材料准备走向更深入的业务沟通。",
        "outcomes": [
          "对公客户画像",
          "拜访与商机准备",
          "综合方案协作"
        ]
      },
      {
        "title": "看清经营变化，把分析接到条线行动",
        "problem": "网点波动、运营差异和制度更新跨越多个条线，报表汇总之后，还要解释原因并组织后续工作。",
        "body": "连接获准经营数据和制度知识，按网点、客群、产品与渠道分析变化，整理差异原因和协调事项。数字员工可持续准备经营简报、业务答复及制度修订材料，在项目会话中接续责任分工、人员意见和成果版本。",
        "outcomes": [
          "经营归因分析",
          "运营差异追踪",
          "制度更新协作"
        ]
      }
    ],
    "teamTitle": "面向银行业务条线的数字员工团队",
    "employees": [
      {
        "role": "信贷尽调数字员工",
        "avatar": "/images/home/employee-avatar-proposal_V1.0.webp",
        "skills": [
          "财务勾稽",
          "经营分析",
          "报告编制"
        ],
        "process": [
          "核对企业、财报与合同关系",
          "调用本行方法分析授信资料",
          "编制尽调报告并接续修订"
        ],
        "outputs": [
          "授信尽调报告",
          "财务核验明细"
        ],
        "value": "把案头准备转成深入审查的起点"
      },
      {
        "role": "贷后风险数字员工",
        "avatar": "/images/home/employee-avatar-risk_V1.0.webp",
        "skills": [
          "预警归并",
          "风险关联",
          "持续跟踪"
        ],
        "process": [
          "汇集客户风险与经营变化",
          "关联授信背景和历史核查",
          "持续更新跟进重点与反馈"
        ],
        "outputs": [
          "客户风险简报",
          "贷后核查任务"
        ],
        "value": "让每次核查都带着完整客户背景"
      },
      {
        "role": "对公经营数字员工",
        "avatar": "/images/home/employee-avatar-customer_V1.0.webp",
        "skills": [
          "客户洞察",
          "商机准备",
          "方案协作"
        ],
        "process": [
          "分析客户经营与服务需求",
          "组织拜访议题和产品资料",
          "协同形成综合服务方案"
        ],
        "outputs": [
          "客户拜访材料",
          "综合服务方案"
        ],
        "value": "让客户经理带着洞察进入业务沟通"
      },
      {
        "role": "交易运营数字员工",
        "avatar": "/images/home/employee-avatar-admin_V1.0.webp",
        "skills": [
          "业务核对",
          "差异分析",
          "事项接续"
        ],
        "process": [
          "归集结算与运营业务记录",
          "对照处理规则定位差异",
          "组织跨岗位反馈与接续"
        ],
        "outputs": [
          "运营差异分析",
          "业务交接记录"
        ],
        "value": "减少跨系统核对和重复沟通"
      },
      {
        "role": "合规制度数字员工",
        "avatar": "/images/home/employee-avatar-knowledge_V1.0.webp",
        "skills": [
          "条款检索",
          "内外规比对",
          "修订协作"
        ],
        "process": [
          "匹配现行条款与业务问题",
          "分析外规变化对内规的影响",
          "汇集修订意见并维护版本"
        ],
        "outputs": [
          "制度影响分析",
          "条款修订准备稿"
        ],
        "value": "让制度变化落到业务执行和方法维护"
      },
      {
        "role": "经营分析数字员工",
        "avatar": "/images/home/employee-avatar-research_V1.0.webp",
        "skills": [
          "指标分析",
          "经营归因",
          "管理汇报"
        ],
        "process": [
          "关联计划、网点与客群数据",
          "解释指标变化与业务差异",
          "准备经营汇报和协调议题"
        ],
        "outputs": [
          "网点经营简报",
          "经营行动建议"
        ],
        "value": "把报表变化转为有重点的经营讨论"
      }
    ],
    "deployment": {
      "title": "融入本行系统，服务全行协作",
      "body": "在行内私有环境部署 TeGo 数字员工协作平台，连接获准模型、知识与业务接口。按条线、岗位和资源组织授权，将机构方法沉淀为可复用技能，并统一管理发布、审核、审计与运行，让数字员工随业务持续演进。"
    }
  },
  "en": {
    "home": {
      "title": "Accelerate specialist work. Deepen client relationships.",
      "pain": "Credit records require repeated checks, risk information sits across systems, and relationship managers spend valuable time preparing materials. Business analysis often stops before it reaches frontline service.",
      "value": "Digital employees connect bank knowledge and approved tools to support credit diligence, post-loan monitoring, corporate coverage and operating analysis, freeing specialists for risk judgment, client conversations and business development.",
      "scenarios": [
        "Credit diligence",
        "Credit review",
        "Post-loan management",
        "Corporate coverage",
        "Policy and compliance",
        "Branch operations"
      ],
      "benefits": [
        {
          "title": "Focus specialist reviews",
          "description": "Bring company records, financial relationships and internal requirements together, with source-backed differences ready for review."
        },
        {
          "title": "Deepen client coverage",
          "description": "Turn operating changes, product needs and service history into useful meeting topics and integrated service proposals."
        },
        {
          "title": "Connect work across teams",
          "description": "Keep monitoring, analysis and policy updates moving, with business context, ownership and current deliverables carried forward."
        }
      ]
    },
    "hero": {
      "lines": [
        "Accelerate specialist work",
        "Deepen client relationships"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp"
    },
    "sources": [
      "Company records and financial statements",
      "Credit history and risk alerts",
      "Client activity and service data",
      "Internal policies and business rules"
    ],
    "outputs": [
      "Credit diligence and review reports",
      "Client risk updates",
      "Corporate service proposals",
      "Operating analysis and action plans"
    ],
    "features": [
      {
        "title": "Deepen credit diligence and focus review on the judgments that matter",
        "problem": "Company records, financials and contracts arrive in batches. Bank-specific methods and reporting requirements add substantial preparation work.",
        "body": "Delegate financial checks, record analysis and report drafting to digital employees. Apply the bank’s methods to entities, periods, accounts and review requirements, then incorporate specialist questions and revisions. Credit teams spend less time transcribing and reconciling, and more time assessing operating substance and credit risk.",
        "outcomes": [
          "Financial reconciliation",
          "Bank-specific report drafting",
          "Source-linked review findings"
        ]
      },
      {
        "title": "Bring post-loan changes together for more focused risk follow-up",
        "problem": "Financial changes, news and system alerts update independently. Reviewers must reconstruct client history before deciding what to investigate.",
        "body": "Collect approved risk information on a schedule and connect new signals with credit exposure, operations and previous reviews. Digital employees prepare the change history, affected matters and investigation priorities, while keeping subsequent feedback connected to the responsible teams.",
        "outcomes": [
          "Client risk aggregation",
          "Post-loan review preparation",
          "Connected follow-up records"
        ]
      },
      {
        "title": "Bring client insight into meetings and build more relevant service proposals",
        "problem": "Operating changes, settlement needs and financing requirements sit across records, leaving relationship managers to assemble the context for each meeting.",
        "body": "Combine business records, product knowledge and approved service history around target clients and segments. Digital employees identify changes, potential needs and discussion topics, then help prepare client profiles, meeting materials and integrated proposals for more productive relationship conversations.",
        "outcomes": [
          "Corporate client insight",
          "Meeting and opportunity preparation",
          "Integrated proposal collaboration"
        ]
      },
      {
        "title": "Explain operating changes and keep the resulting actions moving",
        "problem": "Branch performance, operating exceptions and policy changes span multiple teams. Consolidated reports still need explanation and coordinated follow-through.",
        "body": "Use approved business data and internal knowledge to analyze changes by branch, segment, product and channel. Prepare operating briefs, service answers and policy revisions, then carry responsibilities, staff feedback and document versions forward in shared project conversations.",
        "outcomes": [
          "Operating attribution",
          "Exception follow-up",
          "Policy update collaboration"
        ]
      }
    ],
    "teamTitle": "A digital employee team for banking business lines",
    "employees": [
      {
        "role": "Credit Diligence Digital Employee",
        "avatar": "/images/home/employee-avatar-proposal_V1.0.webp",
        "skills": [
          "Financial reconciliation",
          "Business analysis",
          "Report drafting"
        ],
        "process": [
          "Check company, financial and contract relationships",
          "Apply bank-specific diligence methods",
          "Draft reports and incorporate revisions"
        ],
        "outputs": [
          "Credit diligence report",
          "Financial verification detail"
        ],
        "value": "Turn preparation into a stronger foundation for credit review"
      },
      {
        "role": "Post-loan Risk Digital Employee",
        "avatar": "/images/home/employee-avatar-risk_V1.0.webp",
        "skills": [
          "Alert aggregation",
          "Risk context",
          "Ongoing monitoring"
        ],
        "process": [
          "Collect client risk and operating changes",
          "Connect credit history and previous reviews",
          "Update investigation priorities and follow-up"
        ],
        "outputs": [
          "Client risk brief",
          "Post-loan review tasks"
        ],
        "value": "Give every investigation a complete client context"
      },
      {
        "role": "Corporate Coverage Digital Employee",
        "avatar": "/images/home/employee-avatar-customer_V1.0.webp",
        "skills": [
          "Client insight",
          "Opportunity preparation",
          "Proposal development"
        ],
        "process": [
          "Analyze client operations and service needs",
          "Prepare meeting topics and product knowledge",
          "Develop integrated service proposals"
        ],
        "outputs": [
          "Client meeting materials",
          "Integrated service proposal"
        ],
        "value": "Bring informed insight into client conversations"
      },
      {
        "role": "Transaction Operations Digital Employee",
        "avatar": "/images/home/employee-avatar-admin_V1.0.webp",
        "skills": [
          "Record checks",
          "Exception analysis",
          "Work handovers"
        ],
        "process": [
          "Collect settlement and operating records",
          "Locate differences against processing rules",
          "Connect responses and work across teams"
        ],
        "outputs": [
          "Operating exception analysis",
          "Business handover record"
        ],
        "value": "Reduce repeated checks and cross-system coordination"
      },
      {
        "role": "Policy and Compliance Digital Employee",
        "avatar": "/images/home/employee-avatar-knowledge_V1.0.webp",
        "skills": [
          "Policy retrieval",
          "Regulatory comparison",
          "Revision collaboration"
        ],
        "process": [
          "Match current provisions to business questions",
          "Assess external changes against internal policies",
          "Collect revisions and maintain versions"
        ],
        "outputs": [
          "Policy impact assessment",
          "Draft policy revisions"
        ],
        "value": "Connect policy changes with business practice"
      },
      {
        "role": "Business Analysis Digital Employee",
        "avatar": "/images/home/employee-avatar-research_V1.0.webp",
        "skills": [
          "Metric analysis",
          "Business attribution",
          "Management reporting"
        ],
        "process": [
          "Connect plans, branches and client segments",
          "Explain indicator changes and variances",
          "Prepare management reports and discussion topics"
        ],
        "outputs": [
          "Branch operating brief",
          "Business action recommendations"
        ],
        "value": "Turn report movements into focused management discussions"
      }
    ],
    "deployment": {
      "title": "Connect with bank systems and support institution-wide collaboration",
      "body": "Deploy TeGo Digital Employee Collaboration Platform within the bank’s private environment and connect approved models, knowledge and business interfaces. Organize access by business line, role and resource, preserve institutional methods as reusable skills, and manage releases, reviews, audits and operations as business needs evolve."
    }
  }
};
