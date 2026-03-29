import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdmin } from "./firebase-admin";

const SESSION_COOKIE = "admin_session";

/**
 * Create a session after successful Firebase login.
 * Stores the Firebase ID token in an httpOnly cookie.
 */
export async function createSession(idToken: string) {
  // Verify the token and check admin whitelist
  await verifyAdmin(idToken);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, idToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });
}

/**
 * Check if the current request has a valid admin session.
 */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  if (!session?.value) return false;

  try {
    await verifyAdmin(session.value);
    return true;
  } catch {
    return false;
  }
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
