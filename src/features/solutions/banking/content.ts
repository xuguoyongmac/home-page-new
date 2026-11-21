import { createIndustryModule } from '../shared/industry-module';
import { bankingPresentation } from './page-content';

export default createIndustryModule({
  "slug": "banking",
  "order": 0,
  "icon": "bank",
  "names": {
    "zh": "银行解决方案",
    "en": "Banking"
  },
  "navigation": {
    "zh": {
      "name": "银行",
      "description": "信贷审查、客户经营、运营管理",
      "icon": "bank"
    },
    "en": {
      "name": "Banking",
      "description": "Credit review, client coverage and operations",
      "icon": "bank"
    }
  }
}, bankingPresentation);
