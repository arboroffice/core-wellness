import { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our curated collection of pharmaceutical-grade GLP-3 peptides.",
};

const products = [
  {
    name: "GLP-3 5mg/ml",
    subtitle: "Signature Formula",
    price: "Contact for Pricing",
    href: "/products/glp-3",
    image: "/images/vial-single.jpg",
  },
  {
    name: "GLP-3 Starter Kit",
    subtitle: "Complete Wellness Set",
    price: "Contact for Pricing",
    href: "/products/glp-3",
    image: "/images/packaging-flatlay.jpg",
  },
  {
    name: "Premium Protocol",
    subtitle: "3-Month Program",
    price: "By Consultation",
    href: "/contact",
  },
  {
    name: "Maintenance Program",
    subtitle: "Ongoing Optimization",
    price: "By Consultation",
    href: "/contact",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="Our Collection"
        subtitle="Pharmaceutical-grade peptides, curated for your wellness journey."
      />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Personalized Wellness
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Not Sure Where to Start?
          </h2>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            Our wellness specialists will guide you to the perfect protocol.
            Every journey begins with a conversation.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
