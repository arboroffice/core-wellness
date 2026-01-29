import { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our collection of premium research-grade peptides and compounds. For research purposes only.",
};

const products = [
  {
    name: "GLP-3",
    subtitle: "10mg/ml · Injectable",
    price: "Inquire for Availability",
    href: "/products/glp-3",
    image: "/images/vial-single.jpg",
  },
  {
    name: "GLP-2",
    subtitle: "10mg/ml · Injectable",
    price: "Inquire for Availability",
    href: "/products/glp-2",
    image: "/images/packaging-flatlay.jpg",
  },
  {
    name: "Lipo in a Bottle",
    subtitle: "Injectable Compound",
    price: "Inquire for Availability",
    href: "/products/lipo-in-a-bottle",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Hero
        title="Our Collection"
        subtitle="Research-grade peptides and compounds, crafted with pharmaceutical precision."
      />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
          <p className="text-center text-xs text-charcoal/40 mt-12 tracking-wide max-w-xl mx-auto">
            All products are sold strictly for research purposes only. Not for
            human consumption. Must be 18+ to purchase.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Need Assistance?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Questions About Our Compounds?
          </h2>
          <p className="text-charcoal/60 mt-4 leading-relaxed">
            Our team can provide certificates of analysis, purity
            documentation, and detailed specifications for any product.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
