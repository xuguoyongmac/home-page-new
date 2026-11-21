import type { ProductExperienceTranslations } from '../experience-types';

export default {
  zh: {
    heroAlt: '一个数字员工中的主 Agent 接收项目尽调目标，向财务、法务和业务专业子 Agent 委派工作，并将返回结果汇总为尽调工作底稿。',
    sectionTitle: '主 Agent 负责全局，专业 Agent 各自把一件事做深',
    sections: [
      {
        id: 'delegate', kind: 'execution',
        title: '明确责任，再委派任务',
        body: '主 Agent 明确目标、资料与交付要求，将可独立推进的工作委派给专业子 Agent。',
        points: [
          { title: '主 Agent 负责整体交付', body: '判断缺口，组织各项返回。' },
          { title: '专业子 Agent 负责分项任务', body: '在授权边界内执行，返回结果与待确认事项。' },
        ],
        visual: {
          title: '项目尽调材料准备', context: '主任务 · 专业委派', tabs: ['业务目标', '专业子任务', '返回要求'],
          request: '核对项目材料，形成可供审阅的尽调工作底稿。',
          response: '财务、法务和业务核对分别执行，结果回到同一主任务。',
          columns: ['专业子任务', '工作范围', '返回内容'],
          rows: [
            ['财务核对', '财务报表与明细', '关键字段与差异'],
            ['法务核对', '合同与法律文件', '条款问题与出处'],
            ['业务核对', '业务资料与项目说明', '业务疑点与待确认事项'],
          ],
          focus: { label: '主任务', title: '同一目标，清晰分工', body: '每项子任务都带着明确的输入、范围和返回要求。' },
          files: ['尽调工作要求.docx', '项目材料目录.xlsx'],
        },
      },
      {
        id: 'execute', kind: 'execution',
        title: '执行独立，过程可见',
        body: '每项子任务单独保留消息与执行过程，进度、异常和结果回到主任务；协作数量、层级与超时由平台策略约束。',
        points: [
          { title: '独立工作并行推进', body: '没有前后依赖的任务可同步执行。' },
          { title: '需要人员时进入待办', body: '缺少事实或需要审批时，交由对应人员处理。' },
        ],
        visual: {
          title: '专业执行状态', context: '主任务 · 运行进度', tabs: ['执行进度', '返回结果', '待处理事项'],
          request: '查看各项核对的进度、异常和需要人员确认的事项。',
          response: '专业任务保持独立执行，状态与返回结果集中呈现在主任务。',
          columns: ['专业子任务', '状态', '当前返回'],
          rows: [
            ['财务核对', '进行中', '关键字段核对'],
            ['法务核对', '已完成', '条款问题与出处'],
            ['业务核对', '待确认', '合同口径需业务人员确认'],
          ],
          focus: { label: '执行边界', title: '范围、层级、并发与超时受控', body: '子 Agent 不因被调用获得主 Agent 未授权的资源。' },
          files: ['财务字段核对表.xlsx', '合同条款问题清单.docx'],
        },
      },
      {
        id: 'deliver', kind: 'document',
        title: '分项汇总，形成成果',
        body: '主 Agent 归集来源、差异和待确认事项，形成可继续审阅、修改和发布的项目成果。',
        points: [
          { title: '保留分项依据', body: '材料目录、核对表和差异清单随成果交付。' },
          { title: '连接人工判断', body: '需专业确认的事项处理后回到原任务。' },
        ],
        visual: {
          title: '项目尽调工作底稿', context: '主任务 · 成果汇总', tabs: ['工作底稿', '来源依据', '待确认事项'],
          request: '归集专业核对结果，保留来源和待确认事项。',
          response: '分项结果已组织为可继续审阅和修改的项目成果。',
          columns: ['成果组成', '内容', '后续动作'],
          rows: [
            ['来源与出处', '文件、版本与来源位置', '材料目录'],
            ['核对差异', '财务、法务与业务字段差异', '要素核对表'],
            ['待确认事项', '缺项、矛盾与需要人工判断的问题', '差异与问题清单'],
          ],
          focus: { label: '项目成果', title: '审阅、批注、修改并发布新版本', body: '分项返回与人工处理记录留在同一项目工作链路。' },
          files: ['项目尽调工作底稿.docx', '差异与待确认清单.xlsx'],
        },
      },
    ],
  },
  en: {
    heroAlt: 'Within one digital employee run, a main Agent receives a due diligence goal, delegates financial, legal and business work to specialists, and assembles their results into working materials.',
    sectionTitle: 'The main Agent owns the outcome while specialists go deep',
    sections: [
      {
        id: 'delegate', kind: 'execution',
        title: 'Clarify, then delegate',
        body: 'The main Agent defines the goal, source materials and delivery requirements, then delegates independent work to specialist Agents.',
        points: [
          { title: 'The main Agent owns delivery', body: 'It identifies gaps and organizes returned work.' },
          { title: 'Specialists own bounded tasks', body: 'They work within authorized boundaries and return findings and open questions.' },
        ],
        visual: {
          title: 'Prepare project due diligence materials', context: 'Main task · Specialist delegation', tabs: ['Business goal', 'Specialist tasks', 'Return requirements'],
          request: 'Review the project records and prepare due diligence working materials.',
          response: 'Financial, legal and business review run separately and return to the same main task.',
          columns: ['Specialist task', 'Scope', 'Expected return'],
          rows: [
            ['Financial review', 'Statements and supporting records', 'Key fields and differences'],
            ['Legal review', 'Contracts and legal records', 'Clause questions and sources'],
            ['Business review', 'Business and project records', 'Questions and confirmation items'],
          ],
          focus: { label: 'Main task', title: 'One goal with clear responsibilities', body: 'Every subtask carries explicit inputs, scope and return requirements.' },
          files: ['Due diligence requirements.docx', 'Project source index.xlsx'],
        },
      },
      {
        id: 'execute', kind: 'execution',
        title: 'Keep execution visible',
        body: 'Each subtask keeps its own messages and execution process. Progress, issues and results return to the main task, while collaboration depth and timeouts remain policy controlled.',
        points: [
          { title: 'Run independent work in parallel', body: 'Tasks without dependencies can progress together.' },
          { title: 'Create pending items for people', body: 'Missing facts or approvals go to the responsible colleague.' },
        ],
        visual: {
          title: 'Specialist execution state', context: 'Main task · Run progress', tabs: ['Execution', 'Returned results', 'Pending items'],
          request: 'Review progress, issues and items that need a person.',
          response: 'Specialist work remains separate while states and returned results are visible in the main task.',
          columns: ['Specialist task', 'State', 'Current return'],
          rows: [
            ['Financial review', 'Running', 'Key field checks'],
            ['Legal review', 'Completed', 'Clause questions and sources'],
            ['Business review', 'Confirmation needed', 'A business owner must confirm the contract interpretation'],
          ],
          focus: { label: 'Execution boundary', title: 'Scope, depth, concurrency and timeouts remain controlled', body: 'A specialist does not gain resources that the main Agent was not authorized to use.' },
          files: ['Financial field checks.xlsx', 'Contract clause questions.docx'],
        },
      },
      {
        id: 'deliver', kind: 'document',
        title: 'Assemble results',
        body: 'The main Agent assembles sources, differences and confirmation items into a project deliverable ready for review, editing and release.',
        points: [
          { title: 'Keep supporting evidence', body: 'Source indexes, cross-checks and differences stay with the deliverable.' },
          { title: 'Connect human judgment', body: 'Items return to the original task after professional review.' },
        ],
        visual: {
          title: 'Project due diligence working materials', context: 'Main task · Combined output', tabs: ['Working materials', 'Sources', 'Confirmation items'],
          request: 'Assemble specialist results and retain sources and confirmation items.',
          response: 'Returned work is organized into a project deliverable ready for review and editing.',
          columns: ['Deliverable', 'Content', 'Next action'],
          rows: [
            ['Sources and references', 'Files, versions and source locations', 'Source index'],
            ['Cross-check differences', 'Differences across financial, legal and business fields', 'Cross-check table'],
            ['Confirmation items', 'Missing, conflicting and judgment-dependent issues', 'Differences and issues'],
          ],
          focus: { label: 'Project deliverable', title: 'Review, comment, edit and release a new version', body: 'Specialist returns and human handling remain in the same project workflow.' },
          files: ['Due diligence working materials.docx', 'Differences and confirmation items.xlsx'],
        },
      },
    ],
  },
} satisfies ProductExperienceTranslations;
