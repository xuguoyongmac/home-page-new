import type { Locale } from '../../../data/types';

interface EmployeeFeatureSection {
  id: 'recruit' | 'work' | 'continuity';
  title: string;
  subtitle: string;
  body: string;
}

export default {
  zh: {
    sections: [
      {
        id: 'work',
        title: '职责、技能、工作区，组成一名数字员工',
        subtitle: '岗位职责界定工作，技能、知识与业务系统支撑执行',
        body: 'Agent 承担执行，可按岗位需要编排协作。知识、插件与业务系统按配置和授权接入，工作区保存文件与会话，工作记忆按使用者隔离。',
      },
      {
        id: 'recruit',
        title: '岗位方法入模板，招募生成员工',
        subtitle: '模板承载职责、Agent 配置、技能与工作文件；招募即得独立实例，沿用同一套做法',
        body: '岗位方法沉淀在模板中，岗位职责、Agent 配置、专业技能与工作文件随模板一同分发。团队按需招募为独立运行的数字员工，实例沿用统一做法，权限按使用者与项目单独配置。',
      },
      {
        id: 'continuity',
        title: '一次交办，转为持续承接',
        subtitle: '会话交办与定时调度两个入口，成果回交人工审阅，工作记忆接续下一轮',
        body: '业务人员在会话中交代要求与资料，数字员工按岗位规则执行，交付文稿、清单与报告供审阅。重复性工作配置为定时任务，工作记忆把上一步结论带到下一步。',
      },
    ],
  },
  en: {
    sections: [
      {
        id: 'work',
        title: 'Responsibilities, skills, and a workspace form a digital employee',
        subtitle: 'Role rules define the work. Skills, knowledge, and systems support execution.',
        body: 'Agents execute work and can collaborate as needed. Knowledge, plugins, and systems connect with authorization. The workspace holds files and conversations; work memory stays separate for each user.',
      },
      {
        id: 'recruit',
        title: 'Capture role methods in a template. Recruit an employee.',
        subtitle: 'Templates carry responsibilities, Agent settings, skills, and files into independent instances',
        body: 'Role methods live in a template, distributed together with responsibilities, Agent configuration, skills, and work files. Teams recruit digital employees that run independently, reuse the same methods, and configure permissions separately for each user and project.',
      },
      {
        id: 'continuity',
        title: 'One assignment becomes ongoing work',
        subtitle: 'Assign through conversation or a schedule. Review the results and carry context into the next task.',
        body: 'Provide requirements and materials in a conversation. The digital employee follows role rules and delivers documents, checklists, and reports for review. Schedule recurring work, with work memory carrying conclusions into the next task.',
      },
    ],
  },
} satisfies Record<Locale, { sections: EmployeeFeatureSection[] }>;
