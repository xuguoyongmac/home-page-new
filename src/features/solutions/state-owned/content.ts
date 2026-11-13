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
      "title": "围绕知识、项目与成果，组织团队协作",
      "description": "组合制度知识、项目协作、招投标与企业管理能力，在企业部署环境中开展资料处理和成果交付。",
      "tasks": [
        {
          "title": "文书与制度知识",
          "input": "制度文件、材料模板与已授权业务资料",
          "action": "检索依据、组织文书内容，提交人工审阅",
          "output": "文书草稿、制度摘要与引用"
        },
        {
          "title": "招投标协作",
          "input": "招标文件、资质、产品资料与团队材料",
          "action": "通过标书业务插件组织分析、编制与协作",
          "output": "响应资料、编制成果与项目版本"
        },
        {
          "title": "项目与安全管理",
          "input": "项目文件、任务事项与安全业务材料",
          "action": "组织成员协作，结合 EHS 插件推进相关工作",
          "output": "项目成果、待办与安全工作材料"
        }
      ],
      "scope": "由通用平台、招投标和 EHS 等能力组合建设。LDAP、私有化、本地模型和银河麒麟专项交付按具体环境确定。",
      "image": "enterprise-connections"
    },
    "en": {
      "slug": "state-owned",
      "icon": "network",
      "name": "State-owned enterprises",
      "tag": "Enterprise collaboration",
      "title": "Organize knowledge, projects and deliverables",
      "description": "Combine knowledge, projects, bid preparation and enterprise governance in your deployment environment.",
      "tasks": [
        {
          "title": "Documents and policy knowledge",
          "input": "Policies, templates and authorized business materials",
          "action": "Retrieve sources, prepare drafts and submit them for human review",
          "output": "Document drafts, policy summaries and references"
        },
        {
          "title": "Bid collaboration",
          "input": "Tender documents, qualifications, product and team materials",
          "action": "Use the bidding plugin for analysis, preparation and collaboration",
          "output": "Response materials, prepared documents and project versions"
        },
        {
          "title": "Projects and safety",
          "input": "Project files, tasks and safety management materials",
          "action": "Coordinate team work and use the EHS plugin for relevant activities",
          "output": "Project deliverables, tasks and safety documents"
        }
      ],
      "scope": "Assembled from the platform, bid and EHS capabilities. Private deployment, local models, LDAP and Kylin delivery depend on the agreed environment.",
      "image": "enterprise-connections"
    }
  }
} satisfies SolutionModule;
