import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const projectRoot = fileURLToPath(new URL('../../', import.meta.url));

export function loadContactConfig(env) {
  if (!env) {
    const localFile = path.join(projectRoot, '.env.contact.local');
    if (existsSync(localFile)) loadEnvFile(localFile);
    env = process.env;
  }
  const integer = (key, fallback, min, max) => {
    const value = Number(env[key] || fallback);
    if (!Number.isInteger(value) || value < min || value > max) throw new Error(`Invalid ${key}`);
    return value;
  };
  const recipients = [...new Set(`${env.CONTACT_EMAIL || 'contact@zhama.com'},${env.CONTACT_EXTRA_EMAIL || 'xuguoyong@zhama.com'}`.split(/[,;]/).map(value => value.trim().toLowerCase()).filter(Boolean))];
  if (recipients.some(value => !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value))) throw new Error('Invalid contact recipient');
  const port = integer('SMTP_PORT', 587, 1, 65535);
  return {
    host: env.CONTACT_HOST || '127.0.0.1',
    port: integer('CONTACT_PORT', 4351, 1, 65535),
    dataDir: path.resolve(projectRoot, env.CONTACT_DATA_DIR || '.contact-data'),
    origins: new Set((env.CONTACT_ALLOWED_ORIGINS || 'https://www.zhama.com,https://zhama.com,http://127.0.0.1:4350,http://localhost:4350').split(',').map(value => new URL(value.trim()).origin)),
    trustProxy: env.CONTACT_TRUST_PROXY === 'true',
    rateLimit: { max: integer('RATE_LIMIT_MAX', 5, 1, 1000), windowMs: integer('RATE_LIMIT_WINDOW', 60000, 1000, 3600000) },
    recipients,
    smtp: {
      host: env.SMTP_HOST || '', port,
      secure: env.SMTP_SECURE ? env.SMTP_SECURE === 'true' : port === 465,
      user: env.SMTP_USER || '', pass: env.SMTP_PASS || '',
      from: env.SMTP_FROM || env.SMTP_USER || '',
    },
    feishu: {
      enabled: env.FEISHU_ENABLED !== 'false' && Boolean(env.FEISHU_APP_ID || env.FEISHU_APP_SECRET),
      appId: env.FEISHU_APP_ID || '', appSecret: env.FEISHU_APP_SECRET || '',
      chatId: env.FEISHU_CHAT_ID || '',
    },
  };
}

export function configurationStatus(config) {
  return {
    email: Boolean(config.smtp.host && config.smtp.user && config.smtp.pass && config.smtp.from),
    feishu: !config.feishu.enabled || Boolean(config.feishu.appId && config.feishu.appSecret && config.feishu.chatId),
  };
}
