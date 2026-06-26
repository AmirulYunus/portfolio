import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amirul | Software Engineer",
  description:
    "Portfolio of Amirul, a software engineer working with full-stack web apps, Laravel, Next.js, AWS, and photography on the side.",
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
