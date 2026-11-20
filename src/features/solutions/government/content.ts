import { createIndustryModule } from '../shared/industry-module';
import { governmentPresentation } from './page-content';

export default createIndustryModule({
  slug: 'government',
  order: 3,
  icon: 'landmark',
  names: { zh: '政务解决方案', en: 'Government' },
  navigation: {
    zh: { name: '数字政务', description: "事项材料、采购条款、专项任务", icon: 'landmark' },
    en: { name: 'Digital government', description: "Service documents, Procurement clauses, Special initiatives", icon: 'landmark' },
  },
}, governmentPresentation);
