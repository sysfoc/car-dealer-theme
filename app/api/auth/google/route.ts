import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/server/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { displayName, email, photoURL } = await req.json();

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ displayName, email, photoURL });
    } else {
      let needsUpdate = false;
      if (user.displayName !== displayName) {
        user.displayName = displayName;
        needsUpdate = true;
      }
      if (user.photoURL !== photoURL) {
        user.photoURL = photoURL;
        needsUpdate = true;
      }
      if (needsUpdate) await user.save();
    }

    return NextResponse.json(user, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
