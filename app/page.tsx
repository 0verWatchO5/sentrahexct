import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SentraHex CyberTech | Cybersecurity Services",
  description:
    "Cybersecurity services including penetration testing, audits, training, and website security for Indian enterprises.",
  openGraph: {
    title: "SentraHex CyberTech | Cybersecurity Services",
    description:
      "Practical cybersecurity services for prevention, assessment, and response.",
    url: "https://sentrahexct.in",
    type: "website",
  },
  alternates: {
    canonical: "https://sentrahexct.in",
  },
};

export default function Home() {
  return (
    <>
      {/* ── Hero Section ───────────────────────────── */}
      <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden -mb-px">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-accent-cyan/5 blur-3xl animate-float" />
          <div className="absolute bottom-32 right-[10%] w-96 h-96 rounded-full bg-accent-green/5 blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.04]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 w-full pt-32 pb-40 md:pt-40 md:pb-48">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16 lg:px-20">
            <div className="max-w-2xl">
              <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs font-medium text-accent-cyan tracking-wide">
                  Securing India&apos;s Digital Future
                </span>
              </div>

              <h1 className="animate-fade-in-up delay-100 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ animationFillMode: 'backwards' }}>
                Practical Security
                <br />
                <span className="gradient-text">for the Digital Age</span>
              </h1>

              <p className="animate-fade-in-up delay-200 mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-white/60" style={{ animationFillMode: 'backwards' }}>
                We provide focused cybersecurity services to identify risk, strengthen
                your controls, and improve response readiness. Cybersecurity made practical,
                proactive, and accessible.
              </p>

              <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap gap-4" style={{ animationFillMode: 'backwards' }}>
                <Link href="/services" className="btn-primary">
                  Explore Services
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/about" className="btn-outline !border-white/20 !text-white hover:!border-accent-cyan hover:!text-accent-cyan">
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="animate-fade-in-up delay-500 mt-16 flex gap-12" style={{ animationFillMode: 'backwards' }}>
                {[
                  { value: "24/7", label: "Monitoring" },
                  { value: "Real-time", label: "Response" },
                  { value: "India", label: "Based" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg sm:text-xl font-bold text-accent-cyan">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 80V40C360 0 720 0 1080 40C1260 60 1380 72 1440 76V80H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ── Services Overview ──────────────────────── */}
      <section className="relative z-10 py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
              What We Do
            </span>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Comprehensive Cyber Protection
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-text-secondary leading-relaxed">
              From vulnerability assessments to compliance consulting, we offer end-to-end
              cybersecurity services tailored for Indian businesses.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v6c0 5.25 3.83 10.13 9 11.25C17.17 23.13 21 18.25 21 13V7l-9-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                ),
                title: "Penetration Testing",
                description:
                  "Authorized simulated attacks to identify vulnerabilities in your systems, applications, and networks before real attackers do.",
                href: "/services#vapt",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Security Audits",
                description:
                  "Comprehensive ISO 27001 and DPDPA readiness assessments to ensure your organization meets compliance standards.",
                href: "/services#audits",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                ),
                title: "Cyber Training",
                description:
                  "Hands-on workshops in ethical hacking, CEH certification, and cybersecurity awareness for teams of any size.",
                href: "/services#training",
              },
              {
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h.01M12 6h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18l3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 21a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
                  </svg>
                ),
                title: "Website Solutions",
                description:
                  "Secure website design and development with performance, reliability, and security-first engineering.",
                href: "/services#websites",
              },
            ].map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-hover group rounded-2xl border border-border bg-surface p-8 block h-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 text-accent-cyan transition-all group-hover:from-accent-cyan/20 group-hover:to-accent-green/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-accent-cyan opacity-0 translate-x-[-8px] transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  Learn More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SentraHex ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-surface-alt">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid gap-12 lg:gap-20 items-center lg:grid-cols-2">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
                Why SentraHex
              </span>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-6">
                Security That Evolves
                <br />
                <span className="gradient-text">With Every Threat</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                In a world where cyber threats are rapidly evolving, we help organizations
                identify vulnerabilities, improve security posture, and respond faster.
                We believe cybersecurity should be personal, proactive, and
                as fundamental as healthcare in the digital age.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Practical Expertise",
                    desc: "Our team applies proven security practices tailored to your real-world environment.",
                  },
                  {
                    title: "Proactive Defense",
                    desc: "We don't wait for threats to strike  we predict and neutralize them before they reach you.",
                  },
                  {
                    title: "Made in India",
                    desc: "Rooted in India's culture of resilience, built with cutting-edge technology for the world.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-green/10">
                      <svg className="h-4 w-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-text-primary">{item.title}</h4>
                      <p className="text-sm text-text-secondary mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/20 animate-spin" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-6 rounded-full border-2 border-dashed border-accent-green/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                <div className="absolute inset-12 rounded-full border border-accent-cyan/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 flex items-center justify-center animate-glow-pulse">
                    <svg viewBox="0 0 24 24" className="h-14 w-14 sm:h-16 sm:w-16 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M12 2L3 7v6c0 5.25 3.83 10.13 9 11.25C17.17 23.13 21 18.25 21 13V7l-9-5z" />
                      <path d="M12 8v4M12 16h.01" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                {[
                  { top: '5%', left: '50%', delay: '0s' },
                  { top: '50%', right: '0%', delay: '1s' },
                  { bottom: '5%', left: '50%', delay: '2s' },
                  { top: '50%', left: '0%', delay: '3s' },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute h-3 w-3 rounded-full bg-accent-cyan/40 animate-pulse"
                    style={{ ...pos, animationDelay: pos.delay }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
              Our Purpose
            </span>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="card-hover rounded-2xl border border-border bg-surface p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-cyan/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10">
                  <svg className="h-6 w-6 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">
                  Rooted in India&apos;s spirit of resilience and innovation, we aim to redefine
                  cybersecurity with ever-evolving defense technologies that empower individuals
                  today and scale into comprehensive tech solutions tomorrow.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="card-hover rounded-2xl border border-border bg-surface p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-green/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10">
                  <svg className="h-6 w-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Our Vision</h3>
                <p className="text-text-secondary leading-relaxed">
                  To ignite a cybersecurity-first mindset across India by making defense intuitive,
                  practical, and deeply integrated  laying the foundation for a safer digital
                  future powered by evolving technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────── */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-accent-cyan/5 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-accent-green/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 md:px-16 py-24 sm:py-32 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait for a breach to take action. Let SentraHex CyberTech build your
            defense today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base sm:text-lg !py-4 !px-8">
              Get Started
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline !border-white/20 !text-white hover:!border-accent-cyan hover:!text-accent-cyan text-base sm:text-lg !py-4 !px-8">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
