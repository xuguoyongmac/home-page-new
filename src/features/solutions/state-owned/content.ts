import { createIndustryModule } from '../shared/industry-module';
import { stateOwnedPresentation } from './page-content';

export default createIndustryModule({
  slug: 'state-owned',
  order: 4,
  icon: 'buildings',
  names: { zh: '央国企解决方案', en: 'State-owned enterprises' },
  navigation: {
    zh: { name: '央国企', description: '穿透经营管控，贯通项目履约与监督整改', icon: 'buildings' },
    en: { name: 'State-owned enterprises', description: 'Group oversight, project delivery and accountable improvement', icon: 'buildings' },
  },
}, stateOwnedPresentation);
