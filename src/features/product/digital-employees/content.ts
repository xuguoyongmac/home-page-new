import type { CapabilityModule } from '../types';

export default {
  "slug": "digital-employees",
  "order": 0,
  "icon": "network",
  "copy": {
    "zh": {
      "name": "岗位数字员工",
      "title": "让岗位有明确分工，让工作有合适的人选",
      "description": "按真实岗位配置职责、权限与技能，招募即上岗。",
      "features": [
        {
          "icon": "network",
          "title": "选择岗位模板",
          "body": "用数字员工模板复用岗位配置，再招募为独立运行的数字员工。"
        },
        {
          "icon": "network",
          "title": "配置工作能力",
          "body": "按任务范围配置模型、知识、技能和插件。"
        },
        {
          "icon": "network",
          "title": "管理使用范围",
          "body": "结合组织角色和授权，明确谁可以使用与管理数字员工。"
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
      "name": "Role-based employees",
      "title": "Give each role the right digital employee",
      "description": "Define role responsibilities, access and skills. Recruit and get to work.",
      "features": [
        {
          "icon": "network",
          "title": "Choose a role template",
          "body": "Reuse a role configuration, then recruit an independently running digital employee."
        },
        {
          "icon": "network",
          "title": "Configure capabilities",
          "body": "Connect models, knowledge, skills and plugins for the task."
        },
        {
          "icon": "network",
          "title": "Define access",
          "body": "Control who can use and manage digital employees through roles and authorization."
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
