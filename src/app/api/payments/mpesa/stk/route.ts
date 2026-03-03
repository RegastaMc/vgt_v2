import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone, amount, orderId } = await req.json();

  if (!phone || !amount) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  // 🔐 Ideally fetch token dynamically
  const accessToken = await getAccessToken();

  const response = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: process.env.MPESA_PASSWORD,
      Timestamp: process.env.MPESA_TIMESTAMP,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: `${process.env.BASE_URL}/api/payments/mpesa/callback`,
      AccountReference: "Electricals order",
      TransactionDesc: "Order Payment",
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}

async function getAccessToken() {
  const res = await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString("base64"),
    },
  });

  const data = await res.json();
  return data.access_token;
}
