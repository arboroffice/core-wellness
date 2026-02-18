import { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal",
  description: "Research insights, compound education, and updates from Core Wellness.",
};

const posts = [
  {
    slug: "what-is-glp-3",
    title: "What Is GLP-3? A Research Overview",
    excerpt:
      "An overview of GLP-3 peptides — their structure, known biological roles, and why they are a growing focus of scientific investigation.",
    date: "January 15, 2025",
    category: "Education",
    image: "/images/glp-3.png",
  },
  {
    slug: "peptides-in-research",
    title: "Peptides in Modern Research: A Complete Guide",
    excerpt:
      "Understanding the role of synthetic peptides in laboratory research — from metabolic studies to cellular signaling investigations.",
    date: "January 8, 2025",
    category: "Research",
    image: "/images/glp-2.png",
  },
  {
    slug: "quality-standards",
    title: "The Quality Standards Behind Core Wellness",
    excerpt:
      "How we ensure pharmaceutical-grade purity, from cGMP synthesis to independent third-party testing and full COA documentation.",
    date: "January 1, 2025",
    category: "Quality",
    image: "/images/lipo-in-a-bottle.png",
  },
];

export default function BlogPage() {
  return (
    <>
      <Hero
        title="The Journal"
        subtitle="Research insights, compound education, and industry updates."
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
                  <div className="aspect-[4/3] bg-cream-dark flex items-center justify-center overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <span className="font-serif text-4xl text-gold/20">CW</span>
                    )}
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
