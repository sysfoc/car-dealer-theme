import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/server/models/User";

export async function POST(req: Request) {
  await connectDB();

  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }
  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ email, displayName: email.split("@")[0] });
  }
  return NextResponse.json({ user }, { status: 200 });
}
