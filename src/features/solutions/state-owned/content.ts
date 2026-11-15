import type { SolutionModule } from '../types';

export default {
  "slug": "state-owned",
  "order": 4,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "state-owned",
      "icon": "network",
      "name": "央国企解决方案",
      "tag": "集团经营与管控",
      "title": "经营看清重点，项目推进有抓手",
      "description": "围绕集团经营、招采、项目履约与安全管理，数字员工核对条款和数据、梳理进度与成本差异、衔接隐患整改，把管理关注点落实到单位、项目和责任事项。",
      "tasks": [
        {
          "title": "招采文件审查与投标响应",
          "problem": "资格、技术与商务要求分散，范本、资质和响应材料反复核对，条款错漏影响招采推进。",
          "input": "采购需求、招投标文件、集团范本、企业资质与技术商务资料",
          "action": "通过招投标插件与岗位技能拆解要求，对照范本和证明材料定位差异，建立响应矩阵，协同完成审查与文件编制。",
          "output": "招采审查清单、需求响应矩阵与技术商务文件",
          "value": "让招采要求有对应材料，让条款差异有处理落点。"
        },
        {
          "title": "集团经营分析与问题督办",
          "problem": "下属单位报表口径不一，指标汇总后仍难看清预算差异、重点单位变化与协调事项。",
          "input": "授权经营与财务报表、预算、项目进展和集团指标口径",
          "action": "核对指标与预算执行差异，分析重点单位变化，关联项目进展，整理问题线索和需协调事项，衔接会议与项目跟进。",
          "output": "集团经营分析、异常线索清单与督办事项表",
          "value": "从汇总数字走向定位问题、协调行动。"
        },
        {
          "title": "项目履约与成本跟进",
          "problem": "进度、合同和成本资料各自更新，节点偏差与成本差异需要跨岗位反复核对。",
          "input": "项目合同、节点计划、进度反馈、成本资料与交付记录",
          "action": "按工期节点与成本口径对照计划和实际进展，定位偏差及关联资料，在项目中汇集协调事项、审阅意见与交付版本。",
          "output": "项目履约简报、进度成本差异清单与项目交付包",
          "value": "让进度与成本偏差接到下一步协调。"
        },
        {
          "title": "安全隐患与整改跟进",
          "problem": "检查问题、责任时限与整改证据分散，管理者难以掌握哪些隐患仍待处理和复核。",
          "input": "检查记录、隐患资料、责任时限、附件证据与整改反馈",
          "action": "结合 EHS 插件整理隐患、整改要求与反馈证据，定位未补材料和待复核事项，形成台账草稿供责任人员审核采纳。",
          "output": "隐患整改台账、待复核事项与安全工作简报",
          "value": "让检查发现接到有责任、有证据的整改复核。"
        },
        {
          "title": "制度知识与公文编制",
          "problem": "集团制度跨层级分布，同类文书反复查依据、找格式。",
          "input": "授权制度、历史文稿与集团模板",
          "action": "检索适用依据，整理制度摘要并按既定格式组织文书，交由责任人员审阅。",
          "output": "带引用的制度答复、文书与材料",
          "value": "让组织经验可以被持续复用。"
        }
      ],
      "scope": "由通用平台、招投标和 EHS 等能力组合建设。LDAP / OIDC、私有化、本地模型和银河麒麟专项交付按具体环境确定。",
      "image": "enterprise-connections",
      "story": {
        "lines": [
          "经营看清重点",
          "项目推进有抓手"
        ],
        "priorities": [
          {
            "title": "招采要求需要逐项落实",
            "body": "资格、技术和商务要求要对照范本与资质材料，条款差异和响应缺口不能停在多份文件里。"
          },
          {
            "title": "集团经营需要带出行动",
            "body": "管理层需要知道哪些单位、预算和指标发生变化，以及哪些问题需要立即协调和督办。"
          },
          {
            "title": "项目与安全需要接到责任事项",
            "body": "进度偏差、成本差异和隐患整改分散在不同岗位，需要把问题、责任与反馈衔接起来。"
          }
        ],
        "exhibit": {
          "title": "招采审查与需求响应矩阵",
          "request": "对照范本拆解招采要求，关联证明与响应材料，汇总差异和待完善事项。",
          "sources": [
            "招标文件",
            "企业资质与案例",
            "产品与技术资料"
          ],
          "columns": [
            "要求分类",
            "响应材料",
            "工作去向"
          ],
          "rows": [
            [
              "资格要求",
              "资质与证明文件",
              "定位缺项与差异"
            ],
            [
              "技术响应",
              "参数与能力依据",
              "逐项组织响应"
            ],
            [
              "商务要求",
              "范本与合同条款",
              "形成审查清单"
            ]
          ],
          "deliverables": [
            "审查与响应矩阵 · XLSX",
            "技术商务文件 · DOCX"
          ]
        },
        "foundation": [
          {
            "title": "制度与资料形成公共依据",
            "body": "统一管理集团制度、项目档案和企业资料，按知识库与项目角色分配访问范围。"
          },
          {
            "title": "插件与技能承接具体工作",
            "body": "组合招投标、CRM、EHS 等已安装授权插件，以技能承接招采审查、经营分析与整改材料；业务系统连接和作业规则按项目建设。"
          },
          {
            "title": "企业环境与协作共同落地",
            "body": "结合私有化、本地模型、LDAP / OIDC 与银河麒麟交付需求核对环境；责任人员审阅业务成果。"
          }
        ]
      }
    },
    "en": {
      "slug": "state-owned",
      "icon": "network",
      "name": "State-owned enterprises",
      "tag": "Group operations and control",
      "title": "See business priorities. Keep projects moving",
      "description": "Digital employees compare documents and data, identify schedule and cost differences, and connect remediation work across group operations, procurement, project delivery and safety.",
      "tasks": [
        {
          "title": "Procurement review and bid responses",
          "problem": "Requirements, templates and evidence are scattered, leaving repeated checks and gaps in procurement documents.",
          "input": "Procurement requirements, tender and bid files, group templates, qualifications and technical or commercial materials",
          "action": "Use the bidding plugin and role skills to map requirements, compare templates and evidence, locate discrepancies and coordinate review and document preparation.",
          "output": "Procurement review list, response matrix and technical or commercial documents",
          "value": "Match requirements to evidence and give differences a clear next action."
        },
        {
          "title": "Group business analysis and issue follow-up",
          "problem": "Inconsistent subsidiary reports obscure budget differences, changes at key units and coordination needs.",
          "input": "Authorized business and financial reports, budgets, project progress and agreed metric definitions",
          "action": "Compare metrics and budget execution, analyze changes at key units, connect project progress and prepare issues for meeting and project follow-up.",
          "output": "Group business analysis, exception findings and action workbook",
          "value": "Move from collecting figures to resolving business priorities."
        },
        {
          "title": "Project delivery and cost follow-up",
          "problem": "Schedules, contracts and costs change separately, requiring repeated checks across roles.",
          "input": "Project contracts, milestone plans, progress updates, cost records and delivery evidence",
          "action": "Compare plans and actual progress with agreed schedule and cost definitions, locate differences and connect coordination needs, reviews and deliverable versions in the project.",
          "output": "Delivery brief, schedule and cost differences, and project package",
          "value": "Turn schedule and cost differences into coordination priorities."
        },
        {
          "title": "Safety findings and remediation follow-up",
          "problem": "Inspection findings, owners, deadlines and evidence are scattered, obscuring work that still needs action or review.",
          "input": "Inspections, hazard records, owners and deadlines, supporting files and remediation updates",
          "action": "Use the EHS plugin to organize findings, remediation requirements and evidence, identify missing records and review items, and prepare register drafts for responsible staff to adopt.",
          "output": "Remediation register, review items and safety brief",
          "value": "Connect inspection findings to accountable remediation and evidence."
        },
        {
          "title": "Policies and business drafting",
          "problem": "Teams repeatedly search for the right policy and document format.",
          "input": "Authorized policies, historical documents and group templates",
          "action": "Find relevant provisions and prepare referenced answers and drafts for review.",
          "output": "Policy answers and business documents",
          "value": "Make organizational experience reusable."
        }
      ],
      "scope": "Assembled from the platform, bid and EHS capabilities. Private deployment, local models, LDAP / OIDC and Kylin delivery depend on the agreed environment.",
      "image": "enterprise-connections",
      "story": {
        "lines": [
          "See business priorities",
          "Keep projects moving"
        ],
        "priorities": [
          {
            "title": "Cover requirements across procurement",
            "body": "Compare qualification, technical and commercial requirements with templates and evidence, keeping gaps and differences actionable."
          },
          {
            "title": "Connect group analysis to action",
            "body": "Managers need to know which units, budgets and metrics changed, and which issues require coordination."
          },
          {
            "title": "Connect project and safety responsibilities",
            "body": "Schedule and cost differences and remediation findings need owners, evidence and progress that carry across teams."
          }
        ],
        "exhibit": {
          "title": "Procurement review and response matrix",
          "request": "Map procurement requirements to templates, evidence and responses, with a clear list of differences and gaps.",
          "sources": [
            "Tender files",
            "Qualifications and references",
            "Product and technical material"
          ],
          "columns": [
            "Requirement",
            "Evidence",
            "Work"
          ],
          "rows": [
            [
              "Qualification",
              "Certificates and supporting files",
              "Locate gaps and differences"
            ],
            [
              "Technical",
              "Parameters and capability evidence",
              "Prepare responses"
            ],
            [
              "Commercial",
              "Templates and contract terms",
              "Build review list"
            ]
          ],
          "deliverables": [
            "Review and response matrix · XLSX",
            "Bid documents · DOCX"
          ]
        },
        "foundation": [
          {
            "title": "Share the evidence base",
            "body": "Organize policies, archives and company materials with library and project access controls."
          },
          {
            "title": "Use plugins and skills",
            "body": "Combine installed, authorized bidding, CRM and EHS plugins with skills for procurement review, business analysis and remediation records. Configure business connections and work rules for each project."
          },
          {
            "title": "Fit the enterprise environment",
            "body": "Assess private deployment, local models, LDAP / OIDC and Kylin delivery needs. Responsible staff review business results."
          }
        ]
      }
    }
  },
  "navigation": {
    "zh": {
      "name": "央国企",
      "description": "集团经营、招采履约、安全整改",
      "icon": "buildings"
    },
    "en": {
      "name": "State-owned enterprises",
      "description": "Group operations, procurement, delivery and safety",
      "icon": "buildings"
    }
  }
} satisfies SolutionModule;
