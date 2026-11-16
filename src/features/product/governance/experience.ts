import type { ProductExperienceTranslations } from '../experience-types';

export default {
  "zh": {
    "heroAlt": "二维企业管理界面：组织身份、知识与项目访问、插件委托、发布审核和任务记录并列呈现，明确数字员工可做的工作与可回看的执行过程。",
    "sectionTitle": "从明确边界到回看过程，企业管理贯穿作业",
    "sections": [
      {
        "id": "access",
        "kind": "governance",
        "title": "访问什么资料，先明确身份与范围",
        "body": "对齐组织身份和角色，分别配置知识权限、项目访问与插件委托。让业务交办与资源授权各有明确范围。",
        "points": [
          {
            "title": "组织身份接入",
            "body": "对接 LDAP / OIDC 身份源，结合组织角色管理人员与资源权限。"
          },
          {
            "title": "资源规则分别生效",
            "body": "知识检索按调用人权限开展；项目文件按委托人当前项目角色访问，插件工作另行委托。"
          }
        ],
        "visual": {
          "title": "身份与资源访问",
          "context": "项目服务团队",
          "tabs": [
            "组织角色",
            "资源范围",
            "业务委托"
          ],
          "request": "为项目服务团队配置资料访问与数字员工使用范围。",
          "response": "知识、项目与插件分别管理，资源访问按对应规则生效。",
          "columns": [
            "资源",
            "访问主体",
            "授权范围"
          ],
          "rows": [
            [
              "项目交付知识库",
              "项目服务团队",
              "知识检索"
            ],
            [
              "澄越数智服务项目",
              "项目成员",
              "按当前项目角色"
            ],
            [
              "客户经营插件",
              "委托人",
              "本人可见业务记录"
            ]
          ],
          "focus": {
            "label": "授权边界",
            "title": "资源访问分别管理",
            "body": "任务交办不替代知识授权、项目角色或插件业务委托。"
          },
          "files": [
            "团队角色配置",
            "资源授权记录"
          ]
        }
      },
      {
        "id": "review",
        "kind": "governance",
        "title": "能力从创建到开放，组织决定有记录",
        "body": "把数字员工的创建开放、模板与插件发布、技能变更和资源授权纳入审核。专项插件工作按需委托，也能主动收回。",
        "points": [
          {
            "title": "审核保留提交内容",
            "body": "按组织规则处理审核，保存提交快照和审核决定，明确本次开放或变更的内容。"
          },
          {
            "title": "委托跟随工作调整",
            "body": "为具体插件工作授予业务委托，读取本人可见记录；工作结束后可主动撤销并保留变更记录。"
          }
        ],
        "visual": {
          "title": "审核与业务委托",
          "context": "数字员工管理",
          "tabs": [
            "审核事项",
            "提交快照",
            "授权变更"
          ],
          "request": "审核方案文书数字员工的开放申请，并核对使用范围。",
          "response": "本次申请关联职责、能力与使用范围，审核决定与提交快照一并留存。",
          "columns": [
            "管理事项",
            "本次内容",
            "保留记录"
          ],
          "rows": [
            [
              "数字员工开放",
              "项目服务团队使用",
              "申请与决定"
            ],
            [
              "数字员工模板发布",
              "方案文书岗位配置",
              "提交快照"
            ],
            [
              "插件业务委托",
              "客户跟进材料整理",
              "授予与撤销记录"
            ]
          ],
          "focus": {
            "label": "审核依据",
            "title": "本次提交内容可回看",
            "body": "保留申请快照与审核决定，便于核对能力开放和授权变更。"
          },
          "files": [
            "开放申请快照",
            "审核决定记录"
          ]
        }
      },
      {
        "id": "audit",
        "kind": "execution",
        "title": "从一个任务，追到调用与交付",
        "body": "最终成果之外，保留执行步骤、工具调用和成果记录。结合授权与管理变更，回看数字员工如何完成工作。",
        "points": [
          {
            "title": "任务过程可回看",
            "body": "按任务查看步骤、工具与交付结果，找到需要业务复核的环节。"
          },
          {
            "title": "管理变更可关联",
            "body": "结合资源授权、委托和审核变更记录，核对执行时的管理背景。"
          }
        ],
        "visual": {
          "title": "任务执行记录",
          "context": "项目验收准备",
          "tabs": [
            "任务步骤",
            "工具调用",
            "交付成果"
          ],
          "request": "依据项目资料整理验收准备材料，保留执行过程。",
          "response": "已完成资料检索与清单整理，成果文件和调用记录可按任务回看。",
          "columns": [
            "执行步骤",
            "处理内容",
            "结果记录"
          ],
          "rows": [
            [
              "检索项目资料",
              "查找交付要求与现有成果",
              "知识检索记录"
            ],
            [
              "核对验收事项",
              "整理材料与确认项",
              "任务步骤记录"
            ],
            [
              "编制准备清单",
              "归集文档与核对事项",
              "成果文件记录"
            ]
          ],
          "focus": {
            "label": "交付结果",
            "title": "验收准备清单已形成",
            "body": "业务复核可从成果回看任务步骤、相关调用与管理变更。"
          },
          "files": [
            "验收准备清单.docx",
            "任务执行记录"
          ]
        }
      }
    ]
  },
  "en": {
    "heroAlt": "A two-dimensional enterprise governance interface showing identity, knowledge and project access, plugin delegation, publication reviews and task records with clear operating boundaries.",
    "sectionTitle": "Keep enterprise control connected to the work",
    "sections": [
      {
        "id": "access",
        "kind": "governance",
        "title": "Define who can use each resource",
        "body": "Align organizational identity and roles, then configure knowledge permissions, project access and plugin delegation separately. Keep the assignment distinct from resource authorization.",
        "points": [
          {
            "title": "Connect organizational identity",
            "body": "Connect LDAP / OIDC providers and use organizational roles to manage people and resource access."
          },
          {
            "title": "Apply each resource’s own rules",
            "body": "Knowledge retrieval follows caller permissions. Project file access follows the delegating person’s current project role, while plugin work requires delegation."
          }
        ],
        "visual": {
          "title": "Identity and resource access",
          "context": "Project service team",
          "tabs": [
            "Organization roles",
            "Resource access",
            "Delegation"
          ],
          "request": "Configure material access and digital employee access for the project service team.",
          "response": "Manage knowledge, projects and plugins separately, with access governed by the corresponding rules.",
          "columns": [
            "Resource",
            "Access holder",
            "Authorized scope"
          ],
          "rows": [
            [
              "Delivery knowledge library",
              "Project service team",
              "Knowledge retrieval"
            ],
            [
              "Chengyue Services Project",
              "Project members",
              "Current project role"
            ],
            [
              "Client management plugin",
              "Delegating person",
              "Records visible to that person"
            ]
          ],
          "focus": {
            "label": "Access boundary",
            "title": "Manage each resource separately",
            "body": "An assignment does not replace knowledge access, a project role or plugin delegation."
          },
          "files": [
            "Team role configuration",
            "Resource authorization record"
          ]
        }
      },
      {
        "id": "review",
        "kind": "governance",
        "title": "Retain decisions from creation to access",
        "body": "Review employee creation and access, template and plugin publication, skill changes and resource authorization. Grant plugin delegation for the work and withdraw it when needed.",
        "points": [
          {
            "title": "Retain the submitted content",
            "body": "Apply organizational review rules and keep submission snapshots and decisions for the change being made."
          },
          {
            "title": "Adjust delegation with the work",
            "body": "Delegate specific plugin work using records visible to the person granting access. Revoke it when appropriate and retain the change history."
          }
        ],
        "visual": {
          "title": "Reviews and delegation",
          "context": "Digital employee management",
          "tabs": [
            "Review items",
            "Submission snapshot",
            "Access changes"
          ],
          "request": "Review the proposal employee’s access request and check its usage scope.",
          "response": "The request links role responsibilities, capabilities and usage scope; its snapshot and decision remain on record.",
          "columns": [
            "Management item",
            "Submitted scope",
            "Retained record"
          ],
          "rows": [
            [
              "Employee access",
              "Project service team",
              "Request and decision"
            ],
            [
              "Template publication",
              "Proposal role configuration",
              "Submission snapshot"
            ],
            [
              "Plugin delegation",
              "Client follow-up preparation",
              "Grant and withdrawal"
            ]
          ],
          "focus": {
            "label": "Review evidence",
            "title": "Inspect the submitted content",
            "body": "Keep the request snapshot and decision when reviewing capability access and authorization changes."
          },
          "files": [
            "Access request snapshot",
            "Review decision record"
          ]
        }
      },
      {
        "id": "audit",
        "kind": "execution",
        "title": "Follow a task through tools and delivery",
        "body": "Look beyond the final document to task steps, tool calls and deliverable records. Review the work alongside authorization and governance changes.",
        "points": [
          {
            "title": "Inspect the task process",
            "body": "Review steps, tools and outputs for the task and locate the work that needs business review."
          },
          {
            "title": "Connect governance changes",
            "body": "Consult resource grants, delegation and review changes to understand the management context of execution."
          }
        ],
        "visual": {
          "title": "Task execution record",
          "context": "Project acceptance preparation",
          "tabs": [
            "Task steps",
            "Tool calls",
            "Deliverables"
          ],
          "request": "Prepare acceptance material from project files and retain the execution process.",
          "response": "Material retrieval and checklist preparation are complete; files and calls can be reviewed by task.",
          "columns": [
            "Step",
            "Work performed",
            "Resulting record"
          ],
          "rows": [
            [
              "Retrieve project material",
              "Find requirements and deliverables",
              "Knowledge retrieval record"
            ],
            [
              "Check acceptance items",
              "Organize material and confirmations",
              "Task step record"
            ],
            [
              "Prepare the checklist",
              "Collect files and review items",
              "Deliverable record"
            ]
          ],
          "focus": {
            "label": "Deliverable",
            "title": "Acceptance preparation checklist",
            "body": "Review the output alongside task steps, related calls and governance changes."
          },
          "files": [
            "Acceptance preparation.docx",
            "Task execution record"
          ]
        }
      }
    ]
  }
} satisfies ProductExperienceTranslations;
