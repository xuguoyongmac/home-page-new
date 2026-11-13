import type { CapabilityModule } from '../types';

export default {
  "slug": "collaboration",
  "order": 1,
  "icon": "folder",
  "copy": {
    "zh": {
      "name": "项目与团队协作",
      "title": "让资料、协作与成果，围绕同一个项目展开",
      "description": "共用项目资料，在工作会话中讨论、交办和跟进，保留文件与成果版本。",
      "features": [
        {
          "icon": "folder",
          "title": "共用工作上下文",
          "body": "把成员、资料与会话组织到项目，按项目权限协作。"
        },
        {
          "icon": "folder",
          "title": "衔接人工判断",
          "body": "通过事项流转，承接问询、审批与需要同事接手的工作。"
        },
        {
          "icon": "folder",
          "title": "延续成果修改",
          "body": "保留项目文件和历史版本，支持成果审阅与后续修改。"
        }
      ],
      "related": [
        {
          "path": "product",
          "label": "查看平台能力"
        }
      ]
    },
    "en": {
      "name": "Projects and collaboration",
      "title": "Keep the team, context and deliverables together",
      "description": "Share project files, assign work in conversation and retain deliverable versions.",
      "features": [
        {
          "icon": "folder",
          "title": "Share context",
          "body": "Organize members, files and conversations within project access controls."
        },
        {
          "icon": "folder",
          "title": "Involve people",
          "body": "Route questions, approvals and handoffs to the appropriate colleagues."
        },
        {
          "icon": "folder",
          "title": "Continue from the result",
          "body": "Keep project files and versions for review and revision."
        }
      ],
      "related": [
        {
          "path": "product",
          "label": "Explore the platform"
        }
      ]
    }
  }
} satisfies CapabilityModule;
