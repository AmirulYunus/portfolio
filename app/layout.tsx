import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amirul | Portfolio",
  description:
    "A focused developer portfolio for selected web product work, frontend craft, and full-stack projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
