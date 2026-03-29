import { Heebo } from "next/font/google";
import "../globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin - agents-head.com",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${heebo.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
