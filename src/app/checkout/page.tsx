"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/pepai-config";
import { PepaiPayButton } from "@/components/PepaiCheckout";

function CheckoutContent() {
  const params = useSearchParams();
  const productId = params.get("product") || "";
  const product = PRODUCTS[productId];

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("US");

  if (!product) {
    return (
      <section className="pt-28 pb-20 bg-cream min-h-screen">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <p className="text-charcoal/60 mb-8">The requested product could not be found.</p>
          <Link href="/products" className="btn-primary">Browse Products</Link>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gold-light/60 text-charcoal text-sm font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/30";

  return (
    <section className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Link href={`/products/${productId}`} className="text-sm text-gold hover:text-gold-dark transition-colors mb-8 inline-block">
          ← Back to product
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-light mb-2">Checkout</h1>
        <div className="w-12 h-[1px] bg-gold mb-10" />

        {/* Order Summary */}
        <div className="bg-white p-6 mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Order Summary</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-serif text-lg">{product.name}</p>
              <p className="text-sm text-charcoal/50">{product.description}</p>
            </div>
            <p className="font-serif text-2xl text-gold">${product.price}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white p-6 mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Contact</p>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Shipping */}
        <div className="bg-white p-6 mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Shipping Address</p>
          <div className="space-y-3">
            <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            <input type="text" placeholder="Street address" value={street} onChange={(e) => setStreet(e.target.value)} className={inputClass} />
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} />
              <input type="text" placeholder="State / Province" value={state} onChange={(e) => setState(e.target.value)} className={inputClass} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="ZIP / Postal code" value={zip} onChange={(e) => setZip(e.target.value)} className={inputClass} />
              <select value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass}>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="NZ">New Zealand</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white p-6">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Payment</p>
          <p className="text-sm text-charcoal/60 mb-6">
            Pay securely with USDC. Your payment is held in escrow until order is confirmed.
          </p>
          <PepaiPayButton
            amount={product.price}
            description={`${product.name} - Core Wellness`}
            productId={productId}
            email={email}
            onSuccess={() => {
              window.location.href = "/checkout/success";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <section className="pt-28 pb-20 bg-cream min-h-screen">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-charcoal/50">Loading checkout…</p>
        </div>
      </section>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
