"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

export default function AdminRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result?.error || "Unable to create account.");
        return;
      }

      setMessage("Account created successfully. You can now sign in.");
      setName("");
      setEmail("");
      setPassword("");
    } catch {
      setError("Unable to create account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-background pt-32">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
            Admin Setup
          </span>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Create User</h1>
          <p className="text-text-secondary text-sm mb-7">
            This creates a user in MongoDB users collection with a hashed password.
          </p>

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 mb-5">
              {error}
            </div>
          ) : null}

          {message ? (
            <div className="rounded-xl border border-accent-green/30 bg-accent-green/5 p-3 text-sm text-text-primary mb-5">
              {message}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Full Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-text-primary outline-none transition-all focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/10"
              />
            </div>
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
                Password (min 8 chars)
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
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
              {loading ? "Creating user..." : "Create User"}
            </button>
          </form>

          <p className="mt-6 text-sm text-text-secondary">
            Already have an account?{" "}
            <Link href="/admin/login" className="text-accent-cyan font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
