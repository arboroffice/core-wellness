import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  fullScreen?: boolean;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  cta,
  fullScreen = false,
  overlay = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center text-center ${
        fullScreen ? "min-h-screen" : "min-h-[60vh]"
      } bg-cream`}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/5 to-transparent" />
      )}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-32">
        <div className="gold-divider" />
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-charcoal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-charcoal/60 font-light leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-10">
            <Link href={cta.href} className="btn-primary">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
