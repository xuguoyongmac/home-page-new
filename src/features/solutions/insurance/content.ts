import type { SolutionModule } from '../types';

export default {
  "slug": "insurance",
  "order": 2,
  "category": "industry",
  "copy": {
    "zh": {
      "slug": "insurance",
      "icon": "shield",
      "name": "保险解决方案",
      "tag": "保险业务",
      "title": "让岗位知识，支持每一次业务准备",
      "description": "从产品知识、销售支持和资料整理切入，定义数字员工的工作范围、资料依据和人工复核环节。",
      "tasks": [
        {
          "title": "产品知识支持",
          "input": "经授权的产品条款、培训资料和服务规范",
          "action": "围绕业务问题检索资料，整理条款出处",
          "output": "知识答复、条款对照与引用"
        },
        {
          "title": "销售材料准备",
          "input": "已确认的产品资料与沟通目标",
          "action": "按业务规范准备沟通材料和问答草稿",
          "output": "销售支持材料与沟通草稿"
        },
        {
          "title": "保单资料整理",
          "input": "在授权范围内提供的保单和附件",
          "action": "按确认的字段与清单要求整理资料",
          "output": "资料清单与待补事项"
        }
      ],
      "scope": "保险为可配置的方案建设方向，需结合产品知识、业务流程与客户系统实施。核保、理赔、质检结论及对客承诺由有权人员作出。",
      "image": "collaborative-review"
    },
    "en": {
      "slug": "insurance",
      "icon": "shield",
      "name": "Insurance",
      "tag": "Insurance operations",
      "title": "Put role knowledge to work",
      "description": "Define the knowledge sources, responsibilities and review steps for product knowledge, sales preparation and document organization.",
      "tasks": [
        {
          "title": "Product knowledge",
          "input": "Authorized product terms, training materials and service standards",
          "action": "Retrieve relevant materials and record provision references",
          "output": "Answers, term comparisons and references"
        },
        {
          "title": "Sales preparation",
          "input": "Approved product information and communication goals",
          "action": "Prepare materials and draft responses under business standards",
          "output": "Sales support materials and communication drafts"
        },
        {
          "title": "Policy document organization",
          "input": "Authorized policy documents and attachments",
          "action": "Organize documents using agreed fields and checklists",
          "output": "Document lists and missing-information requests"
        }
      ],
      "scope": "A configurable solution direction requiring knowledge, process and integration implementation. Authorized staff make underwriting, claims and customer-facing decisions.",
      "image": "collaborative-review"
    }
  }
} satisfies SolutionModule;
