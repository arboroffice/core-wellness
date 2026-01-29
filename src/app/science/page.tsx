import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "Understanding GLP peptides and lipotropic compounds — the science behind Core Wellness research products.",
};

export default function SciencePage() {
  return (
    <>
      <Hero
        title="The Science"
        subtitle="Rigorous research. Pharmaceutical precision. Documented purity."
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Understanding Peptides
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            What Are GLP Peptides?
          </h2>
          <div className="w-16 h-[1px] bg-gold my-6" />
          <div className="space-y-6 text-charcoal/60 leading-relaxed">
            <p>
              Glucagon-like peptides (GLPs) are a family of endogenous hormones
              that have attracted significant scientific interest for their roles
              in metabolic regulation, gastrointestinal physiology, and cellular
              signaling. They continue to be a major focus of academic and
              laboratory research worldwide.
            </p>
            <p>
              GLP-2 is recognized in the research community for its role in
              intestinal mucosal biology, nutrient absorption pathways, and gut
              barrier function. GLP-3 represents an emerging area of
              investigation, with researchers exploring its potential
              interactions with metabolic and cellular pathways.
            </p>
            <p>
              At Core Wellness, our research-grade compounds are synthesized to
              the highest pharmaceutical standards, enabling researchers to work
              with verified, high-purity materials essential for reliable
              scientific results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Areas of Study
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Research Applications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Metabolic Pathway Research",
                desc: "GLP peptides are studied for their interactions with metabolic receptors and their role in glucose homeostasis, energy metabolism, and related signaling cascades.",
              },
              {
                title: "Gastrointestinal Biology",
                desc: "GLP-2 in particular is a subject of active research into intestinal mucosal growth, gut barrier integrity, and nutrient absorption mechanisms.",
              },
              {
                title: "Lipotropic Compound Studies",
                desc: "Lipotropic agents are investigated for their roles in lipid metabolism, hepatic function, and fat mobilization pathways in controlled laboratory settings.",
              },
              {
                title: "Cellular Signaling",
                desc: "Researchers utilize GLP peptides to study receptor binding, downstream signaling, and the broader implications of peptide-mediated cellular communication.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-8">
                <h3 className="font-serif text-xl text-gold">{item.title}</h3>
                <p className="text-sm text-charcoal/60 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Quality Assurance
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Our Standards
          </h2>
          <div className="w-16 h-[1px] bg-gold my-6" />
          <div className="space-y-8">
            {[
              {
                title: "Pharmaceutical-Grade Synthesis",
                desc: "Every compound is synthesized in cGMP-compliant facilities, ensuring consistency, purity, and reliability across all batches.",
              },
              {
                title: "Independent Verification",
                desc: "All products undergo rigorous third-party testing including HPLC purity analysis, mass spectrometry identification, endotoxin testing, and sterility verification.",
              },
              {
                title: "Full Documentation",
                desc: "Every order ships with a comprehensive Certificate of Analysis (COA), providing researchers with the analytical data needed for confident, reproducible work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="pb-8 border-b border-gold-light/30 last:border-0"
              >
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-charcoal/40 leading-relaxed">
            All products are sold strictly for research purposes only. Not for
            human consumption. The information on this page is for educational
            and informational purposes and does not constitute medical advice.
          </p>
        </div>
      </section>

      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
            Need Specifications?
          </h2>
          <p className="mt-4 text-white/50">
            Our team can provide detailed COAs, batch data, and compound
            specifications for your research.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Request Documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
