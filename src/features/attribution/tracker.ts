import { ATTRIBUTION_KEY, readSourceState, appendSourceStep, sourceStep, isContactPath } from '../../../shared/contact-attribution.mjs';

type Step = { path: string; label: string; kind: string };
type Attribution = { sourceTrail: Step[]; referrer: string };
let initialized = false;
let snapshot: Attribution;
let memory: any;
const load = () => {
  try { return readSourceState(JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || 'null')); }
  catch { return readSourceState(memory); }
};
const save = (state: any) => {
  memory = { ...state, updatedAt: Date.now() };
  try { sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(memory)); }
  catch { /* Navigation metadata remains available for this document. */ }
};
const referrerStep = () => {
  try {
    const url = new URL(document.referrer);
    return url.origin === location.origin ? sourceStep(url.pathname, url.pathname) : null;
  } catch { return null; }
};
function recordPage() {
  const state = load();
  const current = location.pathname;
  if (isContactPath(current)) {
    const pending = state.pending?.target === current ? state.pending : null;
    const source = referrerStep();
    const contactReferrer = (() => { try { return new URL(document.referrer).origin === location.origin && isContactPath(new URL(document.referrer).pathname); } catch { return false; } })();
    if (!pending && history.state?.contactAttribution) snapshot = history.state.contactAttribution;
    else if (!pending && contactReferrer && state.contactSource) snapshot = state.contactSource;
    else {
      const from = pending?.from || source;
      const trail = from ? (state.steps.at(-1)?.path === from.path ? state.steps : [from]) : [];
      snapshot = { sourceTrail: trail, referrer: from ? location.origin + from.path : '' };
    }
    state.contactSource = snapshot;
    try { history.replaceState({ ...history.state, contactAttribution: snapshot }, ''); } catch { /* The form works without browser history storage. */ }
  } else {
    if (state.pending?.target === current && state.pending.group) state.steps = appendSourceStep(state.steps, state.pending.group);
    state.steps = appendSourceStep(state.steps, sourceStep(current, document.body.dataset.pageName || document.title));
  }
  delete state.pending;
  save(state);
}
export function initContactAttribution() {
  if (initialized) return;
  initialized = true;
  recordPage();
  window.addEventListener('pageshow', event => { if (event.persisted) recordPage(); });
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href]');
    if (!link || link.hasAttribute('download') || link.target === '_blank') return;
    const target = new URL(link.href, location.href);
    if (target.origin !== location.origin || target.pathname === location.pathname) return;
    const state = load();
    const from = sourceStep(location.pathname, document.body.dataset.pageName || document.title);
    if (from) state.steps = appendSourceStep(state.steps, from);
    const groupName = link.closest<HTMLElement>('[data-attribution-group]')?.dataset.attributionGroup;
    const prefix = location.pathname.split('/')[1];
    const group = groupName ? sourceStep(`/${prefix}/${groupName}/`, '', 'menu') : null;
    state.pending = { target: target.pathname, from, group: isContactPath(target.pathname) ? null : group };
    save(state);
  }, true);
}
export function getContactAttribution(): Attribution {
  initContactAttribution();
  return snapshot || { sourceTrail: [], referrer: '' };
}
