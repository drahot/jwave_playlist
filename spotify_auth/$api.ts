import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://accounts.spotify.com/api' : baseURL).replace(/\/$/, '')

  const POST = 'POST'

  return {
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).json(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).json().then(r => r.body),
    $path: () => `${prefix}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
