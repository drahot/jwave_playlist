import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_wdnfds } from './available-genre-seeds';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/recommendations';
  const PATH1 = '/recommendations/available-genre-seeds';
  const GET = 'GET';

  return {
    available_genre_seeds: {
      /**
       * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
       * @returns A set of genres
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_wdnfds['get']['resBody'], BasicHeaders, Methods_wdnfds['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
       * @returns A set of genres
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_wdnfds['get']['resBody'], BasicHeaders, Methods_wdnfds['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
     *
     * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
     * @returns A set of recommendations
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
     *
     * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
     * @returns A set of recommendations
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
