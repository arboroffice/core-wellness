import Link from "next/link";
import { Metadata } from "next";

const articles: Record<
  string,
  { title: string; date: string; category: string; content: string[] }
> = {
  "what-is-glp-3": {
    title: "What Is GLP-3? Everything You Need to Know",
    date: "January 15, 2025",
    category: "Education",
    content: [
      "Glucagon-like peptide-3, or GLP-3, represents a significant advancement in peptide wellness science. As a naturally occurring hormone in the body, GLP-3 plays a vital role in metabolic regulation, gut health, and overall cellular function.",
      "Unlike earlier generations of GLP peptides, GLP-3 offers a more targeted approach to metabolic optimization. Its unique receptor profile allows for precise interaction with the body's signaling pathways, supporting healthy metabolic function without the side effects commonly associated with less refined approaches.",
      "At Core Wellness, our GLP-3 formulation is synthesized to pharmaceutical-grade standards. Each vial undergoes rigorous third-party testing to ensure purity, potency, and sterility — because when it comes to your wellness, there is no room for compromise.",
      "The mechanism of action is elegant in its simplicity: GLP-3 works with your body's existing pathways to optimize metabolic function, support healthy appetite regulation, and promote cellular wellness. It's not about overriding your biology — it's about enhancing it.",
      "For those considering GLP-3 therapy, the journey begins with a comprehensive consultation. Our medical team evaluates your health profile, lifestyle, and goals to create a personalized protocol that aligns with your unique biology.",
      "The future of wellness isn't one-size-fits-all. It's precise. It's personalized. It's Core Wellness.",
    ],
  },
  "peptides-for-weight-loss": {
    title: "Peptides for Weight Loss: A Complete Guide",
    date: "January 8, 2025",
    category: "Wellness",
    content: [
      "The conversation around weight management has evolved significantly in recent years. No longer limited to calorie counting and exercise alone, modern wellness embraces a more holistic, science-driven approach — and peptide therapy is at the forefront of this evolution.",
      "Peptides are short chains of amino acids that serve as signaling molecules in the body. When it comes to body composition, certain peptides can support metabolic function, appetite regulation, and fat metabolism through precise biological mechanisms.",
      "GLP peptides, in particular, have garnered significant attention for their role in metabolic optimization. By interacting with specific receptors, these peptides can support the body's natural processes for maintaining healthy body composition.",
      "It's important to understand that peptide therapy is not a shortcut — it's a sophisticated tool that works best as part of a comprehensive wellness strategy. At Core Wellness, we pair our pharmaceutical-grade peptides with personalized guidance on nutrition, movement, and lifestyle optimization.",
      "The key difference with a luxury wellness approach? Personalization. Your protocol is designed for your biology, your goals, and your lifestyle. No generic programs. No guesswork.",
      "If you're exploring peptide therapy for body composition support, the first step is a consultation with a qualified wellness specialist who can evaluate whether this approach aligns with your health profile and goals.",
    ],
  },
  "science-behind-core-wellness": {
    title: "The Science Behind Core Wellness",
    date: "January 1, 2025",
    category: "Brand",
    content: [
      "Core Wellness was born from a singular vision: that the most advanced wellness science deserves the most elevated experience. We believe that optimizing your health should never feel clinical or impersonal.",
      "Our formulations begin with pharmaceutical-grade ingredients, synthesized in cGMP-compliant facilities that meet the highest standards of quality and safety. Every batch undergoes comprehensive third-party testing for purity, potency, endotoxins, and sterility.",
      "But great science alone isn't enough. What sets Core Wellness apart is our approach to the entire wellness journey. From your first consultation to ongoing protocol optimization, every touchpoint is designed with intention and care.",
      "Our medical advisory team includes licensed healthcare providers with deep expertise in peptide therapy, metabolic medicine, and integrative wellness. This ensures that every protocol we create is grounded in evidence and tailored to individual biology.",
      "The result is a wellness experience that feels as refined as the science behind it. Premium packaging. Discreet delivery. Dedicated support. Because how you feel about your wellness journey matters as much as the outcomes.",
      "This is the Core Wellness difference: where rigorous science meets uncompromising luxury. Welcome to a new standard of care.",
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
              Disclaimer: This article is for informational purposes only and
              does not constitute medical advice. Consult a licensed healthcare
              provider before starting any peptide therapy.
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
