import { parse, serialize, type DefaultTreeAdapterMap } from 'parse5';
import { Converter } from 'opencc-js/cn2t';
import { homeJapanese } from '../data/home-ja';

const traditional = Converter({ from: 'cn', to: 'tw' });
const translatedAttributes = new Set(['aria-label', 'title', 'alt', 'data-insight-copy', 'data-pause-label', 'data-play-label', 'data-open-label', 'data-close-label']);
type Node = DefaultTreeAdapterMap['node'];

function japanese(value: string): string {
  const trimmed = value.trim();
  let translated = homeJapanese[trimmed];
  if (!translated && trimmed.startsWith('@')) translated = homeJapanese[trimmed.slice(1)] && `@${homeJapanese[trimmed.slice(1)]}`;
  if (!translated && trimmed.endsWith(' · TeGo')) translated = homeJapanese[trimmed.slice(0, -7)] && `${homeJapanese[trimmed.slice(0, -7)]} · TeGo`;
  if (!translated && trimmed.includes('：')) {
    const [label, ...rest] = trimmed.split('：');
    if (homeJapanese[label] && homeJapanese[rest.join('：')]) translated = `${homeJapanese[label]}：${homeJapanese[rest.join('：')]}`;
  }
  return translated ? value.replace(trimmed, translated) : value;
}

export function localizeHome(html: string, language: 'zh-Hant' | 'ja'): string {
  const document = parse(html);
  const translate = language === 'zh-Hant' ? traditional : japanese;
  function visit(node: Node, orderChart?: { month: number }) {
    if ('tagName' in node) {
      if (['script', 'style'].includes(node.tagName) || node.attrs.some(attr => attr.name === 'data-language-option')) return;
      if (node.tagName === 'svg' && node.attrs.some(attr => attr.name === 'aria-label' && attr.value === 'Orders from May to October')) orderChart = { month: 0 };
      const isCopy = node.tagName === 'meta' && node.attrs.some(attr => ['description', 'og:title', 'og:description'].includes(attr.value));
      for (const attr of node.attrs) {
        if (translatedAttributes.has(attr.name) || (isCopy && attr.name === 'content')) attr.value = translate(attr.value);
        if (attr.name === 'href' && attr.value === (language === 'ja' ? '/en/' : '/zh/')) attr.value = `/${language}/`;
      }
    }
    if ('value' in node && node.nodeName === '#text') {
      if (language === 'ja' && orderChart && /^[MJASO]$/.test(node.value.trim())) node.value = `${5 + orderChart.month++}月`;
      else node.value = translate(node.value);
    }
    if ('childNodes' in node) node.childNodes.forEach(child => visit(child, orderChart));
  }
  visit(document);
  return serialize(document);
}
