import type { Locale } from '../data/types';
import workspaceInputs from '../assets/anywhere/workspace-inputs_V1.18.svg?raw';
import workspacePlatform from '../assets/anywhere/workspace-platform_V1.18.svg?raw';
import workspaceTransfer from '../assets/anywhere/workspace-transfer_V1.18.svg?raw';
import workspaceLabels from '../assets/anywhere/workspace-labels_V1.17.svg?raw';

export function renderAnywhereTopology(locale: Locale = 'zh') {
 const zh = locale === 'zh';
 const overview = zh
  ? '通过 PC、Web、平板、移动端与常用 IM 入口交办任务，数字员工依次接收任务、理解规划、协同执行并输出结果，交付经营看板、客户跟进、业务办理与方案报告。'
  : 'Delegate through desktop, tablet, mobile and messaging channels. TeGo connects knowledge, skills and systems with Agent execution, orchestration and access audit to deliver business dashboards, customer follow-up plans, business processing results and proposals.';
 if (zh) {
  const poster = '/images/anywhere/anywhere-workspace-depth_V1.18.webp';
  let sceneId = 0;
  const scopedFlow = (flow: string, suffix: string) => flow.replace(/(id="|url\(#)([a-zA-Z][\w-]*)/g, (_, prefix, id) => `${prefix}${id}-${suffix}`);
  const scene = (alt: string, flow = '') => {
   const suffix = `${locale}-${++sceneId}`;
   return `<div class="workspace-scene"><img src="${poster}" width="1948" height="760" alt="${alt}" loading="lazy" decoding="async"/>${scopedFlow(flow, suffix)}${workspaceLabels}</div>`;
  };
  return `<div class="anywhere-topology anywhere-topology--workspace" data-topology-motion="paused" data-topology-locale="${locale}">
   <div class="workspace-planes">
    ${scopedFlow(workspaceTransfer, `${locale}-transfer`)}
    <div class="anywhere-motion-crop anywhere-motion-crop--inputs">${scene('任务入口：PC、Web、平板、移动端，以及微信、QQ、企业微信、钉钉、飞书与 OA。', workspaceInputs)}</div>
    <div class="anywhere-motion-crop anywhere-motion-crop--platform">${scene('数字员工协同：结合企业知识库、技能和系统连接，完成资料整理、方案文书与项目协作。', workspacePlatform)}</div>
    <div class="anywhere-motion-crop anywhere-motion-crop--outputs">${scene('成果交付：方案报告、经营看板、办理回执与客户跟进，展示不同业务领域的交付形态。')}</div>
   </div>
  </div>`;
 }
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
