const refreshToken = async (refresh_token: string) => {
    const response = await fetch("https://api-sg.aliexpress.com/auth/token/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        client_id: process.env.NEXT_PUBLIC_ALIEXPRESS_CLIENT_ID!,
        client_secret: process.env.ALIEXPRESS_CLIENT_SECRET!,
        refresh_token: refresh_token,
      }),
    });
  
    const data = await response.json();
    if (!response.ok) throw new Error(data.error_description);
  
    return data.access_token;
  };
  