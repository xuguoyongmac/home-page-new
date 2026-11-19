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
      "description": "渠道展业、核保理赔、保单服务",
      "icon": "shield"
    },
    "en": {
      "name": "Insurance",
      "description": "Distribution, underwriting and claims, policy services",
      "icon": "shield"
    }
  }
}, insurancePresentation);
