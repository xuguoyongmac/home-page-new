import { createIndustryModule } from '../shared/industry-module';
import { securitiesPresentation } from './page-content';

export default createIndustryModule({
  "slug": "securities",
  "order": 2,
  "icon": "chart",
  "names": {
    "zh": "证券解决方案",
    "en": "Securities"
  },
  "navigation": {
    "zh": {
      "name": "证券",
      "description": "业务连接、持牌确认、审计与私有部署",
      "icon": "chart"
    },
    "en": {
      "name": "Securities",
      "description": "Business connections, licensed review and private operations",
      "icon": "chart"
    }
  }
}, securitiesPresentation);
