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
      "description": "知识依据、材料核对、跨岗协作",
      "icon": "bank"
    },
    "en": {
      "name": "Banking",
      "description": "Policy evidence, document checks and connected work",
      "icon": "bank"
    }
  }
}, bankingPresentation);
