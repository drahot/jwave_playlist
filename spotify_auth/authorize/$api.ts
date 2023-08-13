import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://accounts.spotify.com' : baseURL).replace(/\/$/, '')
  const PATH0 = '/authorize'
  const GET = 'GET'

  return {
    get: (option: { body: Methods0['get']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option, 'URLSearchParams').arrayBuffer(),
    $get: (option: { body: Methods0['get']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option, 'URLSearchParams').arrayBuffer().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
