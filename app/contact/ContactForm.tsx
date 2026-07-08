"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-center text-green-400">
        Thank you! Your message has been sent.
      </p>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="text"
        placeholder="Your name"
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
      />

      <input
        type="email"
        placeholder="Your email"
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
      />

      <textarea
        placeholder="Your message"
        rows={5}
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        Send Message
      </button>
    </form>
  );
}