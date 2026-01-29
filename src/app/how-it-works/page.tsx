import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From consultation to transformation — discover the Core Wellness process.",
};

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Begin with a confidential consultation with our wellness specialists. We review your health history, goals, and lifestyle to determine the ideal approach.",
    detail: "Virtual or in-person · 30 minutes · Complimentary",
  },
  {
    num: "02",
    title: "Prescription",
    desc: "Our licensed medical team reviews your profile and creates a personalized peptide protocol tailored to your unique biology and wellness objectives.",
    detail: "Licensed providers · Personalized dosing · Medical oversight",
  },
  {
    num: "03",
    title: "Delivery",
    desc: "Your pharmaceutical-grade peptides are carefully prepared and shipped in temperature-controlled packaging directly to your door — discreetly and securely.",
    detail: "Cold-chain shipping · Discreet packaging · Priority delivery",
  },
  {
    num: "04",
    title: "Ongoing Support",
    desc: "Your journey doesn't end at delivery. Our team provides continuous guidance, progress monitoring, and protocol adjustments to ensure optimal results.",
    detail: "Regular check-ins · Protocol optimization · Dedicated support",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        title="How It Works"
        subtitle="A seamless journey from consultation to transformation. Four steps to optimized wellness."
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
            Your Transformation Starts Here
          </h2>
          <p className="mt-4 text-white/50">
            Join thousands who have chosen a more refined approach to wellness.
          </p>
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
