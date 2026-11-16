import type { ProductExperienceTranslations } from '../experience-types';

export default {
  zh: {
    heroAlt: '二维任务协同工作台，从尽调目标展开资料检索、数据提取与风险梳理子任务，右侧汇总报告成果与复核事项。',
    sectionTitle: '从一次业务交办，到一份完整成果',
    sections: [
      {
        id: 'plan', kind: 'execution',
        title: '先把目标分清楚，再让专业 Agent 各司其职',
        body: '主 Agent 围绕目标与工作规则安排专业子任务，将资料检索、数据提取和风险梳理分别组织起来，让每项工作都有明确的方向与返回内容。',
        points: [
          { title: '目标与工作要求统一', body: '在主任务中交代业务目标和所需材料，专业工作围绕同一目标展开。' },
          { title: '按配置调用专业子 Agent', body: '将适合独立推进的事项分别分派，减少一项任务承载全部工作的混杂。' },
        ],
        visual: {
          title: '项目尽调材料编制', context: '主任务 · 专业分工', tabs: ['任务目标', '专业子任务', '返回成果'],
          request: '整理项目公司资料，汇总财务要点和主要风险，形成尽调报告材料。',
          response: '围绕报告目标安排资料检索、数据提取与风险梳理，分项返回后统一整理。',
          columns: ['专业子任务', '工作要求', '返回内容'],
          rows: [
            ['资料检索', '归集企业背景与项目文件', '来源目录与关键原文'],
            ['数据提取', '整理财务资料中的关键字段', '财务要点表'],
            ['风险梳理', '归并材料差异与复核问题', '风险与复核事项'],
          ],
          focus: { label: '主任务目标', title: '项目尽调报告材料', body: '各专业子任务共同服务报告编制，结果回到同一主任务。' },
          files: ['尽调工作要求.docx', '项目来源资料目录.xlsx'],
        },
      },
      {
        id: 'execution', kind: 'execution',
        title: '多项专业工作同时推进，进度与结果集中掌握',
        body: '可独立处理的事项交给专业子 Agent 分工推进。任务界面保留运行、完成与错误状态，返回结果与子任务对应，便于查看进展和定位需要介入的环节。',
        points: [
          { title: '独立事项分工推进', body: '资料检索、信息提取与风险梳理分别开展，共同服务主任务。' },
          { title: '状态与返回结果对应', body: '从主任务查看各子任务状态及其返回内容，继续整理与审阅。' },
        ],
        visual: {
          title: '专业执行记录', context: '项目尽调 · 子任务返回', tabs: ['执行进度', '返回结果', '异常状态'],
          request: '查看尽调资料准备的执行状态和各项返回结果。',
          response: '各专业任务的返回内容已集中到主任务，来源材料、财务字段与风险事项可分别查看。',
          columns: ['专业子任务', '状态', '返回成果'],
          rows: [
            ['资料检索', '已完成', '企业与项目资料目录'],
            ['数据提取', '已完成', '财务关键字段汇总'],
            ['风险梳理', '已完成', '材料差异与复核事项'],
          ],
          focus: { label: '执行状态', title: '专业返回集中可见', body: '在同一主任务掌握分工进展，查看完成结果与需要处理的异常。' },
          files: ['财务关键字段汇总.xlsx', '风险与复核事项.docx'],
        },
      },
      {
        id: 'delivery', kind: 'document',
        title: '把分项发现合成完整材料，让业务接着审、接着用',
        body: '专业子 Agent 返回结果后，主任务继续归集资料、整理结论和组织报告。分项成果与风险清单一起保留，业务人员可以沿着材料继续复核和修改。',
        points: [
          { title: '分项结果统一归集', body: '将资料、数据与风险分析放回同一任务，减少人工在不同交接中拼凑成果。' },
          { title: '完整成果衔接业务复核', body: '把报告材料与需要判断的事项一并交付，专业结论由业务人员继续审阅。' },
        ],
        visual: {
          title: '尽调报告材料', context: '主任务 · 成果汇总', tabs: ['报告材料', '来源资料', '复核事项'],
          request: '把各项返回整理成尽调报告材料，保留来源目录和需要复核的事项。',
          response: '已按企业背景、财务要点和风险事项组织报告材料，来源目录与分项成果一并归集。',
          columns: ['报告组成', '主要内容', '关联成果'],
          rows: [
            ['企业与项目背景', '整理业务资料与项目范围', '资料检索结果'],
            ['财务要点', '汇总关键字段与材料差异', '财务要点表'],
            ['风险与复核事项', '集中需要专业判断的问题', '风险与复核清单'],
          ],
          focus: { label: '汇总成果', title: '报告材料与复核清单一并交付', body: '保留各专业工作返回，支持业务人员继续审阅、修改和形成结论。' },
          files: ['项目尽调材料汇总.docx', '尽调风险与复核清单.xlsx'],
        },
      },
    ],
  },
  en: {
    heroAlt: 'A two-dimensional coordination workspace expands a due diligence goal into research, extraction and risk-analysis subtasks, with report materials and review items brought together on the right.',
    sectionTitle: 'From one business request to a complete deliverable',
    sections: [
      {
        id: 'plan', kind: 'execution',
        title: 'Define the goal and give each specialist a clear responsibility',
        body: 'The main Agent organizes specialist subtasks around the goal and working rules. Separate research, extraction and risk analysis, with a clear direction and expected return for each workstream.',
        points: [
          { title: 'Keep the goal and requirements together', body: 'Set the business objective and material requirements in the main task so specialist work follows the same goal.' },
          { title: 'Call configured specialist Agents', body: 'Delegate work that can proceed independently, keeping every responsibility clear.' },
        ],
        visual: {
          title: 'Prepare due diligence materials', context: 'Main task · Specialist responsibilities', tabs: ['Task goal', 'Specialist tasks', 'Returned results'],
          request: 'Organize the company’s project files, financial highlights and key risks into due diligence report materials.',
          response: 'Research, data extraction and risk analysis are organized around the report goal. Their results return for combined preparation.',
          columns: ['Specialist task', 'Work requirement', 'Expected result'],
          rows: [
            ['Source research', 'Collect company and project records', 'Source index and key passages'],
            ['Data extraction', 'Extract key fields from financial records', 'Financial highlights'],
            ['Risk analysis', 'Collect differences and review questions', 'Risks and review items'],
          ],
          focus: { label: 'Main task goal', title: 'Due diligence report materials', body: 'Specialist subtasks serve the same report and return their results to one main task.' },
          files: ['Due diligence requirements.docx', 'Project source index.xlsx'],
        },
      },
      {
        id: 'execution', kind: 'execution',
        title: 'Keep specialist work moving and see progress in one place',
        body: 'Delegate independent work to specialist Agents. Task views retain running, completed and error states, with each returned result connected to its subtask, making progress and intervention points easier to locate.',
        points: [
          { title: 'Let independent work progress separately', body: 'Research, extraction and risk analysis each move forward while serving the main task.' },
          { title: 'Connect execution states with results', body: 'Review each subtask and its returned content in the main task before continuing preparation and review.' },
        ],
        visual: {
          title: 'Specialist execution records', context: 'Due diligence · Returned subtasks', tabs: ['Execution', 'Returned results', 'Error states'],
          request: 'Show the execution states and returned results for the due diligence preparation.',
          response: 'Specialist results are collected in the main task. Source materials, financial fields and risk items can be reviewed separately.',
          columns: ['Specialist task', 'State', 'Returned result'],
          rows: [
            ['Source research', 'Completed', 'Company and project source index'],
            ['Data extraction', 'Completed', 'Financial field summary'],
            ['Risk analysis', 'Completed', 'Material differences and review items'],
          ],
          focus: { label: 'Execution state', title: 'Specialist results in one view', body: 'See workstream progress, completed outputs and execution issues within the main task.' },
          files: ['Financial field summary.xlsx', 'Risks and review items.docx'],
        },
      },
      {
        id: 'delivery', kind: 'document',
        title: 'Assemble specialist findings into materials the business can review',
        body: 'When specialist Agents return, the main task continues collecting sources, organizing findings and preparing the report. Keep subtask outputs and review items together so colleagues can continue checking and editing.',
        points: [
          { title: 'Collect specialist results together', body: 'Bring sources, data and analysis into one task, reducing manual assembly across separate handoffs.' },
          { title: 'Connect delivery with business review', body: 'Return report materials together with items requiring judgment for the responsible colleague to review.' },
        ],
        visual: {
          title: 'Due diligence report materials', context: 'Main task · Combined deliverables', tabs: ['Report materials', 'Sources', 'Review items'],
          request: 'Assemble the returned work into report materials and retain the source index and review items.',
          response: 'Report materials are organized by company background, financial highlights and risk items, with source indexes and specialist results retained together.',
          columns: ['Report section', 'Content', 'Related result'],
          rows: [
            ['Company and project background', 'Organize records and project scope', 'Source research'],
            ['Financial highlights', 'Summarize key fields and differences', 'Financial highlights table'],
            ['Risks and review items', 'Collect questions needing judgment', 'Risk and review checklist'],
          ],
          focus: { label: 'Combined deliverables', title: 'Report materials and review checklist', body: 'Keep specialist results available for colleagues to review, edit and form their conclusions.' },
          files: ['Due diligence materials.docx', 'Risk and review checklist.xlsx'],
        },
      },
    ],
  },
} satisfies ProductExperienceTranslations;
