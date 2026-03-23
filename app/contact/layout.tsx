import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SentraHex CyberTech",
  description:
    "Get in touch with SentraHex CyberTech for cybersecurity services, penetration testing, security audits, and compliance consulting.",
  openGraph: {
    title: "Contact Us | SentraHex CyberTech",
    description: "Reach out to our cybersecurity experts for a consultation.",
    url: "https://sentrahexct.in/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://sentrahexct.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
