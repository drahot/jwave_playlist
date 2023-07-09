import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/search'
  const GET = 'GET'

  return {
    /**
     * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
     * that match a keyword string.<br />
     * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
     * @returns Search response
     */
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
     * that match a keyword string.<br />
     * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
     * @returns Search response
     */
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
