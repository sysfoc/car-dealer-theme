import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import CategoryType from "@/app/server/models/CategoryTypes";

export async function GET() {
  try {
    await connectDB();
    const categories = await CategoryType.find();
    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch" }, { status: 500 });
  }
}
