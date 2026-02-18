"use client";

import Link from "next/link";
import Accordion from "@/components/Accordion";

const specs = [
  "Format: Injectable compound",
  "Lipotropic research blend",
  "Purity: Pharmaceutical-grade",
  "Third-party tested",
  "Certificate of Analysis included",
  "Sterile filtered",
];

const faqItems = [
  {
    question: "What is Lipo in a Bottle?",
    answer:
      "Lipo in a Bottle is a proprietary injectable research compound formulated with lipotropic agents. It is designed for scientific study of lipotropic mechanisms and fat metabolism pathways in controlled research settings.",
  },
  {
    question: "What is the purity and quality standard?",
    answer:
      "Lipo in a Bottle is manufactured to pharmaceutical-grade standards with rigorous quality controls. Each batch undergoes third-party testing for purity, potency, and sterility. A full Certificate of Analysis is provided.",
  },
  {
    question: "How should this product be stored?",
    answer:
      "Store in a refrigerator at 2-8°C (36-46°F). Protect from light and avoid freezing. Refer to the included documentation for specific storage guidelines.",
  },
  {
    question: "What documentation is provided?",
    answer:
      "Each order includes a Certificate of Analysis with complete analytical data. Additional compound specifications and research references available upon request.",
  },
  {
    question: "What is the intended use?",
    answer:
      "This product is sold strictly for research purposes only. It is intended for in-vitro research, educational, and scientific applications. Not for human consumption.",
  },
];

export default function LipoPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
              <img
                src="/images/lipo-in-a-bottle.png"
                alt="Lipo in a Bottle Research Compound"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Research Compound
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-light">
                Lipo in a Bottle
              </h1>
              <p className="text-lg text-charcoal/50 mt-2">Injectable Compound</p>
              <div className="w-16 h-[1px] bg-gold my-6" />
              <p className="text-charcoal/60 leading-relaxed mb-6">
                A proprietary lipotropic research compound formulated for
                scientific investigation. Manufactured to pharmaceutical-grade
                standards with comprehensive analytical documentation.
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
                <Link href="/checkout?product=lipo-in-a-bottle" className="btn-primary text-center">
                  Buy Now — $99
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
                value: "Lipotropic Blend",
                detail: "Proprietary research formulation",
              },
              {
                label: "Format",
                value: "Injectable",
                detail: "Ready-to-use research solution",
              },
              {
                label: "Quality",
                value: "Pharma-Grade",
                detail: "Third-party tested & verified",
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
