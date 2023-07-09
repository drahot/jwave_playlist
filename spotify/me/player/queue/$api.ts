import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/me/player/queue'
  const GET = 'GET'
  const POST = 'POST'

  return {
    /**
     * Get the list of objects that make up the user's queue.
     * @returns Information about the queue
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get the list of objects that make up the user's queue.
     * @returns Information about the queue
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * Add an item to the end of the user's current playback queue.
     */
    post: (option: { query: Methods0['post']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
    /**
     * Add an item to the end of the user's current playback queue.
     */
    $post: (option: { query: Methods0['post']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: (option?: { method: 'post'; query: Methods0['post']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
