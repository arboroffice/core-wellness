import { Metadata } from "next";
import Hero from "@/components/Hero";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Core Wellness research compounds.",
};

const faqs = [
  {
    question: "What are your products used for?",
    answer: "All Core Wellness products are sold strictly for research purposes only. They are intended for in-vitro research, educational, and scientific applications. They are not intended for human consumption, veterinary use, or any diagnostic purposes.",
  },
  {
    question: "What products do you offer?",
    answer: "We currently offer GLP-3 (10mg/ml injectable), GLP-2 (10mg/ml injectable), and Lipo in a Bottle (injectable compound). All products are research-grade and accompanied by certificates of analysis.",
  },
  {
    question: "What is the purity of your compounds?",
    answer: "Our peptide compounds are synthesized to ≥98% purity, verified by independent HPLC analysis. Each batch undergoes comprehensive third-party testing including mass spectrometry, endotoxin testing, and sterility verification.",
  },
  {
    question: "Do you provide certificates of analysis?",
    answer: "Yes. Every order includes a full Certificate of Analysis (COA) with HPLC purity data, identity confirmation, and sterility results. Additional batch documentation is available upon request.",
  },
  {
    question: "How do I place an order?",
    answer: "Contact our team via the inquiry form. We'll confirm availability, provide specifications, and process your order. All purchasers must confirm they are 18+ and agree to research-use-only terms.",
  },
  {
    question: "Is there an age requirement to purchase?",
    answer: "Yes. All purchasers must be 18 years of age or older. Age verification is required at the time of purchase.",
  },
  {
    question: "How are products shipped?",
    answer: "All orders are shipped in temperature-controlled, insulated packaging to maintain compound integrity. Shipping is discreet with no external product branding. Priority shipping is available.",
  },
  {
    question: "How should I store the products?",
    answer: "Store unopened vials in a refrigerator at 2-8°C (36-46°F). Protect from light and avoid freezing. Specific storage guidelines are included with each product's COA documentation.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, Core Wellness ships within the United States. International availability is under development. Contact us for the latest shipping information.",
  },
  {
    question: "What is your return policy?",
    answer: "Due to the nature of our products, we cannot accept returns on opened or temperature-compromised items. If there is an issue with your order, contact our team and we will work to resolve it promptly.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        title="Frequently Asked"
        subtitle="Everything you need to know about Core Wellness research compounds."
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
          <p className="text-xs text-charcoal/40 mt-12 text-center leading-relaxed">
            All products are sold strictly for research purposes only. Not for
            human consumption. Must be 18+ to purchase.
          </p>
        </div>
      </section>
    </>
  );
}
