"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="gold-divider" />
        <h3 className="font-serif text-2xl mt-4">Thank You</h3>
        <p className="text-charcoal/60 mt-2">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="max-w-lg mx-auto space-y-6"
    >
      {[
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email Address", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
      ].map((f) => (
        <div key={f.name}>
          <label className="block text-xs tracking-[0.15em] uppercase text-charcoal/60 mb-2">
            {f.label}
          </label>
          <input
            type={f.type}
            name={f.name}
            required
            className="w-full px-4 py-3 bg-white border border-gold-light/40 focus:border-gold outline-none transition-colors text-sm"
          />
        </div>
      ))}
      <div>
        <label className="block text-xs tracking-[0.15em] uppercase text-charcoal/60 mb-2">
          How Can We Help?
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-white border border-gold-light/40 focus:border-gold outline-none transition-colors text-sm resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full text-center">
        Schedule Consultation
      </button>
    </form>
  );
}
