import type { AspidaClient } from 'aspida';
import type { Methods as Methods_1pns1yn } from './token';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://accounts.spotify.com' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/token';
  const POST = 'POST';

  return {
    token: {
      post: (option: { body: Methods_1pns1yn['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pns1yn['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
      $post: (option: { body: Methods_1pns1yn['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pns1yn['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
