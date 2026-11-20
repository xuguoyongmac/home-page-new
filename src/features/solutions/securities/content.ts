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
      "description": "研究准备、投行尽调、文件核验",
      "icon": "chart"
    },
    "en": {
      "name": "Securities",
      "description": "Research preparation, Investment banking due diligence, Document verification",
      "icon": "chart"
    }
  }
}, securitiesPresentation);
