import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us  SentraHex CyberTech",
  description:
    "Learn about SentraHex CyberTech's mission to redefine cybersecurity from India with intelligent, kernel-level defense systems.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24 -mb-px">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-accent-green/5 blur-3xl" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-4">
              About SentraHex
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Redefining Digital
              <br />
              <span className="gradient-text">Defense from India</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              On a mission to make cybersecurity personal, proactive, and as fundamental
              as healthcare in the digital age.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 53 1440 56V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────── */}
      <section className="relative z-10 section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 items-center lg:grid-cols-2">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-6">
                Built from Conviction,
                <br />
                <span className="gradient-text">Not Convention</span>
              </h2>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>
                  SentraHex CyberTech is an Indian cybersecurity company on a mission to
                  redefine how digital defense is perceived, implemented, and experienced
                  starting with the individual.
                </p>
                <p>
                  In a world where cyber threats are rapidly evolving, we&apos;re building
                  intelligent, kernel-level defense systems that don&apos;t just detect
                  they adapt, learn, and respond in real time.
                </p>
                <p>
                  We believe cybersecurity shouldn&apos;t be reactive, complicated, or reserved
                  for the technically elite. It should be personal, proactive, and deeply
                  embedded  as fundamental as healthcare in the digital age.
                </p>
                <p>
                  Rooted in India&apos;s culture of resilience and built with cutting-edge
                  technology, our solutions are designed to empower users, protect digital
                  sovereignty, and establish a new benchmark for digital safety.
                </p>
                <p>
                  While we begin with cybersecurity as our core, our vision expands far
                  beyond  into a future where intelligent, evolving systems secure not just
                  individuals but the entire digital ecosystem.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Hex grid background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-surface-alt to-surface border border-border overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,184,217,0.08) 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                  {/* Animated shield */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-8 rounded-full border-2 border-dashed border-accent-cyan/15 animate-spin" style={{ animationDuration: '25s' }} />
                      <div className="absolute -inset-16 rounded-full border border-accent-green/10 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
                      <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 flex items-center justify-center animate-glow-pulse">
                        <svg viewBox="0 0 24 24" className="h-14 w-14 text-accent-cyan" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M12 2L3 7v6c0 5.25 3.83 10.13 9 11.25C17.17 23.13 21 18.25 21 13V7l-9-5z" />
                          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Corner badges */}
                  <div className="absolute top-6 left-6 rounded-lg bg-accent-cyan/10 px-3 py-1.5 text-xs font-semibold text-accent-cyan">
                    Kernel-Level
                  </div>
                  <div className="absolute bottom-6 right-6 rounded-lg bg-accent-green/10 px-3 py-1.5 text-xs font-semibold text-accent-green">
                    Real-Time
                  </div>
                  <div className="absolute top-6 right-6 rounded-lg bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                    Made in India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────── */}
      <section className="section-padding bg-surface-alt">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
              Our Purpose
            </span>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-border bg-surface p-10 relative overflow-hidden group card-hover">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-cyan/0" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-cyan/5 to-transparent rounded-bl-full transition-all group-hover:w-48 group-hover:h-48" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-cyan/10">
                  <svg className="h-7 w-7 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  Rooted in India&apos;s spirit of resilience and innovation, we aim to redefine
                  cybersecurity with ever-evolving defense technologies that empower individuals
                  today and scale into comprehensive tech solutions tomorrow.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-border bg-surface p-10 relative overflow-hidden group card-hover">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-green to-accent-green/0" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-green/5 to-transparent rounded-bl-full transition-all group-hover:w-48 group-hover:h-48" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-green/10">
                  <svg className="h-7 w-7 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Our Vision</h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  To ignite a cybersecurity-first mindset across India by making defense intuitive,
                  intelligent, and deeply integrated  laying the foundation for a safer digital
                  future powered by evolving technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
              Our Pillars
            </span>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Values That Define Us
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Innovation",
                desc: "Pushing boundaries with kernel-level intelligence and adaptive defense.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v6c0 5.25 3.83 10.13 9 11.25C17.17 23.13 21 18.25 21 13V7l-9-5z" />
                  </svg>
                ),
                title: "Resilience",
                desc: "Rooted in India's culture of overcoming challenges and growing stronger.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Empowerment",
                desc: "Making security accessible to everyone, not just the technically elite.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Sovereignty",
                desc: "Protecting India's digital independence with homegrown solutions.",
              },
            ].map((value) => (
              <div key={value.title} className="card-hover rounded-2xl border border-border bg-surface p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-green/10 text-accent-cyan">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rooted in India ──────────────────────── */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-accent-cyan/5 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-accent-green/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-4">
            🇮🇳 Proudly Indian
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Rooted in India.
            <br />
            <span className="gradient-text">Built for the World.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            India has always been a land of innovation and resilience. We carry that spirit
            into everything we build  from our intelligent defense algorithms to our
            commitment to making cybersecurity accessible to every Indian citizen. Our
            solutions are designed to protect digital sovereignty and establish a new
            benchmark for digital safety.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl font-bold text-accent-cyan">🛡️</div>
              <div className="text-xs text-white/40 mt-2">Digital Sovereignty</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-green">🔬</div>
              <div className="text-xs text-white/40 mt-2">Cutting-Edge R&D</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-cyan">🌏</div>
              <div className="text-xs text-white/40 mt-2">Global Standards</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
