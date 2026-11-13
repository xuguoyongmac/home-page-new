import type { CapabilityModule } from '../types';

export default {
  "slug": "multi-agent",
  "order": 2,
  "icon": "layers",
  "copy": {
    "zh": {
      "name": "专业 Agent 分工",
      "title": "复杂任务有分工，各项成果能汇合",
      "description": "主 Agent 按配置委派专业子任务，展示进度并汇总各项工作结果。",
      "features": [
        {
          "icon": "layers",
          "title": "配置专业分工",
          "body": "为不同子任务配置专业 Agent 的工作范围。"
        },
        {
          "icon": "layers",
          "title": "跟踪执行进度",
          "body": "查看专业子任务的执行状态，识别需要介入的环节。"
        },
        {
          "icon": "layers",
          "title": "汇总工作结果",
          "body": "将子任务结果带回整体任务，继续整理与审阅。"
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
      "name": "Specialist Agent delegation",
      "title": "Coordinate specialists around one task",
      "description": "Delegate configured specialist tasks, follow progress and collect results.",
      "features": [
        {
          "icon": "layers",
          "title": "Configure specialists",
          "body": "Set the responsibilities of specialist Agents."
        },
        {
          "icon": "layers",
          "title": "Follow progress",
          "body": "Track task state and identify work needing intervention."
        },
        {
          "icon": "layers",
          "title": "Collect results",
          "body": "Bring specialist results back into the main task for review."
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
