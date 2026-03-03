"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  paymentMethodId: string;
  orderId: string;
  amount: number;
};

export default function PaymentModal({ isOpen, onClose, paymentMethodId, orderId, amount }: Props) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSTKPush = async () => {
    if (!phone) {
      setMessage("Please enter phone number");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/payments/mpesa/stk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          orderId,
          amount,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setMessage("STK Push sent! Check your phone 📲");
    } catch (err: any) {
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center mt-20 justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 space-y-4 animate-fadeIn">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Complete Payment</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 hover:bg-red-400 transition bg-red-300 rounded-full p-1"
          >
            ✕
          </button>
        </div>

        {/* M-Pesa UI */}
        {paymentMethodId === "m-pesa" && (
          <div className="space-y-4">
            <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
              Pay KES <span className="font-bold text-xl">{amount.toLocaleString()}</span> via M-Pesa
            </div>

            <label className="block text-sm font-medium text-gray-700">Enter Phone Number</label>

            <input
              type="tel"
              placeholder="e.g 0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button
              onClick={handleSTKPush}
              disabled={loading}
              className="w-full bg-green-600 cursor-pointer text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Sending Payment..." : "Pay Now"}
            </button>
          </div>
        )}

        {/* Fallback */}
        {paymentMethodId !== "m-pesa" && <div className="text-center text-gray-500">Unsupported payment method</div>}

        {message && <div className="text-sm text-center text-blue-600">{message}</div>}
      </div>
    </div>
  );
}
