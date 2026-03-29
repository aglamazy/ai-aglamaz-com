import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const ALLOWED_ADMINS = (process.env.ADMIN_EMAILS || "yaakov.aglamaz@gmail.com")
  .split(",")
  .map((e) => e.trim().toLowerCase());

function getAdminApp() {
  if (getApps().length > 0) return getApps()[0];

  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (serviceAccount) {
    return initializeApp({
      credential: cert(JSON.parse(serviceAccount)),
    });
  }

  // Fallback: uses GOOGLE_APPLICATION_CREDENTIALS or default credentials
  return initializeApp();
}

const adminApp = getAdminApp();
export const adminAuth = getAuth(adminApp);

/**
 * Verify a Firebase ID token and check if the user is an allowed admin.
 */
export async function verifyAdmin(idToken: string): Promise<{ uid: string; email: string }> {
  const decoded = await adminAuth.verifyIdToken(idToken);
  const email = decoded.email?.toLowerCase();

  if (!email || !ALLOWED_ADMINS.includes(email)) {
    throw new Error(`Unauthorized: ${email} is not an admin`);
  }

  return { uid: decoded.uid, email };
}
