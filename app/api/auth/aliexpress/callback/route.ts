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
    // Exchange authorization code for an access token
    const tokenResponse = await fetch("https://api-sg.aliexpress.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.ALIEXPRESS_CLIENT_ID!,
        client_secret:process.env.ALIEXPRESS_CLIENT_SECRET!,
        code: authCode,
        redirect_uri: process.env.NEXT_PUBLIC_ALIEXPRESS_REDIRECT_URI!,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) {
      throw new Error(tokenData.error_description || "Failed to get access token");
    }

    const { access_token, refresh_token, expires_in } = tokenData;

    // Store access token and refresh token in database
    await connectDB();
    const user = await User.findOneAndUpdate(
      { aliexpressId: "some_unique_identifier" }, // Replace with actual identifier if needed
      { accessToken: access_token, refreshToken: refresh_token, tokenExpiry: Date.now() + expires_in * 1000 },
      { upsert: true, new: true }
    );

    return NextResponse.json({ message: "AliExpress authentication successful", user });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
