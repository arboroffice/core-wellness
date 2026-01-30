"use client";

import { useEffect, useRef, useState } from "react";
import { CONDUIT_CONFIG } from "@/lib/conduit-config";

declare global {
  interface Window {
    ConduitCheckout: {
      init: (config: Record<string, unknown>) => void;
      open: (params: Record<string, unknown>) => void;
      close: () => void;
    };
  }
}

interface CryptoPayButtonProps {
  amount: number;
  description: string;
  productId: string;
  email?: string;
  onSuccess?: () => void;
}

export function CryptoPayButton({
  amount,
  description,
  productId,
  email,
  onSuccess,
}: CryptoPayButtonProps) {
  const initialized = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const script = document.createElement("script");
    script.src = `${CONDUIT_CONFIG.baseUrl}/conduit-checkout.js`;
    script.async = true;
    script.onload = () => {
      window.ConduitCheckout.init({
        sellerAddress: CONDUIT_CONFIG.sellerAddress,
        baseUrl: CONDUIT_CONFIG.baseUrl,
        tokenSymbol: CONDUIT_CONFIG.tokenSymbol,
        expiryDays: CONDUIT_CONFIG.expiryDays,
        mode: CONDUIT_CONFIG.mode,
        onSuccess: () => {
          setShowConfirm(true);
          onSuccess?.();
        },
        onError: (err: string) => {
          setError(err);
          setTimeout(() => setError(null), 5000);
        },
        onCancel: () => {
          // closed
        },
      });
      setLoaded(true);
    };
    script.onerror = () => setError("Failed to load payment system");
    document.head.appendChild(script);
  }, [onSuccess]);

  const pay = (token: "USDC" | "USDT") => {
    if (!loaded) return;
    window.ConduitCheckout.open({
      amount: amount.toFixed(2),
      description,
      orderId: `${productId}-${Date.now()}`,
      email: email || undefined,
      tokenSymbol: token,
    });
  };

  return (
    <>
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => pay("USDC")}
          disabled={!loaded}
          className="flex-1 py-4 px-6 bg-gold text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loaded ? "Pay with USDC" : "Loading…"}
        </button>
        <button
          onClick={() => pay("USDT")}
          disabled={!loaded}
          className="flex-1 py-4 px-6 bg-charcoal text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-charcoal-light disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loaded ? "Pay with USDT" : "Loading…"}
        </button>
      </div>

      <p className="text-xs text-charcoal/40 mt-3 text-center">
        Secure payment via stablecoin · Powered by Conduit
      </p>

      {/* Success modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white max-w-md mx-4 p-10 text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl mb-2">Payment Confirmed</h3>
            <p className="text-charcoal/60 text-sm mb-6">
              Your order has been received. You&apos;ll receive a confirmation email with tracking information.
            </p>
            <a
              href="/checkout/success"
              className="inline-block py-3 px-8 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
            >
              View Order Details
            </a>
          </div>
        </div>
      )}
    </>
  );
}
