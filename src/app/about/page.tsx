import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Core Wellness — premium research-grade peptides and compounds.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Born from a belief that research-grade compounds deserve an elevated standard."
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                Precision Meets Excellence
              </h2>
              <div className="w-16 h-[1px] bg-gold my-6" />
              <p className="text-charcoal/60 leading-relaxed mb-4">
                Core Wellness was founded on a simple premise: research-grade
                compounds should meet the highest standards of purity, quality,
                and presentation.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-4">
                We believe the research community deserves suppliers who treat
                every compound with pharmaceutical precision — from synthesis and
                testing to documentation and delivery. Every touchpoint reflects
                our commitment to excellence.
              </p>
              <p className="text-charcoal/60 leading-relaxed">
                Our catalog features premium peptides and compounds, each
                third-party tested and accompanied by comprehensive certificates
                of analysis. This is research supply, elevated.
              </p>
            </div>
            <div className="aspect-[3/4] bg-cream-dark flex items-center justify-center overflow-hidden">
              <img
                src="/images/glp-2.png"
                alt="Core Wellness Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Our Standards
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            What Sets Us Apart
          </h2>
          <div className="gold-divider" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Purity",
                desc: "Every batch is synthesized to ≥98% purity and verified through independent HPLC analysis.",
              },
              {
                title: "Documentation",
                desc: "Full certificates of analysis included with every order. Transparent, verifiable quality.",
              },
              {
                title: "Integrity",
                desc: "Cold-chain shipping, sterile packaging, and meticulous handling from lab to delivery.",
              },
            ].map((v) => (
              <div key={v.title} className="card-glass p-8">
                <h3 className="font-serif text-xl text-gold">{v.title}</h3>
                <p className="text-sm text-charcoal/60 mt-3 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            Ready to Experience the Difference?
          </h2>
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
