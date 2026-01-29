"use client";

import { useState } from "react";

export default function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal/95 backdrop-blur-md text-white/70 px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs leading-relaxed text-center sm:text-left">
          <span className="text-gold font-medium">Medical Disclaimer:</span>{" "}
          All products require a valid prescription. Core Wellness products are
          not intended to diagnose, treat, cure, or prevent any disease. Always
          consult a licensed healthcare provider.
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="text-xs tracking-wider uppercase text-gold hover:text-gold-light transition-colors shrink-0"
        >
          Understood
        </button>
      </div>
    </div>
  );
}
