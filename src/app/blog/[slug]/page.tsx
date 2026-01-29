import Link from "next/link";
import { Metadata } from "next";

const articles: Record<
  string,
  { title: string; date: string; category: string; content: string[] }
> = {
  "what-is-glp-3": {
    title: "What Is GLP-3? A Research Overview",
    date: "January 15, 2025",
    category: "Education",
    content: [
      "Glucagon-like peptide-3, or GLP-3, is an area of growing scientific interest within the peptide research community. As part of the broader GLP peptide family, it shares structural and functional characteristics with GLP-1 and GLP-2, while presenting unique properties worthy of dedicated investigation.",
      "The GLP family of peptides has been extensively studied for their roles in metabolic regulation, gastrointestinal biology, and cellular signaling. GLP-3 in particular has attracted attention from researchers exploring novel metabolic pathways and receptor interactions.",
      "In laboratory settings, GLP-3 is utilized to study receptor binding characteristics, downstream signaling cascades, and interactions with related peptide systems. Its structural profile offers researchers a valuable tool for comparative studies within the glucagon-like peptide family.",
      "Core Wellness provides research-grade GLP-3 at 10mg/ml concentration, synthesized to ≥98% purity with full HPLC verification. This level of quality is essential for producing reliable, reproducible research results.",
      "For researchers interested in incorporating GLP-3 into their studies, we recommend reviewing the available literature on GLP family peptides and consulting with our team regarding compound specifications and certificates of analysis.",
      "As with all Core Wellness products, our GLP-3 is intended strictly for research purposes and is accompanied by comprehensive analytical documentation.",
    ],
  },
  "peptides-in-research": {
    title: "Peptides in Modern Research: A Complete Guide",
    date: "January 8, 2025",
    category: "Research",
    content: [
      "Synthetic peptides have become indispensable tools in modern scientific research. From drug discovery and pharmacology to cell biology and biochemistry, researchers rely on high-purity peptide compounds to investigate fundamental biological processes.",
      "Peptides — short chains of amino acids — serve as signaling molecules, enzyme substrates, and receptor ligands in countless biological systems. Their specificity and versatility make them ideal subjects for laboratory investigation across multiple disciplines.",
      "In metabolic research, GLP peptides have been particularly significant. GLP-1 and GLP-2 are well-characterized in the literature, while newer compounds like GLP-3 represent expanding frontiers of peptide science with novel research applications.",
      "Lipotropic compounds represent another active area of investigation. Researchers study these agents for their roles in lipid metabolism, hepatic function, and fat mobilization pathways — contributing to our broader understanding of metabolic biochemistry.",
      "The quality of research-grade peptides directly impacts experimental outcomes. Impurities, degradation, or inconsistent concentrations can introduce variability and compromise results. This is why pharmaceutical-grade purity, verified by independent testing, is essential.",
      "Core Wellness is committed to supporting the research community with compounds that meet the highest standards of purity and documentation, enabling scientists to focus on discovery rather than quality concerns.",
    ],
  },
  "quality-standards": {
    title: "The Quality Standards Behind Core Wellness",
    date: "January 1, 2025",
    category: "Quality",
    content: [
      "At Core Wellness, quality is not a marketing claim — it is the foundation of everything we do. From synthesis to shipping, every step of our process is designed to deliver research-grade compounds that meet the most rigorous scientific standards.",
      "Our compounds are synthesized in cGMP-compliant facilities that adhere to Current Good Manufacturing Practice regulations. This ensures consistency, traceability, and quality control at every stage of production.",
      "Every batch undergoes comprehensive third-party testing. Our standard analytical panel includes HPLC purity analysis (≥98% threshold), mass spectrometry for identity confirmation, endotoxin testing, and sterility verification. Results are documented in a detailed Certificate of Analysis.",
      "We believe in full transparency. Every COA is provided with your order, giving you access to the analytical data you need to confidently incorporate our compounds into your research. Additional batch data is available upon request.",
      "Packaging and shipping are handled with the same precision. Temperature-sensitive compounds are shipped in cold-chain packaging with thermal monitoring. All orders are discreetly packaged and shipped via priority carriers.",
      "This commitment to quality is what defines Core Wellness. We exist to serve the research community with compounds they can trust — verified, documented, and delivered with care.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articles[params.slug];
  return {
    title: article?.title || "Article",
    description: article?.content[0] || "",
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            {article.category} · {article.date}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            {article.title}
          </h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {article.content.map((p, i) => (
              <p key={i} className="text-charcoal/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="border-t border-gold-light/30 mt-16 pt-8">
            <p className="text-xs text-charcoal/40 leading-relaxed italic">
              This article is for informational and educational purposes only.
              All Core Wellness products are sold strictly for research purposes
              only and are not intended for human consumption.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog" className="btn-outline">
              ← Back to Journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
