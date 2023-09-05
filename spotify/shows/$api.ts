import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_2yw7dz } from './_id@string';
import type { Methods as Methods_1ap8vl2 } from './_id@string/episodes';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/shows';
  const PATH1 = '/episodes';
  const GET = 'GET';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        episodes: {
          /**
           * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
           * @returns Pages of episodes
           */
          get: (option?: { query?: Methods_1ap8vl2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ap8vl2['get']['resBody'], BasicHeaders, Methods_1ap8vl2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
           * @returns Pages of episodes
           */
          $get: (option?: { query?: Methods_1ap8vl2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1ap8vl2['get']['resBody'], BasicHeaders, Methods_1ap8vl2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1ap8vl2['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get Spotify catalog information for a single show identified by its
         * unique Spotify ID.
         * @returns A show
         */
        get: (option?: { query?: Methods_2yw7dz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get Spotify catalog information for a single show identified by its
         * unique Spotify ID.
         * @returns A show
         */
        $get: (option?: { query?: Methods_2yw7dz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_2yw7dz['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * Get Spotify catalog information for several shows based on their Spotify IDs.
     * @returns A set of shows
     */
    get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get Spotify catalog information for several shows based on their Spotify IDs.
     * @returns A set of shows
     */
    $get: (option: { query: Methods_by08hd['get']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
