import type { SolutionModule } from '../types';

export default {
  "slug": "insurance",
  "order": 1,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "insurance",
      "icon": "shield",
      "name": "保险解决方案",
      "tag": "保险业务",
      "title": "让条款与材料服务一线，让客户跟进持续推进",
      "description": "从产品咨询到投保理赔材料、保全续期准备，让数字员工整理条款依据、核对业务资料、形成客户服务所需的工作成果。",
      "tasks": [
        {
          "title": "产品条款与销售支持",
          "problem": "产品条款复杂，沟通准备容易反复查阅同一批资料。",
          "input": "授权产品条款、培训资料和沟通目标",
          "action": "检索保障责任、除外责任与服务规范，组织条款对照及沟通材料。",
          "output": "条款对照表、销售问答与沟通材料",
          "value": "把产品知识转成一线可用的支持。"
        },
        {
          "title": "投保与理赔材料初核",
          "problem": "资料类型多，缺项和信息差异拉长业务往返。",
          "input": "保单、申请附件和业务材料清单",
          "action": "按约定字段归集资料，核对完整性与一致性，定位需补充的文件和问题。",
          "output": "资料核验表、补件清单与问题定位",
          "value": "让服务人员知道下一步补什么、核什么。"
        },
        {
          "title": "保全与续期准备",
          "problem": "客户记录和保单信息分散，跟进前仍需手工整理背景。",
          "input": "授权保单信息、服务记录与续期任务",
          "action": "汇集保单状态、历史沟通与待办，结合条款准备客户联系材料。",
          "output": "客户服务摘要、续期跟进表",
          "value": "让客户服务接得上、跟得住。"
        }
      ],
      "scope": "保险为可配置的方案建设方向，需结合产品知识、业务流程与客户系统实施。核保、理赔、质检结论及对客承诺由有权人员作出。",
      "image": "collaborative-review",
      "story": {
        "lines": [
          "让条款与材料服务一线",
          "让客户跟进持续推进"
        ],
        "priorities": [
          {
            "title": "知识要跟得上产品变化",
            "body": "销售和服务团队需要可引用的条款依据，也需要贴合当前沟通目标的材料。"
          },
          {
            "title": "材料往返影响服务体验",
            "body": "资料缺项和信息不一致会增加客户往返，初核结果需要具体到文件与字段。"
          },
          {
            "title": "持续服务依赖完整背景",
            "body": "保全、续期和客户跟进需要把保单与历史沟通放在一起。"
          }
        ],
        "exhibit": {
          "title": "客户服务工作包",
          "request": "整理保单条款与服务记录，准备本次资料核对和客户跟进。",
          "sources": [
            "产品条款",
            "保单与申请材料",
            "客户服务记录"
          ],
          "columns": [
            "服务环节",
            "工作重点",
            "交付成果"
          ],
          "rows": [
            [
              "产品咨询",
              "保障与除外责任对照",
              "条款依据"
            ],
            [
              "材料初核",
              "文件缺项与字段差异",
              "补件清单"
            ],
            [
              "续期跟进",
              "保单状态与沟通背景",
              "服务准备"
            ]
          ],
          "deliverables": [
            "服务工作包 · DOCX",
            "续期跟进表 · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "接入产品与服务知识",
            "body": "使用授权条款、培训资料与服务规范，保单和客户信息按业务授权归集。"
          },
          {
            "title": "沉淀服务作业方法",
            "body": "将材料清单、字段核对与客户沟通准备封装为技能，按产品和流程维护。"
          },
          {
            "title": "由专业人员完成业务判断",
            "body": "初核与准备结果在项目中复核；核保、理赔、质检结论及对客承诺由有权人员作出。"
          }
        ]
      }
    },
    "en": {
      "slug": "insurance",
      "icon": "shield",
      "name": "Insurance",
      "tag": "Insurance operations",
      "title": "Put policy knowledge to work. Carry client service forward",
      "description": "Prepare product answers, application and claims documents, and renewal follow-ups with referenced terms and organized client context.",
      "tasks": [
        {
          "title": "Product and sales support",
          "problem": "Complex policy terms lead to repeated research before client conversations.",
          "input": "Authorized terms, training materials and communication goals",
          "action": "Find coverage, exclusions and service standards; prepare comparisons and communication materials.",
          "output": "Term comparisons, sales Q&A and service materials",
          "value": "Put product knowledge to work for frontline teams."
        },
        {
          "title": "Application and claims pre-review",
          "problem": "Missing information creates extra rounds of document collection.",
          "input": "Policies, application attachments and document checklists",
          "action": "Organize fields, check completeness and consistency, and identify missing files and questions.",
          "output": "Document review workbook and clarification list",
          "value": "Make the next service action clear."
        },
        {
          "title": "Policy service and renewals",
          "problem": "Fragmented policy and service records leave staff gathering context again.",
          "input": "Authorized policy information, service records and renewal tasks",
          "action": "Bring policy status, past conversations and open work together for the next follow-up.",
          "output": "Client service summary and renewal workbook",
          "value": "Carry service context forward."
        }
      ],
      "scope": "A configurable solution direction requiring knowledge, process and integration implementation. Authorized staff make underwriting, claims and customer-facing decisions.",
      "image": "collaborative-review",
      "story": {
        "lines": [
          "Put policy knowledge to work",
          "Carry client service forward"
        ],
        "priorities": [
          {
            "title": "Keep knowledge current",
            "body": "Sales and service teams need applicable terms and materials suited to the conversation."
          },
          {
            "title": "Reduce document back-and-forth",
            "body": "Pre-review must identify the specific missing file or inconsistent field."
          },
          {
            "title": "Carry client context forward",
            "body": "Policy service and renewals depend on a connected view of policy and conversation history."
          }
        ],
        "exhibit": {
          "title": "Client service work package",
          "request": "Prepare the policy context, document review and next client follow-up.",
          "sources": [
            "Product terms",
            "Policy and application files",
            "Service records"
          ],
          "columns": [
            "Stage",
            "Focus",
            "Deliverable"
          ],
          "rows": [
            [
              "Product enquiry",
              "Coverage and exclusions",
              "Referenced terms"
            ],
            [
              "Document review",
              "Missing files and discrepancies",
              "Clarification list"
            ],
            [
              "Renewal follow-up",
              "Policy status and service context",
              "Service preparation"
            ]
          ],
          "deliverables": [
            "Service package · DOCX",
            "Renewal follow-ups · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "Connect service knowledge",
            "body": "Use authorized terms, training and standards. Scope access to policies and client records."
          },
          {
            "title": "Reuse service methods",
            "body": "Maintain document checklists, field comparisons and communication preparation as skills."
          },
          {
            "title": "Retain professional decisions",
            "body": "Review preparation in the project. Authorized staff make underwriting, claims, quality and client commitment decisions."
          }
        ]
      }
    }
  },
  "navigation": {
    "zh": {
      "name": "保险",
      "description": "条款支持、材料初核、续期服务",
      "icon": "shield"
    },
    "en": {
      "name": "Insurance",
      "description": "Policy knowledge, document review and renewals",
      "icon": "shield"
    }
  }
} satisfies SolutionModule;
