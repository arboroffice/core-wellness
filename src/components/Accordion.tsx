"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gold-light/30">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span className="font-serif text-lg pr-8">{item.question}</span>
            <span
              className={`text-gold text-2xl transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openIndex === i ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-charcoal/60 leading-relaxed text-sm">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
