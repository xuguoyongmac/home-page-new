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
    government: governmentPresentation.zh.home,
    securities: securitiesPresentation.zh.home,
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
    insurance: insurancePresentation.zh.home,
    'state-owned': stateOwnedPresentation.zh.home,
  },
  en: {
    government: governmentPresentation.en.home,
    securities: securitiesPresentation.en.home,
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
    insurance: insurancePresentation.en.home,
    'state-owned': stateOwnedPresentation.en.home,
  },
};
