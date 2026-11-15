import type { SolutionModule } from '../types';

export default {
  "slug": "banking",
  "order": 0,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "banking",
      "icon": "book",
      "name": "银行解决方案",
      "tag": "银行业务",
      "title": "信贷审查更深入，风险与客户经营更主动",
      "description": "从信贷尽调、合规审阅到贷后监测与客户经营，数字员工连接业务资料、制度知识和经营数据，形成有依据的分析、核查与跟进行动。",
      "scope": "基于平台通用能力组合建设；银行系统接入、数据授权及业务规则按项目确定，授信审批与对客结论由有权人员作出。",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "信贷尽调与审查准备",
          "problem": "企业信息、财报和流水分散，重复录入与跨文件核验挤占客户经理的研判时间。",
          "input": "申请材料、财务报表、合同与行内检查清单",
          "action": "归集企业经营、财务与合同资料，按行内清单核对关键字段，分析指标变化与差异，按章节形成尽调底稿和审查重点。",
          "output": "尽调报告初稿、财务核查底稿、授信审查要点",
          "value": "把案头整理接到信贷研判，让审查有据可查。"
        },
        {
          "title": "贷后风险监测与核查",
          "problem": "舆情、财务变化和业务预警散在不同入口，重复信号多，难以迅速锁定核查重点。",
          "input": "已接入的风险预警、企业公开信息、财务资料与贷后检查要求",
          "action": "归并同一客户的风险线索，关联历史经营与授信资料，整理变化依据、影响范围和核查事项，按任务计划交付责任岗位。",
          "output": "客户风险摘要、预警分析与贷后核查清单",
          "value": "把分散信号变成可追踪的风险核查工作。"
        },
        {
          "title": "合规审阅与制度执行",
          "problem": "制度版本持续更新，业务材料逐份核对，适用条款与问题位置需要反复查找。",
          "input": "现行制度、监管文件、合同与业务材料、行内审阅规则",
          "action": "检索适用条款，对照材料和业务要求，定位差异、缺项与对应原文，整理复核重点和整改事项。",
          "output": "条款对照、合规审阅底稿与整改事项",
          "value": "让合规要求进入日常作业，问题与依据一起交接。"
        },
        {
          "title": "网点经营与客户分析",
          "problem": "报表只能看到存贷款变化，客户需求、客群流失与产品机会还要另行拼接。",
          "input": "存贷款、客户、产品、渠道报表与授权服务记录",
          "action": "按网点、客群和产品拆解经营变化，关联历史服务背景，定位重点客户和待跟进事项。",
          "output": "网点经营简报、客户服务准备材料、客户经理跟进表",
          "value": "让经营结论落实到具体客户与服务行动。"
        },
        {
          "title": "一线制度支持",
          "problem": "产品、流程和制度持续更新，一线需要快速找到适用依据。",
          "input": "授权制度、产品手册与操作规范",
          "action": "围绕具体问题检索条款，给出出处和原文，整理业务沟通所需材料。",
          "output": "带依据的业务答复、条款对照",
          "value": "让一线按同一套依据开展服务。"
        },
        {
          "title": "经营会议与跟进",
          "problem": "会议结论与业务附件脱节，后续推进需要再次整理。",
          "input": "会议记录、经营材料与工作附件",
          "action": "整理决议、责任分工与跟进事项，在项目中衔接审阅和后续工作。",
          "output": "会议纪要、行动清单与项目材料",
          "value": "让会议形成可以接续的工作。"
        }
      ],
      "story": {
        "lines": [
          "信贷审查更深入",
          "风险与客户经营更主动"
        ],
        "priorities": [
          {
            "title": "尽调精力耗在录入与核对",
            "body": "客户经理要跨企业信息、财报和流水重建业务全貌，重复整理挤占了深入调查与客户沟通的时间。"
          },
          {
            "title": "风险信号分散，核查跟进脱节",
            "body": "同一客户的财务异动、舆情与业务预警分散出现，风险人员需要归并证据、判断重点并追踪处置。"
          },
          {
            "title": "经营数据尚未变成客户行动",
            "body": "网点看得到指标波动，却还要关联客群、产品与服务记录，才能明确跟进对象和沟通重点。"
          }
        ],
        "exhibit": {
          "title": "从授信尽调到贷后核查",
          "request": "归集企业资料，整理信贷审查要点，并持续跟踪后续风险线索。",
          "sources": [
            "企业与财务资料",
            "行内制度与审查要求",
            "授信与风险预警"
          ],
          "columns": [
            "核对对象",
            "处理内容",
            "交付去向"
          ],
          "rows": [
            [
              "贷前尽调",
              "企业、财务与合同交叉核验",
              "尽调底稿与审查重点"
            ],
            [
              "授信审查",
              "材料差异与制度条款对照",
              "核查问题与原文依据"
            ],
            [
              "贷后监测",
              "归并风险信号并关联客户背景",
              "风险摘要与跟进清单"
            ]
          ],
          "deliverables": [
            "尽调审查底稿 · DOCX",
            "风险核查清单 · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "连接授权资料",
            "body": "归集申请文件、行内制度与经营报表，系统接入和数据范围按项目配置。"
          },
          {
            "title": "配置行内作业标准",
            "body": "将材料清单、字段规则和报告格式沉淀为技能；知识答复提供可回看的条款出处。"
          },
          {
            "title": "衔接有权岗位",
            "body": "初核问题交给客户经理与审查人员，授信审批和对客结论由有权人员作出。"
          }
        ]
      }
    },
    "en": {
      "slug": "banking",
      "icon": "book",
      "name": "Banking",
      "tag": "Banking",
      "title": "Deeper credit reviews. Proactive risk and client management.",
      "description": "Connect due diligence, compliance review, post-loan monitoring and client management. Digital employees bring business records, policies and operating data into source-backed analysis and follow-up.",
      "scope": "Built from general platform capabilities. System access, data authorization and business rules are scoped per project. Authorized personnel retain credit and client-facing decisions.",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "Credit due diligence and review",
          "problem": "Scattered company records, financial statements and transactions leave relationship managers repeating data entry and cross-file checks.",
          "input": "Application files, financial statements, contracts and internal checklists",
          "action": "Collect operating, financial and contract records, check key fields against internal requirements, analyze changes and discrepancies, and draft due diligence sections and review priorities.",
          "output": "Due diligence draft, financial review workbook and credit review priorities",
          "value": "Connect preparation to credit judgment, with evidence reviewers can inspect."
        },
        {
          "title": "Post-loan risk monitoring",
          "problem": "News, financial changes and business alerts arrive through separate channels. Repeated signals make review priorities hard to identify.",
          "input": "Connected risk alerts, public company information, financial records and post-loan check requirements",
          "action": "Group risk signals by client, connect operating and credit history, summarize evidence and impact, and deliver scheduled checks to the responsible teams.",
          "output": "Client risk brief, alert analysis and post-loan checklist",
          "value": "Turn scattered signals into risk reviews teams can track."
        },
        {
          "title": "Compliance review and policy execution",
          "problem": "Changing policies and repeated file reviews make applicable provisions and issue locations difficult to track.",
          "input": "Current policies, regulatory documents, contracts, business files and internal review rules",
          "action": "Retrieve applicable provisions, compare business materials with requirements, locate discrepancies and missing items, and prepare review and remediation priorities.",
          "output": "Provision comparisons, compliance review workbook and remediation actions",
          "value": "Carry compliance requirements, findings and evidence into everyday work."
        },
        {
          "title": "Branch and client analysis",
          "problem": "Deposit and lending reports show changes, but client needs, attrition and product opportunities still need separate investigation.",
          "input": "Branch, client, product and channel reports, plus authorized service history",
          "action": "Analyze changes by branch, segment and product, connect service history, and identify priority clients and follow-up work.",
          "output": "Branch brief, client service preparation and relationship-manager follow-up list",
          "value": "Turn business findings into specific client service actions."
        },
        {
          "title": "Frontline policy support",
          "problem": "Changing products and procedures make applicable guidance hard to find.",
          "input": "Authorized policies, product manuals and operating standards",
          "action": "Retrieve relevant provisions and prepare source-backed service materials.",
          "output": "Referenced answers and provision comparisons",
          "value": "Give frontline staff a shared basis for work."
        },
        {
          "title": "Meetings and follow-ups",
          "problem": "Decisions and attachments become disconnected after meetings.",
          "input": "Meeting records, reports and attachments",
          "action": "Organize decisions, responsibilities and follow-ups in the project.",
          "output": "Minutes, action list and project materials",
          "value": "Keep decisions connected to ongoing work."
        }
      ],
      "story": {
        "lines": [
          "Deeper credit reviews",
          "Proactive risk and client management"
        ],
        "priorities": [
          {
            "title": "Due diligence time goes into file preparation",
            "body": "Relationship managers reconstruct the business from company records, financial statements and transactions, leaving less time for investigation and client conversations."
          },
          {
            "title": "Risk signals arrive separately",
            "body": "Teams need to connect financial changes, news and business alerts with the same client, prioritize evidence and follow the next action."
          },
          {
            "title": "Operating data needs a client action",
            "body": "Branch managers see changing metrics, then need segment, product and service context to identify whom to contact and what to discuss."
          }
        ],
        "exhibit": {
          "title": "From due diligence to post-loan review",
          "request": "Collect company records, prepare credit review priorities and track subsequent risk signals.",
          "sources": [
            "Company and financial records",
            "Policies and review requirements",
            "Credit history and risk alerts"
          ],
          "columns": [
            "Review",
            "Work",
            "Deliverable"
          ],
          "rows": [
            [
              "Due diligence",
              "Cross-check company, financial and contract records",
              "Review workbook and priorities"
            ],
            [
              "Credit review",
              "Compare discrepancies with policy provisions",
              "Findings and source evidence"
            ],
            [
              "Post-loan monitoring",
              "Group signals and connect client history",
              "Risk brief and follow-up list"
            ]
          ],
          "deliverables": [
            "Credit review workbook · DOCX",
            "Risk review checklist · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "Connect authorized materials",
            "body": "Collect application files, policies and reports. Scope integrations and data access for the project."
          },
          {
            "title": "Configure internal standards",
            "body": "Package checklists, field rules and report formats as skills, with policy references available for review."
          },
          {
            "title": "Involve authorized staff",
            "body": "Relationship managers and reviewers handle findings. Authorized personnel retain credit approval and client-facing decisions."
          }
        ]
      }
    }
  },
  "navigation": {
    "zh": {
      "name": "银行",
      "description": "信贷尽调、风险合规、客户经营",
      "icon": "bank"
    },
    "en": {
      "name": "Banking",
      "description": "Credit due diligence, risk and compliance, client management",
      "icon": "bank"
    }
  }
} satisfies SolutionModule;
