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
      "title": "贯通核保、理赔与保全，让保险运营协同起来",
      "description": "让数字员工围绕保单全生命周期，连接条款、业务规则、申请材料与服务记录，完成风险信息整理、责任核查和变更作业准备，把专业精力留给复杂业务与客户服务。",
      "tasks": [
        {
          "title": "核保风险审阅",
          "problem": "投保事实散在多类资料中，风险要点与承保规则需要逐项对照。",
          "input": "投保申请、告知与证明资料、产品条款及核保规则",
          "action": "按险种提取投保事实，核对资料一致性及适用规则，梳理风险要点、异常信息和需进一步问询的事项。",
          "output": "核保审阅工作表、风险要点与问询事项",
          "value": "让核保人员带着完整背景判断复杂业务。"
        },
        {
          "title": "理赔事实与责任核查",
          "problem": "案情、费用与保单责任分散，多份证据之间需要交叉核对。",
          "input": "保单条款、出险申请、诊疗或事故资料与费用凭证",
          "action": "归集案件事实与时间线，整理费用明细，关联责任及除外条款，定位证据差异和待核查事项。",
          "output": "案件事实时间线、责任对照与理赔复核工作表",
          "value": "让案件事实、条款依据和核查重点对应起来。"
        },
        {
          "title": "保全变更与服务作业",
          "problem": "服务申请、当前保单与处理记录分属不同入口，变更与交接容易脱节。",
          "input": "保全申请、当前保单、办理规则与服务记录",
          "action": "识别办理事项，对比变更前后内容，核对所需业务依据，整理处理状态、客户回应与后续交接。",
          "output": "保全变更对照、办理工作表与服务交接事项",
          "value": "让每一次保单服务从受理接续到办理。"
        },
        {
          "title": "产品支持与持续服务",
          "problem": "条款、保单状态与沟通记录反复收集，客户服务准备难以复用。",
          "input": "授权产品条款、培训资料、保单状态与客户服务记录",
          "action": "检索保障与除外责任，结合沟通目标组织产品对照和客户背景，准备续期与后续服务事项。",
          "output": "产品条款对照、客户沟通材料与续期跟进表",
          "value": "把产品知识和服务经验持续用在客户身上。"
        }
      ],
      "scope": "围绕险种、业务规则与客户系统配置知识、技能和授权连接，明确核保、理赔及保全作业范围。核保结论、理赔决定与保全确认由有权人员作出。",
      "image": "collaborative-review",
      "story": {
        "lines": [
          "贯通核保、理赔与保全",
          "让保险运营协同起来"
        ],
        "priorities": [
          {
            "title": "核保要看清风险事实",
            "body": "申请、告知与证明资料需要关联起来，风险信息要能对应承保规则，让复杂案件的判断有完整背景。"
          },
          {
            "title": "理赔要对齐事实与责任",
            "body": "出险时间、事故或诊疗过程、费用和保单条款需要交叉核对，不能只做材料齐全与否的检查。"
          },
          {
            "title": "保全要接续办理过程",
            "body": "客户提出变更后，申请内容、当前保单、业务依据和处理进度需要沿着同一事项继续流转。"
          }
        ],
        "exhibit": {
          "title": "保险运营协同工作台",
          "request": "围绕一项保险业务，归集事实与依据，形成专业审阅和后续办理所需的成果。",
          "sources": [
            "保单条款与业务规则",
            "投保、出险与保全申请",
            "证明资料与服务记录"
          ],
          "columns": [
            "业务环节",
            "处理重点",
            "交付成果"
          ],
          "rows": [
            [
              "核保审阅",
              "投保事实与风险信息",
              "风险要点与问询"
            ],
            [
              "理赔核查",
              "案件事实与条款责任",
              "责任对照与复核"
            ],
            [
              "保全办理",
              "变更内容与业务依据",
              "变更对照与交接"
            ]
          ],
          "deliverables": [
            "核保与理赔工作表 · XLSX",
            "保全办理与服务工作包"
          ]
        },
        "foundation": [
          {
            "title": "连接保单全生命周期资料",
            "body": "按授权归集产品条款、业务规则、申请与服务记录，让事实、证据和办理事项相互对应。"
          },
          {
            "title": "沉淀不同环节的作业方法",
            "body": "把核保风险整理、理赔责任对照和保全变更核对分别封装为技能，按险种与业务规则维护。"
          },
          {
            "title": "专业判断衔接业务办理",
            "body": "在项目中审阅核保、理赔和保全成果，通过已连接的系统跟进办理；有权人员确认专业结论与业务操作。"
          }
        ]
      }
    },
    "en": {
      "slug": "insurance",
      "icon": "shield",
      "name": "Insurance",
      "tag": "Insurance operations",
      "title": "Connect underwriting, claims and policy servicing",
      "description": "Connect terms, business rules, applications and service history across the policy lifecycle. Digital employees organize risk information, review facts and coverage, and prepare servicing work so specialists can focus on complex cases and clients.",
      "tasks": [
        {
          "title": "Underwriting risk review",
          "problem": "Application facts are spread across documents and must be compared with underwriting rules.",
          "input": "Applications, declarations, supporting documents, policy terms and underwriting rules",
          "action": "Extract relevant facts, check consistency and applicable rules, and organize risk factors, anomalies and follow-up questions.",
          "output": "Underwriting review workbook, risk factors and enquiry items",
          "value": "Give underwriters the context needed for complex decisions."
        },
        {
          "title": "Claims facts and coverage review",
          "problem": "Case facts, expenses and policy coverage need to be checked across multiple sources.",
          "input": "Policy terms, claim applications, medical or incident records and expense evidence",
          "action": "Organize the case timeline and expenses, connect coverage and exclusions, and locate conflicting evidence and open questions.",
          "output": "Case timeline, coverage comparison and claims review workbook",
          "value": "Connect the facts, applicable terms and review priorities."
        },
        {
          "title": "Policy changes and servicing",
          "problem": "Requests, current policy details and processing records sit in separate channels.",
          "input": "Servicing requests, current policies, processing rules and service records",
          "action": "Identify the requested action, compare before and after, check supporting requirements, and organize status, client responses and handover.",
          "output": "Policy change comparison, servicing workbook and handover actions",
          "value": "Carry each policy service request through processing."
        },
        {
          "title": "Product support and ongoing service",
          "problem": "Teams repeatedly collect policy terms, status and conversation history.",
          "input": "Authorized product terms, training materials, policy status and service records",
          "action": "Find coverage and exclusions, prepare product comparisons and client context, and organize renewals and ongoing service actions.",
          "output": "Product comparison, communication materials and renewal follow-ups",
          "value": "Reuse product knowledge throughout the client relationship."
        }
      ],
      "scope": "Configure knowledge, skills and authorized connections for each product, business process and client system. Agree the underwriting, claims and servicing scope; authorized staff retain underwriting, settlement and policy change decisions.",
      "image": "collaborative-review",
      "story": {
        "lines": [
          "Connect underwriting and claims",
          "Carry policy servicing forward"
        ],
        "priorities": [
          {
            "title": "Build a complete risk picture",
            "body": "Connect applications, declarations and supporting evidence to underwriting rules before specialists assess a complex case."
          },
          {
            "title": "Align case facts with coverage",
            "body": "Review event dates, medical or incident records, expenses and policy provisions together, beyond document completeness."
          },
          {
            "title": "Continue the servicing process",
            "body": "Keep the request, current policy, supporting evidence and processing status connected as the policy change progresses."
          }
        ],
        "exhibit": {
          "title": "Insurance operations workspace",
          "request": "Organize facts and evidence for professional review and the next processing action.",
          "sources": [
            "Policy terms and business rules",
            "Applications, claims and requests",
            "Evidence and service records"
          ],
          "columns": [
            "Business stage",
            "Processing focus",
            "Deliverable"
          ],
          "rows": [
            [
              "Underwriting",
              "Application facts and risk",
              "Risk factors and enquiries"
            ],
            [
              "Claims",
              "Case facts and coverage",
              "Coverage and review findings"
            ],
            [
              "Policy servicing",
              "Requested changes and evidence",
              "Change comparison and handover"
            ]
          ],
          "deliverables": [
            "Underwriting and claims workbook · XLSX",
            "Policy servicing work package"
          ]
        },
        "foundation": [
          {
            "title": "Connect the policy lifecycle",
            "body": "Bring authorized terms, rules, applications and service records together so facts, evidence and work items stay linked."
          },
          {
            "title": "Reuse distinct operating methods",
            "body": "Maintain separate skills for underwriting risk preparation, claims coverage comparison and policy changes, aligned to product and process rules."
          },
          {
            "title": "Connect decisions to processing",
            "body": "Review work in the project and continue through connected systems. Authorized staff confirm professional decisions and business operations."
          }
        ]
      }
    }
  },
  "navigation": {
    "zh": {
      "name": "保险",
      "description": "核保审阅、理赔核查、保全作业",
      "icon": "shield"
    },
    "en": {
      "name": "Insurance",
      "description": "Underwriting, claims and policy servicing",
      "icon": "shield"
    }
  }
} satisfies SolutionModule;
