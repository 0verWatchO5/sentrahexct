"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function AdminLoginPage() {
  const [callbackUrl] = useState(() => {
    if (typeof window === "undefined") {
      return "/admin/leads";
    }

    const params = new URLSearchParams(window.location.search);
    return params.get("callbackUrl") || "/admin/leads";
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Invalid credentials. Please try again.");
      return;
    }

    window.location.href = result.url || callbackUrl;
  };

  return (
    <section className="section-padding bg-background pt-32">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
            Admin Access
          </span>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Sign In</h1>
          <p className="text-text-secondary text-sm mb-7">
            Sign in to access leads and service request workflows.
          </p>

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 mb-5">
              {error}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-sm text-text-secondary">
            No user yet?{" "}
            <Link href="/admin/register" className="text-accent-cyan font-medium">
              Create admin account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
