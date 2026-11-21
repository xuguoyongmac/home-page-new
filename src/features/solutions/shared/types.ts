import type { Locale } from '../../../data/types';
import type { HomeIndustry } from '../../../data/home-industries';

export interface IndustryEmployee {
  role: string;
  avatar: string;
  skills: string[];
  process: string[];
  outputs: string[];
  value: string;
}

export interface IndustrySolutionBase {
  home: HomeIndustry;
  hero: { lines: string[]; background: string };
}

export interface IndustryValueSolutionCopy extends IndustrySolutionBase {
  hero: IndustrySolutionBase['hero'] & { illustration: string };
  sources: string[];
  outputs: string[];
  features: { title: string; problem: string; body: string; image: string; imageAlt: string; imageHeight: number }[];
  teamTitle: string;
  employees: IndustryEmployee[];
  deployment: { title: string; body: string };
}

export interface IndustryProblemMapping {
  icon: string;
  problemTitle: string;
  problem: string;
  capabilities: string[];
  response: string;
  deliverables: string[];
  value: string;
}

export interface IndustrySolutionMapping {
  context: { title: string; body: string };
  mappingsTitle: string;
  mappings: IndustryProblemMapping[];
  governance: { title: string; items: { title: string; body: string }[] };
  values: { title: string; items: { title: string; body: string }[] };
}

export interface IndustryMappedSolutionCopy extends IndustrySolutionBase {
  solution: IndustrySolutionMapping;
}

export type IndustrySolutionCopy = IndustryValueSolutionCopy | IndustryMappedSolutionCopy;

export type IndustrySolutionPresentation = Record<Locale, IndustrySolutionCopy>;
