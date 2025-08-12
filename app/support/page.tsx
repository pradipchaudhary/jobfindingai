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
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Support</h1>
          <p className="text-gray-600">Get in touch with our team</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition-colors resize-none"
              placeholder="Tell us more about your request..."
            />
          </div>

          {/* Buttons */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-4 py-3 bg-black text-white rounded-md hover:bg-gray-900 disabled:opacity-50 transition-colors font-medium"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="text-center text-green-600 text-sm">
              Message sent successfully. We'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="text-center text-red-600 text-sm">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
