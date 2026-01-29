import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Insights, research, and wellness wisdom from Core Wellness.",
};

const posts = [
  {
    slug: "what-is-glp-3",
    title: "What Is GLP-3? Everything You Need to Know",
    excerpt:
      "An in-depth exploration of GLP-3 peptides — what they are, how they work, and why they represent the future of wellness optimization.",
    date: "January 15, 2025",
    category: "Education",
  },
  {
    slug: "peptides-for-weight-loss",
    title: "Peptides for Weight Loss: A Complete Guide",
    excerpt:
      "Understanding how peptide therapy supports healthy body composition — the science, the process, and what to expect on your journey.",
    date: "January 8, 2025",
    category: "Wellness",
  },
  {
    slug: "science-behind-core-wellness",
    title: "The Science Behind Core Wellness",
    excerpt:
      "From pharmaceutical-grade formulation to personalized protocols — how Core Wellness bridges cutting-edge science and luxury wellness.",
    date: "January 1, 2025",
    category: "Brand",
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="The Journal"
        subtitle="Insights, research, and reflections on modern wellness."
      />

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="card-glass overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/10">
                  <div className="aspect-[4/3] bg-cream-dark flex items-center justify-center">
                    <span className="font-serif text-4xl text-gold/20">CW</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
                      {post.category} · {post.date}
                    </p>
                    <h3 className="font-serif text-lg group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-charcoal/50 mt-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="text-xs tracking-[0.15em] uppercase text-gold mt-4">
                      Read More →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
