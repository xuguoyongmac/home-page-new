import type { LandingTranslations } from '../landing-types';

export default {
  zh: {
    hero: {
      lines: ['人机同一会话', '共建完整工作闭环'],
      summary: '围绕共享项目资料，在工作会话中 @ 数字员工，通过事项衔接问询、审批与交接。',
    },
    pain: {
      title: '资料、沟通与交接，需要放在一起',
      items: [
        'AI 产出分散在各自的对话里，团队难以围绕同一份材料继续工作。',
        '需要审批或人工接手时，任务背景与处理结果反复转述。',
        '多人各存一份文件，修改意见和成果版本难以对应。',
      ],
    },
    concept: {
      title: '人和数字员工，围绕项目共同工作',
      body: '项目成员按角色共用文件与事项，在会话中调用已获授权的数字员工。数字员工代委托人读写项目资料，需要人工回答、审批或接手时可发起待处理事项。',
      labels: ['项目资料', '工作会话', '人工回应', '成果版本'],
    },
    features: [
      { icon: 'folder', title: '项目共享空间', body: '将成员、资料、会话和事项组织到项目，按项目角色读写。' },
      { icon: 'message', title: '会话式协同流转', body: '在工作会话 @ 数字员工，通过问询、审批和接手事项衔接同事。' },
      { icon: 'clock', title: '成果版本管理', body: '已提交的项目文件保留版本与变更记录，可查阅历史并按权限恢复。' },
    ],
    scenarios: [
      {
        title: '项目方案协同编制',
        body: '业务人员和数字员工围绕同一项目编制方案，提交文件、反馈修改意见，并查看历史版本。',
        flow: ['共用资料', '编制与反馈', '提交新版本'],
      },
      {
        title: '流程审批流转',
        body: '数字员工将待确认材料交给负责人审批，回应结果送回原会话，供数字员工继续处理。',
        flow: ['提交材料', '人工审批', '结果续办'],
      },
    ],
    benefits: [
      { title: '项目资料集中', body: '成员围绕项目文件开展工作，减少重复传递。' },
      { title: '沟通关联工作', body: '工作会话与项目、事项关联，保留讨论背景。' },
      { title: '交接有记录', body: '问询、审批与接手通过事项记录处理结果。' },
      { title: '文件版本可查', body: '查看已提交文件的历史版本，核对修改与成果。' },
    ],
    closing: '打造人机一体的协作工作空间',
    related: ['digital-employees', 'knowledge'],
  },
  en: {
    hero: {
      lines: ['People and Digital Employees,', 'Working in One Conversation.'],
      summary: 'Use shared project materials, mention digital employees in work conversations and connect questions, approvals and handoffs through work items.',
    },
    pain: {
      title: 'Keep Materials, Conversations and Handoffs Together',
      items: [
        'AI outputs stay in separate conversations, making it difficult for a team to continue from the same materials.',
        'Approvals and handoffs require people to repeat task context and relay decisions.',
        'Separate file copies make feedback and deliverable versions difficult to reconcile.',
      ],
    },
    concept: {
      title: 'People and Digital Employees Work Around the Project',
      body: 'Project members share files and work items according to their roles and call authorized digital employees from conversations. Digital employees act with the requester’s project access and can ask people to answer, approve or take over through work items.',
      labels: ['Project Materials', 'Work Conversations', 'Human Responses', 'File Versions'],
    },
    features: [
      { icon: 'folder', title: 'Shared Project Space', body: 'Organize members, materials, conversations and work items under project roles.' },
      { icon: 'message', title: 'Conversation-Based Handoffs', body: 'Mention digital employees and involve colleagues through questions, approvals and handoffs.' },
      { icon: 'clock', title: 'Deliverable Version History', body: 'Review committed file versions and change records, with restoration governed by project access.' },
    ],
    scenarios: [
      {
        title: 'Develop a Proposal Together',
        body: 'People and digital employees prepare a proposal in the same project, submit files, exchange feedback and review earlier versions.',
        flow: ['Shared Materials', 'Draft & Feedback', 'New Revision'],
      },
      {
        title: 'Route Work for Approval',
        body: 'A digital employee sends materials to the responsible person for approval. The response returns to the original conversation for further work.',
        flow: ['Submit Materials', 'Human Approval', 'Continue From the Result'],
      },
    ],
    benefits: [
      { title: 'Keep Materials in the Project', body: 'Work from shared project files with less repeated transfer.' },
      { title: 'Connect Conversations to Work', body: 'Keep discussions associated with their projects and work items.' },
      { title: 'Record Handoff Outcomes', body: 'Use work items to retain answers, approvals and handoff responses.' },
      { title: 'Review File Versions', body: 'Check committed revisions to understand changes and deliverables.' },
    ],
    closing: 'Create a Shared Workspace for People and Digital Employees',
    related: ['digital-employees', 'knowledge'],
  },
} satisfies LandingTranslations;
