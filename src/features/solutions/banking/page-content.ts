import type { IndustryEmployee, IndustrySolutionPresentation } from '../shared/types';

export type BankingEmployee = IndustryEmployee;

export const bankingPresentation: IndustrySolutionPresentation = {
  "zh": {
    "home": {
      "title": "让银行工作有据可依、成果可核可溯",
      "pain": "制度资料跨版本分散，材料核对和系统搬运反复发生；任务跨岗位流转后，背景、责任与成果依据难以接续。",
      "value": "TeGo 数字员工协作平台连接本行知识、岗位技能与业务工具，承接资料核对和协作交付，让银行人员专注专业判断与客户服务。",
      "scenarios": [
        "制度查询",
        "授信准备",
        "贷后检查",
        "服务准备",
        "投诉辅助",
        "经营分析"
      ],
      "benefits": [
        {
          "title": "依据清楚，口径有据",
          "description": "有效资料按权限检索，答复保留原文位置与版本，让业务人员核实适用依据。"
        },
        {
          "title": "差异前置，交接接续",
          "description": "材料缺项、核对差异和待判断事项进入共同工作背景，责任人带着前情继续办理。"
        },
        {
          "title": "方法留存，成果可查",
          "description": "本行方法进入员工模板与版本化技能，依据、修改和成果关联，支持复核及审计取证。"
        }
      ]
    },
    "hero": {
      "lines": [
        "让银行工作有据可依",
        "让岗位成果可核可溯"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp"
    },
    "solution": {
      "context": {
        "title": "跨条线的五类工作卡点",
        "body": "制度依据分散、材料逐项核对、系统操作割裂、岗位交接等待、成果缺少追溯，共同拖住银行工作的衔接与交付。"
      },
      "mappingsTitle": "银行业务问题的对应解法",
      "mappings": [
        {
          "problemTitle": "资料依据分散多处",
          "problem": "制度、产品口径与操作指引跨系统、多版本存放，查找反复，办理依据难以统一。",
          "capabilities": [
            "企业知识库",
            "混合检索",
            "来源引用"
          ],
          "response": "以当前人员身份检索获准知识，答复保留原文位置、资料版本与适用条件，口径冲突形成待确认问题。",
          "deliverables": [
            "带出处答复",
            "制度版本差异清单"
          ],
          "value": "让办理口径有共同依据，答复能够回查原文。",
          "icon": "book"
        },
        {
          "problemTitle": "材料核对繁重易漏",
          "problem": "授信与运营材料中的主体、期间、金额和关联关系需逐项比对，缺项与矛盾容易遗漏。",
          "capabilities": [
            "岗位技能",
            "任务执行",
            "项目版本"
          ],
          "response": "岗位技能组织字段抽取与交叉核对，差异、缺项保留原文出处；核对底稿按项目版本保存，供人员批注、修订与复核。",
          "deliverables": [
            "交叉核对表",
            "待补疑点清单"
          ],
          "value": "把差异前置到复核环节，减少漏项与重复返工。",
          "icon": "clipboard-check"
        },
        {
          "problemTitle": "系统操作相互割裂",
          "problem": "同一工作跨越客户、信贷与运营系统，反复搬运资料和录入，状态与口径难以衔接。",
          "capabilities": [
            "业务插件与 MCP",
            "平台 OpenAPI",
            "浏览器与设备节点"
          ],
          "response": "通过授权文件、业务插件或 MCP 读取资料，按项目连接接口与设备；平台 OpenAPI 供外部系统调用数字员工。",
          "deliverables": [
            "受控业务查询结果",
            "跨系统资料清单"
          ],
          "value": "减少跨系统查找与搬运，业务资料按授权取得。",
          "icon": "plug"
        },
        {
          "problemTitle": "人工交接反复等待",
          "problem": "补料、复核与接手依靠线下追问，人员反复解释背景，未决问题和责任难以接续。",
          "capabilities": [
            "待处理事项",
            "工作会话",
            "工作记忆"
          ],
          "response": "在需要判断时发起提问、确认或接手事项，把问题、依据与上下文送达责任人，回应后接回原任务继续办理。",
          "deliverables": [
            "责任事项清单",
            "任务续办记录"
          ],
          "value": "让问题有人接、背景接得住，减少重复交代。",
          "icon": "user-check"
        },
        {
          "problemTitle": "成果过程缺少追溯",
          "problem": "最终文件与输入依据、规则版本和人工修改缺少关联，复核与审计难以还原处理过程。",
          "capabilities": [
            "审计中心",
            "内容溯源",
            "项目版本"
          ],
          "response": "任务执行台账关联资料来源、所用技能版本、工具记录、人员修改与成果版本，支撑复核和审计取证。",
          "deliverables": [
            "审计证据包",
            "成果版本历史"
          ],
          "value": "让成果查得到依据，责任与修改过程有据可追。",
          "icon": "file-search"
        }
      ],
      "governance": {
        "title": "按银行边界部署，按岗位责任运行",
        "items": [
          {
            "title": "私有部署与数据路径",
            "body": "支持私有化部署与获准本地模型，按银行要求核定模型、工具、消息及导出路径，资料使用遵循本行数据管理规则。"
          },
          {
            "title": "人员复核与正式办理",
            "body": "提问、确认和接手服务于任务续办，专业判断、授信审批与正式业务动作由银行岗位按原有流程负责。"
          },
          {
            "title": "身份授权与运行审计",
            "body": "知识检索遵循当前人员身份，资料访问和插件调用遵循人员权限；平台记录工具调用、人员确认与成果版本，支持按任务核查责任与变化。"
          }
        ]
      },
      "values": {
        "title": "把岗位支撑转化为银行工作价值",
        "items": [
          {
            "title": "把专业时间还给银行岗位",
            "body": "减少找依据、逐字段核对与重复交接，让客户经理、信贷和运营人员把精力留给事实核实、客户沟通与专业判断。"
          },
          {
            "title": "让复核有据，让责任可查",
            "body": "统一核对方法，前置呈现缺项与差异；把依据、修改、责任事项和成果版本联系起来，支撑复核与审计取证。"
          },
          {
            "title": "把本行方法沉淀为岗位资产",
            "body": "员工模板、版本化技能与知识库共同承载本行经验，支持同岗复用和条线扩展，资料、规则与运营责任持续维护。"
          }
        ]
      }
    }
  },
  "en": {
    "home": {
      "title": "Evidence-backed banking work. Reviewable, traceable outcomes.",
      "pain": "Policies and documents are scattered across versions, while checking and manual transfer repeat. Handover between roles disconnects the background, ownership and evidence behind an outcome.",
      "value": "The platform connects the bank’s knowledge, role skills and business tools. Digital employees handle document checks and collaborative delivery, giving bank staff more room for professional judgment and customer service.",
      "scenarios": [
        "Policy queries",
        "Credit preparation",
        "Post-loan checks",
        "Service preparation",
        "Complaint support",
        "Business analysis"
      ],
      "benefits": [
        {
          "title": "Clear references and consistent grounds",
          "description": "Retrieve effective documents under authorization, retaining original locations and versions so staff can verify applicability."
        },
        {
          "title": "Early differences and connected handovers",
          "description": "Keep document gaps, checking differences and questions for judgment in a shared work context, so owners continue with the background intact."
        },
        {
          "title": "Reusable methods and traceable outcomes",
          "description": "Retain bank methods in templates and versioned skills, linking evidence, edits and outputs for professional review and audit."
        }
      ]
    },
    "hero": {
      "lines": [
        "Evidence for every task",
        "Traceable banking outcomes"
      ],
      "background": "/images/industries/banking-architecture_V1.1.webp"
    },
    "solution": {
      "context": {
        "title": "Five recurring gaps across banking work",
        "body": "Scattered references, manual document checks, disconnected systems, handover delays and missing traceability interrupt work across teams and business lines."
      },
      "mappingsTitle": "Banking challenges and their solutions",
      "mappings": [
        {
          "problemTitle": "Scattered business references",
          "problem": "Policies, product terms and operating guidance sit across systems and versions. Staff repeat searches and struggle to establish a shared basis for handling business.",
          "capabilities": [
            "Enterprise knowledge base",
            "Hybrid retrieval",
            "Source citations"
          ],
          "response": "Retrieve authorized knowledge under the current user’s identity. Responses retain original locations, document versions and applicability conditions, while conflicting interpretations become questions for confirmation.",
          "deliverables": [
            "Source-linked responses",
            "Policy version difference list"
          ],
          "value": "Give staff a shared basis for handling business and a direct route back to the original text.",
          "icon": "book"
        },
        {
          "problemTitle": "Heavy, error-prone document checking",
          "problem": "Names, periods, amounts and relationships across credit and operations documents require individual checks. Missing items and contradictions are easy to overlook.",
          "capabilities": [
            "Role skills",
            "Task execution",
            "Project versions"
          ],
          "response": "Role skills organize field extraction and cross-document checks, retaining source locations for differences and omissions. Project versions preserve checking papers for staff comments, revision and review.",
          "deliverables": [
            "Cross-document checking worksheet",
            "Missing-item and issue list"
          ],
          "value": "Surface differences before review and reduce overlooked items and repeated rework.",
          "icon": "clipboard-check"
        },
        {
          "problemTitle": "Disconnected system operations",
          "problem": "One assignment spans customer, credit and operations systems. Repeated data transfer and entry make status and definitions difficult to keep aligned.",
          "capabilities": [
            "Business plugins and MCP",
            "Platform OpenAPI",
            "Browser and device nodes"
          ],
          "response": "Read information through authorized files, business plugins or MCP, and connect interfaces and devices within the project scope. Platform OpenAPI lets external systems invoke digital employees.",
          "deliverables": [
            "Authorized business query results",
            "Cross-system document inventory"
          ],
          "value": "Reduce cross-system searching and transfer, with business information obtained under authorization.",
          "icon": "plug"
        },
        {
          "problemTitle": "Repeated waits at human handovers",
          "problem": "Document requests, reviews and handovers depend on offline follow-up. Staff repeat the background while unresolved questions and ownership lose continuity.",
          "capabilities": [
            "Pending matters",
            "Work conversations",
            "Work memory"
          ],
          "response": "Raise a question, confirmation or handover when judgment is needed. Send the issue, evidence and context to the responsible person, then return the response to the original task for continued work.",
          "deliverables": [
            "Assigned matter list",
            "Task continuation records"
          ],
          "value": "Keep a responsible owner and the full background with each issue.",
          "icon": "user-check"
        },
        {
          "problemTitle": "Untraceable work and final outputs",
          "problem": "Final files are disconnected from input evidence, rule versions and staff edits, making it difficult to reconstruct the work for review or audit.",
          "capabilities": [
            "Audit center",
            "Content provenance",
            "Project versions"
          ],
          "response": "Execution records connect document sources, the skill versions used, tool records, staff edits and output versions, supporting professional review and audit evidence retrieval.",
          "deliverables": [
            "Audit evidence package",
            "Output version history"
          ],
          "value": "Trace an outcome to its evidence, ownership and revision history.",
          "icon": "file-search"
        }
      ],
      "governance": {
        "title": "Deploy within the bank’s boundaries. Keep responsibility with its roles.",
        "items": [
          {
            "title": "Private deployment and data paths",
            "body": "Support private deployment and approved local models. Establish model, tool, messaging and export paths under the bank’s requirements, with information use governed by its data policies."
          },
          {
            "title": "Staff review and formal business handling",
            "body": "Questions, confirmations and handovers support task continuation. Bank roles retain professional judgments, credit approvals and formal business actions under existing procedures."
          },
          {
            "title": "Identity, authorization and operational audit",
            "body": "Knowledge retrieval follows the current user’s identity. Document access and plugin calls follow that person’s permissions. Tool calls, staff confirmations and output versions support task-level reviews of ownership and changes."
          }
        ]
      },
      "values": {
        "title": "Turn role support into value for banking work",
        "items": [
          {
            "title": "Reserve professional attention for bank staff",
            "body": "Reduce repeated reference searches, field checks and handovers so relationship managers, credit staff and operations teams can focus on verifying facts, serving customers and applying judgment."
          },
          {
            "title": "Evidence for review. Accountability for the work.",
            "body": "Apply shared checking methods and surface gaps early. Connect references, edits, assigned matters and output versions to support professional review and audit evidence retrieval."
          },
          {
            "title": "Keep the bank’s methods as reusable role assets",
            "body": "Employee templates, versioned skills and knowledge bases preserve the bank’s experience for reuse across roles and business lines, with continued ownership of documents, rules and operations."
          }
        ]
      }
    }
  }
};
