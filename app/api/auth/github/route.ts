import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/firebaseAdmin";
import { connectDB } from "@/app/lib/db";
import User from "@/app/server/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firebaseUid, email, displayName, photoURL, idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json(
        { error: "Authentication token missing. Please log in again." },
        { status: 401 }
      );
    }

    const decodedToken = await auth.verifyIdToken(idToken);
    console.log("Decoded Token:", decodedToken);

    const uid = firebaseUid || decodedToken.uid;
    const userEmail = email || decodedToken.email || `github-${uid}@github.com`;

    console.log("Looking for user with email:", userEmail);

    let user = await User.findOne({ $or: [{ email: userEmail }, { firebaseUid: uid }] });

    if (!user) {
      console.log("Creating new user in MongoDB...");
      user = await User.create({
        firebaseUid: uid,
        email: userEmail,
        displayName,
        photoURL,
        lastLogin: new Date(),
      });
      console.log("New user saved:", user);
    } else {
      //  Step 2: Update only changed fields
      let updateFields: Partial<{ displayName: string; photoURL: string; lastLogin: Date }> = {};
      if (user.displayName !== displayName) updateFields["displayName"] = displayName;
      if (user.photoURL !== photoURL) updateFields["photoURL"] = photoURL;
      updateFields["lastLogin"] = new Date();

      if (Object.keys(updateFields).length > 0) {
        await User.updateOne({ firebaseUid: uid }, { $set: updateFields });
      }
    }

    return NextResponse.json({
      message: "GitHub login verified and user saved",
      user: { uid, email: userEmail, displayName, photoURL },
    });
  } catch (error: unknown) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: "Authentication or database error",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}