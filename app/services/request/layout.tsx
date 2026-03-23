import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Service | SentraHex CyberTech",
  description:
    "Request our cybersecurity services including penetration testing, security audits, and VAPT.",
  openGraph: {
    title: "Request Service | SentraHex CyberTech",
    description: "Request our professional cybersecurity services.",
    url: "https://sentrahexct.in/services/request",
    type: "website",
  },
  canonical: "https://sentrahexct.in/services/request",
};

export default function ServiceRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
