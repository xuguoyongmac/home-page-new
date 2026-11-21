import type { Locale } from '../../../data/types';
import type { Industry, SolutionModule } from '../types';
import type { IndustrySolutionCopy, IndustrySolutionPresentation } from './types';

interface IndustryDefinition {
  slug: string;
  order: number;
  icon: string;
  names: Record<Locale, string>;
  navigation: SolutionModule['navigation'];
}

function createCopy(definition: IndustryDefinition, locale: Locale, presentation: IndustrySolutionCopy): Industry {
  const zh = locale === 'zh';
  const separator = zh ? '、' : ', ';
  if ('solution' in presentation) {
    const solution = presentation.solution;
    return {
      slug: definition.slug,
      icon: definition.icon,
      name: definition.names[locale],
      tag: definition.names[locale],
      title: presentation.home.title,
      description: presentation.home.value,
      scope: solution.governance.items.map(item => item.body).join(zh ? '；' : ' '),
      image: 'collaborative-review',
      tasks: solution.mappings.map(mapping => ({
        title: mapping.problemTitle,
        input: mapping.problem,
        action: mapping.response,
        output: mapping.deliverables.join(separator),
        value: mapping.value,
      })),
      story: {
        lines: presentation.hero.lines,
        priorities: solution.mappings.map(mapping => ({ title: mapping.problemTitle, body: mapping.problem })),
        exhibit: {
          title: solution.mappingsTitle,
          request: solution.context.body,
          sources: [...new Set(solution.mappings.flatMap(mapping => mapping.capabilities))],
          columns: zh ? ['业务难题', '平台解法', '交付成果'] : ['Business challenge', 'Platform response', 'Deliverables'],
          rows: solution.mappings.map(mapping => [mapping.problemTitle, mapping.response, mapping.deliverables.join(separator)]),
          deliverables: solution.mappings.flatMap(mapping => mapping.deliverables),
        },
        foundation: solution.governance.items,
      },
    };
  }
  return {
    slug: definition.slug,
    icon: definition.icon,
    name: definition.names[locale],
    tag: definition.names[locale],
    title: presentation.home.title,
    description: presentation.home.value,
    scope: presentation.deployment.body,
    image: 'collaborative-review',
    tasks: presentation.employees.map(employee => ({
      title: employee.role,
      input: presentation.sources.join(separator),
      action: employee.process.join(zh ? '；' : '; '),
      output: employee.outputs.join(separator),
      value: employee.value,
    })),
    story: {
      lines: presentation.hero.lines,
      priorities: presentation.features.map(feature => ({ title: feature.title, body: feature.problem })),
      exhibit: {
        title: presentation.teamTitle,
        request: presentation.home.value,
        sources: presentation.sources,
        columns: zh ? ['业务环节', '作业重点', '交付成果'] : ['Business area', 'Work', 'Deliverable'],
        rows: presentation.features.map((feature, index) => [feature.title, feature.body, presentation.outputs[index]]),
        deliverables: presentation.outputs,
      },
      foundation: presentation.features.map(feature => ({ title: feature.title, body: feature.body })),
    },
  };
}

export function createIndustryModule(definition: IndustryDefinition, presentation: IndustrySolutionPresentation): SolutionModule {
  return {
    slug: definition.slug,
    order: definition.order,
    category: 'industry',
    navigation: definition.navigation,
    copy: {
      zh: createCopy(definition, 'zh', presentation.zh),
      en: createCopy(definition, 'en', presentation.en),
    },
  };
}
