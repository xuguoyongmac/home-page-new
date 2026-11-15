import type { Locale } from './types';

export interface HomeIndustry {
  title: string;
  pain: string;
  value: string;
  scenarios: string[];
  outputs: string[];
}

export const homeIndustries: Record<Locale, Record<string, HomeIndustry>> = {
  zh: {
    government: {
      title: '让政策落实到事，让服务形成闭环',
      pain: '政策条件难匹配、申报材料反复改，群众诉求跨部门流转；服务进展与重点部署，还要靠人工逐项追问。',
      value: '数字员工对照政策与对象资料，组织办事指引和材料预审；提取诉求要素、责任分工与办理反馈，让服务事项和督办任务接续推进。',
      scenarios: ['政策落实', '惠企匹配', '办事导引', '材料预审', '诉求研判', '督查督办'],
      outputs: ['政策适用分析与办理清单', '申报材料预审与补正清单', '诉求办理、责任分工与督办事项表'],
    },
    securities: {
      title: '投研更深入，合规风控与客户经营更主动',
      pain: '公告研报多而分散，合规审阅靠逐条比对，客户画像与服务记录脱节；专业精力被重复搜集、核查和整理挤占。',
      value: '围绕投研、合规风控与客户经营，数字员工归集研报公告和业务数据，关联规则与客户背景，交付研究底稿、风险线索和可接续的跟进方案。',
      scenarios: ['投研分析', '主题研究', '合规审阅', '风险跟踪', '客户经营', '财富分析'],
      outputs: ['主题研究报告、研究底稿与引用索引', '合规审阅问题单与风险跟踪简报', '客户画像、服务行动表与沟通材料'],
    },
    banking: {
      title: '让信贷审查有据，让贷后风险及时跟进',
      pain: '尽调重复录入、制度反复核对、风险信号分散，网点指标与客户背景脱节；客户经理和审查人员难把精力用在关键判断上。',
      value: '数字员工贯通信贷尽调、合规审阅、贷后核查与客户分析，汇总企业和财务资料、归并预警线索，把审查重点与服务行动交到一线。',
      scenarios: ['信贷尽调', '授信审查', '贷后预警', '合规审阅', '客户经营', '网点分析'],
      outputs: ['尽调报告与授信审查底稿', '风险线索、预警分析与核查清单', '客户经营重点与网点行动简报'],
    },
    insurance: {
      title: '核保抓住风险，理赔保全少些往返',
      pain: '健康告知、保单条款与理赔证据要反复查验，保全变更涉及多份资料；信息差异和岗位交接拖慢了业务处理。',
      value: '数字员工围绕核保、理赔与保全，核查投保资料、对照事实与保障责任、整理变更要求，把风险疑点、审阅依据和处理事项交到对应岗位。',
      scenarios: ['核保辅助', '风险审阅', '理赔核查', '责任对照', '保全变更', '客户服务'],
      outputs: ['核保资料核查与风险审阅要点', '理赔事实、责任对照与证据清单', '保全变更核对与办理事项清单'],
    },
    'state-owned': {
      title: '经营看清重点，履约管住进度与成本',
      pain: '集团报表层层汇总，招采文件反复审查，项目进度、成本与隐患整改各自流转；问题看见了，责任与后续动作却难跟到底。',
      value: '数字员工连接集团经营、招采与项目资料，分析经营和成本差异、核对招采要求，整理履约与隐患整改事项，让管理重点接到责任行动。',
      scenarios: ['集团经营', '招采审查', '投标响应', '履约跟进', '成本分析', '隐患整改'],
      outputs: ['集团经营分析与问题督办清单', '招采审查底稿与投标响应矩阵', '项目履约、成本差异与隐患整改台账'],
    },
  },
  en: {
    government: {
      title: 'Put policy into practice. See service requests through.',
      pain: 'Policy eligibility is hard to match, applications need repeated revisions and citizen requests cross departments. Progress still depends on staff chasing updates.',
      value: 'Digital employees compare policies with applicant records, prepare guidance and pre-check materials, then organize request details, responsibilities and progress for continued service and follow-up.',
      scenarios: ['Policy execution', 'Business eligibility', 'Service guidance', 'Application review', 'Request analysis', 'Action follow-up'],
      outputs: ['Policy eligibility analysis and service checklist', 'Application review and correction checklist', 'Request handling, owners and follow-up register'],
    },
    securities: {
      title: 'Deeper research. Proactive compliance, risk and client management.',
      pain: 'Research sources are scattered, compliance reviews require repeated comparisons, and client profiles are disconnected from service history. Specialists spend time gathering and checking instead of exercising judgment.',
      value: 'Digital employees connect research, business data, policies and client context to prepare research papers, compliance findings, risk briefs and client follow-up plans.',
      scenarios: ['Investment research', 'Thematic research', 'Compliance review', 'Risk tracking', 'Client management', 'Wealth analysis'],
      outputs: ['Thematic reports, research workbooks and source index', 'Compliance findings and risk tracking briefs', 'Client profiles, service actions and communication materials'],
    },
    banking: {
      title: 'Evidence for credit reviews. Timely post-loan risk follow-up.',
      pain: 'Due diligence repeats data entry, policy checks take time and risk signals arrive separately. Branch metrics lack client context, leaving less time for critical judgment.',
      value: 'Digital employees connect due diligence, compliance review, post-loan checks and client analysis. They organize company records, financials and alerts into review priorities and frontline actions.',
      scenarios: ['Due diligence', 'Credit review', 'Post-loan alerts', 'Compliance review', 'Client management', 'Branch analysis'],
      outputs: ['Due diligence report and credit review workbook', 'Risk signals, alert analysis and review checklist', 'Client priorities and branch action brief'],
    },
    insurance: {
      title: 'Focus on underwriting risk. Streamline claims and policy servicing.',
      pain: 'Disclosures, policy terms and claims evidence need repeated checks. Policy changes span multiple files, while discrepancies and disconnected handoffs slow the work.',
      value: 'Digital employees support underwriting, claims and policy servicing by checking application records, comparing facts with coverage and organizing change requirements, findings and evidence for the responsible teams.',
      scenarios: ['Underwriting support', 'Risk review', 'Claims checks', 'Coverage review', 'Policy changes', 'Client service'],
      outputs: ['Underwriting findings and risk review priorities', 'Claims facts, coverage comparison and evidence checklist', 'Policy-change checks and service action list'],
    },
    'state-owned': {
      title: 'See operating priorities. Track project schedules and costs.',
      pain: 'Group reports pass through layers of consolidation. Procurement, project schedules, costs and safety actions run separately, making ownership and follow-through hard to track.',
      value: 'Digital employees connect operating, procurement and project records, analyze performance and cost differences, check tender requirements and prepare assigned delivery and remediation actions.',
      scenarios: ['Group performance', 'Procurement review', 'Bid responses', 'Project delivery', 'Cost analysis', 'Safety remediation'],
      outputs: ['Group performance analysis and issue follow-up', 'Procurement review and tender response matrix', 'Project delivery, cost differences and remediation register'],
    },
  },
};
