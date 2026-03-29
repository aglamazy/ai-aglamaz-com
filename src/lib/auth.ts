import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme";
const SESSION_COOKIE = "admin_session";
const SESSION_TOKEN = process.env.ADMIN_SESSION_SECRET || "default-secret-change-me";

export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export async function createSession() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, SESSION_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  return session?.value === SESSION_TOKEN;
}

export async function requireAuth() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
