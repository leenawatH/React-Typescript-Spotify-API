import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

interface ApiSearchParams {
  q: string;
  type: string;
}

interface ApiAccessToken {
  accessToken: string;
}

interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
  popularity: number;
}



interface SpotifyApi {
  search: (
    query: string,
    types: string[],
    token: ApiAccessToken
  ) => Promise<{ artists: { items: Artist[] } }>;
}

const spotifyApi: SpotifyApi = {
  search: async (query: string, types: string[], token: ApiAccessToken) => {
    const { accessToken } = token;
    const params: ApiSearchParams = {
      q: query,
      type: types.join(','),
    };
    const { data } = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params,
    });
    return data;
  }
  
};

export { spotifyApi };
