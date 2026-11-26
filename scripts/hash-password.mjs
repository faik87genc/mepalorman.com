// Kullanım: npm run hash-password            (şifreyi sorar)
// Çıktıdaki satırları Vercel ortam değişkenlerine veya .env.local dosyasına yapıştırın.
import { randomBytes, scryptSync } from "node:crypto";
import { createInterface } from "node:readline/promises";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const password = process.argv[2] ?? (await rl.question("Admin şifresi (en az 10 karakter): "));
rl.close();

if (password.length < 10) {
  console.error("Şifre en az 10 karakter olmalı.");
  process.exit(1);
}
const salt = randomBytes(16).toString("hex");
console.log(`\nADMIN_PASSWORD_HASH=${salt}:${scryptSync(password, salt, 64).toString("hex")}`);
console.log(`SESSION_SECRET=${randomBytes(32).toString("hex")}`);
