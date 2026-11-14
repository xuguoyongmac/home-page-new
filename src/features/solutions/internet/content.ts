import type { SolutionModule } from '../types';

export default {
  "slug": "internet",
  "order": 5,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "internet",
      "icon": "globe",
      "name": "互联网与泛行业解决方案",
      "tag": "互联网与泛行业",
      "title": "把团队的精力，用在产品与增长",
      "description": "围绕产品投入、增长决策、客户推进和团队积累，减少资料准备与反复交接对业务精力的消耗。",
      "scope": "方案使用平台通用能力；CRM 随插件安装授权启用，外部系统与投递渠道按具体连接配置。",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "市场资料研究",
          "input": "公开资料与已授权内部材料",
          "action": "按研究目标整理信息和来源",
          "output": "市场简报与问题清单"
        },
        {
          "title": "客户跟进支持",
          "input": "沟通纪要与需求资料",
          "action": "结合 CRM 插件整理客户和跟进工作",
          "output": "客户记录与沟通准备材料"
        },
        {
          "title": "周期工作简报",
          "input": "项目进展和工作记录",
          "action": "按配置周期汇集信息并投递结果",
          "output": "项目周报与运行记录"
        }
      ]
    },
    "en": {
      "slug": "internet",
      "icon": "globe",
      "name": "Internet & cross-industry",
      "tag": "Internet & cross-industry",
      "title": "Put your team’s energy into product and growth",
      "description": "Focus product investment, ground growth decisions, keep customer opportunities moving and retain team experience.",
      "scope": "Uses general platform capabilities. CRM requires its installed and authorized plugin; systems and delivery channels depend on configured connections.",
      "image": "collaborative-review",
      "tasks": [
        {
          "title": "Market research",
          "input": "Public and authorized internal sources",
          "action": "Organize findings and sources around the research goal",
          "output": "Market briefs and questions"
        },
        {
          "title": "Customer follow-ups",
          "input": "Conversation notes and requirements",
          "action": "Organize customer work through the CRM plugin",
          "output": "Customer records and preparation materials"
        },
        {
          "title": "Recurring briefs",
          "input": "Project progress and work records",
          "action": "Collect information on a configured schedule",
          "output": "Project briefs and execution records"
        }
      ]
    }
  },
  "navigation": {
    "zh": {
      "name": "互联网与泛行业",
      "description": "研发协同、运营提效、综合办公",
      "icon": "globe"
    },
    "en": {
      "name": "Internet & cross-industry",
      "description": "Development, operations and office workflows",
      "icon": "globe"
    }
  }
} satisfies SolutionModule;
