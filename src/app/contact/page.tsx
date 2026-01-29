import { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Inquire about Core Wellness research compounds. Get specifications, availability, and COA documentation.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Our team is here to assist with product inquiries, specifications, and availability."
      />

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Inquiries
              </p>
              <h2 className="font-serif text-3xl font-light">
                How Can We Help?
              </h2>
              <div className="w-16 h-[1px] bg-gold my-6" />
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Whether you need product specifications, certificates of
                analysis, or want to discuss availability — our team responds
                within 24 hours.
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

              <p className="text-xs text-charcoal/40 mt-8 leading-relaxed">
                All products are sold for research purposes only. Not for human
                consumption. Must be 18+ to purchase.
              </p>
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
