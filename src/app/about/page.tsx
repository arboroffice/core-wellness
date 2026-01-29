import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Core Wellness — where science meets luxury in peptide wellness.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Born from a belief that wellness should be as refined as the science behind it."
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                Science Meets Luxury
              </h2>
              <div className="w-16 h-[1px] bg-gold my-6" />
              <p className="text-charcoal/60 leading-relaxed mb-4">
                Core Wellness was founded on a simple premise: the most advanced
                wellness solutions deserve the most elevated experience.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-4">
                We believe that optimizing your health shouldn&apos;t feel
                clinical. It should feel intentional, luxurious, and deeply
                personal. Every touchpoint — from your first consultation to the
                moment you open your carefully packaged peptides — is designed
                with care.
              </p>
              <p className="text-charcoal/60 leading-relaxed">
                Our pharmaceutical-grade GLP-3 peptides represent the pinnacle
                of modern wellness science, delivered with the elegance you
                deserve.
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
            Our Mission
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Elevating Every Journey
          </h2>
          <div className="gold-divider" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Purity",
                desc: "Every batch is tested to pharmaceutical standards. No compromises.",
              },
              {
                title: "Precision",
                desc: "Personalized protocols designed for your unique biology and goals.",
              },
              {
                title: "Privacy",
                desc: "Discreet, secure, and confidential — from consultation to delivery.",
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

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Leadership
          </p>
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
              Driven by a passion for accessible, elevated wellness, Mia founded
              Core Wellness to bridge the gap between cutting-edge peptide
              science and the luxury experience modern clients expect.
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
              Begin Your Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
