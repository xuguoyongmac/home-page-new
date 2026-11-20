import { createIndustryModule } from '../shared/industry-module';
import { stateOwnedPresentation } from './page-content';

export default createIndustryModule({
  slug: 'state-owned',
  order: 4,
  icon: 'buildings',
  names: { zh: '央国企解决方案', en: 'State-owned enterprises' },
  navigation: {
    zh: { name: '央国企', description: "采购审查、合同核对、整改复查", icon: 'buildings' },
    en: { name: 'State-owned enterprises', description: "Procurement review, Contract checks, Remediation review", icon: 'buildings' },
  },
}, stateOwnedPresentation);
