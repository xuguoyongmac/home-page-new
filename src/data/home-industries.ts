import type { Locale } from './types';
export interface HomeIndustry { title:string; pain:string; value:string; outputs:string[]; }
export const homeIndustries:Record<Locale,Record<string,HomeIndustry>> = {
 zh:{
  government:{title:'让政策找得到，让材料用得上',pain:'政策分散、材料反复查找，会议讨论与会后工作容易脱节。',value:'围绕同一项工作整理依据、编制材料，衔接人工审阅与会后跟进。',outputs:['带引用的政策摘要','会议纪要与行动清单','制度知识答复']},
  securities:{title:'把找资料的时间，留给研究与判断',pain:'研报、公告与经营数据分散，阅读整理与报告编制反复切换。',value:'串联资料速读、主题研究和经营分析，把来源与分析过程留在项目中，供业务人员复核。',outputs:['研究摘要与底稿','主题研究报告草稿','经营分析简报']},
  general:{title:'让日常协作，交付看得见的成果',pain:'资料散在各处，方案反复改，客户跟进与周期工作常常需要重新整理。',value:'把资料、任务和同事放进同一个项目，从方案编写到客户跟进，沿用已有工作上下文。',outputs:['方案与汇报材料','客户跟进清单','周期工作报告']},
  insurance:{title:'把产品知识，带进每一次业务准备',pain:'产品条款细、资料版本多，业务准备需要反复检索与核对。',value:'围绕产品知识、销售材料与保单资料配置数字员工，整理出处和待补事项，交由业务人员确认。',outputs:['产品条款对照','销售沟通草稿','保单资料清单']},
  'state-owned':{title:'让项目经验，接续下一次协作',pain:'制度、资质与项目材料跨部门分散，投标编制和项目协同反复对齐。',value:'连接制度知识、项目资料与招投标插件，让编制、审阅和交付围绕同一套材料展开。',outputs:['制度与文书草稿','标书响应材料','项目交付文件']},
 },
 en:{
  government:{title:'Find the policy. Put the source to work.',pain:'Scattered policies, repeated searches and disconnected meeting follow-up.',value:'Organize sources and prepare materials around a shared task, with human review and follow-through.',outputs:['Referenced policy briefs','Minutes and action lists','Policy knowledge answers']},
  securities:{title:'Make more room for research and judgment',pain:'Reports, announcements and business data sit across separate tools and files.',value:'Connect reading, thematic research and business analysis, retaining sources for professional review.',outputs:['Research summaries','Draft research reports','Business analysis briefs']},
  general:{title:'Make everyday collaboration deliver',pain:'Scattered sources, repeated revisions and customer work that starts from scratch.',value:'Keep materials, tasks and colleagues in a shared project, with context carried into the next step.',outputs:['Proposals and presentations','Customer follow-up lists','Recurring reports']},
  insurance:{title:'Bring product knowledge into every preparation',pain:'Detailed terms and document versions mean repeated searches and checks.',value:'Configure knowledge and document workflows to prepare cited materials for business review.',outputs:['Product term comparisons','Draft sales materials','Policy document lists']},
  'state-owned':{title:'Carry project experience into the next collaboration',pain:'Policies, credentials and project materials are spread across departments.',value:'Connect knowledge, project sources and bidding tools around shared drafting, review and delivery.',outputs:['Policy and document drafts','Bid response materials','Project deliverables']},
 }
};
