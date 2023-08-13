import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './api/token'
import type { Methods as Methods1 } from './authorize'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://accounts.spotify.com' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/token'
  const PATH1 = '/authorize'
  const GET = 'GET'
  const POST = 'POST'

  return {
    api: {
      token: {
        post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
        $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    },
    authorize: {
      get: (option: { body: Methods1['get']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option, 'URLSearchParams').arrayBuffer(),
      $get: (option: { body: Methods1['get']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option, 'URLSearchParams').arrayBuffer().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
