import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['多 Agent 分工编排', '拆解复杂业务目标'],
      summary: '主 Agent 围绕目标分派专业子任务，跟踪执行状态，汇总返回结果。',
    },
    pain: {
      title: '复杂任务，难在分工与衔接',
      items: [
        '业务跨步骤、跨专业，拆解任务与跟进进度牵扯大量精力。',
        '各环节信息分散，难以掌握整体进度和需要介入的节点。',
        '专业事项反复交接，结果归集与口径核对依赖人工协调。',
      ],
    },
    concept: {
      title: '围绕一个目标，组织专业分工',
      body: '主 Agent 根据目标与工作规则分派子任务，专业子 Agent 执行后返回结果。任务界面呈现各项进度与异常状态，便于继续整理和人工判断。',
      labels: ['业务目标', '任务分派', '专业执行', '结果汇总'],
    },
    features: [
      { icon: 'network', title: '目标拆解与规划', body: '围绕业务目标与工作规则，组织专业分工和子任务。' },
      { icon: 'layers', title: '专业子 Agent 调用', body: '按配置调用专业子 Agent，分别处理可独立推进的事项。' },
      { icon: 'chart', title: '进度与成果汇总', body: '查看子任务状态与返回结果，带回主任务继续整理和审阅。' },
    ],
    scenarios: [
      {
        title: '项目尽调材料编制',
        body: '按资料检索、数据提取和风险梳理分派子任务，汇总成报告材料，由业务人员复核结论。',
        flow: ['资料与目标', '专业分工', '汇总复核'],
      },
      {
        title: '投标文件复核',
        body: '围绕资质、商务条款和技术响应组织专业核对，将返回结果整理为风险与修改清单。',
        flow: ['资质与条款', '分项核对', '风险汇总'],
      },
    ],
    benefits: [
      { title: '分工集中管理', body: '在一个任务中查看专业子任务，减少分散跟进。' },
      { title: '独立事项并行', body: '将可并行的事项交给专业 Agent 分工推进。' },
      { title: '执行状态可见', body: '结合运行、完成、错误等状态定位需要关注的任务。' },
      { title: '结果统一归集', body: '将返回结果带回主任务，继续整理与审阅。' },
    ],
    closing: '让复杂业务自动编排流转',
    related: ['digital-employees', 'collaboration'],
  },
  en: {
    hero: {
      lines: ['Coordinate Specialist Agents.', 'Break Down Complex Business Goals.'],
      summary: 'A main Agent delegates specialist tasks, follows execution states and brings the results together.',
    },
    pain: {
      title: 'Complex Work Needs Clear Coordination',
      items: [
        'Work spans multiple steps and specialties, requiring time to plan and follow up.',
        'Scattered updates make overall progress and intervention points hard to see.',
        'Repeated handoffs leave people to collect results and reconcile differences.',
      ],
    },
    concept: {
      title: 'Organize Specialists Around One Goal',
      body: 'The main Agent delegates tasks according to the goal and working rules. Specialist Agents return their results, while task views show progress and error states for further review and judgment.',
      labels: ['Business Goal', 'Delegation', 'Specialist Work', 'Combined Results'],
    },
    features: [
      { icon: 'network', title: 'Plan the Work', body: 'Organize specialist responsibilities and subtasks around the goal and working rules.' },
      { icon: 'layers', title: 'Call Specialist Agents', body: 'Use configured specialist Agents for work that can proceed independently.' },
      { icon: 'chart', title: 'Follow Progress and Results', body: 'Review subtask states and returned results, then continue in the main task.' },
    ],
    scenarios: [
      {
        title: 'Prepare Due Diligence Materials',
        body: 'Delegate source research, data extraction and risk analysis, then assemble report materials for business review.',
        flow: ['Sources & Goal', 'Specialist Tasks', 'Combined Review'],
      },
      {
        title: 'Review Bid Documents',
        body: 'Coordinate checks on qualifications, commercial terms and technical responses, then collect risks and proposed revisions.',
        flow: ['Requirements', 'Separate Checks', 'Risk Summary'],
      },
    ],
    benefits: [
      { title: 'Coordinate in One Place', body: 'Follow specialist subtasks within the main task.' },
      { title: 'Run Independent Work in Parallel', body: 'Delegate work that can proceed in parallel to specialist Agents.' },
      { title: 'See Execution States', body: 'Use running, completed and error states to identify tasks that need attention.' },
      { title: 'Bring Results Together', body: 'Continue organizing and reviewing returned results in the main task.' },
    ],
    closing: 'Orchestrate Complex Business Work',
    related: ['digital-employees', 'collaboration'],
  },
} satisfies LandingTranslations;
