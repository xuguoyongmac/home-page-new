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
      "title": "让资料与制度，接到具体工作",
      "description": "围绕政策资料整理、会议材料和内部协作，组合企业知识、数字员工与项目文件，衔接人工审阅和成果归档。",
      "tasks": [
        {
          "title": "政策资料整理",
          "input": "已授权政策文件与办事资料",
          "action": "检索条款、整理出处，形成按主题组织的材料",
          "output": "带引用的资料摘要与条款清单"
        },
        {
          "title": "会议材料编制",
          "input": "议程、会议记录与相关附件",
          "action": "整理讨论要点、决议草稿和待办事项",
          "output": "会议纪要草稿与行动项清单"
        },
        {
          "title": "制度知识查询",
          "input": "已授权的制度知识库",
          "action": "按问题检索制度内容，返回引用与原文依据",
          "output": "知识答复与文件引用"
        }
      ],
      "scope": "基于平台通用能力组合建设。公文格式、资料范围、政务系统连接与发布权限按项目确定；正式文件由责任人员审定。",
      "image": "knowledge-research"
    },
    "en": {
      "slug": "government",
      "icon": "book",
      "name": "Government",
      "tag": "Public sector",
      "title": "Connect policies and knowledge to everyday work",
      "description": "Combine authorized knowledge, digital employees and shared projects for policy research, meeting materials and internal collaboration.",
      "tasks": [
        {
          "title": "Policy research",
          "input": "Authorized policies and service documents",
          "action": "Find relevant provisions, record sources and organize material by topic",
          "output": "A referenced brief and provision checklist"
        },
        {
          "title": "Meeting materials",
          "input": "Agenda, meeting notes and relevant attachments",
          "action": "Organize discussion points, draft decisions and follow-up work",
          "output": "Draft minutes and an action list"
        },
        {
          "title": "Policy knowledge queries",
          "input": "An authorized policy knowledge base",
          "action": "Retrieve relevant provisions and return original sources",
          "output": "Answers with document references"
        }
      ],
      "scope": "A solution assembled from general platform capabilities. Public-sector connections and document approval require project-specific implementation.",
      "image": "knowledge-research"
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
