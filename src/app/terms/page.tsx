import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <Hero title="Terms of Service" subtitle="Last updated: January 2025" />
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          {[
            {
              title: "Acceptance of Terms",
              text: "By accessing or using the Core Wellness website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
            },
            {
              title: "Eligibility",
              text: "You must be at least 18 years of age to purchase from Core Wellness. By placing an order, you confirm you meet this requirement and that all products will be used strictly for research purposes only.",
            },
            {
              title: "Research Use Only",
              text: "All products sold by Core Wellness are for research purposes only. They are not intended for human consumption, veterinary use, therapeutic use, or any diagnostic purpose. Buyers agree to use products solely for legitimate scientific, educational, or in-vitro research applications.",
            },
            {
              title: "Products & Availability",
              text: "Core Wellness provides research-grade peptides and compounds. Product availability, specifications, and formulations are subject to change without notice. All orders are subject to availability confirmation.",
            },
            {
              title: "Intellectual Property",
              text: "All content on this website, including text, images, logos, and design, is the property of Core Wellness and is protected by copyright and trademark laws. Unauthorized use is prohibited.",
            },
            {
              title: "Limitation of Liability",
              text: "Core Wellness shall not be liable for any indirect, incidental, or consequential damages arising from the use or misuse of our products. Our total liability is limited to the amount paid for the specific product in question.",
            },
            {
              title: "Governing Law",
              text: "These terms are governed by the laws of the United States. Any disputes shall be resolved in the appropriate courts of our principal place of business.",
            },
            {
              title: "Contact",
              text: "For questions about these terms, contact us at hello@corewellness.com.",
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
