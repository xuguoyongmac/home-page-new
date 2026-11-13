import type { CapabilityModule } from '../types';

export default {
  "slug": "governance",
  "order": 5,
  "icon": "shield",
  "copy": {
    "zh": {
      "name": "权限与审计",
      "title": "让数字员工进入企业，也进入管理体系",
      "description": "基于组织身份与业务委托严格授权，全过程留痕，成果可追溯。",
      "features": [
        {
          "icon": "shield",
          "title": "组织与角色",
          "body": "通过组织角色与 LDAP 等配置管理人员访问。"
        },
        {
          "icon": "shield",
          "title": "授权与审计",
          "body": "管理业务委托，结合操作记录追溯工作过程与成果。"
        },
        {
          "icon": "shield",
          "title": "部署与运营",
          "body": "结合私有化部署、本地模型和用量管理确定运行方式。"
        }
      ],
      "related": [
        {
          "path": "enterprise",
          "label": "了解企业部署"
        }
      ]
    },
    "en": {
      "name": "Access & audit",
      "title": "Bring digital employees into enterprise governance",
      "description": "Authorize by identity and delegation. Trace work and deliverables.",
      "features": [
        {
          "icon": "shield",
          "title": "Organization and roles",
          "body": "Manage access through organizational roles and configured LDAP integration."
        },
        {
          "icon": "shield",
          "title": "Authorization and audit",
          "body": "Manage delegation and use operation records to trace work and deliverables."
        },
        {
          "icon": "shield",
          "title": "Deployment and operations",
          "body": "Choose deployment, local models and usage management for the environment."
        }
      ],
      "related": [
        {
          "path": "enterprise",
          "label": "Explore the platform"
        }
      ]
    }
  }
} satisfies CapabilityModule;
