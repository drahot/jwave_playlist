import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_121mq9s } from './api/token';
import type { Methods as Methods_1a0amat } from './authorize';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://accounts.spotify.com' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/token';
  const PATH1 = '/authorize';
  const GET = 'GET';
  const POST = 'POST';

  return {
    api: {
      token: {
        post: (option: { body: Methods_121mq9s['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_121mq9s['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
        $post: (option: { body: Methods_121mq9s['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_121mq9s['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
    authorize: {
      get: (option: { query: Methods_1a0amat['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1a0amat['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query: Methods_1a0amat['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1a0amat['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1a0amat['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
