import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_47458q } from './artists';
import type { Methods as Methods_m6qvv2 } from './tracks';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/me/top/artists';
  const PATH1 = '/me/top/tracks';
  const GET = 'GET';

  return {
    artists: {
      /**
       * Get the current user's top artists based on calculated affinity.
       * @returns Pages of artists
       */
      get: (option?: { query?: Methods_47458q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_47458q['get']['resBody'], BasicHeaders, Methods_47458q['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Get the current user's top artists based on calculated affinity.
       * @returns Pages of artists
       */
      $get: (option?: { query?: Methods_47458q['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_47458q['get']['resBody'], BasicHeaders, Methods_47458q['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_47458q['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    tracks: {
      /**
       * Get the current user's top tracks based on calculated affinity.
       * @returns Pages of tracks
       */
      get: (option?: { query?: Methods_m6qvv2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_m6qvv2['get']['resBody'], BasicHeaders, Methods_m6qvv2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get the current user's top tracks based on calculated affinity.
       * @returns Pages of tracks
       */
      $get: (option?: { query?: Methods_m6qvv2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_m6qvv2['get']['resBody'], BasicHeaders, Methods_m6qvv2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_m6qvv2['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
