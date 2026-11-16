import { createIndustryModule } from '../shared/industry-module';
import { insurancePresentation } from './page-content';

export default createIndustryModule({
  slug: 'insurance',
  order: 1,
  icon: 'shield',
  names: { zh: '保险解决方案', en: 'Insurance' },
  navigation: {
    zh: { name: '保险', description: '核保辅助、理赔核查、保全服务', icon: 'shield' },
    en: { name: 'Insurance', description: 'Underwriting, claims and policy servicing', icon: 'shield' },
  },
}, insurancePresentation);
