import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SentraHex CyberTech | Cybersecurity Services",
  description:
    "SentraHex CyberTech is an Indian cybersecurity company delivering practical cybersecurity services for modern businesses.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "VAPT",
    "security audit",
    "India",
    "SentraHex",
  ],
  metadataBase: new URL("https://sentrahexct.in"),
  alternates: {
    canonical: "https://sentrahexct.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sentrahexct.in",
    siteName: "SentraHex CyberTech",
    title: "SentraHex CyberTech | Cybersecurity Services",
    description:
      "SentraHex CyberTech is an Indian cybersecurity company delivering practical cybersecurity services for modern businesses.",
    images: [
      {
        url: "https://sentrahexct.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SentraHex CyberTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SentraHex CyberTech | Cybersecurity Services",
    description:
      "Practical cybersecurity services for prevention, assessment, and response.",
    images: ["https://sentrahexct.in/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SentraHex CyberTech",
    description:
      "Practical cybersecurity services for businesses and teams",
    url: "https://sentrahexct.in",
    logo: "https://sentrahexct.in/logo.png",
    foundingDate: "2024",
    areaServed: "IN",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://sentrahexct.in/contact",
    },
    sameAs: [
      "https://twitter.com/sentrahexct",
      "https://linkedin.com/company/sentrahexct",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
