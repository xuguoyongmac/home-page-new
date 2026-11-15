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
      "tag": "政务办公",
      "title": "政策研判有依据，会议部署有闭环",
      "description": "数字员工围绕政策检索、综合文稿、会议督办与材料初核开展工作，将分散资料整理为可审阅、可交接的政务工作成果。",
      "tasks": [
        {
          "title": "政策研判与综合文稿",
          "problem": "同一主题涉及多份政策，整理依据与准备材料反复耗时。",
          "input": "授权政策文件、历史文稿与写作要求",
          "action": "按主题检索条款，对照适用范围和政策变化，结合既有材料组织文稿。",
          "output": "政策对照、专题材料与文稿草稿",
          "value": "让汇报结论和工作建议找到依据。"
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
          "title": "办事材料初核与制度问答",
          "problem": "材料要求分散，工作人员需要同时查规则、查文件。",
          "input": "办事指南、材料清单、申请附件与授权制度",
          "action": "检索办理要求，对照提交材料整理缺项，答复关联原文依据。",
          "output": "材料补正清单、带引用的业务答复",
          "value": "让办理准备更清晰，减少反复查找。"
        }
      ],
      "scope": "基于平台通用能力组合建设。公文格式、资料范围、政务系统连接与发布权限按项目确定；正式文件由责任人员审定。",
      "image": "knowledge-research",
      "story": {
        "lines": [
          "政策研判有依据",
          "会议部署有闭环"
        ],
        "priorities": [
          {
            "title": "决策材料需要可靠依据",
            "body": "专题汇报需要跨文件整理政策背景、现状与问题，形成可以审阅的材料。"
          },
          {
            "title": "会议部署需要持续跟进",
            "body": "决议、责任分工和进展反馈分散，难以直接形成完整的督办材料。"
          },
          {
            "title": "服务准备需要明确规则",
            "body": "政策与材料清单更新后，工作人员仍需要快速找到适用依据。"
          }
        ],
        "exhibit": {
          "title": "会议部署与督办事项表",
          "request": "从会议记录与附件中整理决议，衔接责任分工和进展材料。",
          "sources": [
            "会议记录",
            "议题附件",
            "进展反馈"
          ],
          "columns": [
            "工作事项",
            "关联材料",
            "下一步工作"
          ],
          "rows": [
            [
              "决议整理",
              "讨论结论与附件",
              "形成纪要"
            ],
            [
              "责任分工",
              "牵头与协同安排",
              "整理事项表"
            ],
            [
              "进展跟进",
              "反馈与完成材料",
              "汇总进展简报"
            ]
          ],
          "deliverables": [
            "会议纪要 · DOCX",
            "督办事项表 · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "使用授权政务资料",
            "body": "归集政策、办事指南、历史文稿和会议材料；检索保留原文出处。"
          },
          {
            "title": "对齐公文与办理规范",
            "body": "按项目配置公文格式、材料清单和工作方法，连接所需政务系统与协作入口。"
          },
          {
            "title": "成果交给责任人员",
            "body": "材料初核、文稿和督办整理衔接人工审阅，正式文件及办理结论由责任人员审定。"
          }
        ]
      }
    },
    "en": {
      "slug": "government",
      "icon": "book",
      "name": "Government",
      "tag": "Public sector",
      "title": "Ground policy research. Follow through on decisions",
      "description": "Digital employees support policy research, briefing preparation, meeting follow-ups and document pre-checks with reviewable, transferable work products.",
      "tasks": [
        {
          "title": "Policy research and drafting",
          "problem": "A policy topic spans many documents and repeated preparation.",
          "input": "Authorized policies, past briefs and drafting requirements",
          "action": "Compare provisions, scope and changes; organize referenced material into a brief.",
          "output": "Policy comparison, topical brief and document draft",
          "value": "Give decisions and recommendations an evidence base."
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
          "title": "Document pre-check and policy answers",
          "problem": "Staff must search both rules and submitted files.",
          "input": "Service guides, checklists, application files and authorized policies",
          "action": "Find requirements, compare submitted documents and attach the relevant source provisions.",
          "output": "Missing-document list and referenced answers",
          "value": "Make service preparation clearer."
        }
      ],
      "scope": "A solution assembled from general platform capabilities. Public-sector connections and document approval require project-specific implementation.",
      "image": "knowledge-research",
      "story": {
        "lines": [
          "Ground policy research",
          "Follow through on decisions"
        ],
        "priorities": [
          {
            "title": "Prepare decision materials",
            "body": "Briefings combine policy context, current conditions and problems across documents."
          },
          {
            "title": "Connect decisions to follow-up",
            "body": "Responsibilities and progress updates need to remain linked to the original decision."
          },
          {
            "title": "Find applicable requirements",
            "body": "Staff need the current policy and material requirements for each service task."
          }
        ],
        "exhibit": {
          "title": "Meeting decisions and action workbook",
          "request": "Organize decisions, responsibilities and progress material from meeting records.",
          "sources": [
            "Meeting records",
            "Agenda attachments",
            "Progress updates"
          ],
          "columns": [
            "Work",
            "Evidence",
            "Next step"
          ],
          "rows": [
            [
              "Decisions",
              "Conclusions and attachments",
              "Prepare minutes"
            ],
            [
              "Responsibilities",
              "Lead and supporting teams",
              "Organize actions"
            ],
            [
              "Progress",
              "Updates and completion files",
              "Prepare progress brief"
            ]
          ],
          "deliverables": [
            "Meeting minutes · DOCX",
            "Action workbook · XLSX"
          ]
        },
        "foundation": [
          {
            "title": "Use authorized sources",
            "body": "Collect policy, service guides, historical documents and meeting material with original references."
          },
          {
            "title": "Configure work standards",
            "body": "Set document formats, checklists and methods; connect the required systems and collaboration channels."
          },
          {
            "title": "Involve responsible officials",
            "body": "Bring pre-check findings, drafts and follow-ups to review. Responsible staff approve formal documents and service decisions."
          }
        ]
      }
    }
  },
  "navigation": {
    "zh": {
      "name": "数字政务",
      "description": "综合文稿、会议协同、政务办理",
      "icon": "landmark"
    },
    "en": {
      "name": "Digital government",
      "description": "Documents, meetings and public services",
      "icon": "landmark"
    }
  }
} satisfies SolutionModule;
