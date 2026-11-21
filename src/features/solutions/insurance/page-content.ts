import type { IndustryEmployee, IndustrySolutionPresentation } from '../shared/types';

export type InsuranceEmployee = IndustryEmployee;

export const insurancePresentation: IndustrySolutionPresentation = {
  "zh": {
    "home": {
      "title": "让保险作业有据，让专业判断聚焦",
      "pain": "条款多版、材料关联复杂、系统查询割裂，补料与复核又反复等待；核保理赔的专业时间被资料准备与交接消耗。",
      "value": "TeGo 数字员工协作平台承接条款检索、材料核对与任务跟进，让保险专业岗位集中处理承保、理赔与对客判断。",
      "scenarios": [
        "条款知识",
        "销售准备",
        "投保理赔核对",
        "保全续期",
        "质检消保",
        "经营分析"
      ],
      "benefits": [
        {
          "title": "条款依据清楚",
          "description": "答复带出处与版本，核对底稿直达材料差异，专业复核有据可查。"
        },
        {
          "title": "跨岗工作接续",
          "description": "缺料、复核与确认送达责任人，原任务背景随回应保留，减少重复交接。"
        },
        {
          "title": "成果过程可溯",
          "description": "来源、人工处理与成果版本保持关联，支撑质检、消保与审计取证。"
        }
      ]
    },
    "hero": {
      "lines": [
        "把重复核对交给数字员工",
        "把专业工时留给关键判断"
      ],
      "background": "/images/industries/insurance-architecture_V1.1.webp"
    },
    "solution": {
      "context": {
        "title": "精细运营需要可靠的岗位支撑",
        "body": "报行合一推动精细运营，代理人转型要求更强专业支撑。条款多版、材料繁杂、交接等待与追溯困难，让智能应用难以进入日常作业。"
      },
      "mappingsTitle": "保险作业问题的对应解法",
      "mappings": [
        {
          "problemTitle": "条款分散与版本混用",
          "problem": "条款、制度和案例分散在不同系统，多版本并存，业务人员反复查找，答复依据难回查。",
          "capabilities": [
            "企业知识库",
            "混合检索",
            "来源引用"
          ],
          "response": "以当前会话人员身份检索获准知识，关联原文位置与适用版本；条款冲突直接保留差异，交由业务人员确认。",
          "deliverables": [
            "带引用的业务答复",
            "适用条款对照"
          ],
          "value": "减少反复翻找，让同类业务答复有据可查。",
          "icon": "book"
        },
        {
          "problemTitle": "关联材料核对繁重",
          "problem": "健康告知、病历、票据与申请材料相互关联，缺项和字段矛盾依赖逐份比对，错漏容易后移。",
          "capabilities": [
            "岗位技能",
            "任务执行",
            "Office 与文件版本"
          ],
          "response": "把材料清单与核对规则固化为岗位技能，由数字员工整理目录、定位字段差异和原文，交付可批注续改的核对底稿。",
          "deliverables": [
            "材料核对底稿",
            "差异与待补清单"
          ],
          "value": "让复核直达疑点，把专业工时用在责任认定上。",
          "icon": "clipboard-check"
        },
        {
          "problemTitle": "跨系统操作衔接困难",
          "problem": "查询、填报和跟进跨越保单系统、理赔系统与工单，重复搬运信息，业务状态衔接困难。",
          "capabilities": [
            "业务插件与 MCP",
            "平台 OpenAPI",
            "插件调用权限"
          ],
          "response": "业务插件与 MCP 按委托查询保单、理赔与工单记录，并回读业务状态；平台 OpenAPI 供外部系统调用数字员工，写回与发送由人确认。",
          "deliverables": [
            "受控数据查询结果",
            "业务状态核对记录"
          ],
          "value": "减少重复搬运，让业务连接始终沿授权执行。",
          "icon": "plug"
        },
        {
          "problemTitle": "人工交接反复等待",
          "problem": "等补料、等核保理赔复核、等对客确认，任务背景散落会话和邮件，跨岗位交接反复解释。",
          "capabilities": [
            "待处理事项",
            "工作会话",
            "工作记忆"
          ],
          "response": "把缺失事实、复核请求与授权确认送达责任人，工作会话保留原任务背景；人员回应或接手后，任务接续办理。",
          "deliverables": [
            "责任明确的待处理事项",
            "人工回应与续办记录"
          ],
          "value": "缩短找人与等待，让关键判断有人负责、工作不断档。",
          "icon": "user-check"
        },
        {
          "problemTitle": "成果依据难以追溯",
          "problem": "条款版本、工具调用、人工修改与最终文件缺少关联，消保争议、质检和审计需要重新取证。",
          "capabilities": [
            "审计中心",
            "内容标识与溯源",
            "项目版本"
          ],
          "response": "在执行中关联任务、工具事件、人工处理与成果版本，输出带内容标识的文件，并按审计权限核验和导出关联证据。",
          "deliverables": [
            "关联来源的审计证据",
            "成果版本与修改记录"
          ],
          "value": "让质检与消保回查有据，减少事后取证成本。",
          "icon": "file-search"
        }
      ],
      "governance": {
        "title": "按保险业务职责运行",
        "items": [
          {
            "title": "专业判断归岗",
            "body": "核保条件、保险责任、赔付金额与适当性由专业岗位确认；数字员工交付核对底稿和疑点依据，正式审批、系统写回与对客发送沿用机构授权流程。"
          },
          {
            "title": "敏感资料受控",
            "body": "健康与身份资料按任务最小必要范围使用。私有化部署与本地模型配合资料授权，逐项管理存储、检索、推理、工具接口和成果记录的数据路径。"
          },
          {
            "title": "运行记录可核",
            "body": "围绕已采集的执行记录关联来源、工具调用、人工处理和成果版本，按审计权限保留、核验与导出；知识、技能和授权维护分别落实到负责人。"
          }
        ]
      },
      "values": {
        "title": "把作业改善落实到保险经营",
        "items": [
          {
            "title": "释放专业工时",
            "body": "减少查条款、对材料、搬数据和追回复的重复投入，让核保、理赔与业务支持人员把时间用在疑点核实和专业判断上。"
          },
          {
            "title": "稳定核对质量",
            "body": "同类任务沿用经确认的材料清单、规则与版本，差异定位到原文。业务复核有共同依据，质检与消保能接续查看处理经过。"
          },
          {
            "title": "沉淀岗位资产",
            "body": "将有效条款、岗位技能、成果模板和审计记录沉淀为企业资产。模型可替换，成熟方法可在同岗位与同条线复用。"
          }
        ]
      }
    }
  },
  "en": {
    "home": {
      "title": "Ground insurance work in evidence. Focus professional judgment.",
      "pain": "Competing policy versions, related documents and disconnected system queries consume professional time, while repeated requests for documents and review delay underwriting and claims work.",
      "value": "The platform handles policy research, document checks and task follow-up, giving insurance professionals more time for underwriting, claims and client-facing judgment.",
      "scenarios": [
        "Policy knowledge",
        "Sales preparation",
        "Application and claims checks",
        "Policy servicing and renewals",
        "Quality and consumer protection",
        "Operating analysis"
      ],
      "benefits": [
        {
          "title": "Clear policy references",
          "description": "Responses carry source and version links, while checking papers locate document differences for professional review."
        },
        {
          "title": "Connected professional handovers",
          "description": "Document requests, reviews and confirmations reach the owner with their original context, reducing repeated handovers."
        },
        {
          "title": "Traceable outputs and handling",
          "description": "Sources, human actions and output versions stay connected for quality checks, consumer protection and audit evidence."
        }
      ]
    },
    "hero": {
      "lines": [
        "Less document work",
        "More professional judgment"
      ],
      "background": "/images/industries/insurance-architecture_V1.1.webp"
    },
    "solution": {
      "context": {
        "title": "Reliable role support for disciplined insurance operations",
        "body": "Closer alignment of filed and actual expenses raises the need for disciplined operations, while insurance-agent professionalization demands stronger professional support. Conflicting policy versions, related documents, handover delays and weak traceability keep intelligent applications outside daily work."
      },
      "mappingsTitle": "Insurance challenges and their solutions",
      "mappings": [
        {
          "problemTitle": "Scattered references and conflicting versions",
          "problem": "Policy wording, procedures and cases sit across systems. Staff repeatedly search competing versions, while the basis of a response is difficult to retrieve.",
          "capabilities": [
            "Enterprise knowledge base",
            "Hybrid retrieval",
            "Source citations"
          ],
          "response": "Retrieve authorized knowledge under the current participant’s identity, linking relevant wording to its source location and applicable version. Preserve conflicting clauses for business specialists to confirm.",
          "deliverables": [
            "Source-linked business responses",
            "Applicable clause comparisons"
          ],
          "value": "Less repeated searching, with a retrievable basis for business responses.",
          "icon": "book"
        },
        {
          "problemTitle": "Laborious checks across related documents",
          "problem": "Health disclosures, medical records, receipts and applications must be compared together. Missing items and conflicting fields are checked manually and can surface late.",
          "capabilities": [
            "Role skills",
            "Task execution",
            "Office and file versions"
          ],
          "response": "Encode confirmed document lists and checking rules in role skills. Digital employees organize materials, locate field differences and source passages, and deliver working papers that specialists can annotate and revise.",
          "deliverables": [
            "Document-checking working papers",
            "Differences and missing-item lists"
          ],
          "value": "Direct review to the questions that need professional confirmation.",
          "icon": "clipboard-check"
        },
        {
          "problemTitle": "Disconnected work across business systems",
          "problem": "Queries, data entry and follow-up span policy, claims and ticketing systems. Repeated transfers of information make business status difficult to carry forward.",
          "capabilities": [
            "Business plugins and MCP",
            "Platform OpenAPI",
            "Plugin call permissions"
          ],
          "response": "Business plugins and MCP query authorized policy, claims and service records and read back their status. Platform OpenAPI lets external systems invoke digital employees; staff confirm writes and communications.",
          "deliverables": [
            "Authorized query results",
            "Business status verification records"
          ],
          "value": "Less information transfer, with business connections governed by authorization.",
          "icon": "plug"
        },
        {
          "problemTitle": "Repeated waiting between professional roles",
          "problem": "Work waits for documents, underwriting or claims review, and client-facing confirmation. Context is scattered across conversations and email, forcing repeated explanations.",
          "capabilities": [
            "Pending matters",
            "Work conversations",
            "Work memory"
          ],
          "response": "Route missing facts, review requests and authorization decisions to the responsible person. Work conversations retain the original context so the assignment can continue after a response or handover.",
          "deliverables": [
            "Pending matters with clear ownership",
            "Human-response and continuation records"
          ],
          "value": "Less waiting and searching for owners, with responsibility preserved.",
          "icon": "user-check"
        },
        {
          "problemTitle": "Results separated from their supporting evidence",
          "problem": "Clause versions, tool use, human revisions and final files lack clear links. Consumer-protection reviews, quality checks and audits require evidence to be assembled again.",
          "capabilities": [
            "Audit center",
            "Content identification and provenance",
            "Project versions"
          ],
          "response": "Link tasks, tool events, human actions and output versions during execution. Identify delivered content and verify or export the related evidence under the appropriate audit permissions.",
          "deliverables": [
            "Source-linked audit evidence",
            "Output versions and revision history"
          ],
          "value": "A retrievable basis for quality and consumer-protection reviews.",
          "icon": "file-search"
        }
      ],
      "governance": {
        "title": "Operate within insurance responsibilities",
        "items": [
          {
            "title": "Professional decisions stay with the role",
            "body": "Specialists confirm underwriting terms, coverage responsibility, claim amounts and suitability. Digital employees provide checking papers and supporting evidence; formal approvals, writebacks and client communications follow the institution’s authorization process."
          },
          {
            "title": "Control sensitive information",
            "body": "Use health and identity information within the minimum scope required by the task. Combine private deployment and local models with document access controls, managing the paths through storage, retrieval, inference, tools and output records."
          },
          {
            "title": "Keep reviewable operating records",
            "body": "Connect collected execution records to sources, tool calls, human actions and output versions. Retain, verify and export them under audit permissions, with named owners for knowledge, skills and access maintenance."
          }
        ]
      },
      "values": {
        "title": "Turn operational improvements into insurance value",
        "items": [
          {
            "title": "Recover professional time",
            "body": "Reduce repeated policy searches, document checks, information transfers and follow-up. Underwriting, claims and business-support specialists can devote more attention to verifying issues and exercising professional judgment."
          },
          {
            "title": "Make checking quality more consistent",
            "body": "Apply confirmed document lists, rules and versions to comparable tasks, locating differences in the source. Reviewers share a clear basis, while quality and consumer-protection teams can follow how the work was handled."
          },
          {
            "title": "Retain reusable role assets",
            "body": "Retain current wording, role skills, output templates and audit records as company assets. Models can be replaced while established methods are reused across the same roles and business lines."
          }
        ]
      }
    }
  }
};
