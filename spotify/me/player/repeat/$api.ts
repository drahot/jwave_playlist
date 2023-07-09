import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/me/player/repeat'
  const PUT = 'PUT'

  return {
    /**
     * Set the repeat mode for the user's playback. Options are repeat-track,
     * repeat-context, and off.
     */
    put: (option: { query: Methods0['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * Set the repeat mode for the user's playback. Options are repeat-track,
     * repeat-context, and off.
     */
    $put: (option: { query: Methods0['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: (option?: { method: 'put'; query: Methods0['put']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
