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
    <section className="section-padding bg-background pt-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
            Service Request
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Request A Security Engagement
          </h1>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Tell us your scope and timeline. Your request enters our workflow with
            status tracking from submitted to closed.
          </p>
        </div>

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
  );
}
