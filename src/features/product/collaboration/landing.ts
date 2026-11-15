import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['人和数字员工', '围绕同一份成果协作'],
      summary: '把资料、会话与事项放进项目工作空间。从交办、编制到审阅交接，让每一次回应都能接着已有背景继续工作。',
    },
    pain: {
      title: '成果交出来，也要让团队接得住',
      items: [
        '资料在文件夹里，讨论在聊天里，数字员工的产出又留在另一段会话。',
        '交给同事审阅或接手时，需要重新转述背景、补发资料。',
        '方案反复修改，多份文件难以对应讨论意见和提交版本。',
      ],
    },
    concept: {
      title: '项目承接上下文，会话推动工作',
      body: '成员按项目角色共用资料、会话和事项，在工作会话中 @ 已获授权的数字员工。数字员工按委托人的项目权限读写资料，需要人工回答、审批或接手时发起事项，回应结果回到原会话。',
      labels: ['共享项目', '工作会话', '人工回应', '成果版本'],
    },
    features: [
      { icon: 'folder', title: '围绕项目共用资料', body: '将成员、文件、会话与事项归入同一项目，按项目角色访问，让任务延续已有背景。' },
      { icon: 'message', title: '在会话中推进与交接', body: '@ 数字员工开展工作，通过问询、审批和接手事项衔接同事，让回应回到原会话。' },
      { icon: 'clock', title: '成果修改有版本可查', body: '已提交文件保留版本与变更记录，可查阅历史并按权限恢复，对照每次提交的成果。' },
    ],
    scenarios: [
      { title: '服务方案从初稿到评审定稿', body: '成员与数字员工共用项目资料编制方案，在会话中反馈修改意见、提交新版本，保留历史成果。', flow: ['共用项目资料', '编制与审阅反馈', '提交成果新版本'] },
      { title: '待确认工作交给负责人续办', body: '数字员工发起审批，将待确认材料交给负责人；回应回到原会话，让后续处理延续任务背景。', flow: ['提交待确认材料', '负责人审批回应', '回到会话继续处理'] },
    ],
    benefits: [
      { title: '资料留在项目', body: '围绕同一组资料工作，减少重复查找和传递。' },
      { title: '讨论围绕成果', body: '会话关联项目与事项，保留工作的来龙去脉。' },
      { title: '交接带着上下文', body: '通过事项保留问询、审批和接手的回应。' },
      { title: '修改对应版本', body: '核对已提交成果的历史变化，延续后续工作。' },
    ],
    closing: '让人机协作围绕成果持续推进',
    related: ['digital-employees', 'knowledge'],
  },
  en: {
    hero: {
      lines: ['People and digital employees', 'working toward one deliverable'],
      summary: 'Keep materials, conversations and work items in the project workspace. From the first request to review and handoff, each response continues with the context already in place.',
    },
    pain: {
      title: 'Make the result something the whole team can continue',
      items: [
        'Files sit in folders, discussions sit in chat, and digital employee output stays in another conversation.',
        'A review or handoff means repeating the background and sending the same files again.',
        'Repeated revisions leave separate copies difficult to connect with feedback and submitted versions.',
      ],
    },
    concept: {
      title: 'Keep context in the project and move work through conversation',
      body: 'Members share files, conversations and work items according to project roles. Mention authorized digital employees in work conversations. They use the requester’s project permissions and raise work items when a person needs to answer, approve or take over. Responses return to the original conversation.',
      labels: ['Shared project', 'Work conversation', 'Human response', 'File versions'],
    },
    features: [
      { icon: 'folder', title: 'Share the project context', body: 'Keep members, files, conversations and work items in one project, with access governed by project roles.' },
      { icon: 'message', title: 'Move work and handoffs through conversation', body: 'Mention digital employees and involve colleagues through questions, approvals and handoff items. Responses return to the original conversation.' },
      { icon: 'clock', title: 'Keep deliverable revisions traceable', body: 'Submitted files retain version and change records. Review earlier versions and restore them within project permissions.' },
    ],
    scenarios: [
      { title: 'Take a service proposal from draft to review', body: 'People and digital employees use shared project materials, exchange feedback in conversation and submit new file versions while keeping earlier deliverables available.', flow: ['Share project materials', 'Draft and review', 'Submit a new revision'] },
      { title: 'Bring the responsible person into the work', body: 'A digital employee sends materials for approval. The response returns to the original conversation so subsequent work keeps its task context.', flow: ['Submit materials', 'Receive the owner’s decision', 'Continue in the conversation'] },
    ],
    benefits: [
      { title: 'Keep materials in the project', body: 'Work from the same files with less repeated searching and transfer.' },
      { title: 'Discuss the deliverable', body: 'Associate conversations with projects and work items to retain context.' },
      { title: 'Hand over the context too', body: 'Retain answers, approval decisions and takeover responses in work items.' },
      { title: 'Connect changes to revisions', body: 'Review changes in submitted deliverables and continue the work.' },
    ],
    closing: 'Keep people and digital employees moving toward the result',
    related: ['digital-employees', 'knowledge'],
  },
} satisfies LandingTranslations;
