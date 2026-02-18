import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/science", label: "Science" },
    { href: "/blog", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ],
  Products: [
    { href: "/products", label: "All Products" },
    { href: "/products/glp-3", label: "GLP-3 10mg/ml" },
    { href: "/products/glp-2", label: "GLP-2 10mg/ml" },
    { href: "/products/lipo-in-a-bottle", label: "Lipo in a Bottle" },
  ],
  Resources: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-wider text-gold"
            >
              CORE WELLNESS
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Premium research-grade peptides and compounds. Pharmaceutical
              precision meets elevated design.
            </p>

          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Research disclaimer */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <p className="text-xs text-white/40 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            All products are sold strictly for research purposes only. Not for
            human consumption. Must be 18+ to purchase. By ordering, you agree
            that products will be used solely for in-vitro research,
            educational, or scientific purposes.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Core Wellness. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              For research purposes only · Not for human consumption
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
