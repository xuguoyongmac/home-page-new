import { createIndustryModule } from '../shared/industry-module';
import { insurancePresentation } from './page-content';

export default createIndustryModule({
  "slug": "insurance",
  "order": 1,
  "icon": "shield",
  "names": {
    "zh": "保险解决方案",
    "en": "Insurance"
  },
  "navigation": {
    "zh": {
      "name": "保险",
      "description": "条款依据、材料核对、服务接续",
      "icon": "shield"
    },
    "en": {
      "name": "Insurance",
      "description": "Policy references, document checks and service continuity",
      "icon": "shield"
    }
  }
}, insurancePresentation);
