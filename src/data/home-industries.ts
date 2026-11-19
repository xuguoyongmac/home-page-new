import { insurancePresentation } from '../features/solutions/insurance/page-content';
import { securitiesPresentation } from '../features/solutions/securities/page-content';
import { governmentPresentation } from '../features/solutions/government/page-content';
import { stateOwnedPresentation } from '../features/solutions/state-owned/page-content';

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
      ...governmentPresentation.zh.home,
      title: '政策匹配与办件服务',
      pain: '政策条件要逐项核对企业资料，跨部门办事材料需要反复补正。热线工单转办后，办理依据和反馈也要跟上。',
      value: '数字员工对照政策与企业事实，整理申报材料和补正清单，按职责目录准备诉求分办建议与办理记录。',
      benefits: [
        { title: '政策匹配工作单', description: '逐项比对政策条件与企业资料，整理适用依据和待核实内容，供服务人员核验。' },
        { title: '申报卷宗与补正清单', description: '核对共用信息、专项附件与版本差异，形成办件卷宗和补正清单，交由窗口受理。' },
        { title: '诉求分办与办理记录', description: '按工单事实与职责目录提出主协办建议，记录岗位确认、办理反馈及答复依据。' },
      ],
    },
    securities: {
      ...securitiesPresentation.zh.home,
      title: '研究、合规与营业部经营',
      pain: '公告、财报和研究假设分散，研报发布前需要逐条查核。营业部的资产与交易变化，还要区分资金流动和市值波动。',
      value: '数字员工整理研究证据和待验证假设，定位材料中的合规问题，拆解营业部经营变化，准备客户服务事项。',
      benefits: [
        { title: '研究论证与来源索引', description: '对照事件与指标，归集支持证据、反证和待验证假设，保留来源供分析师查核。' },
        { title: '材料问题与复核清单', description: '将研报与业务材料的问题定位到原句和规则，整理修改建议及复核任务。' },
        { title: '经营归因与服务准备', description: '拆解资金流动、市值和产品结构变化，关联客群与服务记录，准备沟通事项。' },
      ],
    },
    banking: {
      title: '信贷审查与贷后管理',
      pain: '企业资料反复录入，审查规则逐条查找。同一客户的财务变化、舆情和预警，又分散在不同记录里。',
      value: '数字员工整理企业、财务与合同资料，对照审查要求，归集贷后风险线索，准备客户分析与跟进事项。',
      scenarios: ['信贷尽调', '授信审查', '贷后预警', '合规审阅', '客户经营', '网点分析'],
      benefits: [
        { title: '信贷审查清单', description: '汇总企业、财务与合同资料，对照制度要求，整理审查依据和需要核实的问题。' },
        { title: '贷后核查事项', description: '按客户归集财务变化、舆情和预警线索，列出风险核查重点与后续跟进事项。' },
        { title: '客户分析与跟进', description: '结合网点指标、客群、产品及服务记录，整理客户分析结果和具体服务事项。' },
      ],
    },
    insurance: {
      ...insurancePresentation.zh.home,
      title: '核保、理赔与保全',
      pain: '健康告知、出险经过与费用凭证需要交叉核对。保单变更还涉及合同影响、材料补正和后续办理。',
      value: '数字员工核对投保事实，整理核保问询、理赔证据与补件清单，对照保全变更内容，交由专业岗位复核办理。',
      benefits: [
        { title: '核保问询清单', description: '核对健康告知、投保事实和承保条件，列出资料差异、证据出处及待问询事项。' },
        { title: '理赔证据与补件清单', description: '梳理事故时间线，对照保单责任与费用凭证，整理证据差异和需要补充的材料。' },
        { title: '保全变更与交接记录', description: '比较变更前后内容及合同影响，核对办理材料，记录补正事项和交接状态。' },
      ],
    },
    'state-owned': {
      ...stateOwnedPresentation.zh.home,
      title: '经营分析与合同履约',
      pain: '经营计划、预算和项目执行分属不同台账。采购与投标材料需要逐项核对，履约变更和现场整改还要追到责任岗位。',
      value: '数字员工分析预算执行差异，分别整理采购审查与投标响应材料，核对合同履约和整改反馈，准备责任交接。',
      benefits: [
        { title: '预算差异与协调事项', description: '对照预算、回款与项目节点，整理执行差异、变化原因和需要协调的责任事项。' },
        { title: '采购审查与投标响应', description: '采购方核对需求和评审文件，投标方整理条款响应与证明材料，分别交由有权岗位确认。' },
        { title: '履约台账与责任交接', description: '将到货、变更、成本与整改反馈归入履约台账，列明责任、时限和复核事项。' },
      ],
    },
  },
  en: {
    government: {
      ...governmentPresentation.en.home,
      title: 'Policy matching and public services',
      pain: 'Policy conditions must be checked against company records, and cross-department applications often need corrections. Reassigned hotline cases also need a record of decisions and follow-up.',
      value: 'Digital employees compare policies with company facts, prepare applications and correction lists, and use responsibility directories to draft case assignments and processing records.',
      benefits: [
        { title: 'Policy matching worksheet', description: 'Compare policy conditions with company records and prepare the supporting evidence and open questions for service staff.' },
        { title: 'Application file and corrections', description: 'Check shared details, attachments and version differences, then prepare a case file and correction list for the service desk.' },
        { title: 'Case assignments and progress', description: 'Use case facts and responsibility directories to propose lead and supporting teams, with confirmations, updates and response evidence.' },
      ],
    },
    securities: {
      ...securitiesPresentation.en.home,
      title: 'Research, compliance and branch operations',
      pain: 'Disclosures, financials and research assumptions sit in separate records. Reports need line-by-line checks before publication, while branch asset changes require an explanation beyond headline totals.',
      value: 'Digital employees organize research evidence and open hypotheses, locate compliance issues in documents, and analyze branch changes to prepare client service actions.',
      benefits: [
        { title: 'Research evidence and sources', description: 'Compare events and indicators, organize supporting and contrary evidence, and retain sources and open hypotheses for analysts.' },
        { title: 'Document issues and review list', description: 'Locate issues in research and business materials against the original wording and applicable rules, with revisions and review tasks.' },
        { title: 'Performance findings and service plans', description: 'Separate cash flows, market movements and product shifts, then use client segments and service records to prepare follow-up.' },
      ],
    },
    banking: {
      title: 'Credit review and post-loan management',
      pain: 'Company details are entered repeatedly and review rules checked one by one. Financial changes, news and alerts for the same client sit in separate records.',
      value: 'Digital employees organize company, financial and contract records, check review requirements, collect post-loan risk signals and prepare client analysis and follow-up items.',
      scenarios: ['Due diligence', 'Credit review', 'Post-loan alerts', 'Compliance review', 'Client management', 'Branch analysis'],
      benefits: [
        { title: 'Credit review checklist', description: 'Organize company, financial and contract records against policy requirements, with supporting evidence and questions for review.' },
        { title: 'Post-loan follow-up items', description: 'Group financial changes, news and alerts by client, then prepare risk checks and follow-up items.' },
        { title: 'Client analysis and follow-up', description: 'Review branch metrics, client segments, products and service records to prepare client findings and service actions.' },
      ],
    },
    insurance: {
      ...insurancePresentation.en.home,
      title: 'Underwriting, claims and policy servicing',
      pain: 'Health disclosures, incident accounts and expense receipts require cross-checks. Policy changes also need contract impact reviews, corrected records and follow-up processing.',
      value: 'Digital employees check application facts, prepare underwriting enquiries and claims evidence, and compare policy changes for specialist review and processing.',
      benefits: [
        { title: 'Underwriting enquiry list', description: 'Check health disclosures, application facts and underwriting conditions, with discrepancies, evidence and questions for follow-up.' },
        { title: 'Claims evidence and missing records', description: 'Build an incident timeline, compare coverage with expense records, and prepare evidence discrepancies and missing-record lists.' },
        { title: 'Policy changes and handover record', description: 'Compare requested changes and contract impacts, check supporting records, and track corrections and processing handovers.' },
      ],
    },
    'state-owned': {
      ...stateOwnedPresentation.en.home,
      title: 'Business analysis and contract delivery',
      pain: 'Plans, budgets and project progress are recorded in separate ledgers. Procurement and bid documents require detailed checks, while contract changes and site corrections need a responsible owner.',
      value: 'Digital employees analyze budget variances, prepare procurement reviews and bid responses separately, and check contract delivery and corrective work before handover.',
      benefits: [
        { title: 'Budget variances and coordination', description: 'Compare budgets, collections and project milestones to identify variances, causes and items requiring coordination.' },
        { title: 'Procurement reviews and bid responses', description: 'Buyers check requirements and evaluation documents; bidders organize responses and evidence for the authorized teams to confirm.' },
        { title: 'Contract ledger and handover', description: 'Record deliveries, changes, costs and corrective work in the contract ledger, with owners, deadlines and review items.' },
      ],
    },
  },
};
