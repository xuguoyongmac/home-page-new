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
      "title": "让信贷审查有据，让贷后风险及时跟进",
      "description": "数字员工贯通信贷尽调、合规审阅、贷后核查与客户分析，汇总企业和财务资料、归并预警线索，把审查重点与服务行动交到一线。",
      "scope": "在授权资料与行内作业标准下开展归集、比对和初核，风险研判、授信审批与对客结论由行内有权人员确认。",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "信贷尽调与审查准备",
          "input": "申请材料、财务报表、合同、行内审查清单",
          "action": "归集经营、财务与合同资料，按行内清单核对字段和指标差异，形成底稿与审查重点。",
          "output": "尽调报告初稿、财务核查底稿、授信审查要点",
          "value": "少做重复核对，聚焦风险研判。"
        },
        {
          "title": "贷后风险监测与核查",
          "input": "已接入的风险预警、企业公开信息、财务资料、贷后检查要求",
          "action": "归并客户风险线索，关联经营与授信资料，整理变化依据、影响范围和待核查事项。",
          "output": "客户风险摘要、预警分析报告、贷后核查清单",
          "value": "预警归并到客户，核查明确到岗位。"
        },
        {
          "title": "合规审阅与制度执行",
          "input": "现行监管及行内制度、业务合同材料、内部审阅规则",
          "action": "对照适用制度定位材料差异与缺项，保留问题位置和条款原文，整理复核与整改事项。",
          "output": "条款对照材料、合规审阅底稿、整改事项清单",
          "value": "问题带上条款，复核有据可查。"
        },
        {
          "title": "网点经营与客户分析",
          "input": "存贷款、客户、产品及渠道报表，授权客户服务记录",
          "action": "按网点、客群和产品分析经营波动，关联服务记录，明确重点客户与跟进事项。",
          "output": "网点经营简报、客户服务准备材料、客户经理跟进表",
          "value": "从经营变化找到客户跟进重点。"
        },
        {
          "title": "一线制度支持",
          "input": "授权制度、产品手册、业务操作规范",
          "action": "检索业务问题适用的制度条款，保留出处和原文，整理产品、流程与办理要求。",
          "output": "带条款出处的业务答复、条款对照材料",
          "value": "一线答复有出处，业务执行有依据。"
        },
        {
          "title": "经营会议与跟进",
          "input": "会议记录、经营材料、业务附件",
          "action": "梳理会议决议、责任分工与待办，关联项目材料，衔接后续审阅、核查与跟进。",
          "output": "结构化会议纪要、任务行动清单、配套项目材料",
          "value": "会议决议落实到责任人与行动。"
        }
      ],
      "story": {
        "lines": [
          "让信贷审查有据",
          "让贷后风险及时跟进"
        ],
        "priorities": [],
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
            "title": "信贷审查聚焦关键判断",
            "body": "TeGo 通过知识库检索授权制度并保留原文引用，调用审查技能核对财务口径与合同条款，形成带依据的审查底稿。人员复核问题与结论，授信审批由有权人员确认。"
          },
          {
            "title": "贷后风险跟进更有重点",
            "body": "TeGo 通过授权系统连接接入预警与业务资料，以定时任务归并客户风险线索。多个数字员工协同补充核查依据、整理风险摘要与核查清单，再交接对应业务岗位跟进。"
          },
          {
            "title": "经营重点直达客户一线",
            "body": "TeGo 连接授权经营数据，在工作会话中交办分析，由多个数字员工协同关联网点、客群、产品与服务记录。成果进入客户经理项目会话，沟通准备材料与跟进事项持续接续。"
          }
        ]
      }
    },
    "en": {
      "slug": "banking",
      "icon": "book",
      "name": "Banking",
      "tag": "Banking",
      "title": "Evidence-backed credit review. Timely post-loan follow-up.",
      "description": "Digital employees connect credit due diligence, compliance review, post-loan checks and client analysis. They bring together company and financial records, group risk signals, and put review priorities and service actions into frontline teams’ hands.",
      "scope": "Prepare, compare and check authorized records against internal standards. Authorized bank staff retain risk judgment, credit approval and client-facing decisions.",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "Credit due diligence and review",
          "input": "Application files, financial statements, contracts and internal review checklists",
          "action": "Collect operating, financial and contract records. Check fields and indicator changes against internal requirements to prepare workbooks and review priorities.",
          "output": "Due diligence draft, financial review workbook and credit review priorities",
          "value": "Less repeated checking. More focus on credit judgment."
        },
        {
          "title": "Post-loan risk monitoring",
          "input": "Connected risk alerts, public company information, financial records and post-loan check requirements",
          "action": "Group client risk signals, connect operating and credit records, and organize evidence, potential impact and follow-up checks.",
          "output": "Client risk brief, alert analysis and post-loan checklist",
          "value": "Risk signals grouped by client. Checks assigned to the right team."
        },
        {
          "title": "Compliance review and policy execution",
          "input": "Current regulatory and internal policies, contracts, business files and review rules",
          "action": "Check files against applicable policies, locate discrepancies and missing items, and retain source provisions for review and remediation.",
          "output": "Provision comparisons, compliance review workbook and remediation list",
          "value": "Findings paired with policy text for traceable review."
        },
        {
          "title": "Branch and client analysis",
          "input": "Deposit, lending, client, product and channel reports, plus authorized service records",
          "action": "Analyze changes by branch, segment and product. Connect service history to identify priority clients and follow-up work.",
          "output": "Branch brief, client service materials and relationship-manager follow-up list",
          "value": "Turn business changes into client follow-up priorities."
        },
        {
          "title": "Frontline policy support",
          "input": "Authorized policies, product manuals and operating standards",
          "action": "Retrieve applicable provisions with source references and text for questions about products, procedures and processing requirements.",
          "output": "Referenced business answers and provision comparisons",
          "value": "Policy-backed answers for consistent frontline work."
        },
        {
          "title": "Business meetings and follow-ups",
          "input": "Meeting records, operating reports and business attachments",
          "action": "Organize decisions, owners and actions. Connect project materials to subsequent reviews, checks and follow-ups.",
          "output": "Structured minutes, action list and supporting project materials",
          "value": "Turn meeting decisions into clear owners and actions."
        }
      ],
      "story": {
        "lines": [
          "Evidence-backed credit review",
          "Timely post-loan follow-up"
        ],
        "priorities": [],
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
            "title": "Focus credit review on the judgments that matter",
            "body": "TeGo retrieves authorized policies from the knowledge base with original-text citations. Review skills compare financial definitions and contract terms to prepare evidence-backed workbooks. Staff review findings and conclusions; authorized personnel retain credit approval."
          },
          {
            "title": "Give post-loan follow-up a clearer focus",
            "body": "TeGo uses authorized system connections to access alerts and business records, with scheduled tasks grouping client risk signals. Digital employees collaborate to gather evidence and prepare risk briefs and checklists, then hand follow-up work to the responsible bank teams."
          },
          {
            "title": "Bring business priorities to the client frontline",
            "body": "TeGo connects authorized operating data and accepts analysis assignments in work conversations. Digital employees collaborate across branch, segment, product and service records. Results join the relationship manager’s project conversation, keeping client briefing materials and follow-up actions connected."
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
