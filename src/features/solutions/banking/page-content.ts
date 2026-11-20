import type { IndustryEmployee, IndustrySolutionPresentation } from '../shared/types';

export type BankingEmployee = IndustryEmployee;

export const bankingPresentation: IndustrySolutionPresentation = {
  "zh": {
    "home": {
      "title": "让信审看清实质，让本行经验支撑全行",
      "pain": "财务关系与送审说法需要反复核验，新风险难接上历史认识；外规变化和少数专家的经验，也难及时进入各条线的实际工作。",
      "value": "TeGo 数字员工协作平台承接财务勾稽、尽调准备、贷后风险归集和制度影响分析，让专业人员从重复核验转向经营实质、偿债能力与适用规则的判断，并将本行方法复用到更多机构。",
      "scenarios": [
        "授信尽调",
        "财务核验",
        "贷后核查",
        "外规内化",
        "制度修订",
        "专业方法复用"
      ],
      "benefits": [
        {
          "title": "把风险疑点讲清楚",
          "description": "财务差异与原文依据一起进入审查，让信审能够追问经营疑点，核实偿债能力与第一还款来源。"
        },
        {
          "title": "让风险认识持续接续",
          "description": "新变化与历史核查保持关联，让贷后人员辨明风险演变，带着明确重点开展核实与跟进。"
        },
        {
          "title": "让全行用上本行方法",
          "description": "把已确认的本行知识、制度与审查经验转为持续专业支撑，帮助分支机构围绕相同依据判断同类问题。"
        }
      ]
    },
    "hero": {
      "lines": [
        "让信审看清经营实质",
        "让本行经验支撑全行"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp",
      "illustration": "/images/solutions/banking/banking-team-value-zh_V9.3.webp"
    },
    "sources": [
      "企业经营与财务资料",
      "授信与历次核查记录",
      "外部监管与本行制度",
      "本行审查知识与专业方法"
    ],
    "outputs": [
      "财务核验底稿与尽调报告",
      "客户风险简报与核查重点",
      "制度影响分析与修订准备稿",
      "本行方法对应的审查依据"
    ],
    "features": [
      {
        "title": "财报疑点有据可查，尽调直达经营实质",
        "problem": "财报口径、送审说法与本行要求各自分散，信审容易困在基础核验，难以直达真实经营与偿债疑点。",
        "body": "财报口径不一、送审说法与数字脱节，容易掩盖真正的风险。TeGo 数字员工协作平台按本行方法交付财务勾稽底稿、差异依据和尽调报告草稿，让信审聚焦经营疑点、偿债能力与第一还款来源，由专业人员复核终审。",
        "outcomes": [
          "看清财务疑点",
          "核实偿债基础",
          "聚焦第一还款来源"
        ]
      },
      {
        "title": "让贷后新变化接上历史风险认识",
        "problem": "财务、舆情与历次核查不断更新，风险信号各自孤立，贷后人员难以判断新变化意味着什么。",
        "body": "财务、舆情与历次核查各自更新，客户风险容易被拆成孤立信号。数字员工结合授权信息和经确认的工作记忆，持续形成风险简报与核查重点，让贷后团队看清变化脉络、关注风险演变，把专业时间用于核实与应对。",
        "outcomes": [
          "辨别风险新变化",
          "明确本次核查重点",
          "接续后续风险跟进"
        ]
      },
      {
        "title": "让外规变化落到本行制度与条线",
        "problem": "外规更新牵动多项内规与部门职责，合规团队反复检索比对，仍难看清适用范围与执行落差。",
        "body": "一项外规变化可能牵动多项内规，适用范围与修订责任难以一眼看清。数字员工交付条款影响分析、修订准备稿和部门反馈记录，让合规团队聚焦实质变化与执行落差，由制度责任部门审定内容并按本行流程发布。",
        "outcomes": [
          "辨明制度受影响范围",
          "找准修订责任与落点",
          "核实条线执行差距"
        ]
      },
      {
        "title": "让本行专家方法成为全行专业支撑",
        "problem": "专家经验集中在少数人员，分支机构处理同类问题时需要反复求助，专业判断尺度难以保持一致。",
        "body": "审查经验集中在少数专家，机构与岗位之间容易出现判断尺度差异。数字员工承载经确认的本行知识、审查方法与典型问题，形成沿用本行方法的核验依据和报告，让分支机构获得持续的专业支撑，重要判断仍由人员把关。",
        "outcomes": [
          "沿用本行审查方法",
          "统一同类问题判断尺度",
          "扩展分支专业支撑"
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
      "title": "本行方法可复用，岗位边界有分寸",
      "body": "在行内私有环境部署，复用获准模型、知识与业务服务，按机构、条线和岗位管理资料与工具权限。将本行专业方法沉淀为可维护的岗位能力，让更多机构获得支持，同时保持人员复核、变更审核与运行审计的责任清晰。"
    }
  },
  "en": {
    "home": {
      "title": "See the business substance. Extend the bank’s expertise.",
      "pain": "Financial relationships and borrower claims require repeated checks. New signals lose their risk history, while regulatory changes and specialist expertise struggle to reach day-to-day work across the bank.",
      "value": "TeGo 数字员工协作平台 undertakes financial reconciliation, due diligence preparation, post-loan risk consolidation and policy impact analysis. Specialists can move from repetitive checks to judgments about the business, repayment capacity and applicable rules, while the bank’s methods support more institutions.",
      "scenarios": [
        "Credit due diligence",
        "Financial verification",
        "Post-loan review",
        "Regulatory alignment",
        "Policy revision",
        "Expert method reuse"
      ],
      "benefits": [
        {
          "title": "Make risk questions clear",
          "description": "Bring financial differences and their source evidence into review so specialists can examine operating issues, repayment capacity and the primary repayment source."
        },
        {
          "title": "Preserve a continuous risk view",
          "description": "Connect new developments with past checks so post-loan teams can judge how risk is changing and verify the issues that matter now."
        },
        {
          "title": "Use the bank’s methods across branches",
          "description": "Turn confirmed knowledge, policies and review experience into ongoing support, giving branches consistent grounds for similar professional questions."
        }
      ]
    },
    "hero": {
      "lines": [
        "See the business behind the numbers",
        "Bring bank expertise to every branch"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp",
      "illustration": "/images/solutions/banking/banking-team-value-en_V9.3.webp"
    },
    "sources": [
      "Business and financial information",
      "Credit and review history",
      "Regulations and bank policies",
      "Bank review knowledge and methods"
    ],
    "outputs": [
      "Financial working papers and due-diligence drafts",
      "Borrower risk briefs and review priorities",
      "Policy impact analysis and revision drafts",
      "Review evidence grounded in bank methods"
    ],
    "features": [
      {
        "title": "Get to the business substance behind the numbers",
        "problem": "Financial definitions, borrower narratives and bank requirements sit apart. Credit reviewers spend time on basic checks before they can examine operating and repayment risks.",
        "body": "Inconsistent financial definitions and claims that do not match the numbers can obscure real risk. TeGo 数字员工协作平台 prepares reconciliations, evidence of differences and draft due diligence reports using the bank’s methods. Reviewers can concentrate on operating questions, repayment capacity and the primary source of repayment, with specialists retaining final review.",
        "outcomes": [
          "Identify financial red flags",
          "Assess repayment fundamentals",
          "Examine the primary repayment source"
        ]
      },
      {
        "title": "Connect new signals to the borrower’s risk history",
        "problem": "Financial changes, public information and past checks are updated separately, leaving post-loan teams to work out what each new signal means.",
        "body": "Isolated financial updates, public information and review records can fragment the view of a borrower. Digital employees combine authorized information with confirmed working memory to prepare risk briefs and review priorities. Post-loan teams can see how risk is developing and focus their time on verification and follow-up.",
        "outcomes": [
          "Distinguish new risk developments",
          "Set priorities for the next check",
          "Carry risk follow-up forward"
        ]
      },
      {
        "title": "Translate regulatory change into the bank’s own rules",
        "problem": "A regulatory update can affect several internal policies and business functions. Repeated searches and comparisons still leave uncertainty about scope and implementation gaps.",
        "body": "One regulatory change may affect several internal policies, making scope and ownership hard to establish. Digital employees prepare clause impact analysis, revision drafts and departmental feedback records. Compliance teams can focus on substantive changes and implementation gaps, while policy owners approve content and publish it through the bank’s procedures.",
        "outcomes": [
          "Determine which policies are affected",
          "Clarify revision ownership",
          "Examine implementation gaps"
        ]
      },
      {
        "title": "Bring the bank’s expert methods to every branch",
        "problem": "Expertise is concentrated in a few people. Branches repeatedly seek help on similar questions, and standards of professional judgment can vary.",
        "body": "When review expertise rests with a few specialists, institutions and roles can apply different standards. Digital employees carry confirmed bank knowledge, review methods and recurring questions into evidence checks and reports. Branches gain ongoing support grounded in the bank’s own methods, with people retaining responsibility for significant judgments.",
        "outcomes": [
          "Apply the bank’s review methods",
          "Use consistent grounds for similar judgments",
          "Extend specialist support to branches"
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
      "title": "Reuse the bank’s methods within clear role boundaries",
      "body": "Deploy in the bank’s private environment and reuse approved models, knowledge and business services. Manage access to records and tools by institution, function and role. Maintain bank-specific methods as digital employee capabilities, extending specialist support while keeping human review, change approval and operational audit responsibilities clear."
    }
  }
};
