import type { SolutionModule } from '../types';

export default {
  "slug": "general",
  "order": 6,
  "category": "general",
  "copy": {
    "zh": {
      "slug": "general",
      "icon": "folder",
      "name": "通用解决方案",
      "tag": "企业办公",
      "title": "让重复的准备工作，变成持续交付的能力",
      "description": "围绕方案报告、客户跟进和周期工作，让数字员工使用企业资料与岗位方法，在同一项目中完成准备、协作和交付。",
      "tasks": [
        {
          "title": "方案与报告编制",
          "problem": "相似项目反复找资料、搭结构，准备工作挤占专业判断。",
          "input": "工作目标、企业知识、历史方案和模板",
          "action": "检索依据，组织方案与图表，在项目中衔接审阅、修改和定稿。",
          "output": "可编辑的方案、报告与演示文稿",
          "value": "让经验成为下一次工作的起点。"
        },
        {
          "title": "销售与客户跟进",
          "problem": "沟通记录、商机与待办分散，后续工作反复补背景。",
          "input": "客户沟通记录、需求材料和业务跟进信息",
          "action": "结合 CRM 插件整理客户、商机、会议结论与下一步工作。",
          "output": "客户记录、跟进计划与沟通材料",
          "value": "把每次沟通接到下一步行动。"
        },
        {
          "title": "周期工作与持续跟踪",
          "problem": "固定报表与资料整理反复开展，结果常靠人工提醒。",
          "input": "固定任务、执行周期、资料来源与投递对象",
          "action": "配置定时任务，汇集信息生成周期成果，查看运行记录和结果投递。",
          "output": "周期报告、事项清单与运行记录",
          "value": "让例行工作持续推进。"
        }
      ],
      "scope": "企业办公由平台通用能力承接；CRM、招投标及 EHS 业务能力随对应插件安装与授权启用。",
      "image": "collaborative-review",
      "story": {
        "lines": [
          "让重复的准备工作",
          "变成持续交付的能力"
        ],
        "priorities": [
          {
            "title": "减少重复准备",
            "body": "相同资料与工作框架在不同项目中被反复整理。"
          },
          {
            "title": "接续团队协作",
            "body": "沟通、文件与客户背景分散，交接需要重新说明。"
          },
          {
            "title": "持续完成周期工作",
            "body": "固定报表和跟进任务需要稳定的执行与结果投递。"
          }
        ],
        "exhibit": {
          "title": "项目方案交付包",
          "request": "结合项目资料与历史方案，准备本次方案、汇报与跟进工作。",
          "sources": [
            "项目资料",
            "企业知识",
            "岗位技能"
          ],
          "columns": [
            "工作",
            "执行动作",
            "交付成果"
          ],
          "rows": [
            [
              "方案编制",
              "检索依据并组织内容",
              "方案与报告"
            ],
            [
              "客户跟进",
              "关联沟通与商机记录",
              "跟进事项"
            ],
            [
              "周期汇报",
              "按配置周期汇集信息",
              "周期成果"
            ]
          ],
          "deliverables": [
            "方案报告 · DOCX",
            "项目汇报 · PPT"
          ]
        },
        "foundation": [
          {
            "title": "从现有资料开始",
            "body": "将任务目标、模板和业务文件放入项目，分配成员与知识访问范围。"
          },
          {
            "title": "组合岗位方法与工具",
            "body": "通过技能组织任务，CRM、招投标及 EHS 业务随对应插件安装与授权启用。"
          },
          {
            "title": "在项目中完成交付",
            "body": "业务人员审阅和修改成果，保留版本；定时工作按配置周期执行与投递。"
          }
        ]
      }
    },
    "en": {
      "slug": "general",
      "icon": "folder",
      "name": "General business",
      "tag": "Business operations",
      "title": "Turn repeated preparation into ongoing delivery",
      "description": "Use company knowledge and role methods for proposals, client follow-ups and recurring work, with collaboration and delivery in one project.",
      "tasks": [
        {
          "title": "Proposals and reports",
          "problem": "Repeated collection and structuring leaves less time for professional judgment.",
          "input": "Goals, company knowledge, past proposals and templates",
          "action": "Retrieve evidence, prepare content and charts, then review and finalize in the project.",
          "output": "Editable proposals, reports and presentations",
          "value": "Make past experience a starting point."
        },
        {
          "title": "Sales and client follow-up",
          "problem": "Scattered notes and opportunities force repeated context gathering.",
          "input": "Client conversations, requirements and follow-up records",
          "action": "Use the CRM plugin to organize clients, opportunities, meeting decisions and next actions.",
          "output": "Client records, follow-up plans and service materials",
          "value": "Connect each conversation to the next action."
        },
        {
          "title": "Recurring work",
          "problem": "Routine reports and information collection still depend on reminders.",
          "input": "Tasks, schedules, sources and recipients",
          "action": "Configure scheduled work, generate recurring deliverables and review execution and delivery records.",
          "output": "Recurring reports, action lists and run records",
          "value": "Keep routine work moving."
        }
      ],
      "scope": "General office work uses platform capabilities. CRM, bid preparation and EHS require the corresponding plugins and permissions.",
      "image": "collaborative-review",
      "story": {
        "lines": [
          "Turn repeated preparation",
          "into ongoing delivery"
        ],
        "priorities": [
          {
            "title": "Reuse preparation",
            "body": "Similar projects repeatedly gather the same sources and work structures."
          },
          {
            "title": "Carry context forward",
            "body": "Conversations, files and client background need to remain connected."
          },
          {
            "title": "Keep recurring work moving",
            "body": "Routine reporting needs scheduled execution and result delivery."
          }
        ],
        "exhibit": {
          "title": "Project delivery package",
          "request": "Use project sources and past work to prepare a proposal, presentation and follow-up.",
          "sources": [
            "Project files",
            "Company knowledge",
            "Role skills"
          ],
          "columns": [
            "Work",
            "Action",
            "Deliverable"
          ],
          "rows": [
            [
              "Proposal",
              "Retrieve and structure evidence",
              "Proposal and report"
            ],
            [
              "Client follow-up",
              "Connect notes and opportunities",
              "Next actions"
            ],
            [
              "Recurring reporting",
              "Collect on a configured schedule",
              "Recurring output"
            ]
          ],
          "deliverables": [
            "Proposal · DOCX",
            "Presentation · PPT"
          ]
        },
        "foundation": [
          {
            "title": "Start with existing materials",
            "body": "Bring goals, templates and business files into the project with member and knowledge access."
          },
          {
            "title": "Combine methods and tools",
            "body": "Use skills for work methods. CRM, bidding and EHS depend on installed, authorized plugins."
          },
          {
            "title": "Complete delivery in the project",
            "body": "Review and edit results, retain versions and configure recurring execution and delivery."
          }
        ]
      }
    }
  }
} satisfies SolutionModule;
