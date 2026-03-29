import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai.aglamaz.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
