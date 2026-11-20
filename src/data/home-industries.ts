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

const presentations = {
  banking: bankingPresentation,
  insurance: insurancePresentation,
  securities: securitiesPresentation,
  government: governmentPresentation,
  'state-owned': stateOwnedPresentation,
  trust: trustPresentation,
  general: generalPresentation,
};

export const homeIndustries = Object.fromEntries((['zh', 'en'] as Locale[]).map(locale => [locale,
  Object.fromEntries(Object.entries(presentations).map(([slug, presentation]) => [slug, presentation[locale].home])),
])) as Record<Locale, Record<string, HomeIndustry>>;

export const industrySolutionImages = Object.fromEntries((['zh', 'en'] as Locale[]).map(locale => [locale,
  Object.fromEntries(Object.entries(presentations).map(([slug, presentation]) => [slug, presentation[locale].hero.illustration])),
])) as Record<Locale, Record<string, string>>;

export const industrySolutionImageHeights = Object.fromEntries((['zh', 'en'] as Locale[]).map(locale => [locale,
  Object.fromEntries(Object.entries(presentations).map(([slug, presentation]) => [slug, presentation[locale].features[0].imageHeight])),
])) as Record<Locale, Record<string, number>>;
