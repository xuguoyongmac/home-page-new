import type { CapabilityModule } from '../types';

export default {
  "slug": "digital-employees",
  "order": 0,
  "icon": "network",
  "copy": {
    "zh": {
      "name": "按岗位配置数字员工",
      "title": "让岗位有明确分工，让工作有合适的人选",
      "description": "通过数字员工模板招募数字员工，为岗位配置职责、企业知识、技能和工具。",
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
      "name": "Role-based digital employees",
      "title": "Give each role the right digital employee",
      "description": "Recruit from templates and configure responsibilities, knowledge, skills and tools.",
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
