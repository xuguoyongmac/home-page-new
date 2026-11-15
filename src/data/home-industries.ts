import type { Locale } from './types';

export interface HomeIndustry {
  title: string;
  pain: string;
  value: string;
  scenarios: string[];
  benefits: { title: string; description: string }[];
}

export const homeIndustries: Record<Locale, Record<string, HomeIndustry>> = {
  zh: {
    government: {
      title: '让政策落实到事，让服务形成闭环',
      pain: '政策条件难匹配、申报材料反复改，群众诉求跨部门流转；服务进展与重点部署，还要靠人工逐项追问。',
      value: '数字员工对照政策与对象资料，组织办事指引和材料预审；提取诉求要素、责任分工与办理反馈，让服务事项和督办任务接续推进。',
      scenarios: ['政策落实', '惠企匹配', '办事导引', '材料预审', '诉求研判', '督查督办'],
      benefits: [
        { title: '政策落实找准服务对象', description: '把适用条件与服务对象对应起来，让惠企政策从文件解读走向具体落实。' },
        { title: '办事申报减少反复', description: '提前定位材料缺项与口径差异，让企业群众清楚准备要求，减少反复补正。' },
        { title: '诉求督办责任更清晰', description: '把群众诉求、责任分工和办理反馈串起来，让管理者看清进展、协调卡点。' },
      ],
    },
    securities: {
      title: '投研更深入，合规风控与客户经营更主动',
      pain: '公告研报多而分散，合规审阅靠逐条比对，客户画像与服务记录脱节；专业精力被重复搜集、核查和整理挤占。',
      value: '围绕投研、合规风控与客户经营，数字员工归集研报公告和业务数据，关联规则与客户背景，交付研究底稿、风险线索和可接续的跟进方案。',
      scenarios: ['投研分析', '主题研究', '合规审阅', '风险跟踪', '客户经营', '财富分析'],
      benefits: [
        { title: '专业精力回到投研判断', description: '将分散公告、研报与指标组织成研究依据，让分析师专注观点形成与深度研究。' },
        { title: '合规风险问题有据可查', description: '把材料问题、适用规则与风险线索对应起来，让复核与后续处置抓住关键。' },
        { title: '客户经营落到服务行动', description: '把经营变化关联到客群、产品与服务背景，让一线明确跟进对象和沟通重点。' },
      ],
    },
    banking: {
      title: '让信贷审查有据，让贷后风险及时跟进',
      pain: '尽调重复录入、制度反复核对、风险信号分散，网点指标与客户背景脱节；客户经理和审查人员难把精力用在关键判断上。',
      value: '数字员工贯通信贷尽调、合规审阅、贷后核查与客户分析，汇总企业和财务资料、归并预警线索，把审查重点与服务行动交到一线。',
      scenarios: ['信贷尽调', '授信审查', '贷后预警', '合规审阅', '客户经营', '网点分析'],
      benefits: [
        { title: '信贷审查聚焦关键判断', description: '贯通企业、财务与合同资料，关联制度要求，让尽调审查少些重复、判断更有依据。' },
        { title: '贷后风险跟进更有重点', description: '归并同一客户的财务变化、舆情和预警线索，让风险核查有重点、跟进有承接。' },
        { title: '经营重点直达客户一线', description: '把网点指标与客群、产品和服务记录关联起来，让经营分析接到具体客户行动。' },
      ],
    },
    insurance: {
      title: '核保抓住风险，理赔保全少些往返',
      pain: '健康告知、保单条款与理赔证据要反复查验，保全变更涉及多份资料；信息差异和岗位交接拖慢了业务处理。',
      value: '数字员工围绕核保、理赔与保全，核查投保资料、对照事实与保障责任、整理变更要求，把风险疑点、审阅依据和处理事项交到对应岗位。',
      scenarios: ['核保辅助', '风险审阅', '理赔核查', '责任对照', '保全变更', '客户服务'],
      benefits: [
        { title: '核保判断抓住风险重点', description: '把投保事实、异常信息与承保规则对应起来，让核保人员集中精力处理复杂案件。' },
        { title: '理赔事实与责任更清楚', description: '将案件经过、费用凭证与保单条款交叉核对，让理赔复核抓住证据与责任要点。' },
        { title: '保全服务衔接更加顺畅', description: '对齐变更申请、当前保单和办理要求，让岗位交接接得上、客户服务少些往返。' },
      ],
    },
    'state-owned': {
      title: '经营看清重点，履约管住进度与成本',
      pain: '集团报表层层汇总，招采文件反复审查，项目进度、成本与隐患整改各自流转；问题看见了，责任与后续动作却难跟到底。',
      value: '数字员工连接集团经营、招采与项目资料，分析经营和成本差异、核对招采要求，整理履约与隐患整改事项，让管理重点接到责任行动。',
      scenarios: ['集团经营', '招采审查', '投标响应', '履约跟进', '成本分析', '隐患整改'],
      benefits: [
        { title: '集团经营管理看清重点', description: '把经营、预算与成本差异定位到重点单位和项目，让管理层掌握问题与协调优先级。' },
        { title: '招采审查与响应更完整', description: '逐项对应条款、资质与技术商务材料，让招采审查抓住缺口、投标响应更完整。' },
        { title: '履约与整改进展可追踪', description: '把进度偏差、隐患整改与责任反馈接起来，让项目协调和整改复核持续推进。' },
      ],
    },
  },
  en: {
    government: {
      title: 'Put policy into practice. See service requests through.',
      pain: 'Policy eligibility is hard to match, applications need repeated revisions and citizen requests cross departments. Progress still depends on staff chasing updates.',
      value: 'Digital employees compare policies with applicant records, prepare guidance and pre-check materials, then organize request details, responsibilities and progress for continued service and follow-up.',
      scenarios: ['Policy execution', 'Business eligibility', 'Service guidance', 'Application review', 'Request analysis', 'Action follow-up'],
      benefits: [
        { title: 'Match policies to eligible recipients', description: 'Connect eligibility conditions to applicants and actions, turning policy guidance into practical delivery.' },
        { title: 'Reduce application back-and-forth', description: 'Identify missing materials and inconsistent information early, making preparation and correction requirements clear.' },
        { title: 'Make service accountability clear', description: 'Connect requests, responsibilities and feedback so managers can see progress and resolve coordination issues.' },
      ],
    },
    securities: {
      title: 'Deeper research. Proactive compliance, risk and client management.',
      pain: 'Research sources are scattered, compliance reviews require repeated comparisons, and client profiles are disconnected from service history. Specialists spend time gathering and checking instead of exercising judgment.',
      value: 'Digital employees connect research, business data, policies and client context to prepare research papers, compliance findings, risk briefs and client follow-up plans.',
      scenarios: ['Investment research', 'Thematic research', 'Compliance review', 'Risk tracking', 'Client management', 'Wealth analysis'],
      benefits: [
        { title: 'Keep expertise focused on research', description: 'Organize announcements, reports and indicators into research evidence so analysts can focus on deeper work and informed views.' },
        { title: 'Trace compliance and risk findings', description: 'Link document findings to applicable rules and risk signals, giving reviewers clear priorities for follow-up.' },
        { title: 'Turn client insight into action', description: 'Connect business changes to client segments, products and service history so frontline teams know whom to contact and what to discuss.' },
      ],
    },
    banking: {
      title: 'Evidence for credit reviews. Timely post-loan risk follow-up.',
      pain: 'Due diligence repeats data entry, policy checks take time and risk signals arrive separately. Branch metrics lack client context, leaving less time for critical judgment.',
      value: 'Digital employees connect due diligence, compliance review, post-loan checks and client analysis. They organize company records, financials and alerts into review priorities and frontline actions.',
      scenarios: ['Due diligence', 'Credit review', 'Post-loan alerts', 'Compliance review', 'Client management', 'Branch analysis'],
      benefits: [
        { title: 'Focus credit reviews on judgment', description: 'Bring company, financial and contract records together with policy requirements, reducing repeated preparation and grounding credit reviews.' },
        { title: 'Prioritize post-loan risk follow-up', description: 'Combine financial changes, news and alerts for the same client, giving risk teams focused checks and connected follow-up.' },
        { title: 'Bring priorities to client teams', description: 'Connect branch metrics with segments, products and service records so business analysis leads to specific client actions.' },
      ],
    },
    insurance: {
      title: 'Focus on underwriting risk. Streamline claims and policy servicing.',
      pain: 'Disclosures, policy terms and claims evidence need repeated checks. Policy changes span multiple files, while discrepancies and disconnected handoffs slow the work.',
      value: 'Digital employees support underwriting, claims and policy servicing by checking application records, comparing facts with coverage and organizing change requirements, findings and evidence for the responsible teams.',
      scenarios: ['Underwriting support', 'Risk review', 'Claims checks', 'Coverage review', 'Policy changes', 'Client service'],
      benefits: [
        { title: 'Focus underwriting on key risks', description: 'Connect application facts, anomalies and underwriting rules so specialists can concentrate on complex cases.' },
        { title: 'Clarify claims facts and coverage', description: 'Cross-check case events, expense evidence and policy terms so claims reviews focus on the relevant facts and coverage.' },
        { title: 'Keep policy servicing connected', description: 'Align change requests, current policies and processing requirements to support connected handoffs and fewer service exchanges.' },
      ],
    },
    'state-owned': {
      title: 'See operating priorities. Track project schedules and costs.',
      pain: 'Group reports pass through layers of consolidation. Procurement, project schedules, costs and safety actions run separately, making ownership and follow-through hard to track.',
      value: 'Digital employees connect operating, procurement and project records, analyze performance and cost differences, check tender requirements and prepare assigned delivery and remediation actions.',
      scenarios: ['Group performance', 'Procurement review', 'Bid responses', 'Project delivery', 'Cost analysis', 'Safety remediation'],
      benefits: [
        { title: 'See group operating priorities', description: 'Locate operating, budget and cost differences across key units and projects so managers can prioritize issues and coordination.' },
        { title: 'Strengthen procurement and bids', description: 'Match requirements, qualifications and technical or commercial evidence so procurement reviews find gaps and bids address them.' },
        { title: 'Follow delivery and remediation', description: 'Connect schedule differences, safety actions and owner feedback to carry project coordination and remediation reviews forward.' },
      ],
    },
  },
};
