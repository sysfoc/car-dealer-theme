import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/firebaseAdmin";
import { connectDB } from "@/app/lib/db";
import User from "@/app/server/models/User";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const idToken = body.idToken;

    if (!idToken) {
      return NextResponse.json(
        { error: "Authentication token missing. Please log in again." },
        { status: 401 }
      );
    }

    // Verify token
    const decodedToken = await auth.verifyIdToken(idToken);
    const { uid, email, name, picture } = decodedToken;

    // Connect to MongoDB
    await connectDB();

    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        email,
        name,
        avatar: picture,
      });
    }

    // Only update changed fields
    const updateFields: Partial<{ email: string; name: string; avatar: string; lastLogin: string }> = { lastLogin: new Date().toISOString() };
    if (user.email !== email) updateFields.email = email;
    if (user.name !== name) updateFields.name = name;
    if (user.avatar !== picture) updateFields.avatar = picture;

    await User.findOneAndUpdate({ firebaseUid: uid }, updateFields, { upsert: true, new: true });

    return NextResponse.json({
      message: "GitHub login verified and user saved",
      user: { uid, email, name, picture },
    });
  } catch (error: unknown) {
    console.error("Error:", error);
    // Handle specific error for email already exists
    if (error instanceof Error && (error as { code?: string }).code === "auth/email-already-exists") {
      return NextResponse.json(
        { error: "Email already exists. Please use a different email or log in with the existing account." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Authentication or database error", details: (error as Error).message },
      { status: (error as { code?: string }).code === "auth/argument-error" ? 401 : 500 }
    );
  }
}
