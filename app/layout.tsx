import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amirul | Backend Software Engineer",
  description:
    "Backend-focused software engineer with 3+ years of experience across Laravel, PHP, MySQL, AWS, Ubuntu, Nginx, and production systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amirul | Backend Software Engineer",
    description:
      "Laravel, PHP, MySQL, AWS, Ubuntu, Nginx, backend systems, migrations, and platform engineering direction.",
    url: "/",
    siteName: "Amirul Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amirul backend software engineer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirul | Backend Software Engineer",
    description:
      "Backend-focused portfolio for Laravel, PHP, MySQL, AWS, and platform engineering roles.",
    images: ["/opengraph-image"],
  },
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
