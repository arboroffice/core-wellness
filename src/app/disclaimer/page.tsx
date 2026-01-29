import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <Hero
        title="Disclaimer"
        subtitle="Important information about our products and services."
      />
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          {[
            {
              title: "Research Use Only",
              text: "All products sold by Core Wellness are intended strictly for research purposes only. They are not intended for human consumption, veterinary use, therapeutic applications, or any diagnostic purposes. By purchasing from Core Wellness, you agree to use all products solely for legitimate in-vitro research, educational, or scientific purposes.",
            },
            {
              title: "Not for Human Consumption",
              text: "Core Wellness products are research chemicals and are not marketed, sold, or intended for use as food, drugs, cosmetics, dietary supplements, or any form of human or animal consumption. We do not make any claims regarding safety, efficacy, or suitability for any use other than scientific research.",
            },
            {
              title: "Age Requirement",
              text: "All purchasers must be 18 years of age or older. By placing an order, you confirm that you meet this age requirement and that you are purchasing for legitimate research purposes.",
            },
            {
              title: "No Medical Claims",
              text: "Core Wellness makes no medical claims regarding any of its products. Nothing on this website should be interpreted as medical advice, diagnosis, or treatment recommendation. The information provided is for educational and informational purposes related to scientific research.",
            },
            {
              title: "Buyer Responsibility",
              text: "The buyer assumes all responsibility for the lawful use of products purchased from Core Wellness. It is the buyer's sole responsibility to ensure that their use of any product complies with all applicable local, state, and federal laws and regulations.",
            },
            {
              title: "FDA Notice",
              text: "These products have not been evaluated by the Food and Drug Administration. They are not intended to diagnose, treat, cure, or prevent any disease or medical condition.",
            },
            {
              title: "Limitation of Liability",
              text: "Core Wellness shall not be held liable for any damages, injuries, or consequences resulting from the misuse, improper handling, or unauthorized application of its products. Our liability is limited to the purchase price of the product in question.",
            },
            {
              title: "Accuracy of Information",
              text: "While we strive to maintain accurate and current information on this website, Core Wellness does not warrant the completeness or accuracy of any content. Product specifications and availability are subject to change without notice.",
            },
          ].map((s) => (
            <div key={s.title} className="mb-10">
              <h2 className="font-serif text-xl mb-3">{s.title}</h2>
              <p className="text-charcoal/60 leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}

          <div className="mt-12 p-8 bg-cream border border-gold-light/30">
            <p className="text-sm text-charcoal/70 leading-relaxed text-center font-medium">
              All products are sold strictly for research purposes only. Not for
              human consumption. Must be 18+ to purchase.
            </p>
            <p className="text-xs text-charcoal/50 leading-relaxed text-center mt-4">
              By using this website or purchasing from Core Wellness, you
              acknowledge that you have read, understood, and agree to this
              disclaimer. For questions, contact{" "}
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
