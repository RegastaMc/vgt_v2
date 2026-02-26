import { NextRequest, NextResponse } from "next/server";

import cloudinary from "@/shared/lib/cloudinary";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const paramsToSign = body?.paramsToSign || body;

  try {
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    if (!apiSecret) {
      throw new Error("CLOUDINARY_API_SECRET environment variable is not set.");
    }
    const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);

    return NextResponse.json({
      signature,
    });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message || "Internal Server Error" }, { status: 500 });
  }
}
