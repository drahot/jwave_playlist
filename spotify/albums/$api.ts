import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'
import type { Methods as Methods2 } from './_id@string/tracks'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/albums'
  const PATH1 = '/tracks'
  const GET = 'GET'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        tracks: {
          /**
           * Get Spotify catalog information about an album’s tracks.
           * Optional parameters can be used to limit the number of tracks returned.
           * @returns Pages of tracks
           */
          get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Get Spotify catalog information about an album’s tracks.
           * Optional parameters can be used to limit the number of tracks returned.
           * @returns Pages of tracks
           */
          $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Get Spotify catalog information for a single album.
         * @returns An album
         */
        get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get Spotify catalog information for a single album.
         * @returns An album
         */
        $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    /**
     * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
     * @returns A set of albums
     */
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
     * @returns A set of albums
     */
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
