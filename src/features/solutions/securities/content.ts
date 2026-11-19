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
      "description": "投资研究、财富服务、分支经营",
      "icon": "chart"
    },
    "en": {
      "name": "Securities",
      "description": "Investment research, wealth services and branch management",
      "icon": "chart"
    }
  }
}, securitiesPresentation);
