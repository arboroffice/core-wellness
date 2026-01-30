"use client";

import Link from "next/link";
import Accordion from "@/components/Accordion";

const specs = [
  "Concentration: 10mg/ml",
  "Format: Injectable solution",
  "Purity: ≥98% (HPLC verified)",
  "Third-party tested",
  "Certificate of Analysis included",
  "Sterile filtered",
];

const faqItems = [
  {
    question: "What is the purity of this compound?",
    answer:
      "Our GLP-3 is synthesized to ≥98% purity, verified by HPLC analysis. Every batch is accompanied by a full Certificate of Analysis (COA) documenting purity, identity, and sterility testing results.",
  },
  {
    question: "How should this product be stored?",
    answer:
      "Store unopened vials in a refrigerator at 2-8°C (36-46°F). Protect from light and avoid freezing. Once opened, maintain refrigeration and use within the timeframe specified on the COA.",
  },
  {
    question: "What documentation is provided?",
    answer:
      "Each order includes a Certificate of Analysis (COA) with HPLC purity data, mass spectrometry confirmation, endotoxin testing, and sterility verification. Additional documentation available upon request.",
  },
  {
    question: "What is the intended use?",
    answer:
      "This product is sold strictly for research purposes only. It is intended for in-vitro research, educational, and scientific applications. Not for human consumption.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Contact our team through the inquiry form or email. We'll confirm availability, provide current specifications, and process your research order. All purchasers must confirm they are 18+ and agree to research-use-only terms.",
  },
];

export default function GLP3Page() {
  return (
    <>
      {/* Product Hero */}
      <section className="pt-28 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
              <img
                src="/images/vial-single.jpg"
                alt="GLP-3 10mg/ml Research Peptide"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Research Peptide
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-light">
                GLP-3
              </h1>
              <p className="text-lg text-charcoal/50 mt-2">10mg/ml · Injectable</p>
              <div className="w-16 h-[1px] bg-gold my-6" />
              <p className="text-charcoal/60 leading-relaxed mb-6">
                Our flagship research-grade GLP-3 peptide, precision-dosed at
                10mg/ml. Synthesized under strict quality controls with ≥98%
                purity verified by independent HPLC analysis.
              </p>

              <div className="space-y-3 mb-8">
                {specs.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-sm text-charcoal/70">{s}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/checkout?product=glp-3" className="btn-primary text-center">
                  Buy Now — $149
                </Link>
                <Link href="/science" className="btn-outline text-center">
                  View Research
                </Link>
              </div>

              <p className="text-xs text-charcoal/40 mt-6">
                For research purposes only. Not for human consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Product Details
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Specifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Compound",
                value: "GLP-3 Peptide",
                detail: "Glucagon-Like Peptide-3",
              },
              {
                label: "Concentration",
                value: "10mg/ml",
                detail: "Precision-dosed injectable solution",
              },
              {
                label: "Purity",
                value: "≥98%",
                detail: "HPLC verified, third-party tested",
              },
            ].map((s) => (
              <div key={s.label} className="card-glass p-8 text-center">
                <p className="text-xs tracking-[0.15em] uppercase text-gold">
                  {s.label}
                </p>
                <p className="font-serif text-2xl mt-2">{s.value}</p>
                <p className="text-xs text-charcoal/50 mt-2">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Frequently Asked
            </h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            Interested in This Compound?
          </h2>
          <p className="mt-4 text-white/50">
            Contact our team for availability, pricing, and COA documentation.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
