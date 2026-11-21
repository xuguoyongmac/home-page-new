import { bankingPresentation } from '../features/solutions/banking/page-content';
import { insurancePresentation } from '../features/solutions/insurance/page-content';
import { securitiesPresentation } from '../features/solutions/securities/page-content';
import { governmentPresentation } from '../features/solutions/government/page-content';
import { stateOwnedPresentation } from '../features/solutions/state-owned/page-content';
import { trustPresentation } from '../features/solutions/trust/page-content';
import { generalPresentation } from '../features/solutions/general/page-content';

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
    'banking': bankingPresentation.zh.home,
    'insurance': insurancePresentation.zh.home,
    'securities': securitiesPresentation.zh.home,
    'government': governmentPresentation.zh.home,
    'state-owned': stateOwnedPresentation.zh.home,
    'trust': trustPresentation.zh.home,
    'general': generalPresentation.zh.home,
  },
  en: {
    'banking': bankingPresentation.en.home,
    'insurance': insurancePresentation.en.home,
    'securities': securitiesPresentation.en.home,
    'government': governmentPresentation.en.home,
    'state-owned': stateOwnedPresentation.en.home,
    'trust': trustPresentation.en.home,
    'general': generalPresentation.en.home,
  },
};
