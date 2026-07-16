"use client";

import { useState } from "react";
import Script from "next/script";

const B = "1px solid var(--border)";
const RAZORPAY_KEY_ID = "rzp_live_TE7ae4v7BuIyr9";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: (response: unknown) => void) => void;
    };
  }
}

export function DonationCard() {
  const [amount, setAmount] = useState("500");
  const [scriptReady, setScriptReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");

  const amountValue = Number(amount);
  const canDonate = scriptReady && status !== "processing" && amountValue >= 1;

  const handleDonate = () => {
    if (!canDonate || !window.Razorpay) return;

    setStatus("processing");

    const rzp = new window.Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: Math.round(amountValue * 100),
      currency: "INR",
      name: "Romyq",
      description: "Support Romyq development",
      theme: { color: "#16a34a" },
      handler: () => setStatus("done"),
      modal: { ondismiss: () => setStatus("idle") },
    });

    rzp.on("payment.failed", () => setStatus("idle"));
    rzp.open();
  };

  if (status === "done") {
    return (
      <div className="block p-4 rounded-md text-[13px]" style={{ border: B }}>
        <div className="font-semibold mb-1" style={{ color: "var(--text)" }}>
          Thank you for your support!
        </div>
        <div style={{ color: "var(--text-3)" }}>
          Your contribution helps keep Romyq independent.
        </div>
      </div>
    );
  }

  return (
    <div className="block p-4 rounded-md text-[13px]" style={{ border: B }}>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
        onReady={() => setScriptReady(true)}
      />
      <div className="font-semibold mb-1" style={{ color: "var(--text)" }}>
        Direct payment
      </div>
      <div className="mb-3" style={{ color: "var(--text-3)" }}>
        Donate any amount via Razorpay — UPI, cards, netbanking
      </div>
      <div className="flex gap-2">
        <div
          className="flex items-center px-2 rounded-md"
          style={{ border: B }}
        >
          <span className="mono text-[13px]" style={{ color: "var(--text-3)" }}>
            ₹
          </span>
          <input
            type="number"
            min={1}
            step={1}
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mono text-[13px] w-16 px-1 py-1.5 bg-transparent outline-none"
            style={{ color: "var(--text)" }}
            aria-label="Donation amount in rupees"
          />
        </div>
        <button
          onClick={handleDonate}
          disabled={!canDonate}
          className="btn-primary text-[13px]"
          style={{ opacity: canDonate ? 1 : 0.6, cursor: canDonate ? "pointer" : "default" }}
        >
          {status === "processing" ? "Processing…" : "Donate"}
        </button>
      </div>
    </div>
  );
}
