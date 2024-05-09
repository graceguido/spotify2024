let cachedAccessToken = null;
let cachedTokenExpiry = null;

export async function getAccessToken() {
  // If the cached token is still valid, return it
  if (
    cachedAccessToken &&
    cachedTokenExpiry &&
    new Date() < cachedTokenExpiry
  ) {
    return cachedAccessToken;
  }

  // Retrieve Spotify client credentials from environment variables
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  // Prepare the authorization header
  const authHeader = `Basic ${Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64")}`;

  // Request a new access token
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: authHeader,
    },
    body: "grant_type=client_credentials",
  });

  // Parse the response and handle errors
  const tokenData = await tokenResponse.json();
  if (tokenResponse.status !== 200) {
    throw new Error(`Failed to fetch token: ${tokenData.error_description}`);
  }

  // Cache the new access token and calculate its expiry time
  cachedAccessToken = tokenData.access_token;
  const expiresIn = tokenData.expires_in; // Typically 3600 seconds (1 hour)
  cachedTokenExpiry = new Date(new Date().getTime() + expiresIn * 1000);

  return cachedAccessToken;
}
