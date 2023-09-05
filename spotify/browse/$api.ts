import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_ldtlk2 } from './categories';
import type { Methods as Methods_1wvgmbl } from './categories/_category_id@string';
import type { Methods as Methods_1elur0d } from './categories/_category_id@string/playlists';
import type { Methods as Methods_tru372 } from './featured-playlists';
import type { Methods as Methods_mmx66p } from './new-releases';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/browse/categories';
  const PATH1 = '/playlists';
  const PATH2 = '/browse/featured-playlists';
  const PATH3 = '/browse/new-releases';
  const GET = 'GET';

  return {
    categories: {
      _category_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          playlists: {
            /**
             * Get a list of Spotify playlists tagged with a particular category.
             * @returns A paged set of playlists
             */
            get: (option?: { query?: Methods_1elur0d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1elur0d['get']['resBody'], BasicHeaders, Methods_1elur0d['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Get a list of Spotify playlists tagged with a particular category.
             * @returns A paged set of playlists
             */
            $get: (option?: { query?: Methods_1elur0d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1elur0d['get']['resBody'], BasicHeaders, Methods_1elur0d['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1elur0d['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
           * @returns A category
           */
          get: (option?: { query?: Methods_1wvgmbl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1wvgmbl['get']['resBody'], BasicHeaders, Methods_1wvgmbl['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
           * @returns A category
           */
          $get: (option?: { query?: Methods_1wvgmbl['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1wvgmbl['get']['resBody'], BasicHeaders, Methods_1wvgmbl['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1wvgmbl['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
       * @returns A paged set of categories
       */
      get: (option?: { query?: Methods_ldtlk2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ldtlk2['get']['resBody'], BasicHeaders, Methods_ldtlk2['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
       * @returns A paged set of categories
       */
      $get: (option?: { query?: Methods_ldtlk2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_ldtlk2['get']['resBody'], BasicHeaders, Methods_ldtlk2['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_ldtlk2['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    featured_playlists: {
      /**
       * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
       * @returns A paged set of playlists
       */
      get: (option?: { query?: Methods_tru372['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_tru372['get']['resBody'], BasicHeaders, Methods_tru372['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
       * @returns A paged set of playlists
       */
      $get: (option?: { query?: Methods_tru372['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_tru372['get']['resBody'], BasicHeaders, Methods_tru372['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_tru372['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    new_releases: {
      /**
       * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
       * @returns A paged set of albums
       */
      get: (option?: { query?: Methods_mmx66p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_mmx66p['get']['resBody'], BasicHeaders, Methods_mmx66p['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
       * @returns A paged set of albums
       */
      $get: (option?: { query?: Methods_mmx66p['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_mmx66p['get']['resBody'], BasicHeaders, Methods_mmx66p['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_mmx66p['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
