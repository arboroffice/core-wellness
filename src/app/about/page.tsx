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
            <div className="aspect-[3/4] bg-cream-dark flex items-center justify-center">
              <span className="font-serif text-8xl text-gold/20">CW</span>
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

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Meet The Team
          </h2>
          <div className="gold-divider" />
          <div className="max-w-sm mx-auto mt-8">
            <div className="aspect-square bg-cream-dark rounded-full w-48 h-48 mx-auto flex items-center justify-center mb-6">
              <span className="font-serif text-4xl text-gold/30">M</span>
            </div>
            <h3 className="font-serif text-xl">Mia</h3>
            <p className="text-sm text-gold tracking-wider uppercase mt-1">
              Founder & CEO
            </p>
            <p className="text-sm text-charcoal/60 mt-4 leading-relaxed">
              Driven by a commitment to quality and transparency, Mia founded
              Core Wellness to bring pharmaceutical-grade precision to the
              research compound market — with an aesthetic standard to match.
            </p>
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
