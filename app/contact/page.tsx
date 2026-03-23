"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result?.error || "Unable to send your message right now.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Unable to send your message right now.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24 -mb-px min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl animate-float" />
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-accent-green/5 blur-3xl animate-float delay-300" />
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
              Contact Us
            </span>
            <h1 className="animate-fade-in-up delay-100 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight" style={{ animationFillMode: 'backwards' }}>
              Let&apos;s Secure Your
              <br />
              <span className="gradient-text">Digital Future</span>
            </h1>
            <p className="animate-fade-in-up delay-200 mt-6 text-lg text-white/60 max-w-xl leading-relaxed" style={{ animationFillMode: 'backwards' }}>
              Have a question or need a cybersecurity assessment? Reach out and our
              team will get back to you within 24 hours.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 53 1440 56V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ── Contact Content ──────────────────────── */}
      <section className="relative z-10 section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
                Get in Touch
              </span>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                We&apos;d Love to
                <br />
                Hear From You
              </h2>
              <p className="text-text-secondary leading-relaxed mb-10">
                Whether you need a penetration test, compliance audit, or want to train
                your team  we&apos;re here to help. Every inquiry receives a personalized
                response from our security experts.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10">
                    <svg className="h-5 w-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Email</h4>
                    <p className="text-sm text-text-secondary mt-0.5">sales@sentrahexct.in</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green/10">
                    <svg className="h-5 w-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Phone</h4>
                    <p className="text-sm text-text-secondary mt-0.5">+91-XXXXX-XXXXX</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-cyan/10">
                    <svg className="h-5 w-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Location</h4>
                    <p className="text-sm text-text-secondary mt-0.5">India</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green/10">
                    <svg className="h-5 w-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">Response Time</h4>
                    <p className="text-sm text-text-secondary mt-0.5">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-cyan/5 to-transparent rounded-bl-full" />

                {submitted ? (
                  <div className="relative text-center py-16">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-green/10">
                      <svg className="h-10 w-10 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      Message Received!
                    </h3>
                    <p className="text-text-secondary max-w-md mx-auto">
                      Thank you for reaching out. Our cybersecurity experts will review your
                      inquiry and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="btn-outline mt-8"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative space-y-6">
                    {error ? (
                      <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                        {error}
                      </div>
                    ) : null}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10 placeholder:text-text-muted"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10 placeholder:text-text-muted"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="vapt">Penetration Testing (VAPT)</option>
                        <option value="audit">Security Audit & Compliance</option>
                        <option value="training">Cybersecurity Training</option>
                        <option value="websites">Website Design & Development</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10 placeholder:text-text-muted"
                        placeholder="Tell us about your security needs..."
                      />
                    </div>
                    <button type="submit" disabled={submitting} className="btn-primary w-full justify-center text-base !py-4 disabled:opacity-70">
                      {submitting ? "Sending..." : "Send Message"}
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                    <p className="text-center text-xs text-text-muted">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────── */}
      <section className="section-padding bg-surface-alt">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical penetration test take?",
                a: "Depending on the scope and complexity, a standard VAPT engagement takes 1–2 weeks, followed by a detailed report with prioritized findings and remediation guidance.",
              },
              {
                q: "Do you offer services for startups and small businesses?",
                a: "Absolutely. We tailor our services to organizations of all sizes. Cybersecurity shouldn't be limited by budget  we'll work with you to find the right fit.",
              },
              {
                q: "What compliance frameworks do you support?",
                a: "We provide readiness assessments for ISO 27001, DPDPA, SOC 2, GDPR, HIPAA, and other industry-specific standards relevant to your business.",
              },
              {
                q: "Can training be delivered online?",
                a: "Yes. We offer both in-person and virtual training sessions with hands-on labs and interactive exercises, making it accessible for distributed teams across India.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-surface p-6 card-hover">
                <h3 className="text-base font-semibold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
