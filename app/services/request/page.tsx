"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type ServiceRequestForm = {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  details: string;
};

const INITIAL_STATE: ServiceRequestForm = {
  name: "",
  email: "",
  company: "",
  serviceType: "",
  budgetRange: "",
  timeline: "",
  details: "",
};

export default function ServiceRequestPage() {
  const [formData, setFormData] = useState<ServiceRequestForm>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submittedId, setSubmittedId] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/service-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result?.error || "Unable to submit request.");
        return;
      }

      setSubmittedId(result.id);
      setFormData(INITIAL_STATE);
    } catch {
      setError("Unable to submit request right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24 -mb-px min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl animate-float" />
          <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-accent-green/5 blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.04]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">
          <span
            className="animate-fade-in-up inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-4"
            style={{ animationFillMode: "backwards" }}
          >
            Service Request
          </span>
          <h1
            className="animate-fade-in-up delay-100 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight"
            style={{ animationFillMode: "backwards" }}
          >
            Request A Security
            <br />
            <span className="gradient-text">Engagement</span>
          </h1>
          <p
            className="animate-fade-in-up delay-200 mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
            style={{ animationFillMode: "backwards" }}
          >
            Tell us your scope and timeline. Your request enters our workflow with
            status tracking from submitted to closed.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 53 1440 56V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background relative z-10">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          {submittedId ? (
            <div className="rounded-xl border border-accent-green/30 bg-accent-green/5 p-4 mb-6 text-sm text-text-primary">
              Request submitted successfully. Reference ID: <strong>{submittedId}</strong>
            </div>
          ) : null}

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 mb-6 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                  Company
                </label>
                <input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                />
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-text-primary mb-2">
                  Service Needed
                </label>
                <select
                  id="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                >
                  <option value="" disabled>Select service</option>
                  <option value="vapt">Penetration Testing (VAPT)</option>
                  <option value="audit">Security Audit and Compliance</option>
                  <option value="training">Cybersecurity Training</option>
                  <option value="website-development">Website Design and Development</option>
                  <option value="managed-soc">Managed SOC</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="budgetRange" className="block text-sm font-medium text-text-primary mb-2">
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                >
                  <option value="">Not specified</option>
                  <option value="under-1l">Under 1L INR</option>
                  <option value="1l-5l">1L to 5L INR</option>
                  <option value="5l-15l">5L to 15L INR</option>
                  <option value="above-15l">Above 15L INR</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-text-primary mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                >
                  <option value="">Not specified</option>
                  <option value="immediate">Immediate</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-text-primary mb-2">
                Scope Details
              </label>
              <textarea
                id="details"
                required
                rows={6}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
                placeholder="Share target systems, compliance goals, timelines, or constraints."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center text-base !py-4 disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Service Request"}
            </button>
          </form>
          </div>
        </div>
      </section>
    </>
  );
}
