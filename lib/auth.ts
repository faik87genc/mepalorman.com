import { randomBytes, scryptSync, timingSafeEqual, createHmac } from "crypto";

export const SESSION_COOKIE_NAME = "mepal_admin";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 saat
export const SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;

// `salt:hash`, scripts/hash-password.mjs çıktısı (16 bayt salt + 64 bayt scrypt, hex).
const PASSWORD_HASH_RE = /^[0-9a-f]{32}:[0-9a-f]{128}$/i;
const MIN_SECRET = 32;
const MAX_PASSWORD_LENGTH = 256;

// SESSION_VERSION değiştirilirse açık tüm oturumlar düşer.
const sessionVersion = () => process.env.SESSION_VERSION || "1";

function sessionSecret(): string | null {
  const s = process.env.SESSION_SECRET?.trim();
  return s && s.length >= MIN_SECRET ? s : null;
}

const validHash = (h: string | undefined) => !!h && PASSWORD_HASH_RE.test(h.trim());

/** Eksik/hatalı ortam değişkenleri (yalnızca adları, değer asla). Boşsa giriş çalışır. */
export function authConfigProblems(): string[] {
  const problems: string[] = [];
  if (!validHash(process.env.ADMIN_PASSWORD_HASH)) problems.push("ADMIN_PASSWORD_HASH tanımlı değil veya biçimi hatalı (npm run hash-password)");
  if (!sessionSecret()) problems.push(`SESSION_SECRET tanımlı değil veya ${MIN_SECRET} karakterden kısa`);
  return problems;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  if (!validHash(storedHash) || !password || password.length > MAX_PASSWORD_LENGTH) return false;
  const [salt, hash] = storedHash.trim().split(":");
  return timingSafeEqual(scryptSync(password, salt, 64), Buffer.from(hash, "hex"));
}

const sign = (value: string, secret: string) => createHmac("sha256", secret).update(value).digest("base64url");

export function createSessionToken(): string {
  const secret = sessionSecret();
  if (!secret) throw new Error("SESSION_SECRET eksik veya kısa.");
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + SESSION_TTL_MS, ver: sessionVersion(), id: randomBytes(8).toString("hex") })).toString("base64url");
  return `${payload}.${sign(payload, secret)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  const secret = sessionSecret();
  if (!token || !secret) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const a = Buffer.from(signature);
  const b = Buffer.from(sign(payload, secret));
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const { exp, ver } = JSON.parse(Buffer.from(payload, "base64url").toString());
    return ver === sessionVersion() && typeof exp === "number" && exp > Date.now();
  } catch {
    return false;
  }
}
