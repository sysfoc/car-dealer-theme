import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { LightningProduct } from "@/app/server/models/LightningProducts";
import { products } from "@/data/LighteningDealProducts";

export async function GET() {
  try {
    await connectDB();

    await LightningProduct.deleteMany();
    const inserted = await LightningProduct.insertMany(products);

    return NextResponse.json({ message: "Lightning products seeded", data: inserted });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json({ error: "Failed to seed" }, { status: 500 });
  }
}
