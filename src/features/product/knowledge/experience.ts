import type { ProductExperienceTranslations } from '../experience-types';

export default {
  "zh": {
    "heroAlt": "二维企业知识工作界面：左侧归集制度和项目资料，中间用自然语言检索，右侧答复关联原文引用，展现从企业知识到业务成果的过程。",
    "sectionTitle": "让知识进入业务，覆盖资料到成果的工作过程",
    "sections": [
      {
        "id": "library",
        "kind": "knowledge",
        "title": "让制度与经验进入同一知识体系",
        "body": "把散落的制度、档案和历史方案整理进企业知识库。维护资料、版本与检索配置，让数字员工找到工作所需的内容。",
        "points": [
          {
            "title": "资料持续维护",
            "body": "按知识库和文件夹管理，支持批量上传、同名替换、版本查看与重新处理。"
          },
          {
            "title": "检索围绕问题调整",
            "body": "解析清洗文档并建立分片和索引，配置关键词、语义或混合检索，通过测试核对命中结果。"
          }
        ],
        "visual": {
          "title": "企业知识库",
          "context": "项目交付知识库",
          "tabs": [
            "资料",
            "检索测试",
            "权限"
          ],
          "request": "查找项目验收需要的材料和签署要求。",
          "response": "已定位交付管理办法、验收清单和服务方案，可带入任务继续编制。",
          "columns": [
            "资料",
            "处理状态",
            "适用内容"
          ],
          "rows": [
            [
              "项目交付管理办法.pdf",
              "可检索",
              "验收流程与职责"
            ],
            [
              "交付物验收清单.xlsx",
              "可检索",
              "材料与确认项"
            ],
            [
              "年度服务方案.docx",
              "可检索",
              "服务范围与交付标准"
            ]
          ],
          "focus": {
            "label": "检索配置",
            "title": "关键词与语义联合检索",
            "body": "调节召回权重与阈值，用业务问题核对命中片段。"
          },
          "files": [
            "项目交付管理办法.pdf",
            "检索测试记录"
          ]
        }
      },
      {
        "id": "evidence",
        "kind": "knowledge",
        "title": "回答能用，依据也能找到",
        "body": "从适用制度里提取要求，将依据带进答复和文稿。业务人员沿着引用回看原文片段与上下文，让复核聚焦内容。",
        "points": [
          {
            "title": "先找适用依据",
            "body": "数字员工结合问题和已授权知识，检索业务规则、要求与相关材料。"
          },
          {
            "title": "结论关联原文",
            "body": "引用保留来源线索，从答复或文稿定位原文片段与上下文。"
          }
        ],
        "visual": {
          "title": "带依据的业务答复",
          "context": "项目验收准备",
          "tabs": [
            "答复",
            "引用来源",
            "原文"
          ],
          "request": "依据交付制度，整理项目验收准备清单。",
          "response": "验收准备包括成果清单、版本核对与确认材料，相关要求已关联原文。",
          "columns": [
            "依据",
            "原文内容",
            "用于"
          ],
          "rows": [
            [
              "项目交付管理办法",
              "核对约定成果与交付清单",
              "验收条件"
            ],
            [
              "交付物验收清单",
              "记录文档版本与确认事项",
              "材料准备"
            ],
            [
              "年度服务方案",
              "核对服务范围与交付标准",
              "范围核对"
            ]
          ],
          "focus": {
            "label": "引用原文",
            "title": "项目交付管理办法 · 验收准备",
            "body": "核对约定成果、文档版本与确认材料，整理验收事项。"
          },
          "files": [
            "验收准备清单.docx",
            "原文引用记录"
          ]
        }
      },
      {
        "id": "reuse",
        "kind": "document",
        "title": "让上一项工作的积累，接上下一项任务",
        "body": "在项目空间保留工作背景、资料和成果。从有权访问的历史项目中选择可复用材料，带入当前项目，结合新的业务目标继续完善。",
        "points": [
          {
            "title": "复用资料与背景",
            "body": "选择有权访问的历史方案与交付文档，加入当前项目后，结合已有背景和新的目标继续编制。"
          },
          {
            "title": "共享遵循访问范围",
            "body": "知识库按成员、部门和角色授权；项目资料检索限定在对应项目和成员范围。"
          }
        ],
        "visual": {
          "title": "项目资料与成果",
          "context": "澄越数智服务项目",
          "tabs": [
            "项目资料",
            "成果版本",
            "成员"
          ],
          "request": "结合项目资料，更新下一阶段服务方案。",
          "response": "已整理当前服务范围、前期交付经验与待确认事项，形成方案修订稿。",
          "columns": [
            "项目材料",
            "当前用途",
            "工作结果"
          ],
          "rows": [
            [
              "前期交付总结.docx",
              "复用项目经验",
              "整理执行建议"
            ],
            [
              "服务范围说明.pdf",
              "核对业务边界",
              "更新服务内容"
            ],
            [
              "阶段工作纪要.docx",
              "衔接当前背景",
              "补充行动安排"
            ]
          ],
          "focus": {
            "label": "当前成果",
            "title": "下一阶段服务方案 · 修订稿",
            "body": "延续项目背景与资料，结合当前目标完善服务安排。"
          },
          "files": [
            "下一阶段服务方案.docx",
            "服务安排核对清单.xlsx"
          ]
        }
      }
    ]
  },
  "en": {
    "heroAlt": "A two-dimensional enterprise knowledge workspace showing source materials, natural-language retrieval, and an answer linked to original passages and a business deliverable.",
    "sectionTitle": "Carry knowledge from source material into the work",
    "sections": [
      {
        "id": "library",
        "kind": "knowledge",
        "title": "Organize policies and experience in one knowledge system",
        "body": "Bring scattered policies, archives and proposals into enterprise libraries. Maintain files, versions and retrieval settings so digital employees can find the material a task needs.",
        "points": [
          {
            "title": "Keep source material current",
            "body": "Manage libraries and folders with bulk upload, replacement, version review and reprocessing."
          },
          {
            "title": "Tune retrieval around real questions",
            "body": "Parse, clean, chunk and index documents. Configure keyword, semantic or hybrid retrieval and test the returned passages."
          }
        ],
        "visual": {
          "title": "Enterprise knowledge",
          "context": "Project delivery library",
          "tabs": [
            "Materials",
            "Retrieval test",
            "Access"
          ],
          "request": "Find the materials and sign-off requirements for project acceptance.",
          "response": "Located the delivery policy, acceptance checklist and service proposal for the next drafting step.",
          "columns": [
            "Source",
            "Status",
            "Relevant content"
          ],
          "rows": [
            [
              "Delivery policy.pdf",
              "Searchable",
              "Acceptance and responsibilities"
            ],
            [
              "Acceptance checklist.xlsx",
              "Searchable",
              "Materials and confirmations"
            ],
            [
              "Annual service proposal.docx",
              "Searchable",
              "Scope and deliverables"
            ]
          ],
          "focus": {
            "label": "Retrieval settings",
            "title": "Keyword and semantic retrieval",
            "body": "Tune weights and thresholds, then check passages against business questions."
          },
          "files": [
            "Delivery policy.pdf",
            "Retrieval test record"
          ]
        }
      },
      {
        "id": "evidence",
        "kind": "knowledge",
        "title": "Keep useful answers connected to their evidence",
        "body": "Retrieve applicable requirements and bring them into answers and drafts. Reviewers can follow references to the original passage and surrounding context.",
        "points": [
          {
            "title": "Find applicable material first",
            "body": "Digital employees retrieve relevant rules and supporting content from the caller’s authorized knowledge."
          },
          {
            "title": "Link conclusions to original passages",
            "body": "Retain source references in the answer or draft so the evidence stays within reach."
          }
        ],
        "visual": {
          "title": "Evidence-backed answer",
          "context": "Preparing project acceptance",
          "tabs": [
            "Answer",
            "Sources",
            "Original text"
          ],
          "request": "Use the delivery policy to prepare an acceptance checklist.",
          "response": "Preparation covers the deliverable list, version checks and confirmation material, with sources attached.",
          "columns": [
            "Source",
            "Relevant passage",
            "Used for"
          ],
          "rows": [
            [
              "Delivery policy",
              "Check agreed deliverables against the list",
              "Acceptance conditions"
            ],
            [
              "Acceptance checklist",
              "Record document versions and confirmations",
              "Required materials"
            ],
            [
              "Annual service proposal",
              "Check scope and delivery standards",
              "Scope review"
            ]
          ],
          "focus": {
            "label": "Original source",
            "title": "Delivery policy · Acceptance preparation",
            "body": "Check deliverables, document versions and confirmation material when preparing acceptance."
          },
          "files": [
            "Acceptance preparation.docx",
            "Source reference record"
          ]
        }
      },
      {
        "id": "reuse",
        "kind": "document",
        "title": "Carry previous work into the next assignment",
        "body": "Retain project context, material and deliverables. Select reusable material from past projects you can access, bring it into the current project, and adapt it to the new objective.",
        "points": [
          {
            "title": "Reuse material with its context",
            "body": "Select previous proposals and deliverables you can access. Add them to the current project and adapt them to its context and objective."
          },
          {
            "title": "Keep sharing within access boundaries",
            "body": "Libraries use member, department and role permissions. Project retrieval stays within the relevant project and its members."
          }
        ],
        "visual": {
          "title": "Project material and deliverables",
          "context": "Chengyue Digital Services Project",
          "tabs": [
            "Project files",
            "Versions",
            "Members"
          ],
          "request": "Use the project material to update the next service phase proposal.",
          "response": "Organized the current scope, delivery experience and open items into a revised proposal.",
          "columns": [
            "Project material",
            "Current use",
            "Work result"
          ],
          "rows": [
            [
              "Delivery review.docx",
              "Reuse project experience",
              "Execution recommendations"
            ],
            [
              "Service scope.pdf",
              "Check business boundaries",
              "Updated scope"
            ],
            [
              "Project meeting notes.docx",
              "Carry context forward",
              "Action plan"
            ]
          ],
          "focus": {
            "label": "Current deliverable",
            "title": "Next-phase service proposal · Revision",
            "body": "Carry project context forward and refine service arrangements for the current objective."
          },
          "files": [
            "Next-phase proposal.docx",
            "Service review checklist.xlsx"
          ]
        }
      }
    ]
  }
} satisfies ProductExperienceTranslations;
