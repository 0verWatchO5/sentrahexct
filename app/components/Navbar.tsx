"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-green shadow-lg transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v6c0 5.25 3.83 10.13 9 11.25C17.17 23.13 21 18.25 21 13V7l-9-5z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-text-primary" : "text-white"
            }`}>
              Sentra<span className="gradient-text">Hex</span>
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
              scrolled ? "text-text-muted" : "text-white/50"
            }`}>
              CyberTech
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-accent-cyan"
                  : scrolled
                    ? "text-text-secondary hover:text-text-primary hover:bg-surface-alt"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-green" />
              )}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 btn-primary !py-2.5 !px-5 text-sm">
            Get Protected
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45 bg-text-primary" : scrolled ? "bg-text-primary" : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 bg-text-primary" : scrolled ? "bg-text-primary" : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45 bg-text-primary" : scrolled ? "bg-text-primary" : "bg-white"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold transition-colors ${
                isActive(link.href) ? "gradient-text" : "text-text-primary hover:text-accent-cyan"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-4 text-lg"
          >
            Get Protected
          </Link>
        </div>
      </div>
    </nav>
  );
}
