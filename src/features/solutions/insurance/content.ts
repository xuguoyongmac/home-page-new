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
      "description": "核保预检、复杂个案、理赔审核",
      "icon": "shield"
    },
    "en": {
      "name": "Insurance",
      "description": "Underwriting preparation, Complex cases, Claims review",
      "icon": "shield"
    }
  }
}, insurancePresentation);
