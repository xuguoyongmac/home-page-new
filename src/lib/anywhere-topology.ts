import type { Locale } from '../data/types';

export function renderAnywhereTopology(locale: Locale = 'zh') {
 const zh = locale === 'zh';
 const overview = zh
  ? '多端与第三方 IM 交办任务，TeGo 数字员工协同平台连接知识库、技能和业务系统，通过 Agent 执行、协同调度与权限审计，交付经营看板、客户跟进、业务处理结果与方案报告。'
  : 'Delegate through desktop, tablet, mobile and messaging channels. TeGo connects knowledge, skills and systems with Agent execution, orchestration and access audit to deliver business dashboards, customer follow-up plans, business processing results and proposals.';
 return `<div class="anywhere-topology" data-topology-motion="paused" data-topology-locale="${locale}">
  <img class="anywhere-scene-desktop" src="/images/anywhere/anywhere-ui-inward-scene_V1.0.webp" width="1754" height="700" alt="${overview}" loading="lazy" decoding="async"/>
  <div class="anywhere-scene-mobile">
   <img src="/images/anywhere/anywhere-ui-inward-inputs_V1.0.webp" width="495" height="655" alt="${zh?'多端能力与第三方 IM：PC、iPad、移动端，微信、QQ、企业微信、钉钉、飞书与 OA。':'Input channels: desktop, iPad, mobile, WeChat, QQ, WeCom, DingTalk, Feishu and OA.'}" loading="lazy" decoding="async"/>
   <img src="/images/anywhere/anywhere-ui-inward-platform_V1.0.webp" width="595" height="400" alt="${zh?'TeGo 数字员工协同平台：企业知识库、技能、系统连接、Agent 执行、协同调度和权限审计。':'TeGo platform: knowledge, skills, system connections, Agent execution, orchestration and access audit.'}" loading="lazy" decoding="async"/>
   <img src="/images/anywhere/anywhere-ui-inward-outputs_V1.0.webp" width="580" height="620" alt="${zh?'成果交付：经营看板、客户跟进、业务处理结果与方案报告。':'Deliverables: business dashboards, customer follow-up plans, business processing results and proposals.'}" loading="lazy" decoding="async"/>
  </div>
  <svg class="topology-links" viewBox="0 0 1754 700" aria-hidden="true"><path id="topology-flow-route" d="M387 317 H450 Q481 317 495 345 Q510 372 549 372 H1125 Q1153 372 1153 349 L1173 319"/><circle class="topology-flow-dot" r="3" fill="#b9eaff"><animateMotion dur="10s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;0.48;0.48;1;1" keyTimes="0;0.05;0.215;0.69;0.805;1"><mpath href="#topology-flow-route"/></animateMotion></circle></svg>
 </div>`;
}
