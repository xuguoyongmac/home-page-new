import { createIndustryModule } from '../shared/industry-module';
import { governmentPresentation } from './page-content';

export default createIndustryModule({
  slug: 'government',
  order: 3,
  icon: 'landmark',
  names: { zh: '政务解决方案', en: 'Government' },
  navigation: {
    zh: { name: '数字政务', description: '政策精准服务、一件事协同与基层减负', icon: 'landmark' },
    en: { name: 'Digital government', description: 'Targeted policy services, connected delivery and agency collaboration', icon: 'landmark' },
  },
}, governmentPresentation);
