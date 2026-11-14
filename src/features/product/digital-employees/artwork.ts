import type { Locale } from '../../../data/types';

interface ConceptArtwork {
  desktop: string;
  mobile: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  alt: string;
}

export const roleConceptArtwork: Record<Locale, ConceptArtwork> = {
  zh: {
    desktop: '/images/product/digital-employees/role-concept-zh_V1.6.webp',
    mobile: '/images/product/digital-employees/role-concept-zh-mobile_V1.4.webp',
    width: 1672,
    height: 941,
    mobileWidth: 1024,
    mobileHeight: 1536,
    alt: '岗位经验形成可复用模板。标书助理撰写技术响应，合规预审标注待补充的资质附件和待核对的制度引用，结合授权知识与业务工具形成方案初稿、预审意见，交由业务人员复核。',
  },
  en: {
    desktop: '/images/product/digital-employees/role-concept-en_V1.4.webp',
    mobile: '/images/product/digital-employees/role-concept-en-mobile_V1.4.webp',
    width: 1672,
    height: 941,
    mobileWidth: 1024,
    mobileHeight: 1536,
    alt: 'Reusable role expertise supports bid and compliance digital employees. A technical response and annotated qualification and policy checks lead to proposal drafts and review findings for human review, supported by authorized knowledge and business tools.',
  },
};
