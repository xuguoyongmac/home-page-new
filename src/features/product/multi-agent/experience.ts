import type { ProductExperienceTranslations } from '../experience-types';

export default {
  zh: {
    heroAlt: '尽调目标与已提供的资料交给主 Agent，企业背景、财务资料和业务风险分别核对，再汇总报告材料与复核事项。',
    sectionTitle: '从一次业务交办，到一份完整成果',
    sections: [
      {
        id: 'plan', kind: 'execution',
        title: '目标分清楚，专业 Agent 各司其职',
        body: '主 Agent 围绕尽调目标，把已提供的企业资料、财务报表与业务合同交给对应专业子任务。各项工作独立核对自己的输入，返回背景摘要、财务要点与待复核事项。',
        points: [
          { title: '一次交办，统一目标与要求', body: '在主任务中交代尽调目标，并提供企业资料、财务报表和业务合同，让各项核对围绕同一目标展开。' },
          { title: '按配置调用专业子 Agent', body: '把适合独立推进的事项分别分派，减少一项任务承载全部工作的混杂。' },
        ],
        visual: {
          title: '项目尽调材料编制', context: '主任务 · 专业分工', tabs: ['任务目标', '专业子任务', '返回成果'],
          request: '整理项目公司资料，汇总财务要点和主要风险，形成尽调报告材料。',
          response: '将企业资料、财务报表和业务合同分别交给对应专业子任务核对，分项返回后统一整理。',
          columns: ['专业子任务', '工作要求', '返回内容'],
          rows: [
            ['企业背景核对', '输入企业与项目资料', '背景摘要与来源'],
            ['财务资料核对', '输入财务报表与明细', '财务要点与差异'],
            ['业务风险梳理', '输入合同与业务说明', '业务疑点与复核事项'],
          ],
          focus: { label: '主任务目标', title: '项目尽调报告材料', body: '各专业子任务共同服务报告编制，结果回到同一主任务。' },
          files: ['尽调工作要求.docx', '项目来源资料目录.xlsx'],
        },
      },
      {
        id: 'execution', kind: 'execution',
        title: '多项专业工作同时推进，进度与结果集中掌握',
        body: '企业背景、财务资料和业务合同分别核对，使用各自已提供的资料并行推进。有前后依赖的工作按条件衔接，子任务状态与返回结果在主任务中集中查看。',
        points: [
          { title: '独立事项并行推进', body: '适合并行的子任务分别执行，减少相互等待。' },
          { title: '状态与返回结果对应', body: '在主任务查看子任务进展、异常与返回内容，减少反复询问与分散跟进。' },
        ],
        visual: {
          title: '专业执行记录', context: '项目尽调 · 子任务返回', tabs: ['执行进度', '返回结果', '异常状态'],
          request: '查看尽调资料准备的执行状态和各项返回结果。',
          response: '各专业任务的返回内容已集中到主任务，来源材料、财务字段与风险事项可分别查看。',
          columns: ['专业子任务', '状态', '返回成果'],
          rows: [
            ['企业背景核对', '已完成', '企业与项目资料目录'],
            ['财务资料核对', '已完成', '财务关键字段汇总'],
            ['业务风险梳理', '已完成', '材料差异与复核事项'],
          ],
          focus: { label: '执行状态', title: '专业返回集中可见', body: '在同一主任务掌握分工进展，查看完成结果与需要处理的异常。' },
          files: ['财务关键字段汇总.xlsx', '业务疑点与复核事项.docx'],
        },
      },
      {
        id: 'delivery', kind: 'document',
        title: '分项发现合成完整材料，业务接着审、接着用',
        body: '专业子 Agent 返回背景摘要、财务要点和业务疑点后，主 Agent 汇总为尽调报告材料。分项来源与待复核事项一并交付，业务人员继续审阅和形成判断。',
        points: [
          { title: '分项结果统一归集', body: '资料、数据与风险分析放回同一任务，减少人工接力与分散拼凑。' },
          { title: '完整成果衔接业务复核', body: '把报告材料与需要判断的事项一并交付，专业结论由业务人员继续审阅。' },
        ],
        visual: {
          title: '尽调报告材料', context: '主任务 · 成果汇总', tabs: ['报告材料', '来源资料', '复核事项'],
          request: '把各项返回整理成尽调报告材料，保留来源目录和需要复核的事项。',
          response: '已按企业背景、财务要点和风险事项组织报告材料，来源目录与分项成果一并归集。',
          columns: ['报告组成', '主要内容', '关联成果'],
          rows: [
            ['企业与项目背景', '整理业务资料与项目范围', '企业背景核对结果'],
            ['财务要点', '汇总关键字段与材料差异', '财务要点与差异'],
            ['业务疑点与复核事项', '集中需要专业判断的问题', '风险与复核清单'],
          ],
          focus: { label: '汇总成果', title: '报告材料与复核清单一并交付', body: '保留各专业工作返回，支持业务人员继续审阅、修改和形成结论。' },
          files: ['项目尽调材料汇总.docx', '尽调风险与复核清单.xlsx'],
        },
      },
    ],
  },
  en: {
    heroAlt: 'A main Agent delegates review of supplied company records, financial statements and contracts to specialists, then assembles due diligence materials and review items.',
    sectionTitle: 'From one business request to a complete deliverable',
    sections: [
      {
        id: 'plan', kind: 'execution',
        title: 'Define the goal and give each specialist a clear responsibility',
        body: 'The main Agent delegates the supplied company records, financial statements and contracts to the appropriate specialists. Each independently reviews its own inputs and returns background, financial highlights or questions for review.',
        points: [
          { title: 'One request, shared requirements', body: 'Set the due diligence goal and supply company records, financial statements and business contracts for each specialist to review.' },
          { title: 'Call configured specialist Agents', body: 'Delegate independent work to the appropriate specialists instead of mixing every responsibility in one task.' },
        ],
        visual: {
          title: 'Prepare due diligence materials', context: 'Main task · Specialist responsibilities', tabs: ['Task goal', 'Specialist tasks', 'Returned results'],
          request: 'Organize the company’s project files, financial highlights and key risks into due diligence report materials.',
          response: 'Company records, financial statements and contracts are assigned to corresponding specialists for independent review. Their results return for combined preparation.',
          columns: ['Specialist task', 'Work requirement', 'Expected result'],
          rows: [
            ['Company review', 'Input: company and project records', 'Background and sources'],
            ['Financial review', 'Input: statements and supporting records', 'Financial highlights and differences'],
            ['Business review', 'Input: contracts and business descriptions', 'Business questions and review items'],
          ],
          focus: { label: 'Main task goal', title: 'Due diligence report materials', body: 'Specialist subtasks serve the same report and return their results to one main task.' },
          files: ['Due diligence requirements.docx', 'Project source index.xlsx'],
        },
      },
      {
        id: 'execution', kind: 'execution',
        title: 'Keep specialist work moving and see progress in one place',
        body: 'Company, finance and contract reviews use their own supplied records and can proceed in parallel. Dependent work follows its prerequisites. Review execution states and returned results together in the main task.',
        points: [
          { title: 'Run independent work in parallel', body: 'Eligible subtasks execute separately to reduce unnecessary waiting.' },
          { title: 'Connect execution states with results', body: 'See progress, issues and returned content in the main task, reducing repeated checks across separate workstreams.' },
        ],
        visual: {
          title: 'Specialist execution records', context: 'Due diligence · Returned subtasks', tabs: ['Execution', 'Returned results', 'Error states'],
          request: 'Show the execution states and returned results for the due diligence preparation.',
          response: 'Specialist results are collected in the main task. Source materials, financial fields and risk items can be reviewed separately.',
          columns: ['Specialist task', 'State', 'Returned result'],
          rows: [
            ['Company review', 'Completed', 'Company and project source index'],
            ['Financial review', 'Completed', 'Financial field summary'],
            ['Business review', 'Completed', 'Material differences and review items'],
          ],
          focus: { label: 'Execution state', title: 'Specialist results in one view', body: 'See workstream progress, completed outputs and execution issues within the main task.' },
          files: ['Financial field summary.xlsx', 'Risks and review items.docx'],
        },
      },
      {
        id: 'delivery', kind: 'document',
        title: 'Assemble specialist findings into materials the business can review',
        body: 'The main Agent assembles returned background, financial highlights and business questions into due diligence materials. Deliver the sources and review items together for colleagues to check and form their judgments.',
        points: [
          { title: 'Collect specialist results together', body: 'Bring sources, data and risk analysis into one task, reducing manual assembly across separate handoffs.' },
          { title: 'Connect delivery with business review', body: 'Return report materials together with items requiring judgment for the responsible colleague to review.' },
        ],
        visual: {
          title: 'Due diligence report materials', context: 'Main task · Combined deliverables', tabs: ['Report materials', 'Sources', 'Review items'],
          request: 'Assemble the returned work into report materials and retain the source index and review items.',
          response: 'Report materials are organized by company background, financial highlights and risk items, with source indexes and specialist results retained together.',
          columns: ['Report section', 'Content', 'Related result'],
          rows: [
            ['Company and project background', 'Organize records and project scope', 'Company review'],
            ['Financial highlights', 'Summarize key fields and differences', 'Financial highlights and differences'],
            ['Risks and review items', 'Collect questions needing judgment', 'Risk and review checklist'],
          ],
          focus: { label: 'Combined deliverables', title: 'Report materials and review checklist', body: 'Keep specialist results available for colleagues to review, edit and form their conclusions.' },
          files: ['Due diligence materials.docx', 'Risk and review checklist.xlsx'],
        },
      },
    ],
  },
} satisfies ProductExperienceTranslations;
