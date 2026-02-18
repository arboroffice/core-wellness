import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const steps = [
  {
    num: "01",
    title: "Explore",
    desc: "Browse our curated catalog of premium research-grade peptides and compounds.",
  },
  {
    num: "02",
    title: "Inquire",
    desc: "Connect with our team to discuss specifications, purity documentation, and availability.",
  },
  {
    num: "03",
    title: "Receive",
    desc: "Your order is prepared with pharmaceutical-grade precision and shipped with care.",
  },
];

const testimonials = [
  {
    quote:
      "The purity and consistency of Core Wellness compounds is unmatched. Our lab has relied on them exclusively.",
    name: "Dr. S. Mitchell",
    title: "Research Director",
  },
  {
    quote:
      "Finally, a supplier that treats research compounds with the quality standards they deserve. Exceptional.",
    name: "James R.",
    title: "Verified Researcher",
  },
  {
    quote:
      "The attention to detail — from COA documentation to packaging — is unlike anything I've experienced.",
    name: "Dr. O. Kim",
    title: "Laboratory Associate",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-cream overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Premium Research Peptides
          </p>
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Redefine Your
            <br />
            <em className="italic">Research</em>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-charcoal/60 font-light leading-relaxed max-w-lg mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Premium research-grade peptides and compounds, crafted with
            pharmaceutical precision for those who demand excellence.
          </p>
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Link href="/products" className="btn-primary transform hover:scale-105 transition-transform duration-300">
              Explore Compounds
            </Link>
            <Link href="/how-it-works" className="btn-outline transform hover:scale-105 transition-transform duration-300">
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
            Core Wellness delivers research-grade peptides and compounds with
            uncompromising purity. Every product is third-party tested,
            accompanied by full certificates of analysis, and crafted for
            researchers who accept nothing less than the best.
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
              Research Compounds
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              name="GLP-3"
              subtitle="10mg/ml · Injectable"
              price="Inquire for Availability"
              href="/products/glp-3"
              image="/images/glp-3.png"
            />
            <ProductCard
              name="GLP-2"
              subtitle="10mg/ml · Injectable"
              price="Inquire for Availability"
              href="/products/glp-2"
              image="/images/glp-2.png"
            />
            <ProductCard
              name="Lipo in a Bottle"
              subtitle="Injectable Compound"
              price="Inquire for Availability"
              href="/products/lipo-in-a-bottle"
              image="/images/lipo-in-a-bottle.png"
            />
          </div>
          <p className="text-center text-xs text-charcoal/40 mt-8 tracking-wide">
            All products are sold strictly for research purposes only. Not for
            human consumption.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              The Process
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
              Trusted by Researchers
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

      {/* CTA */}
      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Ready?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            Elevate Your Research
          </h2>
          <p className="mt-6 text-white/50 leading-relaxed">
            Explore our catalog of premium research-grade compounds. Our team is
            ready to assist with specifications and availability.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
