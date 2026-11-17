import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['把复杂工作分下去', '把专业成果合起来'],
      summary: '面对尽调编制、投标复核等跨专业任务，主 Agent 拆解目标、调用专业子 Agent 分工执行，将进度、异常与结果集中到同一主任务。',
    },
    pain: {
      title: '任务越复杂，越需要清楚的分工与交接',
      items: [
        '检索、提取、分析和核对交织在一起，一次交办难以形成完整成果。',
        '多项工作分散推进，需要反复询问进度，异常也难以及时定位。',
        '各环节结果陆续返回，归集材料与整理结论仍依赖人工接力。',
      ],
    },
    concept: {
      title: '围绕同一个目标，组织一组专业执行',
      body: '主 Agent 根据业务目标与工作规则安排子任务，调用专业子 Agent 处理各自负责的工作。可独立推进的事项并行开展，执行状态与返回结果回到主任务，继续汇总、整理和审阅。',
      labels: ['交办业务目标', '分派专业子任务', '跟踪执行状态', '汇总完整成果'],
    },
    features: [
      { icon: 'network', title: '业务目标拆成专业工作', body: '围绕任务目标与工作规则组织分工，将资料检索、信息提取和风险梳理等工作交给相应子任务。' },
      { icon: 'layers', title: '专业子 Agent 分工推进', body: '按配置调用专业子 Agent，分别处理可独立推进的事项，让多项专业工作共同服务同一目标。' },
      { icon: 'chart', title: '进度、异常与成果集中查看', body: '查看子任务运行、完成和错误状态，归集返回结果，在主任务中继续整理材料与审阅结论。' },
    ],
    scenarios: [
      { title: '尽调材料从多头准备到集中成稿', body: '将资料检索、数据提取和风险梳理分派给专业子 Agent，分别返回来源材料、关键数据与风险要点，再汇总为报告材料供业务人员复核。', flow: ['尽调目标与资料', '检索、提取与风险梳理', '报告材料与复核要点'] },
      { title: '投标文件从逐项核对到风险汇总', body: '围绕资质、商务条款与技术响应分别组织专业核对，汇集各项检查结果，整理成可继续修改的风险与修订清单。', flow: ['招标要求与投标文件', '资质、商务与技术核对', '风险与修订清单'] },
    ],
    benefits: [
      { title: '一次交办统筹多项工作', body: '在同一主任务内组织专业分工，减少分散跟进。' },
      { title: '独立事项并行推进', body: '让可并行的子任务分别执行，减少无谓等待。' },
      { title: '执行问题有处可查', body: '结合运行与异常状态定位需要介入的环节。' },
      { title: '专业结果汇成完整材料', body: '将分项成果带回主任务，继续整合与审阅。' },
    ],
    closing: '把复杂目标交办成一组有序执行',
    related: ['digital-employees', 'collaboration'],
  },
  en: {
    hero: {
      lines: ['Delegate complex work', 'Bring specialist results together'],
      summary: 'For cross-specialty work such as due diligence and bid review, a main Agent breaks down the goal, calls specialist Agents, and brings progress, errors and results into one task.',
    },
    pain: {
      title: 'Complex work needs clear responsibilities and handoffs',
      items: [
        'Research, extraction, analysis and checking overlap, making a complete deliverable difficult to assemble from one request.',
        'Separate workstreams require repeated progress checks, while execution errors are hard to locate.',
        'Results arrive at different times, leaving people to collect materials and reconcile findings.',
      ],
    },
    concept: {
      title: 'Organize specialist execution around one shared goal',
      body: 'The main Agent assigns subtasks according to the business goal and working rules, then calls specialist Agents. Independent work can run in parallel. Execution states and returned results come back to the main task for assembly and review.',
      labels: ['Define the goal', 'Delegate specialist work', 'Follow execution', 'Assemble the result'],
    },
    features: [
      { icon: 'network', title: 'Turn goals into specialist work', body: 'Organize responsibilities around the goal and working rules, assigning work such as source research, data extraction and risk analysis to subtasks.' },
      { icon: 'layers', title: 'Let specialist Agents work together', body: 'Call configured specialist Agents for work that can proceed independently, bringing separate workstreams toward the same goal.' },
      { icon: 'chart', title: 'See progress, errors and results together', body: 'Review running, completed and error states, collect returned results, and continue organizing materials and reviewing findings in the main task.' },
    ],
    scenarios: [
      { title: 'From separate due diligence workstreams to one report', body: 'Delegate research, data extraction and risk analysis. Bring source materials, key figures and risk findings together into report materials for business review.', flow: ['Due diligence goal and sources', 'Research, extraction and analysis', 'Report materials and review priorities'] },
      { title: 'From individual bid checks to a combined risk list', body: 'Coordinate qualification, commercial and technical checks. Collect the findings in a risk and revision list that supports the next round of editing.', flow: ['Requirements and bid documents', 'Qualification, commercial and technical checks', 'Risk and revision list'] },
    ],
    benefits: [
      { title: 'Coordinate several workstreams from one request', body: 'Organize specialist tasks in one place and reduce scattered follow-up.' },
      { title: 'Run independent work in parallel', body: 'Let eligible subtasks progress separately and reduce unnecessary waiting.' },
      { title: 'Locate execution issues', body: 'Use execution and error states to find where intervention is needed.' },
      { title: 'Build a complete deliverable', body: 'Bring specialist outputs back to the main task for integration and review.' },
    ],
    closing: 'Turn a complex goal into coordinated execution',
    related: ['digital-employees', 'collaboration'],
  },
} satisfies LandingTranslations;
