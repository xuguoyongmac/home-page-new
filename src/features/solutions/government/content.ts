import type { SolutionModule } from '../types';

export default {
  "slug": "government",
  "order": 3,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "government",
      "icon": "book",
      "name": "政务解决方案",
      "tag": "政务服务与治理",
      "title": "让政策落实到事，让政务服务形成闭环",
      "description": "围绕政策执行、政务服务与基层治理，数字员工匹配政策条件、预审申报材料、研判群众诉求，将办理要求、责任分工和进展反馈接到同一项工作。",
      "tasks": [
        {
          "title": "政策执行与惠企匹配",
          "problem": "政策条款多、适用条件细，服务对象不清楚能享受什么、需要准备什么。",
          "input": "授权政策、申报条件、企业或事项资料与办理要求",
          "action": "拆解政策适用条件与执行要求，对照对象资料定位符合项、待补项和需核实事项，组织办理与落实清单。",
          "output": "政策适用对照、惠企匹配清单与执行事项表",
          "value": "把政策要求接到具体对象和办理事项。"
        },
        {
          "title": "办事导引与申报预审",
          "problem": "办事指南、申报表与附件分散，材料缺项和信息差异造成反复补正。",
          "input": "办事指南、材料清单、申报表与申请附件",
          "action": "围绕办理目标检索受理要求，核对材料完整性、字段一致性与适用版本，整理补正事项并关联原文依据。",
          "output": "办事材料清单、申报预审结果与补正清单",
          "value": "让办事人员清楚下一步准备什么、补充什么。"
        },
        {
          "title": "诉求研判与办理跟进",
          "problem": "群众诉求跨事项、跨部门，人工分辨职责与整理反馈容易反复流转。",
          "input": "授权诉求工单、部门职责目录、办理规则与反馈记录",
          "action": "提取诉求类型、时间地点和关键问题，结合职责与规则整理分办建议和回复要点，通过项目事项衔接责任人员与办理反馈。",
          "output": "诉求分类与分办建议、办理跟进表与回复材料",
          "value": "让诉求找到承接岗位，让办理反馈接得回来。"
        },
        {
          "title": "会议材料与督办跟进",
          "problem": "会议结论停留在纪要里，责任分工与后续事项需要重新整理。",
          "input": "议程、会议记录、相关附件与进展反馈",
          "action": "组织会议材料，提取决议、责任分工与行动项，汇集后续进展供责任人员审阅。",
          "output": "会议纪要、督办事项表与进展简报",
          "value": "把会议部署接到后续推进。"
        },
        {
          "title": "政策研判与综合文稿",
          "problem": "同一主题涉及多份政策，整理依据与准备材料反复耗时。",
          "input": "授权政策文件、历史文稿与写作要求",
          "action": "按主题检索条款，对照适用范围和政策变化，结合既有材料组织文稿。",
          "output": "政策对照、专题材料与文稿草稿",
          "value": "让汇报结论和工作建议找到依据。"
        }
      ],
      "scope": "基于平台知识、技能、项目事项与授权连接组合建设。政务服务和工单系统接入、资料范围及业务规则按项目确定；正式审批、签发与对外答复遵循原有流程。",
      "image": "knowledge-research",
      "story": {
        "lines": [
          "让政策落实到事",
          "让政务服务形成闭环"
        ],
        "priorities": [
          {
            "title": "政策需要对准服务对象",
            "body": "政策条款与企业、群众的具体条件脱节，服务人员需要判断适用范围并明确办理路径。"
          },
          {
            "title": "申报需要减少材料往返",
            "body": "缺件、字段差异和版本不一致影响受理准备，预审结果需要具体到材料与问题。"
          },
          {
            "title": "群众诉求需要有人接续",
            "body": "跨部门诉求需要准确整理职责、分办建议与反馈，避免问题在流转中失去后续。"
          }
        ],
        "exhibit": {
          "title": "政务服务与治理办理清单",
          "request": "对照政策和办理规则，整理服务对象的材料要求、诉求去向与跟进事项。",
          "sources": [
            "政策与办事指南",
            "申报资料与诉求工单",
            "职责目录与办理反馈"
          ],
          "columns": [
            "业务事项",
            "核对重点",
            "办理成果"
          ],
          "rows": [
            [
              "政策落实",
              "适用条件与对象资料",
              "政策匹配与办理清单"
            ],
            [
              "申报预审",
              "材料缺项与字段差异",
              "补正清单"
            ],
            [
              "诉求办理",
              "职责归属与反馈进展",
              "分办建议与跟进事项"
            ]
          ],
          "deliverables": [
            "办理与补正清单 · XLSX",
            "诉求办理与督办事项表 · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "政策、事项与历史记录形成依据",
            "body": "归集授权政策、办事指南、对象资料、历史工单与会议材料，检索与核对保留原文出处。"
          },
          {
            "title": "业务规则与办理系统共同衔接",
            "body": "将适用条件、材料清单和职责分工沉淀为技能，按项目对接政务服务与工单系统，衔接项目事项和协作入口。"
          },
          {
            "title": "责任人员确认并接续工作",
            "body": "政策匹配、材料预审和分办建议交给责任人员确认；正式审批、签发与对外答复遵循原有流程。"
          }
        ]
      }
    },
    "en": {
      "slug": "government",
      "icon": "book",
      "name": "Government",
      "tag": "Public services and governance",
      "title": "Put policies into action. See service requests through",
      "description": "Digital employees compare policy conditions, pre-check applications and analyze service requests, connecting requirements, responsibilities and progress across policy delivery, public services and local governance.",
      "tasks": [
        {
          "title": "Policy delivery and business support",
          "problem": "Detailed eligibility conditions make it difficult to know which policies apply and what to prepare.",
          "input": "Authorized policies, eligibility conditions, organization or case records and service requirements",
          "action": "Break down eligibility and delivery requirements, compare case records, and organize matching conditions, missing information and questions for review.",
          "output": "Policy comparison, business-support matching list and action workbook",
          "value": "Connect policy requirements to specific applicants and actions."
        },
        {
          "title": "Service guidance and application pre-checks",
          "problem": "Separate guides, forms and attachments create repeated requests for corrections.",
          "input": "Service guides, document checklists, application forms and attachments",
          "action": "Find the relevant requirements, compare completeness, fields and document versions, and prepare corrections linked to original provisions.",
          "output": "Application checklist, pre-check findings and correction list",
          "value": "Make the next preparation and correction clear."
        },
        {
          "title": "Service request analysis and follow-up",
          "problem": "Requests span responsibilities and departments, creating repeated routing and feedback work.",
          "input": "Authorized request records, department responsibilities, handling rules and progress updates",
          "action": "Extract request types, dates, locations and issues; prepare routing suggestions and response points, then connect responsible staff and updates through project work items.",
          "output": "Request classification, routing suggestions, follow-up workbook and response materials",
          "value": "Connect each request to the team and updates that carry it forward."
        },
        {
          "title": "Meetings and action follow-up",
          "problem": "Decisions in minutes still need to become assigned, trackable work.",
          "input": "Agendas, records, attachments and progress updates",
          "action": "Prepare meeting material, extract decisions and responsibilities, and organize progress for review.",
          "output": "Minutes, action workbook and progress brief",
          "value": "Connect meeting decisions to follow-up work."
        },
        {
          "title": "Policy research and drafting",
          "problem": "A policy topic spans many documents and repeated preparation.",
          "input": "Authorized policies, past briefs and drafting requirements",
          "action": "Compare provisions, scope and changes; organize referenced material into a brief.",
          "output": "Policy comparison, topical brief and document draft",
          "value": "Give decisions and recommendations an evidence base."
        }
      ],
      "scope": "Assembled from knowledge, skills, project work items and authorized connections. Public-service and request-system integrations and business rules are configured for each project; formal decisions and external responses follow the established process.",
      "image": "knowledge-research",
      "story": {
        "lines": [
          "Put policies into action",
          "See service requests through"
        ],
        "priorities": [
          {
            "title": "Match policies to the people they serve",
            "body": "Teams need to connect policy conditions to each organization or applicant and identify the relevant service path."
          },
          {
            "title": "Reduce application back-and-forth",
            "body": "Pre-check findings must identify missing files, inconsistent fields and outdated documents."
          },
          {
            "title": "Carry requests across responsibilities",
            "body": "Cross-department requests need clear routing suggestions, owners and progress updates."
          }
        ],
        "exhibit": {
          "title": "Public service and case follow-up workbook",
          "request": "Compare policies and handling rules to organize application requirements, request routing and follow-up actions.",
          "sources": [
            "Policies and service guides",
            "Applications and service requests",
            "Responsibilities and progress"
          ],
          "columns": [
            "Work",
            "Review focus",
            "Deliverable"
          ],
          "rows": [
            [
              "Policy delivery",
              "Conditions and applicant records",
              "Policy match and action list"
            ],
            [
              "Application pre-check",
              "Missing files and differences",
              "Correction list"
            ],
            [
              "Service requests",
              "Responsibilities and progress",
              "Routing and follow-up actions"
            ]
          ],
          "deliverables": [
            "Application and correction list · XLSX",
            "Request and action workbook · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "Connect policies, cases and records",
            "body": "Use authorized policies, guides, case records, past requests and meeting materials with original references."
          },
          {
            "title": "Connect rules to handling systems",
            "body": "Configure skills for conditions, checklists and responsibilities. Integrate service and request systems for the project and connect work items and collaboration channels."
          },
          {
            "title": "Keep responsible staff in the work",
            "body": "Staff confirm policy matches, pre-check findings and routing suggestions. Formal decisions, issued documents and external responses follow established procedures."
          }
        ]
      }
    }
  },
  "navigation": {
    "zh": {
      "name": "数字政务",
      "description": "政策落实、政务服务、诉求办理",
      "icon": "landmark"
    },
    "en": {
      "name": "Digital government",
      "description": "Policy delivery, public services and request handling",
      "icon": "landmark"
    }
  }
} satisfies SolutionModule;
