import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact  SentraHex CyberTech",
  description:
    "Get in touch with SentraHex CyberTech for penetration testing, security audits, compliance consulting, and cybersecurity training services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
