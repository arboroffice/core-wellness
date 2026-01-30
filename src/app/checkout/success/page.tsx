import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <section className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-50 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Thank You</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Order Confirmed</h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />

        <p className="text-charcoal/60 leading-relaxed mb-4">
          Your payment has been verified and your order is being processed.
        </p>
        <p className="text-charcoal/60 leading-relaxed mb-10">
          You&apos;ll receive a confirmation email with tracking information once your order ships.
        </p>

        <div className="bg-white p-8 mb-10 text-left">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 text-center">What Happens Next</p>
          <div className="space-y-4">
            {[
              { step: "1", text: "Payment verified on-chain" },
              { step: "2", text: "Order confirmation sent to your email" },
              { step: "3", text: "Order prepared and shipped" },
              { step: "4", text: "Tracking information emailed to you" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-sm text-gold font-sans">
                  {item.step}
                </span>
                <span className="text-sm text-charcoal/70">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-primary text-center">
            Continue Shopping
          </Link>
          <Link href="/" className="btn-outline text-center">
            Back to Home
          </Link>
        </div>

        <p className="text-xs text-charcoal/40 mt-8">
          Questions about your order? <Link href="/contact" className="text-gold hover:text-gold-dark">Contact our team</Link>
        </p>
      </div>
    </section>
  );
}
