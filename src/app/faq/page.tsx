import { Metadata } from "next";
import Hero from "@/components/Hero";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Core Wellness peptide therapy.",
};

const faqs = [
  {
    question: "What are peptides?",
    answer: "Peptides are short chains of amino acids that act as signaling molecules in the body. They play crucial roles in numerous biological processes, including metabolism, immune function, and cellular communication. Our GLP-3 peptides are synthesized to pharmaceutical-grade standards for optimal purity and efficacy.",
  },
  {
    question: "Do I need a prescription?",
    answer: "Yes. All Core Wellness peptide products require a valid prescription from a licensed healthcare provider. Our consultation process includes a comprehensive medical review to ensure safety and appropriateness for your individual health profile.",
  },
  {
    question: "How do I get started?",
    answer: "Simply schedule a complimentary consultation through our contact page. A wellness specialist will review your goals and health history, and if appropriate, connect you with a licensed provider for prescription and protocol design.",
  },
  {
    question: "Is peptide therapy safe?",
    answer: "When prescribed and administered under medical supervision, peptide therapy has a well-established safety profile. Our protocols are designed by licensed healthcare providers and include ongoing monitoring. As with any medical intervention, individual responses may vary.",
  },
  {
    question: "What results can I expect?",
    answer: "Results vary based on individual biology, adherence to protocol, and lifestyle factors. Most clients begin to notice changes within 4-8 weeks. Your wellness specialist will set realistic expectations and monitor your progress throughout your journey.",
  },
  {
    question: "How is the product shipped?",
    answer: "All orders are shipped in temperature-controlled, insulated packaging to maintain product integrity. Shipping is discreet with no external branding. Priority shipping ensures your peptides arrive quickly and in optimal condition.",
  },
  {
    question: "What is the cost?",
    answer: "Pricing varies based on your personalized protocol. We believe in transparent, value-based pricing. Contact our team for detailed pricing information or schedule a consultation to discuss your options.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes. Core Wellness operates on a flexible model. You can adjust, pause, or cancel your protocol at any time by contacting our support team. No long-term contracts required.",
  },
  {
    question: "How do I store my peptides?",
    answer: "Unopened vials should be refrigerated at 2-8°C (36-46°F). Once reconstituted, keep refrigerated and use within 28 days. Avoid freezing and protect from direct light. Detailed storage instructions are included with every order.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, Core Wellness ships within the United States. International availability is in development. Contact us for the latest shipping information and to join our international waitlist.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero
        title="Frequently Asked"
        subtitle="Everything you need to know about Core Wellness and peptide therapy."
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
