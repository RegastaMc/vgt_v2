import { NextRequest, NextResponse } from "next/server";

import cloudinary from "@/shared/lib/cloudinary";

export async function POST(request: NextRequest) {
  try {
    const { publicId } = await request.json();

    const result = await cloudinary.uploader.destroy(publicId);

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
