import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const steps = [
  {
    num: "01",
    title: "Consult",
    desc: "Begin with a confidential consultation with our wellness specialists.",
  },
  {
    num: "02",
    title: "Customize",
    desc: "Receive a personalized protocol tailored to your unique biology.",
  },
  {
    num: "03",
    title: "Transform",
    desc: "Experience the difference with pharmaceutical-grade peptide therapy.",
  },
];

const testimonials = [
  {
    quote:
      "Core Wellness changed my relationship with my body. The results speak for themselves.",
    name: "Sarah M.",
    title: "Verified Client",
  },
  {
    quote:
      "Finally, a wellness brand that treats me like a person, not a patient. Exceptional quality.",
    name: "James R.",
    title: "Verified Client",
  },
  {
    quote:
      "The attention to detail — from consultation to delivery — is unlike anything I've experienced.",
    name: "Olivia K.",
    title: "Verified Client",
  },
];

const press = ["Vogue", "Forbes", "Elle", "GQ", "Byrdie"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-cream">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Luxury Peptide Wellness
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]">
            Redefine Your
            <br />
            <em className="italic">Wellness</em>
          </h1>
          <p className="mt-8 text-base md:text-lg text-charcoal/60 font-light leading-relaxed max-w-lg mx-auto">
            Premium GLP-3 peptide therapy, crafted for those who demand
            excellence in every aspect of their wellbeing.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link href="/how-it-works" className="btn-outline">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-hero intro */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            The Core Difference
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light">
            Where Science Meets Luxury
          </h2>
          <div className="gold-divider" />
          <p className="text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
            Core Wellness brings pharmaceutical-grade GLP-3 peptides to the
            modern wellness experience. Our formulations are designed with
            precision, delivered with care, and crafted for those who understand
            that true wellness is an investment in yourself.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Our Collection
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light">
              Curated For You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              name="GLP-3 5mg/ml"
              subtitle="Signature Formula"
              price="Contact for Pricing"
              href="/products/glp-3"
              image="/images/vial-single.jpg"
            />
            <ProductCard
              name="GLP-3 Starter Kit"
              subtitle="Complete Wellness Set"
              price="Contact for Pricing"
              href="/products/glp-3"
              image="/images/packaging-flatlay.jpg"
            />
            <ProductCard
              name="Premium Protocol"
              subtitle="3-Month Program"
              price="By Consultation"
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Your Journey
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light">
              Three Simple Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <span className="text-5xl font-serif text-gold/30">
                  {s.num}
                </span>
                <h3 className="font-serif text-xl mt-4">{s.title}</h3>
                <div className="gold-divider !my-4" />
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card-glass p-8 text-center">
                <p className="text-gold text-3xl font-serif mb-4">&ldquo;</p>
                <p className="text-sm text-charcoal/70 leading-relaxed italic">
                  {t.quote}
                </p>
                <div className="gold-divider !my-6" />
                <p className="font-serif text-sm">{t.name}</p>
                <p className="text-xs text-charcoal/40 mt-1">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-charcoal/30 mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {press.map((p) => (
              <span
                key={p}
                className="font-serif text-2xl text-charcoal/15 tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Ready?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            Begin Your Journey
          </h2>
          <p className="mt-6 text-white/50 leading-relaxed">
            Take the first step toward optimized wellness. Our team is ready to
            craft your personalized protocol.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
