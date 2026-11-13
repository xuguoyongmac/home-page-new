import type { SolutionModule } from '../types';

export default {
  "slug": "securities",
  "order": 0,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "securities",
      "icon": "chart",
      "name": "券商解决方案",
      "tag": "证券业务",
      "title": "从研究资料，到可复核的工作成果",
      "description": "围绕研报阅读、主题研究与经营分析，组合岗位技能和授权数据工具，在项目中保留资料、过程与人工复核。",
      "tasks": [
        {
          "title": "研究资料速读",
          "input": "研报、公告和已授权研究资料",
          "action": "提取事件、关键指标与观点，整理材料引用",
          "output": "研究摘要与问题清单"
        },
        {
          "title": "主题研究支持",
          "input": "研究目标、公告与授权金融数据",
          "action": "按岗位技能组织分析，保留数据口径与来源",
          "output": "主题研究底稿与报告草稿"
        },
        {
          "title": "经营分析",
          "input": "经授权接入的经营指标与明细",
          "action": "核对指标口径，整理趋势、结构和异常线索",
          "output": "分析表格、图表与经营简报"
        }
      ],
      "scope": "可围绕研究与经营分析配置岗位技能。数据许可、系统接入和交付范围在项目中确定；投资判断、适当性和对客内容由业务人员复核。",
      "image": "knowledge-research"
    },
    "en": {
      "slug": "securities",
      "icon": "chart",
      "name": "Securities",
      "tag": "Financial services",
      "title": "Turn research into reviewable deliverables",
      "description": "Combine role skills and licensed data tools for research reading, thematic analysis and business reporting, with human review.",
      "tasks": [
        {
          "title": "Research reading",
          "input": "Research reports, announcements and authorized materials",
          "action": "Extract events, indicators and viewpoints with source references",
          "output": "Research summaries and questions for review"
        },
        {
          "title": "Thematic research",
          "input": "Research goals, announcements and licensed financial data",
          "action": "Apply role skills and retain metric definitions and sources",
          "output": "Research working papers and draft reports"
        },
        {
          "title": "Business analysis",
          "input": "Authorized business metrics and transaction details",
          "action": "Check metric definitions and identify trends, structures and exceptions",
          "output": "Analysis tables, charts and business briefs"
        }
      ],
      "scope": "Configure role skills for research and business analysis. Data licensing, integrations and delivery scope are agreed for each project; business professionals review investment-related content.",
      "image": "knowledge-research"
    }
  },
  "navigation": {
    "zh": {
      "name": "证券",
      "description": "财富管理、投研投顾、合规内控",
      "icon": "chart"
    },
    "en": {
      "name": "Securities",
      "description": "Wealth management, research and compliance",
      "icon": "chart"
    }
  }
} satisfies SolutionModule;
