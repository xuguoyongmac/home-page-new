import { createIndustryModule } from '../shared/industry-module';
import { stateOwnedPresentation } from './page-content';

export default createIndustryModule({
  slug: 'state-owned',
  order: 4,
  icon: 'buildings',
  names: { zh: '央国企解决方案', en: 'State-owned enterprises' },
  navigation: {
    zh: { name: '央国企', description: '预算经营、采购投标、合同履约与现场整改', icon: 'buildings' },
    en: { name: 'State-owned enterprises', description: 'Budgets, procurement, contracts and site remediation', icon: 'buildings' },
  },
}, stateOwnedPresentation);
