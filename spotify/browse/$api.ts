import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './categories'
import type { Methods as Methods1 } from './categories/_category_id@string'
import type { Methods as Methods2 } from './categories/_category_id@string/playlists'
import type { Methods as Methods3 } from './featured-playlists'
import type { Methods as Methods4 } from './new-releases'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/browse/categories'
  const PATH1 = '/playlists'
  const PATH2 = '/browse/featured-playlists'
  const PATH3 = '/browse/new-releases'
  const GET = 'GET'

  return {
    categories: {
      _category_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          playlists: {
            /**
             * Get a list of Spotify playlists tagged with a particular category.
             * @returns A paged set of playlists
             */
            get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Get a list of Spotify playlists tagged with a particular category.
             * @returns A paged set of playlists
             */
            $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
           * @returns A category
           */
          get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
           * @returns A category
           */
          $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
       * @returns A paged set of categories
       */
      get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
       * @returns A paged set of categories
       */
      $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    featured_playlists: {
      /**
       * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
       * @returns A paged set of playlists
       */
      get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
       * @returns A paged set of playlists
       */
      $get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    new_releases: {
      /**
       * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
       * @returns A paged set of albums
       */
      get: (option?: { query?: Methods4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
       * @returns A paged set of albums
       */
      $get: (option?: { query?: Methods4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
