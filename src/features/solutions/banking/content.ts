import type { SolutionModule } from '../types';

export default {
  "slug": "banking",
  "order": 2,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "banking",
      "icon": "book",
      "name": "银行解决方案",
      "tag": "银行解决方案",
      "title": "让制度知识与经营资料，支持一线工作",
      "description": "围绕制度查询、经营简报与会议材料，组合企业知识、资料处理与项目协作能力。",
      "scope": "基于平台通用能力组合建设；银行系统接入、数据授权及业务规则按项目确定，授信审批与对客结论由有权人员作出。",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "制度知识查询",
          "input": "已授权制度与业务规范",
          "action": "检索条款并整理引用",
          "output": "知识答复与条款出处"
        },
        {
          "title": "经营材料整理",
          "input": "经授权提供的经营报表",
          "action": "核对口径，整理趋势和待核对事项",
          "output": "分析底稿与简报草稿"
        },
        {
          "title": "会议与跟进",
          "input": "会议记录及业务附件",
          "action": "汇集讨论结论，整理行动项",
          "output": "纪要草稿与行动清单"
        }
      ]
    },
    "en": {
      "slug": "banking",
      "icon": "book",
      "name": "Banking",
      "tag": "Banking",
      "title": "Connect policy knowledge and business materials",
      "description": "Combine knowledge retrieval, reporting and project collaboration for policy queries, business briefs and meeting materials.",
      "scope": "Built from general platform capabilities. System access, data authorization and business rules are scoped per project. Authorized personnel retain credit and client-facing decisions.",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "Policy queries",
          "input": "Authorized policies and standards",
          "action": "Retrieve provisions and retain references",
          "output": "Answers and provision references"
        },
        {
          "title": "Business briefs",
          "input": "Authorized business reports",
          "action": "Check definitions and organize trends and questions",
          "output": "Working papers and draft briefs"
        },
        {
          "title": "Meetings and follow-ups",
          "input": "Meeting records and attachments",
          "action": "Organize decisions and actions",
          "output": "Draft minutes and action lists"
        }
      ]
    }
  },
  "navigation": {
    "zh": {
      "name": "银行",
      "description": "信贷审核、网点运营、风控合规",
      "icon": "bank"
    },
    "en": {
      "name": "Banking",
      "description": "Credit review, branch operations and risk",
      "icon": "bank"
    }
  }
} satisfies SolutionModule;
