import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/me/player/shuffle';
  const PUT = 'PUT';

  return {
    /**
     * Toggle shuffle on or off for user’s playback.
     */
    put: (option: { query: Methods_by08hd['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * Toggle shuffle on or off for user’s playback.
     */
    $put: (option: { query: Methods_by08hd['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: (option?: { method: 'put'; query: Methods_by08hd['put']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
