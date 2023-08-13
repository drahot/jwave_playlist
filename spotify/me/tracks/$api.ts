import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './contains'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/me/tracks'
  const PATH1 = '/me/tracks/contains'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    contains: {
      /**
       * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
       * @returns Array of booleans
       */
      get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
       * @returns Array of booleans
       */
      $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
     * @returns Pages of tracks
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
     * @returns Pages of tracks
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * Save one or more tracks to the current user's 'Your Music' library.
     */
    put: (option: { body: Methods0['put']['reqBody'], query: Methods0['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * Save one or more tracks to the current user's 'Your Music' library.
     */
    $put: (option: { body: Methods0['put']['reqBody'], query: Methods0['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    /**
     * Remove one or more tracks from the current user's 'Your Music' library.
     */
    delete: (option: { body: Methods0['delete']['reqBody'], query: Methods0['delete']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send(),
    /**
     * Remove one or more tracks from the current user's 'Your Music' library.
     */
    $delete: (option: { body: Methods0['delete']['reqBody'], query: Methods0['delete']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | { method: 'put'; query: Methods0['put']['query'] } | { method: 'delete'; query: Methods0['delete']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
