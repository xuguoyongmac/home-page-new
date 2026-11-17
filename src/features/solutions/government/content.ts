import { createIndustryModule } from '../shared/industry-module';
import { governmentPresentation } from './page-content';

export default createIndustryModule({
  slug: 'government',
  order: 3,
  icon: 'target',
  names: { zh: '政务解决方案', en: 'Government' },
  navigation: {
    zh: { name: '数字政务', description: '政策找企、一件事材料、12345分办', icon: 'target' },
    en: { name: 'Digital government', description: 'Policy matching, application case files and request routing', icon: 'target' },
  },
}, governmentPresentation);
