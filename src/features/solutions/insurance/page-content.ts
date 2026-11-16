import type { IndustrySolutionPresentation } from '../shared/types';

const avatar = (role: string) => `/images/home/employee-avatar-${role}_V1.0.webp`;

export const insurancePresentation: IndustrySolutionPresentation = {
  zh: {
    sources: ["投保申请与健康告知","保单条款与承保规则","出险证明与费用凭证","保全申请与办理记录"],
    outputs: ["核保风险审阅与问询","理赔责任证据与补件清单","保全变更影响与办理交接"],
    home: {
      title: '核保抓住风险，理赔保全少些往返',
      pain: '核保要对齐健康告知与证明资料，理赔要串起事故经过、责任和费用证据；保全变更还要核清前后影响、补正材料并接续办理。',
      value: 'TeGo 数字员工整理核保风险事实与问询事项，建立理赔时间线和责任证据对照，核清保全变更影响与办理要求，让专业判断有依据、后续作业有承接。',
      scenarios: ['核保辅助', '风险审阅', '理赔核查', '责任对照', '保全变更', '客户服务'],
      benefits: [
        { title: '核保问询直达风险疑点', description: '把健康告知、投保事实与承保条件放在一起，明确差异依据和待问询内容，让核保人员准备承保判断。' },
        { title: '理赔责任对上案件证据', description: '按事故经过关联保险期间、保障责任与费用凭证，让理赔人员看清证据差异及补件重点。' },
        { title: '保全变更看清影响与交接', description: '对照变更前后内容、合同影响与材料要求，把补正、办理状态和客户反馈接续到责任岗位。' },
      ],
    },
    hero: {
      lines: ['核保抓住风险', '理赔保全少些往返'],
      background: '/images/solutions/insurance/insurance-landscape_V1.0.webp',
    },
    features: [
      {
        title: '先看清风险事实，再准备核保判断',
        problem: '健康告知、投保事实与证明资料存在差异时，核保人员需要找到风险依据和问询重点。',
        body: '围绕健康告知、投保条件与证明资料，TeGo 逐项核对事实一致性和承保规则适用项，标出资料差异、证据出处及待问询内容。核保人员拿到风险审阅工作表与问询清单，集中研判是否需要补充调查。',
      },
      {
        title: '让事故经过、条款责任和费用证据一一对应',
        problem: '出险时间、凭证主体与保单责任需要交叉核查，材料缺项和证据差异容易淹没在案卷中。',
        body: 'TeGo 梳理事故或诊疗时间线，对照保险期间、保障与除外责任，将费用项目对应到凭证主体和证明材料。输出责任证据对照及补件清单，供理赔人员复核；核保、理赔及保全决定由有权人员确认。',
      },
      {
        title: '核清变更前后影响，把保全办理接续到底',
        problem: '保全不只是修改字段，还要核对合同影响、材料要求，并把未完事项交接到下一岗位。',
        body: 'TeGo 比对当前保单与变更申请，梳理变更内容、合同影响及所需材料，定位缺项并整理补正要求。变更对照、办理状态和客户反馈随事项交接，保留成果版本，让服务人员接着办理和反馈。',
      },
    ],
    teamTitle: '保险数字员工团队',
    employees: [
      {
        role: '投保事实数字员工', avatar: avatar('research'), skills: ['告知提取', '事实归并', '资料比对'],
        process: ['归集投保申请与健康告知', '关联证明资料及风险事实', '标出内容差异与待补证据'],
        outputs: ['投保事实核对表', '资料差异清单'], value: '先把承保判断所需事实看清',
      },
      {
        role: '核保问询数字员工', avatar: avatar('risk'), skills: ['规则对照', '风险审阅', '问询准备'],
        process: ['匹配承保条件与适用规则', '对照告知异常及证明差异', '组织问询重点和调查事项'],
        outputs: ['核保风险审阅表', '风险问询清单'], value: '让问询围绕风险差异与依据展开',
      },
      {
        role: '理赔责任数字员工', avatar: avatar('proposal'), skills: ['案情时序', '责任对照', '条款引用'],
        process: ['梳理事故或诊疗时间线', '对照保险期间与保障责任', '关联除外条款和证据位置'],
        outputs: ['案件事实时间线', '责任证据对照表'], value: '让案件经过和条款责任相互对应',
      },
      {
        role: '费用证据数字员工', avatar: avatar('knowledge'), skills: ['费用归集', '凭证核对', '补件整理'],
        process: ['对应费用项目与凭证记录', '定位凭证主体及时间差异', '整理缺失证明与补件要求'],
        outputs: ['费用核查工作表', '补件核查清单'], value: '让费用核查有据且补件有重点',
      },
      {
        role: '保全变更数字员工', avatar: avatar('admin'), skills: ['变更对照', '影响整理', '材料核验'],
        process: ['对比现保单与变更申请', '梳理合同影响及办理条件', '定位材料缺项与补正内容'],
        outputs: ['保全变更影响对照', '材料补正清单'], value: '改什么、影响什么、缺什么都清楚',
      },
      {
        role: '保全交接数字员工', avatar: avatar('customer'), skills: ['进度归集', '事项交接', '反馈整理'],
        process: ['关联补正资料与办理反馈', '汇总未完事项及责任岗位', '交接处理状态与客户回应'],
        outputs: ['保全办理交接表', '待办与反馈清单'], value: '让保全事项接着办理和反馈',
      },
    ],
    deployment: {
      title: '安全可控的私有化落地',
      body: '核保、健康告知与理赔证据在机构授权范围内处理，支持内网私有化和信创适配。按核保、理赔、保全岗位隔离访问权限，留存资料调用、成果版本与办理操作审计记录。',
    },
  },
  en: {
    sources: ["Applications and health disclosures","Policy terms and underwriting rules","Incident evidence and expense receipts","Policy change requests and processing records"],
    outputs: ["Underwriting risk review and enquiries","Coverage evidence and missing-record checklist","Policy change impacts and servicing handover"],
    home: {
      title: 'Focus on underwriting risk. Streamline claims and policy servicing.',
      pain: 'Underwriting must reconcile health disclosures and evidence. Claims must connect events, coverage and expenses. Policy servicing must assess change impacts, correct records and carry processing forward.',
      value: 'TeGo digital employees prepare underwriting facts and enquiries, connect claim timelines with coverage evidence, and identify policy change impacts and processing requirements, grounding specialist judgment and subsequent work.',
      scenarios: ['Underwriting support', 'Risk review', 'Claims checks', 'Coverage review', 'Policy changes', 'Client service'],
      benefits: [
        { title: 'Focus underwriting enquiries on risk gaps', description: 'Compare disclosures, application facts and underwriting conditions to identify differences and follow-up questions for underwriting judgment.' },
        { title: 'Match claims coverage to case evidence', description: 'Connect events with policy periods, coverage and expense records so claims staff can identify evidence differences and missing materials.' },
        { title: 'Clarify change impacts and servicing handoffs', description: 'Compare requested changes, contract impacts and record requirements, carrying corrections, status and feedback to the responsible team.' },
      ],
    },
    hero: {
      lines: ['Focus on underwriting risk', 'Streamline claims and policy servicing'],
      background: '/images/solutions/insurance/insurance-landscape_V1.0.webp',
    },
    features: [
      {
        title: 'Clarify the risk facts before underwriting judgment',
        problem: 'When disclosures, application facts and evidence differ, underwriters need the risk basis and the right follow-up questions.',
        body: 'TeGo checks health disclosures, application conditions and supporting records against applicable underwriting rules, locating discrepancies, evidence and open enquiries. Underwriters receive a risk review workbook and enquiry list to assess whether further investigation is needed.',
      },
      {
        title: 'Match events, coverage provisions and expense evidence',
        problem: 'Event dates, the person named on receipts and policy coverage require cross-checks; missing or inconsistent evidence can disappear in the case file.',
        body: 'TeGo organizes incident or medical timelines, compares policy periods, coverage and exclusions, and links expenses to the person named on receipts and supporting records. Claims staff receive coverage evidence and missing-record checklists for review. Authorized personnel retain underwriting, claims and policy change decisions.',
      },
      {
        title: 'Assess policy change impacts and carry servicing through',
        problem: 'Policy servicing must assess contract impacts and supporting records, then hand unfinished work to the next team.',
        body: 'TeGo compares current policies with change requests to identify changed terms, contract impacts and required evidence, then prepares missing-record corrections. Change comparisons, processing status and client feedback follow the service request, with version history preserving the work for the next team.',
      },
    ],
    teamTitle: 'Your insurance digital employee team',
    employees: [
      {
        role: 'Application Facts Digital Employee', avatar: avatar('research'), skills: ['Disclosure extraction', 'Fact collection', 'Record comparison'],
        process: ['Collect applications and health disclosures', 'Link supporting records with risk facts', 'Locate differences and missing evidence'],
        outputs: ['Application fact comparison', 'Record discrepancy list'], value: 'Clarify the facts needed for underwriting judgment',
      },
      {
        role: 'Underwriting Enquiry Digital Employee', avatar: avatar('risk'), skills: ['Rule comparison', 'Risk review', 'Enquiry preparation'],
        process: ['Match underwriting conditions with applicable rules', 'Compare disclosure anomalies and evidence differences', 'Prepare enquiries and investigation items'],
        outputs: ['Underwriting risk review', 'Risk enquiry list'], value: 'Focus questions on risk differences and evidence',
      },
      {
        role: 'Claims Coverage Digital Employee', avatar: avatar('proposal'), skills: ['Case timelines', 'Coverage comparison', 'Policy citations'],
        process: ['Organize incident or medical timelines', 'Compare policy periods and coverage', 'Locate exclusions and relevant evidence'],
        outputs: ['Case timeline', 'Coverage evidence comparison'], value: 'Connect case events with applicable policy provisions',
      },
      {
        role: 'Expense Evidence Digital Employee', avatar: avatar('knowledge'), skills: ['Expense collection', 'Receipt comparison', 'Missing records'],
        process: ['Match expense items with receipt records', 'Locate differences in named persons and dates', 'Prepare missing evidence and correction requests'],
        outputs: ['Expense review workbook', 'Missing-evidence checklist'], value: 'Ground expense checks and focus record requests',
      },
      {
        role: 'Policy Change Digital Employee', avatar: avatar('admin'), skills: ['Change comparison', 'Impact preparation', 'Evidence checks'],
        process: ['Compare current policies and change requests', 'Organize contract impacts and processing conditions', 'Identify missing evidence and corrections'],
        outputs: ['Policy change impact comparison', 'Correction checklist'], value: 'Clarify changes, impacts and missing records',
      },
      {
        role: 'Servicing Handover Digital Employee', avatar: avatar('customer'), skills: ['Progress collection', 'Team handoffs', 'Feedback preparation'],
        process: ['Connect corrected records and processing feedback', 'Collect open actions and responsible roles', 'Hand over status and client responses'],
        outputs: ['Policy servicing handover', 'Open actions and feedback'], value: 'Carry policy servicing through processing and response',
      },
    ],
    deployment: {
      title: 'Secure, controlled private deployment',
      body: 'Underwriting, health disclosures and claims evidence are processed within institutional authorization, with private deployment and Xinchuang compatibility available. Access is separated across underwriting, claims and servicing roles, with audit records for document access, versions and processing actions.',
    },
  },
};
