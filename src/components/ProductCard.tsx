import Link from "next/link";

interface ProductCardProps {
  name: string;
  subtitle: string;
  price: string;
  href: string;
  image?: string;
}

export default function ProductCard({
  name,
  subtitle,
  price,
  href,
  image,
}: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="card-glass overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/10">
        <div className="aspect-[3/4] bg-cream-dark flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="text-gold/30 font-serif text-6xl">CW</div>
          )}
        </div>
        <div className="p-6 text-center">
          <h3 className="font-serif text-lg tracking-wide">{name}</h3>
          <p className="text-sm text-charcoal/50 mt-1">{subtitle}</p>
          <div className="gold-divider !my-4" />
          <p className="text-xs tracking-[0.15em] uppercase text-gold">
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}
