import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "Understanding GLP peptides — the science behind Core Wellness peptide therapy.",
};

export default function SciencePage() {
  return (
    <>
      <Hero
        title="The Science"
        subtitle="Rigorous research. Pharmaceutical precision. Proven mechanisms."
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Understanding Peptides
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            What Are GLP Peptides?
          </h2>
          <div className="w-16 h-[1px] bg-gold my-6" />
          <div className="space-y-6 text-charcoal/60 leading-relaxed">
            <p>
              Glucagon-like peptides (GLPs) are naturally occurring hormones that
              play a crucial role in metabolic regulation. These signaling
              molecules communicate with your body&apos;s systems to support
              healthy metabolic function, appetite regulation, and cellular
              wellness.
            </p>
            <p>
              GLP-3 represents the next evolution in peptide science.
              Pharmaceutical-grade GLP-3 peptides work with your body&apos;s
              natural pathways to optimize metabolic function, supporting your
              wellness goals through precise, science-backed mechanisms.
            </p>
            <p>
              At Core Wellness, our formulations are synthesized to the highest
              pharmaceutical standards, ensuring purity, potency, and
              consistency in every vial.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Mechanisms
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              How It Works in Your Body
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Metabolic Optimization",
                desc: "GLP-3 peptides interact with metabolic receptors to support healthy glucose metabolism and energy utilization, promoting efficient metabolic function.",
              },
              {
                title: "Appetite Regulation",
                desc: "By working with your body's natural satiety signals, GLP-3 supports healthy appetite patterns without the crash associated with restrictive approaches.",
              },
              {
                title: "Cellular Wellness",
                desc: "Emerging research suggests GLP peptides may support cellular health and regeneration, contributing to overall vitality and wellness longevity.",
              },
              {
                title: "Body Composition",
                desc: "Clinical observations indicate that GLP-3 therapy, combined with lifestyle optimization, can support healthy body composition changes over time.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-8">
                <h3 className="font-serif text-xl text-gold">{item.title}</h3>
                <p className="text-sm text-charcoal/60 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Research & Quality
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Our Standards
          </h2>
          <div className="w-16 h-[1px] bg-gold my-6" />
          <div className="space-y-8">
            {[
              {
                title: "Pharmaceutical-Grade Purity",
                desc: "Every batch is synthesized in cGMP-compliant facilities and undergoes rigorous third-party testing for purity, potency, and sterility.",
              },
              {
                title: "Clinical Research Foundation",
                desc: "Our formulations are informed by peer-reviewed research on GLP peptides, ensuring our protocols reflect the latest scientific understanding.",
              },
              {
                title: "Medical Oversight",
                desc: "All protocols are designed and supervised by licensed healthcare providers with expertise in peptide therapy and metabolic wellness.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="pb-8 border-b border-gold-light/30 last:border-0"
              >
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            Science You Can Trust
          </h2>
          <p className="mt-4 text-white/50">
            Have questions about our research or formulations? Our team is here
            to help.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Ask Our Specialists
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
