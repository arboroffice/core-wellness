import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <Hero title="Privacy Policy" subtitle="Last updated: January 2025" />
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto prose-sm">
          {[
            {
              title: "Information We Collect",
              text: "We collect personal information you provide directly, including name, email address, phone number, health information shared during consultations, and payment information. We also automatically collect device and usage data when you visit our website.",
            },
            {
              title: "How We Use Your Information",
              text: "Your information is used to provide and improve our services, process orders, facilitate medical consultations, communicate about your wellness journey, and comply with legal obligations. We never sell your personal health information to third parties.",
            },
            {
              title: "Data Security",
              text: "We implement industry-standard security measures to protect your personal and health information, including encryption, secure servers, and strict access controls. All medical information is handled in compliance with applicable healthcare privacy regulations.",
            },
            {
              title: "Your Rights",
              text: "You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time. To exercise these rights, contact us at hello@corewellness.com.",
            },
            {
              title: "Cookies",
              text: "Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.",
            },
            {
              title: "Third-Party Services",
              text: "We may share information with trusted third-party service providers who assist in operating our business, including payment processors, shipping partners, and healthcare providers. All partners are bound by confidentiality agreements.",
            },
            {
              title: "Contact",
              text: "For privacy-related inquiries, contact us at hello@corewellness.com or write to Core Wellness, Privacy Department.",
            },
          ].map((s) => (
            <div key={s.title} className="mb-10">
              <h2 className="font-serif text-xl mb-3">{s.title}</h2>
              <p className="text-charcoal/60 leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
