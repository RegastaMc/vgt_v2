import { db } from "@/shared/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log(`data:`, data);

  const savedBanner = await db.productBanner.create({
    data: {
      imgUrl: data.imgUrl, // JSON object
      alt: data.alt,
      url: data.link,

      msg: data.msg
        ? {
            create: {
              title: data.msg.title,
              buttonText: data.msg.buttonText,
            },
          }
        : undefined,
    },
  });

  return NextResponse.json(savedBanner);
}

export async function GET() {
  const sliders = await db.productBanner.findMany({
    include: {
      msg: true,
    },
  });
  return NextResponse.json(sliders);
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Slider ID is required" }, { status: 400 });
    }

    await db.productBanner.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Slider deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete slider error:", error);

    return NextResponse.json({ error: "Failed to delete slider" }, { status: 500 });
  }
}
