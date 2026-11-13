import type { CapabilityModule } from '../types';

export default {
  "slug": "multi-agent",
  "order": 1,
  "icon": "layers",
  "copy": {
    "zh": {
      "name": "任务执行",
      "title": "复杂任务有分工，各项成果能汇合",
      "description": "主副 Agent 专业分工，围绕目标规划、调用工具并交付。",
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
      "name": "Task execution",
      "title": "Coordinate specialists around one task",
      "description": "Plan, use tools and deliver through specialist Agent coordination.",
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
