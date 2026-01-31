"use client";

import { useState } from "react";
import { PEPAI_CONFIG } from "@/lib/pepai-config";

interface PepaiPayButtonProps {
  amount: number;
  description: string;
  productId: string;
  email?: string;
  onSuccess?: () => void;
}

export function PepaiPayButton({
  amount,
  description,
  productId,
  onSuccess,
}: PepaiPayButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const pay = () => {
    // Build the checkout URL
    const params = new URLSearchParams({
      amount: amount.toFixed(2),
      desc: description,
      seller: PEPAI_CONFIG.sellerAddress,
      expiry: PEPAI_CONFIG.expiryDays.toString(),
    });
    
    const checkoutUrl = `${PEPAI_CONFIG.baseUrl}/checkout/new?${params.toString()}`;
    
    // Open in popup
    const popup = window.open(
      checkoutUrl,
      "pepai-checkout",
      "width=480,height=720,scrollbars=yes"
    );

    // Listen for completion message
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== PEPAI_CONFIG.baseUrl) return;
      if (event.data?.event === "payment_complete") {
        popup?.close();
        setShowConfirm(true);
        onSuccess?.();
        window.removeEventListener("message", handleMessage);
      }
    };
    window.addEventListener("message", handleMessage);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <button
          onClick={pay}
          className="w-full py-4 px-6 bg-gold text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
        >
          Pay ${amount.toFixed(2)} USDC
        </button>
      </div>

      <p className="text-xs text-charcoal/40 mt-3 text-center">
        🔒 Secure escrow payment · Powered by PepAI
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
