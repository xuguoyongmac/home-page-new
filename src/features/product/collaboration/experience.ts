import type { ProductExperienceTranslations } from '../experience-types';

export default {
  zh: {
    heroAlt: '二维项目协作工作台：共享资料、工作会话、方案版本与待办事项在同一项目中关联，人和数字员工围绕服务方案协作。',
    sectionTitle: '让协作围绕成果连续发生',
    sections: [
      {
        id: 'project-context', kind: 'document',
        title: '同一项目资料，支撑整段工作',
        body: '把需求、会议记录与历史成果留在项目空间。成员和数字员工围绕同一组资料开展工作，新任务不必再从搜集背景开始。',
        points: [
          { title: '资料与工作放在一起', body: '项目集中组织成员、文件、会话和事项，保留任务所需的资料与上下文。' },
          { title: '项目角色确定访问范围', body: '成员按项目角色读写资料，数字员工代委托人在其项目权限内工作。' },
        ],
        visual: {
          title: '服务方案评审项目', context: '项目共享空间', tabs: ['项目资料', '工作会话', '事项'],
          request: '基于项目需求与访谈纪要，编制服务方案，明确实施安排和交付内容。',
          response: '已结合项目资料编制方案初稿，实施安排与交付内容保留在项目文件中。',
          columns: ['项目资料', '文件版本', '用途'],
          rows: [
            ['需求访谈纪要.docx', 'V1.2', '服务目标与需求背景'],
            ['服务需求清单.xlsx', 'V1.1', '范围与交付要求'],
            ['项目服务方案.docx', 'V1.3', '当前方案成果'],
          ],
          focus: { label: '当前成果', title: '项目服务方案 V1.3', body: '资料、会话与事项关联到同一项目，团队围绕当前成果继续审阅。' },
          files: ['项目服务方案.docx', '服务需求清单.xlsx'],
        },
      },
      {
        id: 'conversation-versions', kind: 'document',
        title: '修改意见接到成果，成果保留版本',
        body: '在工作会话中 @ 数字员工，结合项目资料修改方案。新文件提交后保留版本与变更记录，让讨论有对应的成果，每一次修改都能回看。',
        points: [
          { title: '会话延续当前工作', body: '围绕已有项目资料提出要求、反馈意见，与获授权的数字员工继续协作。' },
          { title: '文件变更可查可恢复', body: '查看已提交文件的历史版本与变更记录，并按权限恢复。' },
        ],
        visual: {
          title: '项目方案编制会话', context: '服务方案评审项目', tabs: ['工作会话', '成果版本', '项目资料'],
          request: '@方案文书数字员工 根据评审意见，补充实施计划与交付边界，提交新的服务方案。',
          response: '实施计划与交付边界已补充，项目服务方案 V1.4 已提交，历史版本与变更记录可查。',
          columns: ['成果版本', '变更内容', '提交状态'],
          rows: [
            ['V1.2', '归集需求与服务范围', '已提交'],
            ['V1.3', '完善方案结构与交付内容', '已提交'],
            ['V1.4', '补充实施计划与交付边界', '当前版本'],
          ],
          focus: { label: '成果版本', title: 'V1.4 已提交到项目', body: '当前方案与历史提交对应，审阅意见接到具体版本。' },
          files: ['项目服务方案.docx', '实施安排表.xlsx'],
        },
      },
      {
        id: 'human-handoffs', kind: 'execution',
        title: '需要人来判断时，连同背景一起交接',
        body: '数字员工通过问询、审批和接手事项请同事参与。处理结果回到原会话，后续工作接着已有材料与回应继续，交接不再只转发一句话。',
        points: [
          { title: '待确认工作进入事项', body: '将需要回答、审批或人工接手的工作交给对应同事，保留处理回应。' },
          { title: '回应回到原会话', body: '数字员工收到人工回应后，继续处理相关资料与成果，延续原任务背景。' },
        ],
        visual: {
          title: '方案评审事项', context: '人工回应与工作接续', tabs: ['待办事项', '处理记录', '原会话'],
          request: '请负责人确认方案交付范围，确认后继续整理配套交付材料。',
          response: '负责人已回应交付范围，处理结果返回原会话，配套材料继续整理。',
          columns: ['工作事项', '协作方式', '处理结果'],
          rows: [
            ['交付范围确认', '审批', '已回应'],
            ['实施安排补充', '问询', '已回应'],
            ['项目资料交接', '接手', '已接手'],
          ],
          focus: { label: '协作接续', title: '交接带着上下文继续', body: '人工回应、原始材料与项目成果保持关联，后续工作有据可循。' },
          files: ['项目交付范围.docx', '交付材料清单.xlsx'],
        },
      },
    ],
  },
  en: {
    heroAlt: 'A flat project workspace connecting shared materials, work conversations, proposal versions and work items so people and digital employees can develop one service proposal.',
    sectionTitle: 'Keep collaboration connected to the deliverable',
    sections: [
      {
        id: 'project-context', kind: 'document',
        title: 'One set of project materials for the work ahead',
        body: 'Keep requirements, meeting records and earlier deliverables in the project. People and digital employees work from the same materials without gathering the background again for each new task.',
        points: [
          { title: 'Keep materials with the work', body: 'Organize members, files, conversations and work items in the project to retain the context each task needs.' },
          { title: 'Use project roles for access', body: 'Members read and write according to project roles. Digital employees work within the requester’s project permissions.' },
        ],
        visual: {
          title: 'Service proposal review', context: 'Shared project workspace', tabs: ['Project materials', 'Work conversations', 'Work items'],
          request: 'Use the project requirements and interview notes to prepare a service proposal with an implementation plan and deliverables.',
          response: 'The proposal draft is prepared from project materials. The implementation plan and deliverables are in the project file.',
          columns: ['Project material', 'Version', 'Purpose'],
          rows: [
            ['Requirements interview notes.docx', 'V1.2', 'Service goals and context'],
            ['Service requirements.xlsx', 'V1.1', 'Scope and delivery requirements'],
            ['Project service proposal.docx', 'V1.3', 'Current proposal'],
          ],
          focus: { label: 'Current deliverable', title: 'Project service proposal V1.3', body: 'Materials, conversations and work items belong to the same project so the team can continue reviewing the result.' },
          files: ['Project service proposal.docx', 'Service requirements.xlsx'],
        },
      },
      {
        id: 'conversation-versions', kind: 'document',
        title: 'Connect feedback to a version of the deliverable',
        body: 'Mention a digital employee in the work conversation and revise the proposal using project materials. Submitted files keep their versions and change records, connecting discussion to a result that can be reviewed later.',
        points: [
          { title: 'Continue the work in conversation', body: 'Share requirements and feedback with authorized digital employees in the context of the existing project.' },
          { title: 'Review and restore file history', body: 'View submitted versions and change records, and restore files within the project’s permissions.' },
        ],
        visual: {
          title: 'Proposal drafting conversation', context: 'Service proposal review', tabs: ['Work conversation', 'File versions', 'Project materials'],
          request: '@Proposal digital employee Use the review feedback to expand the implementation plan and delivery boundaries, then submit the revised proposal.',
          response: 'The implementation plan and delivery boundaries are updated. Proposal V1.4 is submitted with earlier versions and changes available.',
          columns: ['Revision', 'Change', 'Submission'],
          rows: [
            ['V1.2', 'Gather requirements and service scope', 'Submitted'],
            ['V1.3', 'Develop structure and deliverables', 'Submitted'],
            ['V1.4', 'Expand the plan and delivery boundaries', 'Current revision'],
          ],
          focus: { label: 'File version', title: 'V1.4 submitted to the project', body: 'The current proposal connects to its earlier submissions, and feedback connects to a specific revision.' },
          files: ['Project service proposal.docx', 'Implementation plan.xlsx'],
        },
      },
      {
        id: 'human-handoffs', kind: 'execution',
        title: 'Hand over the background when a person needs to decide',
        body: 'Digital employees bring colleagues into the work through questions, approvals and takeover items. Responses return to the original conversation so further work continues with the materials and decisions already in place.',
        points: [
          { title: 'Raise the work that needs a person', body: 'Send questions, approval requests and takeover items to the relevant colleague, retaining their responses.' },
          { title: 'Return the response to the conversation', body: 'Digital employees continue working with related materials and deliverables after the person responds.' },
        ],
        visual: {
          title: 'Proposal review items', context: 'Human responses and continued work', tabs: ['Work items', 'Response records', 'Original conversation'],
          request: 'Ask the owner to confirm the delivery scope, then continue preparing the supporting delivery materials.',
          response: 'The owner has responded on delivery scope. The response is in the original conversation and supporting materials are being prepared.',
          columns: ['Work item', 'Collaboration', 'Response'],
          rows: [
            ['Confirm delivery scope', 'Approval', 'Responded'],
            ['Clarify the implementation plan', 'Question', 'Responded'],
            ['Hand over project materials', 'Takeover', 'Taken over'],
          ],
          focus: { label: 'Work continues', title: 'The handoff carries the context', body: 'Human responses, source materials and project deliverables stay connected for the work that follows.' },
          files: ['Project delivery scope.docx', 'Delivery materials list.xlsx'],
        },
      },
    ],
  },
} satisfies ProductExperienceTranslations;
