import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_2yw7dz } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/audio-analysis';
  const GET = 'GET';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
         * @returns Audio analysis for one track
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
         * @returns Audio analysis for one track
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
