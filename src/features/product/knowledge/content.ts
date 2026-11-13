import type { CapabilityModule } from '../types';

export default {
  "slug": "knowledge",
  "order": 3,
  "icon": "book",
  "copy": {
    "zh": {
      "name": "企业知识与记忆",
      "title": "让企业经验成为每一次工作的依据",
      "description": "使用已授权的企业知识和项目资料，检索引用，让经验延续到下一次工作。",
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
      "name": "Knowledge and memory",
      "title": "Put enterprise knowledge to work",
      "description": "Use authorized enterprise knowledge, project materials and source references.",
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
