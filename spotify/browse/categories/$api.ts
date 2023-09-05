import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_19zlopa } from './_category_id@string';
import type { Methods as Methods_c75b02 } from './_category_id@string/playlists';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/browse/categories';
  const PATH1 = '/playlists';
  const GET = 'GET';

  return {
    _category_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        playlists: {
          /**
           * Get a list of Spotify playlists tagged with a particular category.
           * @returns A paged set of playlists
           */
          get: (option?: { query?: Methods_c75b02['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_c75b02['get']['resBody'], BasicHeaders, Methods_c75b02['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Get a list of Spotify playlists tagged with a particular category.
           * @returns A paged set of playlists
           */
          $get: (option?: { query?: Methods_c75b02['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_c75b02['get']['resBody'], BasicHeaders, Methods_c75b02['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_c75b02['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         * @returns A category
         */
        get: (option?: { query?: Methods_19zlopa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_19zlopa['get']['resBody'], BasicHeaders, Methods_19zlopa['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         * @returns A category
         */
        $get: (option?: { query?: Methods_19zlopa['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_19zlopa['get']['resBody'], BasicHeaders, Methods_19zlopa['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_19zlopa['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    /**
     * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
     * @returns A paged set of categories
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
     * @returns A paged set of categories
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
