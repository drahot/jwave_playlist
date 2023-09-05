import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1y9ul7b } from './contains';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/me/shows';
  const PATH1 = '/me/shows/contains';
  const GET = 'GET';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    contains: {
      /**
       * Check if one or more shows is already saved in the current Spotify user's library.
       * @returns Array of booleans
       */
      get: (option: { query: Methods_1y9ul7b['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1y9ul7b['get']['resBody'], BasicHeaders, Methods_1y9ul7b['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Check if one or more shows is already saved in the current Spotify user's library.
       * @returns Array of booleans
       */
      $get: (option: { query: Methods_1y9ul7b['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1y9ul7b['get']['resBody'], BasicHeaders, Methods_1y9ul7b['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1y9ul7b['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
     * @returns Pages of shows
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
     * @returns Pages of shows
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * Save one or more shows to current Spotify user's library.
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], query: Methods_by08hd['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * Save one or more shows to current Spotify user's library.
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], query: Methods_by08hd['put']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    /**
     * Delete one or more shows from current Spotify user's library.
     */
    delete: (option: { body: Methods_by08hd['delete']['reqBody'], query: Methods_by08hd['delete']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['delete']['status']>(prefix, PATH0, DELETE, option).send(),
    /**
     * Delete one or more shows from current Spotify user's library.
     */
    $delete: (option: { body: Methods_by08hd['delete']['reqBody'], query: Methods_by08hd['delete']['query'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | { method: 'put'; query: Methods_by08hd['put']['query'] } | { method: 'delete'; query: Methods_by08hd['delete']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
