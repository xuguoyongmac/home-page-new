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
      "title": "把日常工作，连成一条协作链路",
      "description": "围绕资料研究、方案编制、客户跟进和周期报告，让人与数字员工共用项目资料，在熟悉的工作入口推进任务。",
      "tasks": [
        {
          "title": "方案与报告",
          "input": "任务目标、模板、业务资料与工作规范",
          "action": "检索知识、组织内容，衔接审阅与修改",
          "output": "可继续编辑的文档、表格和演示文稿"
        },
        {
          "title": "销售与客户经营",
          "input": "客户沟通记录和业务跟进信息",
          "action": "通过 CRM 业务插件维护客户、商机和跟进事项",
          "output": "客户资料、跟进清单与工作简报"
        },
        {
          "title": "周期工作",
          "input": "固定任务、执行周期与投递对象",
          "action": "配置定时任务，跟踪运行状态和结果投递",
          "output": "周期报告与运行记录"
        }
      ],
      "scope": "企业办公由平台通用能力承接；CRM、招投标及 EHS 业务能力随对应插件安装与授权启用。",
      "image": "collaborative-review"
    },
    "en": {
      "slug": "general",
      "icon": "folder",
      "name": "General business",
      "tag": "Business operations",
      "title": "Bring everyday work into a shared workflow",
      "description": "Work with digital employees on proposals, customer follow-ups and recurring reports using shared project materials.",
      "tasks": [
        {
          "title": "Proposals and reports",
          "input": "Goals, templates, business materials and working standards",
          "action": "Retrieve knowledge, organize content and coordinate review and revision",
          "output": "Editable documents, spreadsheets and presentations"
        },
        {
          "title": "Sales and customer operations",
          "input": "Customer communication records and follow-up information",
          "action": "Maintain customers, opportunities and follow-ups through the CRM plugin",
          "output": "Customer records, follow-up lists and briefs"
        },
        {
          "title": "Recurring work",
          "input": "Defined tasks, schedules and delivery recipients",
          "action": "Schedule tasks and follow execution and result delivery",
          "output": "Recurring reports and execution records"
        }
      ],
      "scope": "General office work uses platform capabilities. CRM, bid preparation and EHS require the corresponding plugins and permissions.",
      "image": "collaborative-review"
    }
  }
} satisfies SolutionModule;
