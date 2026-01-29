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
    { href: "/products/glp-3", label: "GLP-3 5mg/ml" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/disclaimer", label: "Medical Disclaimer" },
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
              Premium peptide wellness for those who demand excellence. Science
              meets luxury.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Twitter", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-wider uppercase text-white/40 hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
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

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Core Wellness. All rights reserved.
          </p>
          <p className="text-xs text-white/30 max-w-xl text-center md:text-right">
            These statements have not been evaluated by the FDA. This product is
            not intended to diagnose, treat, cure, or prevent any disease.
            Consult your healthcare provider before use.
          </p>
        </div>
      </div>
    </footer>
  );
}
