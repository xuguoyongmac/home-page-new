import type { IndustrySolutionPresentation } from '../shared/types';

export const securitiesPresentation: IndustrySolutionPresentation = {
  "zh": {
    sources: ["公告财报与研究资料","研报与发布审阅规则","授权客户资产交易与服务记录"],
    outputs: ["研究论证与待验证假设","发布前问题定位与复核任务","营业部经营归因与服务准备"],
    "home": {
      "title": "投研有论据，发布有复核，经营有方向",
      "pain": "研究事件、公司指标与观点假设各自分散，研报发布前还要逐条查核；营业部看见资产与交易变化，却难分清原因、接到客群服务。",
      "value": "数字员工围绕研究论证、发布前合规审阅和营业部经营，把事件证据组织成观点依据，把材料问题定位到规则，把资产交易变化转成服务准备与跟进事项。",
      "scenarios": [
        "研究论证",
        "公司跟踪",
        "研报审阅",
        "材料合规",
        "营业部经营",
        "客户服务"
      ],
      "benefits": [
        {
          "title": "事件与指标形成研究论证",
          "description": "把支持证据、反证线索和待验证假设并列比较，让分析师沿着论据形成观点。"
        },
        {
          "title": "发布前的问题逐项复核",
          "description": "把研报与业务材料的问题定位到原句、适用规则和复核任务，让修改有据、责任清楚。"
        },
        {
          "title": "营业部变化接到客群服务",
          "description": "分清资产与交易变化的来源，定位重点客群、沟通主题和服务准备，让经营分析接到一线。"
        }
      ]
    },
    "hero": {
      "lines": [
        "投研有论据",
        "发布有复核，经营有方向"
      ],
      "background": "/images/solutions/securities/securities-financial-city_V1.1.webp"
    },
    "features": [
      {
        "title": "事件与指标并列比较，让研究观点经得起论证",
        "problem": "事件分散在公告、财报和会议资料里，指标口径不一，支持证据与反证难放在同一框架比较。",
        "body": "TeGo 按公司、事件与研究假设组织资料，核对历史及同业指标口径，将支持证据、反证线索和待验证项并列成研究论证表。专业 Agent 衔接公司跟踪与主题研究，交付指标对照、主题底稿和引用索引，由分析师形成观点。"
      },
      {
        "title": "材料问题定位到原句，让发布复核逐项闭环",
        "problem": "研报与业务材料版本反复，引用、预测假设和风险表述要逐条核对，审阅意见难追到修改位置。",
        "body": "TeGo 对照研报发布规范与业务规则，逐段核对数据出处、预测口径、风险揭示和表述边界，将问题定位到原句并关联条款。修改建议、责任岗位和复核状态形成任务表，修订版本逐项回核，发布由有权人员确认。"
      },
      {
        "title": "资产交易变化拆解归因，让经营分析接到客群服务",
        "problem": "营业部资产与交易变化混在汇总指标里，净流入、市值波动和产品迁移难区分，客户服务缺少切入点。",
        "body": "TeGo 按营业部、客群、产品与渠道拆解资产和交易变化，区分资金转入转出、市值变动与产品结构迁移，关联服务记录形成经营归因简报。重点客群、沟通主题与责任交接汇成服务准备清单，适当性与具体服务由人员确认。"
      }
    ],
    "teamTitle": "证券数字员工团队",
    "employees": [
      {
        "role": "研究论证数字员工",
        "avatar": "/images/home/employee-avatar-research_V1.0.webp",
        "skills": [
          "事件组织",
          "正反论证",
          "来源引用"
        ],
        "process": [
          "围绕研究假设归集事件证据",
          "并列支持依据与反证线索",
          "整理待验证项与引用索引"
        ],
        "outputs": [
          "研究论证表",
          "主题研究底稿",
          "引用索引"
        ],
        "value": "让每个研究观点有论据可追"
      },
      {
        "role": "公司跟踪数字员工",
        "avatar": "/images/home/employee-avatar-knowledge_V1.0.webp",
        "skills": [
          "公告跟踪",
          "指标对照",
          "假设验证"
        ],
        "process": [
          "跟踪公司披露与关键事件",
          "对照历史同业及财务口径",
          "归集假设变化和待核实事项"
        ],
        "outputs": [
          "公司事件脉络",
          "指标对照表",
          "假设跟踪清单"
        ],
        "value": "让事件变化进入持续研究"
      },
      {
        "role": "研报审阅数字员工",
        "avatar": "/images/home/employee-avatar-risk_V1.0.webp",
        "skills": [
          "数据核对",
          "表述审阅",
          "条款映射"
        ],
        "process": [
          "核对研报引用和预测口径",
          "审阅风险揭示与表述边界",
          "关联问题原句和适用规则"
        ],
        "outputs": [
          "研报审阅批注",
          "问题与规则对照表"
        ],
        "value": "让发布前的问题定位到原句"
      },
      {
        "role": "材料合规数字员工",
        "avatar": "/images/home/employee-avatar-admin_V1.0.webp",
        "skills": [
          "版本比较",
          "修改回核",
          "责任跟进"
        ],
        "process": [
          "逐项核对业务材料与规则",
          "比较修订版本和审阅意见",
          "汇总责任岗位与待复核任务"
        ],
        "outputs": [
          "材料合规问题清单",
          "发布复核任务表"
        ],
        "value": "让审阅意见接到修改与复核"
      },
      {
        "role": "营业部经营数字员工",
        "avatar": "/images/home/employee-avatar-business_V1.0.webp",
        "skills": [
          "变化拆解",
          "客群分析",
          "经营归因"
        ],
        "process": [
          "拆解营业部资产与交易变化",
          "区分资金市值及产品迁移",
          "定位客群渠道和经营重点"
        ],
        "outputs": [
          "营业部经营归因简报",
          "重点客群分析表"
        ],
        "value": "让经营变化看清来由与重点"
      },
      {
        "role": "客户服务数字员工",
        "avatar": "/images/home/employee-avatar-customer_V1.0.webp",
        "skills": [
          "服务准备",
          "背景核对",
          "行动交接"
        ],
        "process": [
          "关联重点客群与服务记录",
          "整理沟通背景和服务主题",
          "衔接责任人员与适当性确认"
        ],
        "outputs": [
          "客群服务准备清单",
          "客户沟通材料",
          "服务跟进事项"
        ],
        "value": "让经营洞察接到有准备的服务"
      }
    ],
    "deployment": {
      "title": "研究与客户信息按业务边界落地",
      "body": "支持内网私有化与信创适配，按研究、合规和营业部岗位隔离资料及访问权限，保留引用、修订和调用记录；研究观点、材料发布与客户适当性由有权人员确认。"
    }
  },
  "en": {
    sources: ["Disclosures, financial reports and research","Research reports and release review rules","Authorized client assets, activity and service history"],
    outputs: ["Research arguments and open assumptions","Pre-release findings and review tasks","Branch attribution and client service preparation"],
    "home": {
      "title": "Evidence for research. Review before release. Direction for branch teams.",
      "pain": "Research events, company indicators and assumptions are scattered, while releases require line-by-line checks. Branches see changes in assets and activity but struggle to explain them and prepare targeted service.",
      "value": "Digital employees organize research evidence, review reports and business materials before release, and explain branch asset and activity changes—connecting arguments, review tasks and client service preparation.",
      "scenarios": [
        "Research arguments",
        "Company tracking",
        "Research review",
        "Material compliance",
        "Branch performance",
        "Client service"
      ],
      "benefits": [
        {
          "title": "Build research arguments from events and indicators",
          "description": "Compare supporting evidence, counterarguments and untested assumptions so analysts can develop a view from a clear argument."
        },
        {
          "title": "Review release findings item by item",
          "description": "Connect each report or material finding with its exact passage, applicable rule and review task, keeping revisions and ownership clear."
        },
        {
          "title": "Connect branch changes with client service",
          "description": "Explain asset and activity changes, identify priority segments and prepare discussion topics and service handovers."
        }
      ]
    },
    "hero": {
      "lines": [
        "Evidence for research",
        "Review before release. Direction for branches."
      ],
      "background": "/images/solutions/securities/securities-financial-city_V1.1.webp"
    },
    "features": [
      {
        "title": "Compare events and indicators to build a defensible research view",
        "problem": "Events span disclosures, accounts and meeting records. Inconsistent definitions make evidence and counterarguments hard to compare.",
        "body": "TeGo organizes company events around research assumptions, reconciles historical and peer indicator definitions, and places supporting evidence, counterarguments and open questions in one argument matrix. Specialist Agents connect company tracking and thematic research, producing comparisons, working papers and source indexes for analysts to form a view."
      },
      {
        "title": "Locate findings in the original text and close each release review",
        "problem": "Report and material versions change repeatedly. Sources, forecast assumptions and risk language require checks that are hard to trace back to revisions.",
        "body": "TeGo checks data sources, forecast definitions, risk disclosure and wording against release standards and business rules. Each finding retains its passage and applicable provision. Revision actions, owners and review status become a task list, with changes checked again before authorized personnel approve release."
      },
      {
        "title": "Explain asset and activity changes to prepare relevant client service",
        "problem": "Branch totals mix fund flows, valuation changes and product shifts, leaving client teams without a clear service starting point.",
        "body": "TeGo analyzes asset and activity changes by branch, segment, product and channel, distinguishing fund transfers, valuation movements and product mix shifts. Service history adds context to attribution briefs and preparation lists covering priority segments, discussion topics and handovers. Staff confirm suitability and specific service actions."
      }
    ],
    "teamTitle": "Your securities digital employee team",
    "employees": [
      {
        "role": "Research Argument Digital Employee",
        "avatar": "/images/home/employee-avatar-research_V1.0.webp",
        "skills": [
          "Event evidence",
          "Counterarguments",
          "Source citations"
        ],
        "process": [
          "Collect evidence around research assumptions",
          "Compare support with counterarguments",
          "Organize open questions and source indexes"
        ],
        "outputs": [
          "Research argument matrix",
          "Thematic working papers",
          "Source index"
        ],
        "value": "Trace each research view to its arguments"
      },
      {
        "role": "Company Tracking Digital Employee",
        "avatar": "/images/home/employee-avatar-knowledge_V1.0.webp",
        "skills": [
          "Disclosure tracking",
          "Indicator comparison",
          "Assumption review"
        ],
        "process": [
          "Track company disclosures and key events",
          "Reconcile historical and peer definitions",
          "Identify changes in assumptions and open questions"
        ],
        "outputs": [
          "Company event timeline",
          "Indicator comparison",
          "Assumption tracker"
        ],
        "value": "Bring new events into ongoing research"
      },
      {
        "role": "Research Review Digital Employee",
        "avatar": "/images/home/employee-avatar-risk_V1.0.webp",
        "skills": [
          "Data verification",
          "Wording review",
          "Rule mapping"
        ],
        "process": [
          "Check report sources and forecast definitions",
          "Review risk disclosure and wording",
          "Connect original passages with applicable rules"
        ],
        "outputs": [
          "Research annotations",
          "Finding and rule comparison"
        ],
        "value": "Locate pre-release findings in the original text"
      },
      {
        "role": "Material Compliance Digital Employee",
        "avatar": "/images/home/employee-avatar-admin_V1.0.webp",
        "skills": [
          "Version comparison",
          "Revision checks",
          "Review ownership"
        ],
        "process": [
          "Check business materials against rules",
          "Compare revisions with review comments",
          "Organize owners and outstanding review tasks"
        ],
        "outputs": [
          "Material compliance findings",
          "Release review tasks"
        ],
        "value": "Carry each review comment through revision"
      },
      {
        "role": "Branch Analysis Digital Employee",
        "avatar": "/images/home/employee-avatar-business_V1.0.webp",
        "skills": [
          "Change analysis",
          "Client segments",
          "Attribution"
        ],
        "process": [
          "Analyze branch asset and activity changes",
          "Separate flows, valuation and product shifts",
          "Identify segment and channel priorities"
        ],
        "outputs": [
          "Branch attribution brief",
          "Priority segment analysis"
        ],
        "value": "Explain the source of branch business changes"
      },
      {
        "role": "Client Service Digital Employee",
        "avatar": "/images/home/employee-avatar-customer_V1.0.webp",
        "skills": [
          "Service preparation",
          "Context checks",
          "Team handovers"
        ],
        "process": [
          "Connect priority segments with service history",
          "Prepare context and discussion topics",
          "Hand over to staff for suitability confirmation"
        ],
        "outputs": [
          "Client service preparation",
          "Discussion materials",
          "Service follow-up actions"
        ],
        "value": "Turn operating insight into prepared service"
      }
    ],
    "deployment": {
      "title": "Deploy within research and client information boundaries",
      "body": "Supports private deployment on internal networks and Xinchuang compatibility. Separate access for research, compliance and branch teams preserves sources, revisions and access records. Authorized personnel retain research judgment, release approval and client suitability decisions."
    }
  }
};
