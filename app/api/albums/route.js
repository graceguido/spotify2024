import { getAccessToken } from "../../../lib/spotify";

export async function GET(request) {
  try {
    // Extract the artist ID from the request's search parameters
    const urlParams = request.nextUrl.searchParams;
    const id = urlParams.get("id");

    if (!id) {
      // Return a 400 response if the ID is missing
      return new Response(JSON.stringify({ error: "Artist ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Retrieve the Spotify access token
    const token = await getAccessToken();

    // Make the Spotify API request
    const apiResponse = await fetch(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text(); // Retrieve full error response
      console.error(`Spotify API Error: ${apiResponse.status}, ${errorText}`);
      return new Response(
        JSON.stringify({ error: `Spotify API request failed: ${errorText}` }),
        {
          status: apiResponse.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Parse the API response as JSON
    const albumsData = await apiResponse.json();

    // Return the album data with a 200 status code
    return new Response(JSON.stringify(albumsData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Catch any other errors and return a 500 response
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
