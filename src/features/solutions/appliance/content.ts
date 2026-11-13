import type { SolutionModule } from '../types';

export default {
  "slug": "appliance",
  "order": 7,
  "category": "deployment",
  "copy": {
    "zh": {
      "slug": "appliance",
      "icon": "cpu",
      "name": "行业一体机",
      "tag": "行业一体机",
      "title": "把数字员工工作空间，部署在企业现场",
      "description": "围绕行业任务、企业知识和本地运行需求，沟通软硬一体交付与部署方案。",
      "scope": "行业一体机属于专属部署形态。硬件规格、模型选型、离线条件、兼容范围与服务报价按实际方案确认。",
      "image": "enterprise-connections",
      "tasks": [
        {
          "title": "确定业务范围",
          "input": "岗位任务与交付要求",
          "action": "梳理首批工作场景和知识范围",
          "output": "场景清单与部署需求"
        },
        {
          "title": "评估运行环境",
          "input": "网络、模型和设备环境",
          "action": "确认计算资源、模型和系统连接条件",
          "output": "环境评估与配置方案"
        },
        {
          "title": "组织现场交付",
          "input": "确认的方案与企业资料",
          "action": "配置岗位能力，组织业务人员核对成果",
          "output": "配置记录与交付材料"
        }
      ]
    },
    "en": {
      "slug": "appliance",
      "icon": "cpu",
      "name": "Industry appliance",
      "tag": "Industry appliance",
      "title": "Bring the digital workspace on site",
      "description": "Scope an integrated hardware and software deployment around industry tasks, enterprise knowledge and local operation.",
      "scope": "An appliance is a deployment option. Hardware, models, offline conditions, compatibility and pricing are confirmed in the agreed scope.",
      "image": "enterprise-connections",
      "tasks": [
        {
          "title": "Scope the work",
          "input": "Role tasks and deliverable requirements",
          "action": "Define initial workflows and knowledge scope",
          "output": "Workflow and deployment requirements"
        },
        {
          "title": "Assess the environment",
          "input": "Network, models and devices",
          "action": "Assess compute, model and integration requirements",
          "output": "Environment and configuration plan"
        },
        {
          "title": "Organize delivery",
          "input": "Agreed scope and enterprise materials",
          "action": "Configure role capabilities and review results with the team",
          "output": "Configuration records and deliverables"
        }
      ]
    }
  }
} satisfies SolutionModule;
