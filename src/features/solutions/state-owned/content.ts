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
      "tag": "企业协同",
      "title": "让招采要求逐项落地，让集团经营看清重点",
      "description": "从招采响应、集团经营到项目与安全管理，让数字员工连接制度、资料和协作流程，把重复整理转为可复用的组织能力。",
      "tasks": [
        {
          "title": "招采与投标响应",
          "problem": "要求散落在多份文件，重复编制时容易遗漏条款与资质。",
          "input": "招标文件、资质、产品资料、团队材料与响应规范",
          "action": "通过招投标插件和岗位技能拆解要求，建立响应矩阵，核对资质及技术商务材料并协同编制。",
          "output": "需求响应矩阵、缺口清单、投标文件",
          "value": "让关键要求逐项有响应、有材料。"
        },
        {
          "title": "集团经营材料归集",
          "problem": "下属单位材料口径不一，集团汇报依赖人工反复汇总。",
          "input": "经营报表、项目进展、制度与材料模板",
          "action": "按统一模板归集指标和进展，整理差异、问题线索和需协调事项，衔接会议跟进。",
          "output": "经营汇报、重点问题清单与行动表",
          "value": "把集团关注点落实到单位和事项。"
        },
        {
          "title": "项目协同与安全工作",
          "problem": "项目文件、任务和安全材料分散，交接时背景容易丢失。",
          "input": "项目资料、任务事项、检查与安全业务材料",
          "action": "在项目中共用资料与版本，结合 EHS 插件组织安全工作材料和后续跟进。",
          "output": "项目交付包、安全工作材料与跟进事项",
          "value": "让过程、责任与成果接续在一起。"
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
          "让招采要求逐项落地",
          "让集团经营看清重点"
        ],
        "priorities": [
          {
            "title": "招采要求不能遗漏",
            "body": "资格、技术、商务要求需要逐项落实到证明材料和响应内容。"
          },
          {
            "title": "集团汇报需要同一口径",
            "body": "下属单位报表与项目进展分散，管理层需要看清问题及协调重点。"
          },
          {
            "title": "经验不能只留在个人手里",
            "body": "制度、项目方法和交付材料需要沉淀为可持续复用的组织资产。"
          }
        ],
        "exhibit": {
          "title": "招采需求响应矩阵",
          "request": "拆解招标要求，关联资质与响应材料，汇总待完善事项。",
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
              "定位材料缺口"
            ],
            [
              "技术响应",
              "方案与能力说明",
              "逐项组织响应"
            ],
            [
              "商务要求",
              "合同条款与承诺",
              "形成复核清单"
            ]
          ],
          "deliverables": [
            "响应矩阵 · XLSX",
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
            "body": "组合招投标、CRM、EHS 等已安装授权插件与岗位技能，系统连接按项目建设。"
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
      "tag": "Enterprise collaboration",
      "title": "Cover tender requirements. Focus group business priorities",
      "description": "Connect tender responses, management reporting and project work through digital employees, shared knowledge and reusable methods.",
      "tasks": [
        {
          "title": "Tender and bid responses",
          "problem": "Requirements across files are easy to miss during repeated preparation.",
          "input": "Tender files, qualifications, product and team materials",
          "action": "Use the bidding plugin and skills to map requirements, identify gaps and coordinate technical and commercial responses.",
          "output": "Response matrix, gap list and bid documents",
          "value": "Give each important requirement a supported response."
        },
        {
          "title": "Group management reporting",
          "problem": "Subsidiary reports use inconsistent structures and definitions.",
          "input": "Business reports, project progress, policies and templates",
          "action": "Collect figures and progress using agreed templates; organize differences, issues and coordination needs.",
          "output": "Management presentation, issue list and action workbook",
          "value": "Connect group priorities to units and actions."
        },
        {
          "title": "Projects and safety work",
          "problem": "Project files, tasks and safety material become disconnected.",
          "input": "Project files, tasks, inspection and safety materials",
          "action": "Share project context and versions, and use the EHS plugin for relevant safety work.",
          "output": "Project package, safety materials and follow-ups",
          "value": "Keep responsibility and deliverables connected."
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
          "Cover tender requirements",
          "Focus group business priorities"
        ],
        "priorities": [
          {
            "title": "Cover every tender requirement",
            "body": "Qualification, technical and commercial requirements need matching evidence and responses."
          },
          {
            "title": "Align group reporting",
            "body": "Managers need a coherent view of subsidiary reports, project issues and coordination priorities."
          },
          {
            "title": "Retain organizational expertise",
            "body": "Policies, project methods and deliverables should remain reusable beyond an individual assignment."
          }
        ],
        "exhibit": {
          "title": "Tender response matrix",
          "request": "Map requirements to company evidence and response materials, with a clear gap list.",
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
              "Locate gaps"
            ],
            [
              "Technical",
              "Solution and capability material",
              "Prepare responses"
            ],
            [
              "Commercial",
              "Terms and commitments",
              "Build review list"
            ]
          ],
          "deliverables": [
            "Response matrix · XLSX",
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
            "body": "Combine installed, authorized bidding, CRM and EHS plugins with role skills and project integrations."
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
      "description": "集团管控、跨部门协同、知识沉淀",
      "icon": "buildings"
    },
    "en": {
      "name": "State-owned enterprises",
      "description": "Group governance, collaboration and knowledge",
      "icon": "buildings"
    }
  }
} satisfies SolutionModule;
