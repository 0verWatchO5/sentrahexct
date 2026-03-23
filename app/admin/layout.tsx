import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | SentraHex CyberTech",
  description: "Admin panel for managing leads and service requests.",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
