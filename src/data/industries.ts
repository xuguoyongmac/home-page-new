import type { Locale } from './types';
import type { Industry } from '../features/solutions/types';
import { solutionModules } from '../features/solutions';
export type { Industry } from '../features/solutions/types';
export const industries = Object.fromEntries((['zh', 'en'] as Locale[]).map(locale => [locale,
  solutionModules.filter(entry => entry.category !== 'deployment').map(entry => entry.copy[locale]),
])) as Record<Locale, Industry[]>;
export const homeIndustrySlugs = ['government', 'securities', 'general', 'insurance', 'state-owned'];
