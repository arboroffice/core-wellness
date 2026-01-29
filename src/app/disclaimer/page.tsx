import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = { title: "Medical Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <Hero
        title="Medical Disclaimer"
        subtitle="Important information about our products and services."
      />
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          {[
            {
              title: "Not Medical Advice",
              text: "The information provided on this website and through Core Wellness services is for informational and educational purposes only. It is not intended as, and should not be construed as, medical advice, diagnosis, or treatment. Always seek the guidance of a qualified healthcare provider with any questions you may have regarding a medical condition or treatment.",
            },
            {
              title: "Prescription Required",
              text: "All Core Wellness peptide products are prescription medications that must be prescribed by a licensed healthcare provider. A medical consultation and evaluation is required before any product can be dispensed. Self-administration without proper medical oversight is strongly discouraged.",
            },
            {
              title: "No Guarantees",
              text: "Individual results vary. Core Wellness makes no guarantees regarding the outcomes of peptide therapy. Results depend on numerous factors including individual biology, adherence to prescribed protocols, lifestyle choices, and pre-existing health conditions.",
            },
            {
              title: "FDA Statement",
              text: "These statements have not been evaluated by the Food and Drug Administration. Core Wellness products are not intended to diagnose, treat, cure, or prevent any disease. The efficacy of peptide therapy may vary and is subject to ongoing clinical research.",
            },
            {
              title: "Side Effects & Risks",
              text: "As with any medical intervention, peptide therapy may carry risks and potential side effects. Common side effects may include injection site reactions, nausea, and other symptoms. Discuss all potential risks with your healthcare provider before beginning any peptide protocol.",
            },
            {
              title: "Emergency Situations",
              text: "If you experience a medical emergency, call 911 or your local emergency number immediately. Do not rely on this website or Core Wellness staff for emergency medical assistance.",
            },
            {
              title: "Content Accuracy",
              text: "While we strive to keep all information current and accurate, Core Wellness does not warrant the completeness or accuracy of the information on this website. Medical science evolves continuously, and information may become outdated. Always verify information with your healthcare provider.",
            },
          ].map((s) => (
            <div key={s.title} className="mb-10">
              <h2 className="font-serif text-xl mb-3">{s.title}</h2>
              <p className="text-charcoal/60 leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}

          <div className="mt-12 p-8 bg-cream border border-gold-light/30">
            <p className="text-sm text-charcoal/70 leading-relaxed text-center">
              By using Core Wellness products and services, you acknowledge that
              you have read, understood, and agree to this medical disclaimer.
              If you have any questions, please contact us at{" "}
              <a href="mailto:hello@corewellness.com" className="text-gold">
                hello@corewellness.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
