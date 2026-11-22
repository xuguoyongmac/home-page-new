import { bankingPresentation } from '../features/solutions/banking/page-content';
import { insurancePresentation } from '../features/solutions/insurance/page-content';
import { securitiesPresentation } from '../features/solutions/securities/page-content';
import { governmentPresentation } from '../features/solutions/government/page-content';
import { stateOwnedPresentation } from '../features/solutions/state-owned/page-content';
import { trustPresentation } from '../features/solutions/trust/page-content';
import { generalPresentation } from '../features/solutions/general/page-content';

import type { Locale } from './types';

export interface HomeIndustry {
  title: string;
  pain: string;
  value: string;
  scenarios: string[];
  benefits: { title: string; description: string }[];
}

const finalizedZhHomeIndustries: Record<string, HomeIndustry> = {
  banking: {
    title: '让专业作业提速，让客户经营增效',
    scenarios: ['授信尽调', '贷后风控', '对公经营', '零售财富', '运营服务', '合规管理'],
    pain: '对公授信要穿透财报、流水、征信与担保，跨表勾稽靠人工逐项核对，尽调报告周期长、重点风险易漏；零售财富的配置与话术靠个人经验。客户征信、账户与交易数据受严格授权约束——要用数据做判断，又不能越权查询、不能出域，通用模型一旦幻觉越权，授信结论与对客话术都责任难溯。',
    value: 'TeGo 数字员工协作平台以数字员工上岗贯通信贷、风控、财富与网点运营，主智能体拆解任务、专业子智能体并行做财报勾稽、流水核验与话术审查；把行内制度与岗位方法封装为 Skill，接信贷与核心系统；数据留在银行内网、征信账户按授权访问，授信结论与对客内容经人工把关，交付可验收的审查底稿、客户方案与经营台账。',
    benefits: [
      { title: '数字员工上岗，主子智能体把尽调做完', description: '主智能体拆任务、子智能体并行勾稽财报与核验流水，成果回到同一项目空间，尽调从「人找数据」变成「数字员工出底稿、人做判断」。' },
      { title: 'Skill 资产沉淀，岗位方法可复用', description: '把授信、适当性与话术审查的经验封装为 Skill，一键下发到各分支行，人员流动不带走方法，新人也按同一口径作业。' },
      { title: '数据不出域，人工把关可验收', description: '数据与客户信息留在银行内网、按授权访问，授信结论与对客内容经有权限人员确认后生效，每份成果带依据与台账、可回溯验收。' },
    ],
  },
  insurance: {
    title: '让条款讲得清楚，让理赔办得明白',
    scenarios: ['销售支持', '智能核保', '智能理赔', '消保审查', '客服保全', '经营分析'],
    pain: '险种条款、责任免除、健康告知与费率表繁杂，代理人与客服逐份查阅、口头解释，答复口径不一；核保与理赔的判断标准靠资深人员经验。销售话术夸大收益、隐瞒免责是消保高压线，销售行为要可回溯、核保理赔要人工确认——通用模型一句「随口承诺」就可能变成销售误导与监管风险。',
    value: 'TeGo 数字员工协作平台以数字员工上岗贯通销售支持、核保、理赔、消保审查与客服保全，主智能体拆任务、子智能体并行解析单证、比对条款与拦截话术；把条款规则与核赔经验封装为 Skill，接保单系统；数据留在保险公司内网，关键结论经人工把关，交付可验收的计划书、核保意见与理赔台账。',
    benefits: [
      { title: '数字员工上岗，主子智能体把案子办完', description: '主智能体拆任务、子智能体并行解析单证、比对条款与初判责任，计划书与核赔意见从「逐份人工写」变成「数字员工出初稿、人做确认」。' },
      { title: 'Skill 资产沉淀，核赔经验可复用', description: '把条款比对、健康告知与责任判定的资深经验封装为 Skill，下发到各机构，人员流动不带走方法。' },
      { title: '数据不出域，销售全程可回溯', description: '保单与客户信息留在司内、按授权访问，话术违规实时拦截、核赔结论经人工把关，每份成果带依据与台账、可回溯验收。' },
    ],
  },
  securities: {
    title: '让投研响应更快，让专业服务更稳',
    scenarios: ['智能投研', '智能投顾', '投行资管', '合规审查', '财富管理', '经营分析'],
    pain: '财报公告、研报与行情庞杂，研究员逐份阅读摘要，时间被资料整理占满；投顾服务与投行尽调的方法靠个人经验。投顾适当性、投行尽调与研报观点都要留痕溯源、关键环节人工把关；通用模型有幻觉、输出「正确但无用」，观点溯源、留痕与人工把关才是严监管下的落地前提。',
    value: 'TeGo 数字员工协作平台以数字员工上岗贯通投研、投顾、投行资管与经营分析，主智能体拆任务、子智能体并行速读研报、诊断持仓与校验标书；把研究方法与服务 SOP 封装为 Skill，接券商业务系统；数据留在券商内网，对客内容与审查结论经人工把关，交付可验收的研报速读、持仓诊断与尽调底稿。',
    benefits: [
      { title: '数字员工上岗，主子智能体把研究做完', description: '主智能体拆任务、子智能体并行检索、摘要与比对，观点带出处回到项目空间，研报从「人读材料」变成「数字员工出初稿、研究员做判断」。' },
      { title: 'Skill 资产沉淀，专家方法可复用', description: '把投顾服务与投行尽调的成熟方法封装为 Skill，下发到各团队，专家流动不带走方法。' },
      { title: '数据不出域，观点可溯源可验收', description: '研报与持仓数据留在券内、按授权访问，对客内容与审查结论经人工把关，每份成果带引用角标与台账、可回溯验收。' },
    ],
  },
  government: {
    title: '让政策找得到，让办件办得快',
    scenarios: ['政策服务', '公文办公', '事项办理', '热线研判', '督查督办', '民情响应'],
    pain: '政策、办事指南与审批卷宗分散在各系统，基层查政策、找依据靠人工翻找，群众办事多头问、重复跑；材料核验、工单分派与热线答复逐件人工处理。涉密信息不上网、个人信息与居民数据不得越权调阅，政策口径必须权威、对外发布必须留痕——通用模型一句「自由发挥」就可能变成错误政策口径与失泄密风险。',
    value: 'TeGo 数字员工协作平台以数字员工上岗贯通政策服务、公文办公、事项办理与热线督办，主智能体拆任务、子智能体并行检索政策、核验材料与分类诉求；把办事流程与公文规范封装为 Skill，接政务系统；数据留在政务内网 / 专网、涉密不上网，对外口径与签发经人工把关，交付可验收的答复口径、公文初稿与办件台账。',
    benefits: [
      { title: '数字员工上岗，主子智能体把办件办完', description: '主智能体拆任务、子智能体并行查政策、核材料与分诉求，答复与台账回到同一空间，办件从「人翻文件」变成「数字员工出初稿、人做确认」。' },
      { title: 'Skill 资产沉淀，办事口径可复用', description: '把政策答复、公文规范与热线研判的方法封装为 Skill，下发到各窗口与处室，口径统一、基层不再各查各的。' },
      { title: '涉密不上网，过程可查可验收', description: '数据留在政务内网 / 专网、按授权访问，政策口径与公文签发经人工把关，每份成果带出处与台账、可回溯验收。' },
    ],
  },
  'state-owned': {
    title: '让集团管控穿透，让专业协同提效',
    scenarios: ['公文办公', '招采合规', '经营分析', '督查督办', '制度合同', '审计备查'],
    pain: '经营数据、公文与招采材料层层上报、人工逐份核对，汇总口径不一、招采响应易疏漏；制度与批复靠人查人带，人员流动即带走方法。三重一大决策、集团保密与国资审计留痕一条不能松，数据要留在集团内网——通用模型一旦越权或臆造，决策依据与审计链条都追不回。',
    value: 'TeGo 数字员工协作平台以数字员工上岗贯通公文办公、招采合规、经营分析与制度合同审查，主智能体拆任务、子智能体并行扫描否决项、比对条款与汇总指标；把集团制度与岗位方法封装为 Skill，接 OA 与招采系统；数据留在集团内网、按密级授权，决策与签发经人工把关，交付可验收的规范公文、偏离表与经营月报。',
    benefits: [
      { title: '数字员工上岗，主子智能体把材料做完', description: '主智能体拆任务、子智能体并行扫描否决项、比对响应与汇总指标，成果回到项目空间，招采与公文从「人逐份核」变成「数字员工出底稿、人做签批」。' },
      { title: 'Skill 资产沉淀，集团口径可复用', description: '把公文规范、招采审查与法务比对的方法封装为 Skill，下发到总部与下属单位，总分支机构共用一套专业能力。' },
      { title: '数据不出域，三重一大可追溯', description: '数据留在集团内网、按密级授权访问，决策与签发经人工把关，每份成果带依据与台账、可审计验收。' },
    ],
  },
  trust: {
    title: '让尽调做深做透，让受托尽责有据',
    scenarios: ['产品尽调', '财富管理', '家族信托', '标品投研', '存续期监测', '合规留痕'],
    pain: '非标项目资料分散、逐份人工读写，尽调与合同偏离核对周期长、重点风险易漏；高净值客户的配置逻辑与话术靠个人经验。合格投资者认定、适当性校验与受托尽责留痕是底线，客户与项目数据要留在司内——通用模型一句「保本保收益」的暗示，就可能踩穿适当性与受托责任红线。',
    value: 'TeGo 数字员工协作平台以数字员工上岗贯通产品尽调、财富管理、家族信托与存续期监测，主智能体拆任务、子智能体并行做跨文档勾稽、条款比对与异动巡检；把尽调规则与配置方法封装为 Skill，接信托业务系统；数据留在信托公司内网，适当性与尽责结论经人工把关，交付可验收的尽调报告、配置建议与风险预警。',
    benefits: [
      { title: '数字员工上岗，主子智能体把尽调做完', description: '主智能体拆任务、子智能体并行勾稽资产参数与比对合同条款，差异集中呈现，尽调从「人翻卷宗」变成「数字员工出底稿、人做判断」。' },
      { title: 'Skill 资产沉淀，受托方法可复用', description: '把尽调审查、配置逻辑与存续巡检的方法封装为 Skill，下发到各业务团队，受托尽责口径一致、人员流动不带走方法。' },
      { title: '数据不出域，受托尽责可追溯', description: '项目与客户数据留在司内、按授权访问，适当性与尽责结论经人工把关，每份成果带原文出处与台账、可回溯验收。' },
    ],
  },
};

export const homeIndustries: Record<Locale, Record<string, HomeIndustry>> = {
  zh: {
    ...finalizedZhHomeIndustries,
    'general': generalPresentation.zh.home,
  },
  en: {
    'banking': bankingPresentation.en.home,
    'insurance': insurancePresentation.en.home,
    'securities': securitiesPresentation.en.home,
    'government': governmentPresentation.en.home,
    'state-owned': stateOwnedPresentation.en.home,
    'trust': trustPresentation.en.home,
    'general': generalPresentation.en.home,
  },
};
