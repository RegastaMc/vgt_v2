import { db } from "@/shared/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const orders = await db.order.findMany({
    include: {
      user: true,
      items: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(orders);
}
