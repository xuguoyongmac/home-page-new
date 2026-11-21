import { analyticsHosts } from '../../../shared/analytics.mjs';
import { initBaiduAnalytics, disableBaiduAnalytics } from './baidu.mjs';

export const ANALYTICS_CONSENT_KEY = 'tego-analytics-consent';
const controllers = new WeakMap();

function productionSite(location) {
  try {
    const url = new URL(location.href);
    return url.protocol === 'https:' && analyticsHosts.includes(url.hostname) && !url.port && !url.username && !url.password;
  } catch { return false; }
}

function privacySignal(browser) {
  return browser.navigator?.globalPrivacyControl === true
    || ['1', 'yes'].includes(String(browser.navigator?.doNotTrack || '').toLowerCase())
    || ['1', 'yes'].includes(String(browser.doNotTrack || '').toLowerCase());
}

export function initAnalyticsConsent(browser = typeof window !== 'undefined' ? window : undefined) {
  const document = browser?.document;
  if (!document || controllers.has(browser)) return false;
  const root = document.querySelector('[data-analytics-consent]');
  if (!root) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initAnalyticsConsent(browser), { once: true });
    return false;
  }
  const allow = root.querySelector('[data-analytics-allow]');
  const deny = root.querySelector('[data-analytics-deny]');
  const status = root.querySelector('[data-analytics-status]');
  if (!allow || !deny || !status) return false;
  const preferences = [...document.querySelectorAll('[data-analytics-preferences]')];
  const production = productionSite(browser.location);
  let returnFocus;
  let started = false;
  let disabled = false;
  const read = () => {
    try {
      const value = browser.localStorage.getItem(ANALYTICS_CONSENT_KEY);
      return ['granted', 'denied'].includes(value) ? value : '';
    } catch { return ''; }
  };
  const save = value => {
    try {
      browser.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
      return browser.localStorage.getItem(ANALYTICS_CONSENT_KEY) === value;
    } catch { return false; }
  };
  const measure = () => {
    if (!root.hidden) document.documentElement.style.setProperty('--analytics-consent-space', `${Math.ceil(root.getBoundingClientRect().height)}px`);
  };
  const show = (focus = false) => {
    status.hidden = true;
    status.textContent = '';
    root.hidden = false;
    document.documentElement.setAttribute('data-analytics-consent-open', '');
    preferences.forEach(button => button.setAttribute('aria-expanded', 'true'));
    measure();
    if (focus) root.focus({ preventScroll: true });
  };
  const hide = (restoreFocus = false) => {
    root.hidden = true;
    document.documentElement.removeAttribute('data-analytics-consent-open');
    document.documentElement.style.removeProperty('--analytics-consent-space');
    preferences.forEach(button => button.setAttribute('aria-expanded', 'false'));
    if (restoreFocus && returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  };
  const message = text => {
    status.textContent = text;
    status.hidden = false;
    measure();
  };
  const start = () => {
    if (!production || privacySignal(browser)) return false;
    const active = initBaiduAnalytics(browser);
    started ||= active;
    return active;
  };
  const stop = () => {
    if (!started && !document.getElementById('tego-baidu-analytics')) return false;
    disableBaiduAnalytics(browser);
    disabled = true;
    return true;
  };
  const choose = value => {
    if (value === 'denied') stop();
    if (!save(value)) {
      stop();
      message(root.dataset.storageError);
      return;
    }
    if (value === 'denied') {
      hide(true);
      return;
    }
    if (disabled) { message(root.dataset.analyticsNextVisit); return; }
    if (start()) hide(true);
    else message(privacySignal(browser) ? root.dataset.privacyBlocked : root.dataset.analyticsInactive);
  };

  allow.addEventListener('click', () => choose('granted'));
  deny.addEventListener('click', () => choose('denied'));
  preferences.forEach(button => button.addEventListener('click', () => { returnFocus = button; show(true); }));
  root.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); hide(true); }
  });
  browser.addEventListener('resize', measure, { passive: true });
  if (browser.ResizeObserver) new browser.ResizeObserver(measure).observe(root);
  browser.addEventListener('storage', event => {
    if (event.key !== ANALYTICS_CONSENT_KEY && event.key !== null) return;
    const value = read();
    if (value !== 'granted') {
      stop();
      if (!value && production) show(); else hide();
    } else if (disabled) {
      if (!root.hidden) message(root.dataset.analyticsNextVisit);
    }
    else { start(); hide(); }
  });
  controllers.set(browser, { show });
  if (read() === 'granted') start();
  else if (!read() && production) show();
  return true;
}
