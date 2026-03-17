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
  title: "SentraHex CyberTech  Intelligent Cybersecurity Solutions",
  description:
    "SentraHex CyberTech is an Indian cybersecurity company building intelligent, kernel-level defense systems that adapt, learn, and respond in real time.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "VAPT",
    "security audit",
    "India",
    "SentraHex",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
