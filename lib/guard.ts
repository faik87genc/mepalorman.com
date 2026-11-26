import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";

export async function hasSession(): Promise<boolean> {
  return verifySessionToken((await cookies()).get(SESSION_COOKIE_NAME)?.value);
}

/** Her admin sayfasında ve işleminde çağrılır. */
export async function requireAdmin(): Promise<void> {
  if (!(await hasSession())) redirect("/admin/login/");
}
