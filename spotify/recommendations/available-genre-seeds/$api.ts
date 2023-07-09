import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/recommendations/available-genre-seeds'
  const GET = 'GET'

  return {
    /**
     * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
     * @returns A set of genres
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
     * @returns A set of genres
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
