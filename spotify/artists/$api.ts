import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_2yw7dz } from './_id@string';
import type { Methods as Methods_lkcu5o } from './_id@string/albums';
import type { Methods as Methods_1dvonpm } from './_id@string/related-artists';
import type { Methods as Methods_t71aum } from './_id@string/top-tracks';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/artists';
  const PATH1 = '/albums';
  const PATH2 = '/related-artists';
  const PATH3 = '/top-tracks';
  const GET = 'GET';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        albums: {
          /**
           * Get Spotify catalog information about an artist's albums.
           * @returns Pages of albums
           */
          get: (option?: { query?: Methods_lkcu5o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_lkcu5o['get']['resBody'], BasicHeaders, Methods_lkcu5o['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Get Spotify catalog information about an artist's albums.
           * @returns Pages of albums
           */
          $get: (option?: { query?: Methods_lkcu5o['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_lkcu5o['get']['resBody'], BasicHeaders, Methods_lkcu5o['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_lkcu5o['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        related_artists: {
          /**
           * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
           * @returns A set of artists
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1dvonpm['get']['resBody'], BasicHeaders, Methods_1dvonpm['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
           * @returns A set of artists
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1dvonpm['get']['resBody'], BasicHeaders, Methods_1dvonpm['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        top_tracks: {
          /**
           * Get Spotify catalog information about an artist's top tracks by country.
           * @returns A set of tracks
           */
          get: (option?: { query?: Methods_t71aum['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_t71aum['get']['resBody'], BasicHeaders, Methods_t71aum['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
          /**
           * Get Spotify catalog information about an artist's top tracks by country.
           * @returns A set of tracks
           */
          $get: (option?: { query?: Methods_t71aum['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_t71aum['get']['resBody'], BasicHeaders, Methods_t71aum['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_t71aum['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
         * @returns An artist
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
         * @returns An artist
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * Get Spotify catalog information for several artists based on their Spotify IDs.
     * @returns A set of artists
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get Spotify catalog information for several artists based on their Spotify IDs.
     * @returns A set of artists
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
