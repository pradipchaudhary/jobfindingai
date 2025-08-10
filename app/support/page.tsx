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
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Support</h1>
        <p className="mt-2 text-sm text-gray-500">
          Need help? Fill out the form below or contact us directly.
        </p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring-1 focus:ring-black"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring-1 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring-1 focus:ring-black"
              placeholder="Bug report / Feature request / Question"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:ring-1 focus:ring-black"
              placeholder="Describe your issue or request"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-black text-white font-medium shadow-sm hover:bg-gray-800 disabled:opacity-60 transition-colors"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              onClick={() => {
                setForm({ name: "", email: "", subject: "", message: "" });
                setStatus(null);
              }}
              className="inline-flex items-center px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
          {status === "success" && (
            <p className="text-sm text-green-600">✅ Message sent — we'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">❌ Something went wrong. Try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
}
