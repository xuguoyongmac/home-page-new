import type { CapabilityModule } from '../types';

export default {
  "slug": "integrations",
  "order": 4,
  "icon": "plug",
  "copy": {
    "zh": {
      "name": "业务系统与工具",
      "title": "把知识处理，接到实际业务动作",
      "description": "通过业务插件、MCP、OpenAPI 和授权设备，把资料处理接到具体操作。",
      "features": [
        {
          "icon": "plug",
          "title": "接入业务系统",
          "body": "使用 MCP、OpenAPI 和已配置的工具连接业务系统。"
        },
        {
          "icon": "plug",
          "title": "扩展业务入口",
          "body": "通过业务插件承接客户经营、招投标等具体业务对象。"
        },
        {
          "icon": "plug",
          "title": "明确执行授权",
          "body": "系统接口与设备执行按实际安装、连接和权限使用。"
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
      "name": "Business systems and tools",
      "title": "Connect thinking to business actions",
      "description": "Connect plugins, MCP, OpenAPI and authorized devices to concrete operations.",
      "features": [
        {
          "icon": "plug",
          "title": "Connect systems",
          "body": "Use MCP, OpenAPI and configured tools to connect business systems."
        },
        {
          "icon": "plug",
          "title": "Extend business workflows",
          "body": "Use plugins to work with customers, bids and other business objects."
        },
        {
          "icon": "plug",
          "title": "Authorize execution",
          "body": "System and device actions depend on installed integrations and permissions."
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
