import type { ProductExperienceTranslations } from '../experience-types';

export default {
  zh: {
    heroAlt: '二维数字员工工作界面，岗位团队与标书助理的工作任务并列展示，呈现职责、技能、工作区和文档交付。',
    sectionTitle: '把岗位方法接到每一次业务交付',
    sections: [
      {
        id: 'recruit', kind: 'roster',
        title: '把成熟岗位做成模板，让专业能力按需加入',
        body: '把职责边界、专业技能与工作文件放进同一模板，按项目和业务需要招募数字员工。新员工独立运行，沿用已沉淀的岗位方法。',
        points: [
          { title: '方法可以维护和分发', body: '模板集中保存职责、技能和工作区文件，同类岗位从同一套要求出发。' },
          { title: '上岗配置与授权有序衔接', body: '完成配置与所需审批，分别授予员工使用、知识访问与插件业务委托。' },
        ],
        visual: {
          title: '岗位数字员工', context: '投标项目工作区', tabs: ['岗位模板', '数字员工', '工作资料'],
          request: '招募标书助理，沿用投标编制要求和项目工作文件。',
          response: '岗位职责、专业技能与工作文件集中配置，招募后承接项目任务。',
          columns: ['岗位模板', '专业工作', '交付成果'],
          rows: [
            ['标书助理', '资料归集与投标编制', '投标初稿、检查清单'],
            ['合规预审', '制度检索与材料核对', '初审意见、复核事项'],
            ['资料整理', '项目文件归集与分类', '资料目录、归集材料'],
          ],
          focus: { label: '岗位职责', title: '标书助理', body: '结合投标要求与企业资料，完成编制与自查，交给业务专家终审。' },
          files: ['投标编制要求.docx', '项目资料目录.xlsx'],
        },
      },
      {
        id: 'work', kind: 'execution',
        title: '交办一项具体工作，拿回能够接着用的成果',
        body: '让数字员工按任务目标整理材料、编写初稿与完成检查。成果带回工作会话，业务人员继续审阅、修改和确认，工作从交办推进到交付。',
        points: [
          { title: '岗位方法进入任务执行', body: '将岗位职责、已配置技能和工作资料用于本次工作，减少反复交代。' },
          { title: '把需要判断的问题整理出来', body: '初稿与检查结果共同交付，便于专家终审或业务复核。' },
        ],
        visual: {
          title: '投标文件编制', context: '标书助理 · 项目任务', tabs: ['工作会话', '执行过程', '交付成果'],
          request: '根据项目招标要求，整理投标资料并编写技术响应初稿。',
          response: '已整理项目资料并完成技术响应初稿，资质缺项和需要复核的条款单独列入检查清单。',
          columns: ['工作环节', '处理内容', '状态'],
          rows: [
            ['资料归集', '汇总资质、项目与产品材料', '已完成'],
            ['初稿编制', '按要求组织技术响应内容', '已完成'],
            ['编制自查', '整理缺项与需复核的条款', '已完成'],
          ],
          focus: { label: '交付成果', title: '技术响应初稿与检查清单', body: '编制内容与复核事项一并交回，业务专家继续终审。' },
          files: ['技术响应初稿.docx', '资质与条款检查清单.xlsx'],
        },
      },
      {
        id: 'continuity', kind: 'roster',
        title: '让周期任务持续接续，让工作经验继续积累',
        body: '为数字员工配置定时任务，承接重复开展的整理与报告工作。运行记录、投递结果和工作记忆分别保留，让后续任务接得上前面的工作。',
        points: [
          { title: '每次执行与投递有记录', body: '查看定时任务的运行和投递情况，掌握周期工作的执行去向。' },
          { title: '经验按组织策略沉淀', body: '个人档案、长期记忆与工作日记按使用者隔离，复盘成熟方法并沉淀为技能。' },
        ],
        visual: {
          title: '持续工作', context: '数字员工任务与记忆', tabs: ['定时任务', '运行记录', '工作记忆'],
          request: '每周五整理本周项目资料，形成项目进展简报。',
          response: '周期工作按计划执行，运行与投递结果保留，工作日记接续本周任务背景。',
          columns: ['周期工作', '执行安排', '成果去向'],
          rows: [
            ['项目资料整理', '每周五 16:30', '项目工作区'],
            ['项目进展简报', '每周五 17:10', '任务成果'],
            ['工作经验复盘', '按组织策略', '工作日记与技能'],
          ],
          focus: { label: '工作记忆', title: '延续同一项目的工作背景', body: '长期记忆与工作日记按使用者隔离，为后续任务保留相关背景。' },
          files: ['项目进展简报.docx', '本周项目资料目录.xlsx'],
        },
      },
    ],
  },
  en: {
    heroAlt: 'A two-dimensional digital employee workspace with a role roster and bid assistant task, showing responsibilities, skills, workspace files and document deliverables.',
    sectionTitle: 'Connect role methods to every business deliverable',
    sections: [
      {
        id: 'recruit', kind: 'roster',
        title: 'Turn proven roles into templates and recruit expertise as needed',
        body: 'Capture responsibilities, specialist skills and work files in one template. Recruit digital employees for a project or business need. Each employee runs independently and follows the role methods already established.',
        points: [
          { title: 'Maintain and distribute role methods', body: 'Keep responsibilities, skills and workspace files together so similar roles start from consistent requirements.' },
          { title: 'Connect setup with authorization', body: 'Complete setup and any required approval, then grant employee access, knowledge permissions and plugin delegation separately.' },
        ],
        visual: {
          title: 'Role-based digital employees', context: 'Bid project workspace', tabs: ['Role templates', 'Digital employees', 'Work files'],
          request: 'Recruit a bid assistant using our bid requirements and project files.',
          response: 'Configure responsibilities, specialist skills and work files together, ready for project tasks after recruitment.',
          columns: ['Role template', 'Specialist work', 'Deliverables'],
          rows: [
            ['Bid assistant', 'Collect materials and prepare bids', 'Bid draft and checklist'],
            ['Compliance pre-review', 'Retrieve policies and check records', 'Initial findings and review items'],
            ['Document preparation', 'Collect and organize project files', 'File index and source materials'],
          ],
          focus: { label: 'Responsibilities', title: 'Bid assistant', body: 'Use bid requirements and company materials to draft and check documents before final specialist review.' },
          files: ['Bid preparation requirements.docx', 'Project file index.xlsx'],
        },
      },
      {
        id: 'work', kind: 'execution',
        title: 'Delegate concrete work and receive a usable deliverable',
        body: 'Digital employees organize materials, write drafts and complete checks against the task goal. Bring results back into the work conversation, where colleagues continue reviewing, editing and confirming the deliverable.',
        points: [
          { title: 'Apply role methods to the task', body: 'Use responsibilities, configured skills and work materials in the current task, reducing repeated handover.' },
          { title: 'Surface the decisions that need review', body: 'Deliver the draft together with checking results for final specialist or business review.' },
        ],
        visual: {
          title: 'Prepare bid documents', context: 'Bid assistant · Project task', tabs: ['Conversation', 'Execution', 'Deliverables'],
          request: 'Organize our bid materials and draft the technical response against the project requirements.',
          response: 'The technical response draft is ready. Missing qualifications and provisions needing review are listed separately in the checklist.',
          columns: ['Stage', 'Work completed', 'State'],
          rows: [
            ['Collect materials', 'Bring qualifications and project files together', 'Completed'],
            ['Prepare draft', 'Organize the technical response', 'Completed'],
            ['Check requirements', 'List missing items and review points', 'Completed'],
          ],
          focus: { label: 'Deliverables', title: 'Technical response and review checklist', body: 'Return the draft and review items together for final specialist review.' },
          files: ['Technical response draft.docx', 'Qualification and provision checklist.xlsx'],
        },
      },
      {
        id: 'continuity', kind: 'roster',
        title: 'Keep recurring work moving and carry experience forward',
        body: 'Schedule digital employees to handle repeatable preparation and reporting. Keep run records, delivery results and work memory so later tasks can build on previous work.',
        points: [
          { title: 'Track each run and delivery', body: 'Review execution and delivery records to understand where each recurring task went.' },
          { title: 'Preserve experience under organizational policy', body: 'Profiles, long-term memory and work diaries stay isolated by user. Reflect on proven methods and preserve them as skills.' },
        ],
        visual: {
          title: 'Continuous work', context: 'Tasks and work memory', tabs: ['Scheduled tasks', 'Run records', 'Work memory'],
          request: 'Organize this week’s project files and prepare a progress brief every Friday.',
          response: 'Scheduled work retains its run and delivery records. The work diary carries the week’s project context forward.',
          columns: ['Recurring work', 'Schedule', 'Result destination'],
          rows: [
            ['Organize project files', 'Friday 16:30', 'Project workspace'],
            ['Prepare progress brief', 'Friday 17:10', 'Task deliverables'],
            ['Reflect on work', 'Organizational policy', 'Work diary and skills'],
          ],
          focus: { label: 'Work memory', title: 'Keep the project context connected', body: 'User-isolated long-term memory and work diaries preserve relevant background for later tasks.' },
          files: ['Project progress brief.docx', 'Weekly project file index.xlsx'],
        },
      },
    ],
  },
} satisfies ProductExperienceTranslations;
