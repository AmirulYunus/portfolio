import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amirul | Production Backend Engineer",
  description:
    "Backend engineer with 3+ years across Laravel, PHP, MySQL, AWS, Linux, Nginx, REST APIs, release engineering, and production support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amirul | Production Backend Engineer",
    description:
      "Laravel/PHP systems, MySQL data flows, AWS infrastructure, weekly releases, production debugging, and backend automation.",
    url: "/",
    siteName: "Amirul Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amirul production backend engineer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirul | Production Backend Engineer",
    description:
      "Backend portfolio for Laravel, PHP, MySQL, AWS, releases, debugging, and production systems.",
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
