import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://accounts.spotify.com' : baseURL).replace(/\/$/, '')
  const PATH0 = '/authorize'
  const GET = 'GET'

  return {
    get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).arrayBuffer(),
    $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).arrayBuffer().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
