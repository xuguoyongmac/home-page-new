import type { SolutionModule } from '../types';

export default {
  "slug": "banking",
  "order": 2,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "banking",
      "icon": "book",
      "name": "银行解决方案",
      "tag": "银行解决方案",
      "title": "让信贷准备聚焦关键问题，让网点经营看清重点",
      "description": "围绕信贷材料、制度知识和网点经营，数字员工归集资料、核对差异、准备业务材料，让客户经理与管理者聚焦判断和服务。",
      "scope": "基于平台通用能力组合建设；银行系统接入、数据授权及业务规则按项目确定，授信审批与对客结论由有权人员作出。",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "信贷材料初核",
          "problem": "申请材料多、版本多，缺项和跨文件差异需要反复核对。",
          "input": "申请材料、财务报表、合同与行内检查清单",
          "action": "按检查清单核对完整性，抽取关键字段并交叉比对，定位需补充和需调查的事项。",
          "output": "材料核对底稿、补件清单、调查提纲",
          "value": "把审查准备做细，把判断留给有权岗位。"
        },
        {
          "title": "网点经营分析",
          "problem": "报表分散在不同口径里，网点难以形成清晰的经营重点。",
          "input": "存贷款、客户、产品和渠道经营报表",
          "action": "核对口径，梳理趋势与结构，将异常线索和服务重点整理到经营材料中。",
          "output": "网点经营简报、重点事项跟进表",
          "value": "从汇总数字走向经营跟进。"
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
          "让信贷准备聚焦关键问题",
          "让网点经营看清重点"
        ],
        "priorities": [
          {
            "title": "材料核对耗费专业精力",
            "body": "信贷调查涉及财务、经营、合同等多类材料，需要逐项核对并保留问题依据。"
          },
          {
            "title": "一线知识分散更新",
            "body": "制度和操作规范分布在不同资料中，客户经理需要找到适用版本与条款。"
          },
          {
            "title": "经营分析需要带出重点",
            "body": "管理者关注网点和客群变化，也关注哪些事项需要立即跟进。"
          }
        ],
        "exhibit": {
          "title": "信贷材料核对底稿",
          "request": "按行内清单核对申请资料，定位缺项和跨文件差异。",
          "sources": [
            "申请材料",
            "财务与合同",
            "行内检查清单"
          ],
          "columns": [
            "核对对象",
            "处理内容",
            "交付去向"
          ],
          "rows": [
            [
              "材料完整性",
              "归集文件并标记缺项",
              "补件清单"
            ],
            [
              "跨材料字段",
              "对照主体、期间与金额",
              "差异定位"
            ],
            [
              "调查关注点",
              "关联问题与原文位置",
              "调查提纲"
            ]
          ],
          "deliverables": [
            "核对底稿 · XLSX",
            "调查提纲 · DOCX"
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
      "title": "Prepare stronger credit reviews. Focus branch business priorities",
      "description": "Digital employees organize credit materials, policy knowledge and branch reports so relationship managers can focus on judgment and client service.",
      "scope": "Built from general platform capabilities. System access, data authorization and business rules are scoped per project. Authorized personnel retain credit and client-facing decisions.",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "Credit material pre-review",
          "problem": "Missing documents and inconsistent versions require repeated checks.",
          "input": "Application files, financial statements, contracts and internal checklists",
          "action": "Check completeness, extract key fields, compare documents and locate items needing clarification.",
          "output": "Review workbook, missing-document list and investigation outline",
          "value": "Prepare the evidence for authorized reviewers."
        },
        {
          "title": "Branch business analysis",
          "problem": "Separate reporting definitions obscure branch priorities.",
          "input": "Deposit, lending, client, product and channel reports",
          "action": "Align definitions, organize trends and identify follow-up priorities.",
          "output": "Branch management brief and follow-up workbook",
          "value": "Move from reporting to business follow-up."
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
          "Prepare stronger credit reviews",
          "Focus branch business priorities"
        ],
        "priorities": [
          {
            "title": "Prepare a sound investigation",
            "body": "Credit work spans financial, operating and contract materials, with findings that need evidence."
          },
          {
            "title": "Find applicable guidance",
            "body": "Relationship managers need current, relevant provisions across scattered policies and manuals."
          },
          {
            "title": "Expose business priorities",
            "body": "Managers need branch and client trends to lead to specific follow-ups."
          }
        ],
        "exhibit": {
          "title": "Credit material review workbook",
          "request": "Check application files against the internal checklist and locate discrepancies.",
          "sources": [
            "Application files",
            "Financials and contracts",
            "Internal checklist"
          ],
          "columns": [
            "Review",
            "Work",
            "Deliverable"
          ],
          "rows": [
            [
              "Completeness",
              "Locate missing documents",
              "Document request list"
            ],
            [
              "Cross-file fields",
              "Compare entity, period and amounts",
              "Discrepancy findings"
            ],
            [
              "Investigation focus",
              "Link issues to source locations",
              "Investigation outline"
            ]
          ],
          "deliverables": [
            "Review workbook · XLSX",
            "Investigation outline · DOCX"
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
      "description": "信贷材料、网点经营、制度支持",
      "icon": "bank"
    },
    "en": {
      "name": "Banking",
      "description": "Credit materials, branch reporting and policy support",
      "icon": "bank"
    }
  }
} satisfies SolutionModule;
