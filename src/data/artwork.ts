import type { Locale } from '../data/types';
import assets from './artwork-assets.json';

export type ProductScene = 'team' | 'collaboration' | 'knowledge' | 'review' | 'deliverables' | 'ecosystem' | 'enterprise' | 'clients' | 'resources' | 'journal' | 'solutions' | 'contact' | 'faq' | 'releases';

const scenes: Record<ProductScene, { file: string; width: number; height: number; alt: Record<Locale, string> }> = {
  team: {
    ...assets.team,
    alt: { zh: '数字员工的岗位职责与知识、技能和工具配置，呈现面向岗位的能力组合。', en: 'Role definitions and knowledge, skill and tool configurations represent the capabilities assigned to digital employees.' },
  },
  collaboration: {
    ...assets.collaboration,
    alt: { zh: '同一项目中，目标与资料交给数字员工执行，形成成果与版本；需要人工判断时，同事回应后继续推进。', en: 'Within one project, goals and sources reach a digital employee to produce files and versions, with colleagues providing input when human judgment is needed.' },
  },
  knowledge: {
    ...assets.knowledge,
    alt: { zh: '文档、表格、演示稿、图片和文本汇入企业知识库。用户提问后，数字员工检索资料、引用原文，返回带出处的回答。', en: 'Documents, spreadsheets, presentations, images and text enter an enterprise knowledge base. A digital employee retrieves relevant passages and returns an answer with source references.' },
  },
  review: {
    ...assets.review,
    alt: { zh: '问询事项、同事回应与续办位置，呈现需要人工判断的工作衔接。', en: 'An inquiry, a colleague’s response and the point where work resumes represent human judgment within an ongoing task.' },
  },
  deliverables: {
    ...assets.deliverables,
    alt: { zh: '可继续编辑的工作稿与历史版本，呈现成果修改和版本衔接。', en: 'An editable working draft appears with earlier revisions, representing continued editing and version continuity.' },
  },
  ecosystem: {
    ...assets.ecosystem,
    alt: { zh: '技能、数字员工模板和业务插件连接数字员工，MCP接入工具，OpenAPI提供平台调用。', en: 'Skills, employee templates and business plugins connect to a digital employee. MCP provides tool access and OpenAPI enables platform calls.' },
  },
  enterprise: {
    ...assets.enterprise,
    alt: { zh: '私有化部署的企业运行空间包含平台服务、企业知识和本地模型，并呈现身份授权、外部连接和执行记录。', en: 'A private enterprise environment contains platform services, company knowledge and local models, with identity authorization, external connections and execution records.' },
  },
  clients: {
    ...assets.clients,
    alt: { zh: '桌面与移动入口呈现同一项目的相关内容，表现跨端查看与工作跟进。', en: 'Desktop and mobile entrances show related content from one project, representing access and follow-up across clients.' },
  },
  resources: {
    ...assets.resources,
    alt: { zh: '公共产品文档、部署资料、客户端下载与常见问题组成的资源索引。', en: 'An index of public product documentation, deployment references, client downloads and frequently asked questions.' },
  },
  journal: {
    ...assets.journal,
    alt: { zh: '按主题组织的产品发布与工程实践文章，呈现产品演进和工作方法。', en: 'Product release and engineering practice articles are organized by topic, representing product evolution and working methods.' },
  },
  solutions: {
    ...assets.solutions,
    alt: { zh: '业务任务委托单中的目标、输入资料、岗位分工、人工审阅与交付要求。', en: 'A business task brief outlines its objective, source materials, roles, human review and deliverable requirements.' },
  },
  contact: {
    ...assets.contact,
    alt: { zh: '围绕工作目标、已有资料与部署要求展开的需求交流。', en: 'A product discussion brings together work objectives, available materials and deployment requirements.' },
  },
  faq: {
    ...assets.faq,
    alt: { zh: '按产品主题组织的问题索引与对应答案，呈现常见问题的查阅方式。', en: 'Questions organized by product topic appear with their corresponding answers, representing a browsable FAQ index.' },
  },
  releases: {
    ...assets.releases,
    alt: { zh: '按发布版本组织的客户端安装包、服务部署包与校验文件索引。', en: 'An index organizes client installers, server deployment packages and checksum files by release version.' },
  },
};

export const artworkFor = (scene: ProductScene) => scenes[scene];
