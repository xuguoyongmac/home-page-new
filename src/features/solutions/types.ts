import type { Locale } from '../../data/types';
export interface Industry {
  slug: string; icon: string; name: string; tag: string; title: string; description: string;
  scope: string; image: string;
  tasks: { title: string; input: string; action: string; output: string }[];
}
export interface SolutionModule {
  slug: string;
  order: number;
  category: 'industry' | 'general' | 'deployment';
  navigation?: Record<Locale, { name: string; description: string; icon: string }>;
  copy: Record<Locale, Industry>;
}
