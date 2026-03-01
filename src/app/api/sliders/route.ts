import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const savedSliders = await db.productBanner.create({
    data: {
      imgUrl: data.imgUrl,
      alt: data.alt,
      url: data.link,
      msg: data.msg,
    },
  });
  return NextResponse.json(savedSliders);
}

export async function GET() {
  const sliders = await db.productBanner.findMany({
    include: {
      msg: true,
    },
  });
  return NextResponse.json(sliders);
}
