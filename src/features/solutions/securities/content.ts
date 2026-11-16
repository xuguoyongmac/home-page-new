import { createIndustryModule } from '../shared/industry-module';
import { securitiesPresentation } from './page-content';

export default createIndustryModule({
  slug: 'securities',
  order: 2,
  icon: 'chart',
  names: { zh: '证券解决方案', en: 'Securities' },
  navigation: {
    zh: { name: '证券', description: '投研分析、合规风控、客户经营', icon: 'chart' },
    en: { name: 'Securities', description: 'Research, compliance, risk and client operations', icon: 'chart' },
  },
}, securitiesPresentation);
