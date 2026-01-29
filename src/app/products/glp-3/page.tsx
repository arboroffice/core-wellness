"use client";

import Link from "next/link";
import Accordion from "@/components/Accordion";

const benefits = [
  "Supports metabolic optimization",
  "Promotes healthy body composition",
  "Enhances cellular wellness",
  "Pharmaceutical-grade purity",
  "Precision-dosed at 5mg/ml",
  "Third-party tested",
];

const faqItems = [
  {
    question: "How is GLP-3 administered?",
    answer:
      "GLP-3 is administered via subcutaneous injection. Our team provides comprehensive guidance during your consultation, including injection technique, site rotation, and best practices for optimal results.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Results vary by individual. Most clients report noticeable improvements in wellness markers within 4-8 weeks of consistent use. Your personalized protocol is designed to optimize outcomes for your unique biology.",
  },
  {
    question: "Is a prescription required?",
    answer:
      "Yes. All Core Wellness peptide products require a valid prescription from a licensed healthcare provider. Our consultation process includes a medical review to ensure safety and appropriateness.",
  },
  {
    question: "How should I store my peptides?",
    answer:
      "Unopened vials should be stored in a refrigerator (2-8°C / 36-46°F). Once reconstituted, keep refrigerated and use within 28 days. Protect from light and avoid freezing.",
  },
  {
    question: "What is the recommended dosage?",
    answer:
      "Dosage is personalized during your consultation based on your health profile, goals, and medical history. Our specialists will create a tailored protocol just for you.",
  },
];

export default function GLP3Page() {
  return (
    <>
      {/* Product Hero */}
      <section className="pt-28 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="aspect-square bg-white flex items-center justify-center">
              <img
                src="/images/vial-single.jpg"
                alt="GLP-3 5mg/ml Vial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Signature Formula
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-light">
                GLP-3 5mg/ml
              </h1>
              <div className="w-16 h-[1px] bg-gold my-6" />
              <p className="text-charcoal/60 leading-relaxed mb-6">
                Our flagship peptide formulation, precision-dosed at 5mg/ml for
                optimal bioavailability. Pharmaceutical-grade purity meets
                elegant design in every vial.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-sm text-charcoal/70">{b}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg font-serif text-gold mb-6">
                Contact for Pricing
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Order Now
                </Link>
                <Link
                  href="/how-it-works"
                  className="btn-outline text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Usage Guide
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              How to Use
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Prepare",
                desc: "Allow vial to reach room temperature. Clean injection site with alcohol swab.",
              },
              {
                step: "02",
                title: "Administer",
                desc: "Follow your prescribed dosage via subcutaneous injection. Rotate injection sites.",
              },
              {
                step: "03",
                title: "Store",
                desc: "Return vial to refrigerator. Log your dose and note any observations.",
              },
            ].map((s) => (
              <div key={s.step} className="card-glass p-8 text-center">
                <span className="text-4xl font-serif text-gold/30">
                  {s.step}
                </span>
                <h3 className="font-serif text-lg mt-3">{s.title}</h3>
                <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">
                  {s.desc}
                </p>
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
            Ready to Begin?
          </h2>
          <p className="mt-4 text-white/50">
            Start your personalized wellness journey today.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
