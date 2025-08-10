"use client";

import { useState } from "react";

export default function SupportPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);

  const repoUrl = "https://github.com/pradipchaudhary/jobfindingai";
  const supportEmail = "support@jobfindingai.app";

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Network error");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Support </h1>
        <p className="mt-2 text-sm text-slate-600">
          Need help? Fill out the form below or contact us directly.
        </p>
      </header>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border p-2"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border p-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border p-2"
              placeholder="Bug report / Feature request / Question"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-1 block w-full rounded-md border p-2"
              placeholder="Describe your issue or request"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              onClick={() => {
                setForm({ name: "", email: "", subject: "", message: "" });
                setStatus(null);
              }}
              className="inline-flex items-center px-3 py-2 rounded-lg border"
            >
              Reset
            </button>
          </div>
          {status === "success" && (
            <p className="text-sm text-green-600">Message sent — we'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">Something went wrong. Try again later.</p>
          )}
        </form>

        
      </div>
    </div>
  );
}
