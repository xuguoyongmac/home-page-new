import { createIndustryModule } from '../shared/industry-module';
import { trustPresentation } from './page-content';

export default createIndustryModule({
  "slug": "trust",
  "order": 5,
  "icon": "layers",
  "names": {
    "zh": "信托解决方案",
    "en": "Trust services"
  },
  "navigation": {
    "zh": {
      "name": "信托",
      "description": "项目档案、合同要素、核算参数",
      "icon": "layers"
    },
    "en": {
      "name": "Trust services",
      "description": "Project records, Contract terms, Accounting parameters",
      "icon": "layers"
    }
  }
}, trustPresentation);
