import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import User from "@/app/server/models/User";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const authCode = searchParams.get("code");

  if (!authCode) {
    return NextResponse.json({ error: "Authorization code missing" }, { status: 400 });
  }

  try {
    // Exchange authCode for access token from AliExpress
    const tokenResponse = await fetch("https://api.aliexpress.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.ALIEXPRESS_CLIENT_ID!,
        client_secret: process.env.ALIEXPRESS_CLIENT_SECRET!,
        grant_type: "authorization_code",
        code: authCode,
        redirect_uri: process.env.ALIEXPRESS_REDIRECT_URI!,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) {
      throw new Error(tokenData.error_description || "Failed to get access token");
    }

    const accessToken = tokenData.access_token;

    // Fetch user data from AliExpress
    const userResponse = await fetch("https://api.aliexpress.com/user/info", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userData = await userResponse.json();
    if (!userResponse.ok) {
      throw new Error(userData.error || "Failed to get user data");
    }

    // Connect to MongoDB and store user info
    await connectDB();
    let user = await User.findOne({ aliexpressId: userData.id });

    if (!user) {
      user = await User.create({
        aliexpressId: userData.id,
        email: userData.email,
        name: userData.name,
        avatar: userData.picture,
      });
    }

    return NextResponse.json({ message: "AliExpress login successful", user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
