import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/me/player/pause';
  const PUT = 'PUT';

  return {
    /**
     * Pause playback on the user's account.
     */
    put: (option?: { query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * Pause playback on the user's account.
     */
    $put: (option?: { query?: Methods_by08hd['put']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: (option?: { method: 'put'; query: Methods_by08hd['put']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
