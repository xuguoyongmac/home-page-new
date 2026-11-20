import type { IndustryEmployee, IndustrySolutionPresentation } from '../shared/types';

export type BankingEmployee = IndustryEmployee;

export const bankingPresentation: IndustrySolutionPresentation = {
  "zh": {
    "home": {
      "title": "信审直达经营实质，专业尺度覆盖全行",
      "pain": "财报数字看似完整，送审说法却未必经得起交叉核验。风险信号与历史判断脱节，制度更新、专家经验难以同步到分支机构。",
      "value": "TeGo 数字员工协作平台把财务差异、风险演变和适用依据带到专业人员面前，让授信审查看清偿债基础，贷后跟进抓住风险变化，同类业务沿用本行专业方法。",
      "scenarios": [
        "授信尽调",
        "财务核验",
        "贷后风险",
        "外规内化",
        "制度修订",
        "方法复用"
      ],
      "benefits": [
        {
          "title": "审查更深入",
          "description": "沿财务差异核实收入质量、资金占用和第一还款来源。"
        },
        {
          "title": "风险更连续",
          "description": "新变化接上历次核查，保留客户风险认识和后续核实重点。"
        },
        {
          "title": "尺度更一致",
          "description": "本行制度与专家方法进入分支机构作业，减少同类问题反复求证。"
        }
      ]
    },
    "hero": {
      "lines": [
        "信审直达经营实质",
        "专业尺度覆盖全行"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp",
      "illustration": "/images/solutions/banking/banking-value-scene-1-zh_V11.0.webp"
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
        "title": "财报疑点看得清，偿债判断有依据",
        "problem": "报表数字能够对上，经营说法却经不起追问；审查时间花在反复找数，第一还款来源仍未讲清。",
        "body": "账面利润能否转化为偿债现金，往往藏在报表与送审说明的差异里。数字员工把勾稽异常、原文证据和本行审查要求对应呈现，让信审直接追问收入质量、资金占用与第一还款来源，为专业终审提供扎实依据。",
        "outcomes": [
          "追问经营疑点",
          "核实偿债基础",
          "支撑专业终审"
        ],
        "image": "/images/solutions/banking/banking-value-scene-1-zh_V11.0.webp",
        "imageAlt": "财报疑点看得清，偿债判断有依据",
        "imageHeight": 580
      },
      {
        "title": "贷后风险看变化，客户认识不断档",
        "problem": "财务、舆情和现场核查各自更新，新信号反复出现，却难看清风险在改善还是加深。",
        "body": "孤立预警难以说明风险是否加深。数字员工把本次经营变化与历次核查、已确认的客户背景放在同一脉络中，突出持续未解的问题和新增疑点。贷后人员带着重点核实，人员交接延续已有风险认识。",
        "outcomes": [
          "关联历次核查",
          "突出本次变化",
          "接续风险跟进"
        ],
        "image": "/images/solutions/banking/banking-value-scene-2-zh_V11.0.webp",
        "imageAlt": "贷后风险看变化，客户认识不断档",
        "imageHeight": 699
      },
      {
        "title": "外规影响看得清，条线执行有现行依据",
        "problem": "外规已经更新，相关内规和条线口径仍可能停留在旧版本，业务人员难判断哪条要求适用于当前事项。",
        "body": "一项外规更新可能同时影响多项内规和业务条线。数字员工对应变更条款、受影响制度与适用事项，让合规人员直接判断执行落差，制度责任部门据此审定修订内容。分支机构处理具体业务时，获得一致的现行依据。",
        "outcomes": [
          "看清影响范围",
          "明确制度责任",
          "统一执行依据"
        ],
        "image": "/images/solutions/banking/banking-value-scene-3-zh_V11.0.webp",
        "imageAlt": "外规影响看得清，条线执行有现行依据",
        "imageHeight": 701
      },
      {
        "title": "本行专家的方法，成为分支机构的能力",
        "problem": "同类授信问题在不同机构反复求助，少数专家越忙，一线越难及时获得足够专业支撑。",
        "body": "少数专家难以持续回应全行反复出现的同类问题。经确认的科目映射、勾稽规则和典型审查方法成为数字员工的专业依据，支撑分支机构日常核验。本行经验覆盖更多岗位，专家把精力留给疑难与例外，关键判断仍由有权人员完成。",
        "outcomes": [
          "沿用本行方法",
          "扩展专业覆盖",
          "聚焦疑难例外"
        ],
        "image": "/images/solutions/banking/banking-value-scene-4-zh_V11.0.webp",
        "imageAlt": "本行专家的方法，成为分支机构的能力",
        "imageHeight": 594
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
      "title": "本行知识留在行内，岗位责任贯穿作业",
      "body": "部署在银行私有环境，连接获准使用的资料、模型和业务系统。按机构、条线与岗位管理权限，保留工作记录、内容审核和人员复核，让专业能力扩展到更多机构，责任仍清晰落在本行治理体系中。"
    }
  },
  "en": {
    "home": {
      "title": "Deeper credit judgment. Shared bank expertise.",
      "pain": "Figures can reconcile while the borrower’s account still raises questions. New risk signals lose their history, and policy updates and specialist expertise do not always reach branches.",
      "value": "Digital employees connect financial discrepancies, evolving risks and applicable rules. Credit specialists examine repayment fundamentals, post-loan teams retain the history behind risk changes, and branches draw on the bank’s established review methods.",
      "scenarios": [
        "Credit due diligence",
        "Financial verification",
        "Post-loan risk",
        "Regulatory alignment",
        "Policy revision",
        "Method reuse"
      ],
      "benefits": [
        {
          "title": "Deeper reviews",
          "description": "Move beyond matching figures to examine business substance and the primary repayment source."
        },
        {
          "title": "A continuous risk view",
          "description": "Connect new developments with earlier checks and retain the focus for further verification."
        },
        {
          "title": "Consistent standards",
          "description": "Bring confirmed bank policies and specialist methods into daily work across branches."
        }
      ]
    },
    "hero": {
      "lines": [
        "Deeper credit judgment",
        "Shared bank expertise"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp",
      "illustration": "/images/solutions/banking/banking-value-scene-1-en_V11.0.webp"
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
        "title": "Ground repayment judgments in financial evidence.",
        "problem": "The figures reconcile, but the business explanation does not withstand scrutiny. Repeated data searches leave the primary repayment source unclear.",
        "body": "Accounting profit does not establish the cash available for repayment. Digital employees connect reconciliation discrepancies, borrower explanations and original evidence with the bank’s review requirements. Credit specialists can examine revenue quality, funds tied up in the business and the primary repayment source, with a stronger basis for professional sign-off.",
        "outcomes": [
          "Examine business questions",
          "Verify repayment fundamentals",
          "Support professional sign-off"
        ],
        "image": "/images/solutions/banking/banking-value-scene-1-en_V11.0.webp",
        "imageAlt": "Ground repayment judgments in financial evidence.",
        "imageHeight": 649
      },
      {
        "title": "Keep the history behind each risk change.",
        "problem": "Financial updates, public information and site checks remain separate. Teams struggle to distinguish recurring signals from a material change in risk.",
        "body": "An isolated alert cannot explain whether risk has deepened. Digital employees connect current business changes with earlier checks and confirmed customer context, highlighting unresolved issues and new concerns. Post-loan teams investigate with a clear focus, and staff handovers preserve the reasoning behind earlier risk judgments.",
        "outcomes": [
          "Connect earlier checks",
          "Highlight material changes",
          "Continue risk follow-up"
        ],
        "image": "/images/solutions/banking/banking-value-scene-2-en_V11.0.webp",
        "imageAlt": "Keep the history behind each risk change.",
        "imageHeight": 800
      },
      {
        "title": "Give business teams a current basis for applying regulations.",
        "problem": "Regulations change while internal policies and business-line interpretations may still reflect an earlier version. Staff cannot readily identify the requirement that applies.",
        "body": "One regulatory change can affect several internal policies and business lines. Digital employees relate changed clauses to affected policies and business matters. Compliance teams can assess execution gaps, policy owners approve revisions, and branches work from a shared current basis.",
        "outcomes": [
          "Identify affected scope",
          "Clarify policy ownership",
          "Align execution references"
        ],
        "image": "/images/solutions/banking/banking-value-scene-3-en_V11.0.webp",
        "imageAlt": "Give business teams a current basis for applying regulations.",
        "imageHeight": 545
      },
      {
        "title": "Extend the bank’s specialist methods across branches.",
        "problem": "Similar credit questions repeatedly return to a small specialist team, limiting the support available to frontline institutions.",
        "body": "A small expert team cannot repeatedly resolve the same questions across every branch. Confirmed account mappings, reconciliation rules and review methods give digital employees the bank’s own professional references. Branches gain support for routine checks, specialists focus on difficult cases, and authorized staff retain key judgments.",
        "outcomes": [
          "Apply the bank’s methods",
          "Extend specialist coverage",
          "Focus on exceptions"
        ],
        "image": "/images/solutions/banking/banking-value-scene-4-en_V11.0.webp",
        "imageAlt": "Extend the bank’s specialist methods across branches.",
        "imageHeight": 680
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
      "title": "Keep bank knowledge inside. Preserve accountability throughout the work.",
      "body": "Deploy in the bank’s private environment and connect approved documents, models and business systems. Manage access by institution, business line and role, retaining work records, content approvals and staff review as specialist capability reaches more branches."
    }
  }
};
