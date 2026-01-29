import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From inquiry to delivery — discover how Core Wellness supplies premium research compounds.",
};

const steps = [
  {
    num: "01",
    title: "Inquire",
    desc: "Browse our catalog and reach out to our team. We'll confirm product availability, provide current specifications, and answer any questions about our compounds.",
    detail: "Email or form inquiry · Same-day response · No obligation",
  },
  {
    num: "02",
    title: "Verify",
    desc: "Review our certificates of analysis, purity documentation, and product specifications. We provide full transparency so you can verify quality before ordering.",
    detail: "COA provided · HPLC data · Third-party testing results",
  },
  {
    num: "03",
    title: "Order",
    desc: "Place your research order with confidence. All purchasers must confirm they are 18+ and agree that products will be used solely for legitimate research purposes.",
    detail: "18+ verification · Research-use agreement · Secure checkout",
  },
  {
    num: "04",
    title: "Receive",
    desc: "Your compounds are carefully prepared, packaged in temperature-controlled materials, and shipped discreetly to your laboratory or research facility.",
    detail: "Cold-chain shipping · Discreet packaging · Priority delivery",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        title="How It Works"
        subtitle="A seamless process from inquiry to delivery. Premium research compounds, simplified."
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                i !== steps.length - 1
                  ? "mb-20 pb-20 border-b border-gold-light/30"
                  : ""
              }`}
            >
              <div className="shrink-0">
                <span className="text-6xl md:text-8xl font-serif text-gold/20">
                  {s.num}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
                <p className="text-charcoal/60 leading-relaxed mt-4">
                  {s.desc}
                </p>
                <p className="text-xs tracking-[0.1em] text-gold mt-4">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white/50">
            Contact our team to discuss your research needs and compound
            availability.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
