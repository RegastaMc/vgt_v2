import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const data = await request.json();

    const res = await db.productBanner.upsert({
      where: { id },
      update: data,
      create: data,
    });

    if (res) {
      return NextResponse.json({ message: "Slider updated successfully" }, { status: 200 });
    }
  } catch (error) {
    console.error("Update slider error:", error);
    return NextResponse.json({ error: "Failed to update slider" }, { status: 500 });
  }
}
