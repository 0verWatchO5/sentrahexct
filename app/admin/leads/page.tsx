"use client";

import { useEffect, useMemo, useState } from "react";

type Lead = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "in-progress" | "closed";
  createdAt: string;
};

type ServiceRequest = {
  _id: string;
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  details: string;
  status:
    | "submitted"
    | "reviewing"
    | "quoted"
    | "approved"
    | "rejected"
    | "closed";
  createdAt: string;
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const [leadsRes, requestsRes] = await Promise.all([
        fetch("/api/admin/leads", { cache: "no-store" }),
        fetch("/api/admin/service-requests", { cache: "no-store" }),
      ]);

      const leadsData = await leadsRes.json();
      const requestsData = await requestsRes.json();

      if (!leadsRes.ok || !requestsRes.ok) {
        throw new Error("Unable to load admin data.");
      }

      setLeads(leadsData.leads || []);
      setServiceRequests(requestsData.serviceRequests || []);
    } catch {
      setError("Failed to load admin data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
  }, []);

  const leadCounts = useMemo(() => {
    return {
      total: leads.length,
      active: leads.filter((lead) => lead.status !== "closed").length,
      new: leads.filter((lead) => lead.status === "new").length,
      requests: serviceRequests.length,
    };
  }, [leads, serviceRequests]);

  const updateLeadStatus = async (id: string, status: Lead["status"]) => {
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setLeads((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status } : item)),
      );
    }
  };

  const updateServiceRequestStatus = async (
    id: string,
    status: ServiceRequest["status"],
  ) => {
    const res = await fetch("/api/admin/service-requests", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setServiceRequests((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status } : item)),
      );
    }
  };

  return (
    <section className="section-padding bg-background pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-3">
            Admin
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">Lead Dashboard</h1>
          <p className="mt-3 text-text-secondary">
            Manage contact leads and service requests with a status-based workflow.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard label="Total Leads" value={leadCounts.total} />
          <StatCard label="New Leads" value={leadCounts.new} />
          <StatCard label="Open Leads" value={leadCounts.active} />
          <StatCard label="Service Requests" value={leadCounts.requests} />
        </div>

        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 mb-6">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="rounded-2xl border border-border bg-surface p-6 text-text-secondary">
            Loading dashboard data...
          </div>
        ) : (
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="border-b border-border px-6 py-4">
                <h2 className="text-lg font-semibold text-text-primary">Contact Leads</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-surface-alt text-left text-text-secondary">
                    <tr>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.length === 0 ? (
                      <tr>
                        <td className="px-4 py-6 text-text-muted" colSpan={5}>
                          No leads yet.
                        </td>
                      </tr>
                    ) : (
                      leads.map((lead) => (
                        <tr key={lead._id} className="border-t border-border/70 align-top">
                          <td className="px-4 py-3 text-text-primary font-medium">{lead.name}</td>
                          <td className="px-4 py-3 text-text-secondary">{lead.email}</td>
                          <td className="px-4 py-3 text-text-secondary max-w-xs">{lead.subject}</td>
                          <td className="px-4 py-3">
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                void updateLeadStatus(
                                  lead._id,
                                  e.target.value as Lead["status"],
                                )
                              }
                              className="rounded-lg border border-border bg-white px-3 py-1.5"
                            >
                              <option value="new">new</option>
                              <option value="in-progress">in-progress</option>
                              <option value="closed">closed</option>
                            </select>
                          </td>
                          <td className="px-4 py-3 text-text-muted">
                            {new Date(lead.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="border-b border-border px-6 py-4">
                <h2 className="text-lg font-semibold text-text-primary">Service Requests</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-surface-alt text-left text-text-secondary">
                    <tr>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceRequests.length === 0 ? (
                      <tr>
                        <td className="px-4 py-6 text-text-muted" colSpan={5}>
                          No service requests yet.
                        </td>
                      </tr>
                    ) : (
                      serviceRequests.map((request) => (
                        <tr key={request._id} className="border-t border-border/70 align-top">
                          <td className="px-4 py-3 text-text-primary font-medium">{request.name}</td>
                          <td className="px-4 py-3 text-text-secondary">{request.email}</td>
                          <td className="px-4 py-3 text-text-secondary">{request.serviceType}</td>
                          <td className="px-4 py-3">
                            <select
                              value={request.status}
                              onChange={(e) =>
                                void updateServiceRequestStatus(
                                  request._id,
                                  e.target.value as ServiceRequest["status"],
                                )
                              }
                              className="rounded-lg border border-border bg-white px-3 py-1.5"
                            >
                              <option value="submitted">submitted</option>
                              <option value="reviewing">reviewing</option>
                              <option value="quoted">quoted</option>
                              <option value="approved">approved</option>
                              <option value="rejected">rejected</option>
                              <option value="closed">closed</option>
                            </select>
                          </td>
                          <td className="px-4 py-3 text-text-muted">
                            {new Date(request.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="text-xs uppercase tracking-[0.15em] text-text-muted">{label}</div>
      <div className="mt-2 text-2xl font-bold text-text-primary">{value}</div>
    </div>
  );
}
