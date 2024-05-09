import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
  const token = await getAccessToken();

  const artists = [
    {
      name: "Taylor Swift",
      spotify_id: "06HL4z0CvFAxyc27GXpf02",
    },
    {
      name: "Beyoncé",
      spotify_id: "6vWDO969PvNqNYHIOW5v0m",
    },
    {
      name: "Ariana Grande",
      spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
    },
    {
      name: "Kendrick Lamar",
      spotify_id: "2YZyLoL8N0Wb9xBt1NhZWg",
    },
    {
      name: "The Strokes",
      spotify_id: "0epOFNiUfyON9EYx7Tpr6V",
    },
  ];

  const artistsIds = artists.map((artist) => artist.spotify_id);
  const artistsString = artistsIds.join(",");

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists?ids=${artistsString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const artistData = await apiResponse.json();

  return new Response(JSON.stringify(artistData));
}
