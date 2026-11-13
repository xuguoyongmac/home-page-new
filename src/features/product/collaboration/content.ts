import type { CapabilityModule } from '../types';

export default {
  "slug": "collaboration",
  "order": 3,
  "icon": "folder",
  "copy": {
    "zh": {
      "name": "团队协作",
      "title": "让资料、协作与成果，围绕同一个项目展开",
      "description": "在项目与工作会话中，实现人机协同、文件共享与成果交付。",
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
      "name": "Team collaboration",
      "title": "Keep the team, context and deliverables together",
      "description": "Share files, collaborate and deliver in projects and work conversations.",
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
