import { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin your wellness journey. Schedule a consultation with Core Wellness.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Your journey begins with a conversation. We're here to guide you."
      />

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Schedule a Consultation
              </p>
              <h2 className="font-serif text-3xl font-light">
                Let&apos;s Start Your Journey
              </h2>
              <div className="w-16 h-[1px] bg-gold my-6" />
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Fill out the form and one of our wellness specialists will reach
                out within 24 hours to schedule your complimentary consultation.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Email", value: "hello@corewellness.com" },
                  { label: "Phone", value: "(555) 000-0000" },
                  { label: "Hours", value: "Mon–Fri, 9am–6pm CST" },
                ].map((c) => (
                  <div key={c.label}>
                    <p className="text-xs tracking-[0.15em] uppercase text-gold">
                      {c.label}
                    </p>
                    <p className="text-charcoal/70 mt-1">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
