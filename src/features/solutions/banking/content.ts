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
      "description": "授信尽调、财务核验、贷后核查",
      "icon": "bank"
    },
    "en": {
      "name": "Banking",
      "description": "Credit due diligence, Financial verification, Post-loan review",
      "icon": "bank"
    }
  }
}, bankingPresentation);
