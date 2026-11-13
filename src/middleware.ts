import { defineMiddleware } from 'astro:middleware';
import { localizeHome } from './lib/localize-home';

// Prerender translations at build time; existing detail pages are untouched.
export const onRequest = defineMiddleware(async ({ url }, next) => {
  const language = url.pathname === '/zh-Hant/' ? 'zh-Hant' : url.pathname === '/ja/' ? 'ja' : undefined;
  const response = await next();
  if (!language || !response.headers.get('content-type')?.includes('text/html')) return response;
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('Content-Language', language);
  return new Response(localizeHome(await response.text(), language), { status: response.status, headers });
});
