import type { Locale } from '../../data/types';

export const bannerCopy = (locale: Locale) => locale === 'zh' ? [
  { label: '团队协作', title: ['让数字员工', '成为团队的一员'], description: '连接企业知识与业务系统，与数字员工协作，把工作做成可交付的成果。', primary: '预约交流', duration: 14000 },
  { label: '任务执行', title: ['一句话交办', '让任务跨系统完成'], description: '从理解目标、拆解规划，到跨系统执行、成果校验与分发，让一句交代形成完整业务闭环。', primary: '预约演示', duration: 18000 },
  { label: '业务成果', title: ['7×24 小时待命', '重复工作交给数字员工'], description: '围绕企业业务流程开展工作，操作留痕、结果可复核，让做成的方法持续沉淀复用。', primary: '案例演示', duration: 12000 },
] : [
  { label: 'Collaborate', title: ['Bring digital employees', 'into your team'], description: 'Connect company knowledge and business systems. Work with digital employees to deliver results your team can build on.', primary: 'Book a consultation', duration: 14000 },
  { label: 'Execute', title: ['One request', 'Work across systems'], description: 'From understanding the goal and planning the work to execution, review and delivery: turn one request into a complete workflow.', primary: 'Book a demo', duration: 18000 },
  { label: 'Deliver', title: ['Ready around the clock', 'Built for recurring work'], description: 'Connect business workflows with traceable actions and reviewable results. Keep the methods behind the work for reuse.', primary: 'Case showcase', duration: 12000 },
];
