import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cybersecurity Services | SentraHex CyberTech",
  description:
    "Professional services: Penetration Testing, VAPT, Security Audits, Compliance Consulting, Cybersecurity Training, and Website Solutions.",
  openGraph: {
    title: "Cybersecurity Services | SentraHex CyberTech",
    description:
      "Expert cybersecurity services including penetration testing, security audits, and compliance consulting.",
    url: "https://sentrahexct.in/services",
    type: "website",
  },
  canonical: "https://sentrahexct.in/services",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24 min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl animate-float" />
          <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-accent-green/5 blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.04]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="animate-fade-in-up inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-4" style={{ animationFillMode: 'backwards' }}>
              Our Services
            </span>
            <h1 className="animate-fade-in-up delay-100 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight" style={{ animationFillMode: 'backwards' }}>
              Comprehensive Cyber
              <br />
              <span className="gradient-text">Protection Suite</span>
            </h1>
            <p className="animate-fade-in-up delay-200 mt-6 text-lg text-white/60 max-w-xl leading-relaxed" style={{ animationFillMode: 'backwards' }}>
              End-to-end cybersecurity services designed for Indian businesses  from
              vulnerability assessments to compliance consulting, team training, and website solutions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 53 1440 56V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ── Services Detail ──────────────────────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl space-y-24">

          {/* ── 1. Penetration Testing (VAPT) ──────── */}
          <div id="vapt" className="scroll-mt-24 grid gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-1.5 mb-5">
                <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                <span className="text-xs font-medium text-accent-cyan">Service 01</span>
              </div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-5">
                Penetration Testing
                <br />
                <span className="gradient-text">(VAPT)</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our ethical hacking and vulnerability assessment services identify weaknesses
                in your systems, applications, and networks using authorized simulated attacks
                before real attackers can exploit them.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Web & Mobile Application Penetration Testing",
                  "Network Infrastructure Assessment",
                  "API Security Testing",
                  "Cloud Environment Vulnerability Scans",
                  "Detailed Remediation Reports with Priority Rankings",
                  "Re-testing After Fix Implementation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-cyan/10">
                      <svg className="h-3 w-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Request VAPT Assessment
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services/request" className="btn-outline ml-3">
                Start Service Request
              </Link>
            </div>

            {/* Visual Card */}
            <div className="rounded-2xl border border-border bg-surface p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-cyan/5 to-transparent rounded-bl-full" />
              <div className="relative flex flex-col items-center text-center py-8">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 animate-glow-pulse">
                  <svg className="h-12 w-12 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L3 7v6c0 5.25 3.83 10.13 9 11.25C17.17 23.13 21 18.25 21 13V7l-9-5z" />
                    <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Vulnerability Assessment</h3>
                <p className="text-sm text-text-muted mb-6">&amp; Penetration Testing</p>
                <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                  {[
                    { label: "Detection", value: "99.7%" },
                    { label: "Avg. Time", value: "48hrs" },
                    { label: "Reports", value: "Detailed" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-surface-alt p-3">
                      <div className="text-sm font-bold text-accent-cyan">{stat.value}</div>
                      <div className="text-[10px] text-text-muted mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* ── 2. Security Audits & Compliance ────── */}
          <div id="audits" className="scroll-mt-24 grid gap-12 items-center lg:grid-cols-2">
            {/* Visual Card - Left on desktop */}
            <div className="rounded-2xl border border-border bg-surface p-8 relative overflow-hidden order-2 lg:order-1">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent-green/5 to-transparent rounded-br-full" />
              <div className="relative flex flex-col items-center text-center py-8">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-green/10 to-accent-cyan/10 animate-glow-pulse">
                  <svg className="h-12 w-12 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <path d="M9 8h1" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Compliance Framework</h3>
                <p className="text-sm text-text-muted mb-6">Audit & Assessment</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["ISO 27001", "DPDPA", "SOC 2", "GDPR", "HIPAA"].map((tag) => (
                    <span key={tag} className="rounded-full border border-accent-green/20 bg-accent-green/5 px-3 py-1 text-xs font-medium text-accent-green">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/5 px-4 py-1.5 mb-5">
                <span className="h-2 w-2 rounded-full bg-accent-green" />
                <span className="text-xs font-medium text-accent-green">Service 02</span>
              </div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-5">
                Security Audits &
                <br />
                <span className="gradient-text">Compliance Consulting</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Comprehensive advisory and assessment services including ISO 27001 and DPDPA
                readiness evaluations. We help organizations identify gaps, strengthen their
                security posture, and achieve compliance without disrupting operations.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "ISO 27001 Gap Analysis & Implementation Support",
                  "DPDPA (Digital Personal Data Protection Act) Readiness",
                  "Security Policy Development & Review",
                  "Risk Assessment & Management Frameworks",
                  "Third-Party Vendor Security Assessments",
                  "Compliance Roadmap & Action Plans",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-green/10">
                      <svg className="h-3 w-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule an Audit
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services/request" className="btn-outline ml-3">
                Start Service Request
              </Link>
            </div>
          </div>

          <hr className="border-border" />

          {/* ── 3. Cybersecurity Training ─────────── */}
          <div id="training" className="scroll-mt-24 grid gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-1.5 mb-5">
                <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                <span className="text-xs font-medium text-accent-cyan">Service 03</span>
              </div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-5">
                Cybersecurity
                <br />
                <span className="gradient-text">Training & Workshops</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Empower your teams with hands-on cybersecurity training. From ethical hacking
                fundamentals to advanced CEH certification prep, our workshops are designed
                to build real-world skills and awareness.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Ethical Hacking & Penetration Testing Courses",
                  "CEH (Certified Ethical Hacker) Preparation",
                  "Employee Security Awareness Programs",
                  "Phishing Simulation & Response Drills",
                  "Custom Corporate Training Modules",
                  "Hands-on Lab Exercises & Real-World Scenarios",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-cyan/10">
                      <svg className="h-3 w-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Enquire About Training
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services/request" className="btn-outline ml-3">
                Start Service Request
              </Link>
            </div>

            {/* Visual Card */}
            <div className="rounded-2xl border border-border bg-surface p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-cyan/5 to-transparent rounded-bl-full" />
              <div className="relative flex flex-col items-center text-center py-8">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 animate-glow-pulse">
                  <svg className="h-12 w-12 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Skill Development</h3>
                <p className="text-sm text-text-muted mb-6">Training & Certification</p>
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  {[
                    { icon: "🎯", label: "Hands-on Labs" },
                    { icon: "📜", label: "Certification" },
                    { icon: "👥", label: "Team Training" },
                    { icon: "🔄", label: "Ongoing Support" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-surface-alt p-3 text-center">
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="text-[11px] text-text-muted">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* ── 4. Website Solutions ─────────────── */}
          <div id="websites" className="scroll-mt-24 grid gap-12 items-center lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/5 px-4 py-1.5 mb-5">
                <span className="h-2 w-2 rounded-full bg-accent-green" />
                <span className="text-xs font-medium text-accent-green">Service 04</span>
              </div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-5">
                Website
                <br />
                <span className="gradient-text">Design & Development</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                We build modern, high-performance websites tailored for your business goals.
                Every build emphasizes speed, responsive UX, and security-first best practices.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Business Websites and Landing Pages",
                  "Responsive UI for Mobile, Tablet, and Desktop",
                  "Performance Optimization and Core Web Vitals",
                  "SEO-Friendly Structure and Technical Setup",
                  "Secure Forms, Deployment, and Ongoing Maintenance",
                  "CMS or Custom Stack Based on Your Needs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-green/10">
                      <svg className="h-3 w-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">
                Start Your Website Project
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services/request" className="btn-outline ml-3">
                Start Service Request
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-green/5 to-transparent rounded-bl-full" />
              <div className="relative flex flex-col items-center text-center py-8">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-green/10 to-accent-cyan/10 animate-glow-pulse">
                  <svg className="h-12 w-12 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h.01M12 6h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18l3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 21a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Website Solutions</h3>
                <p className="text-sm text-text-muted mb-6">Design, Build & Scale</p>
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  {[
                    { label: "Responsive" },
                    { label: "SEO-Ready" },
                    { label: "Fast" },
                    { label: "Secure" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-surface-alt p-3 text-center">
                      <div className="text-[11px] text-text-muted">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Section ──────────────────────── */}
      <section className="section-padding bg-surface-alt">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
              How We Work
            </span>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Our Engagement Process
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-text-secondary">
              A streamlined, transparent approach to securing your digital assets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We understand your infrastructure, compliance needs, and security goals.",
                color: "accent-cyan",
              },
              {
                step: "02",
                title: "Assessment",
                desc: "Thorough evaluation of your systems using industry-leading methodologies.",
                color: "accent-green",
              },
              {
                step: "03",
                title: "Reporting",
                desc: "Detailed findings with prioritized recommendations and remediation steps.",
                color: "accent-cyan",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing guidance, re-testing, and continuous improvement planning.",
                color: "accent-green",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-border to-transparent" />
                )}
                <div className="card-hover rounded-2xl border border-border bg-surface p-8">
                  <div className={`text-3xl font-bold text-${item.color}/20 mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-accent-cyan/5 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-accent-green/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need a Custom Security Solution?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Every organization is unique. Let us tailor a cybersecurity strategy that
            fits your specific needs and compliance requirements.
          </p>
          <Link href="/contact" className="btn-primary text-lg !py-4 !px-8 mt-10 inline-flex">
            Talk to Our Experts
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/services/request" className="btn-outline text-lg !py-4 !px-8 mt-4 inline-flex">
            Submit Service Scope
          </Link>
        </div>
      </section>
    </>
  );
}
