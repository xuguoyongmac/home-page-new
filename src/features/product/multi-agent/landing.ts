import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['把复杂工作分下去', '把专业成果合起来'],
      summary: '主 Agent 拆解任务目标，按配置调用专业子 Agent 分工执行。可独立处理的任务并行推进，执行状态与结果回传主任务，由主 Agent 汇总输出。',
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
      {"icon": "shield", "title": "专业委派有边界", "body": "通过允许的目标范围、独立子任务上下文、协作层级、并发和超时配置组织委派，子任务进度与结果回传主运行。"},
      {"icon": "workflow", "title": "执行依赖与复核有承接", "body": "安装并配置执行看板扩展后，跟踪任务依赖、阻塞、失败重试与人工复核，关联完成凭据，让专业工作按条件衔接。"},
    ],
    scenarios: [
      { title: '尽调报告编制', body: '资料检索、数据提取与风险梳理分工开展，归集来源材料、财务要点和风险发现，形成尽调报告材料与复核清单。', flow: ['尽调目标与资料', '检索、提取与风险梳理', '报告材料与复核清单'] },
      { title: '投标文件复核', body: '围绕资质、商务条款与技术响应分别核对，汇集各专业检查结果，形成风险与修订清单，衔接投标文件修改。', flow: ['招标要求与投标文件', '资质、商务与技术核对', '风险与修订清单'] },
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
      lines: ['Delegate complex work.', 'Bring results together.'],
      summary: 'The main Agent breaks down the goal and calls configured specialist Agents. Independent tasks run in parallel, with execution states and results returned to the main task for the main Agent to assemble the output.',
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
      {"icon": "shield", "title": "Keep specialist delegation within bounds", "body": "Configure allowed targets, isolated subtask context, depth, concurrency and timeouts. Return subtask progress and results to the parent run."},
      {"icon": "workflow", "title": "Connect dependencies and review", "body": "With the execution board extension installed and configured, track dependencies, blocked work, retries and human review, with completion evidence for each handoff."},
    ],
    scenarios: [
      { title: 'Due diligence reporting', body: 'Coordinate research, data extraction and risk analysis. Collect source materials, financial highlights and risk findings in report materials and a review checklist.', flow: ['Due diligence goal and sources', 'Research, extraction and analysis', 'Report materials and review checklist'] },
      { title: 'Bid document review', body: 'Assign qualification, commercial and technical checks to specialists. Combine their findings in a risk and revision list for the next round of editing.', flow: ['Requirements and bid documents', 'Qualification, commercial and technical checks', 'Risk and revision list'] },
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
