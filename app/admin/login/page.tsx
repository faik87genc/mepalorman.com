import { redirect } from "next/navigation";
import { authConfigProblems } from "@/lib/auth";
import { hasSession } from "@/lib/guard";
import { login } from "../actions";

const ERRORS: Record<string, string> = {
  sifre: "Şifre hatalı.",
  limit: "Çok fazla deneme yapıldı. 10 dakika sonra tekrar deneyin.",
  ayar: "Panel henüz yapılandırılmamış.",
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ hata?: string }> }) {
  if (await hasSession()) redirect("/admin/");
  const { hata } = await searchParams;
  const problems = authConfigProblems();
  return (
    <form action={login} className="admin-login">
      <h1>Yönetim Paneli</h1>
      {hata && ERRORS[hata] && <p className="admin-note is-error" role="alert">{ERRORS[hata]}</p>}
      {problems.length > 0 && (
        <div className="admin-note">
          <p>Giriş için Vercel (veya .env.local) ortam değişkenleri eksik:</p>
          <ul>{problems.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      )}
      <label>
        Şifre
        <input type="password" name="password" autoComplete="current-password" required />
      </label>
      <button type="submit" className="btn btn-gold">Giriş yap</button>
    </form>
  );
}
