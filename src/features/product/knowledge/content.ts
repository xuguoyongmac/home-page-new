import type { CapabilityModule } from '../types';

export default {
  "slug": "knowledge",
  "order": 4,
  "icon": "book",
  "copy": {
    "zh": {
      "name": "知识与记忆",
      "title": "让企业经验成为每一次工作的依据",
      "description": "接入企业专有知识库，结合项目资料与工作记忆，让回答有据可依。",
      "features": [
        {
          "icon": "book",
          "title": "检索授权知识",
          "body": "在已授权的知识库中检索企业资料。"
        },
        {
          "icon": "book",
          "title": "查阅原文依据",
          "body": "结合引用核对来源，把资料依据带入工作成果。"
        },
        {
          "icon": "book",
          "title": "保留项目边界",
          "body": "项目资料检索限定在对应项目内，与企业知识库授权分别管理。"
        }
      ],
      "related": [
        {
          "path": "ecosystem",
          "label": "了解开放生态"
        }
      ]
    },
    "en": {
      "name": "Knowledge & memory",
      "title": "Put enterprise knowledge to work",
      "description": "Ground answers in enterprise knowledge, project files and work memory.",
      "features": [
        {
          "icon": "book",
          "title": "Retrieve authorized knowledge",
          "body": "Search business materials within authorized knowledge bases."
        },
        {
          "icon": "book",
          "title": "Check sources",
          "body": "Use references to review original sources and substantiate deliverables."
        },
        {
          "icon": "book",
          "title": "Respect project boundaries",
          "body": "Project retrieval stays within its project; knowledge-base access is managed separately."
        }
      ],
      "related": [
        {
          "path": "ecosystem",
          "label": "Explore the platform"
        }
      ]
    }
  }
} satisfies CapabilityModule;
