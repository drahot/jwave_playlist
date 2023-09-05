import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1r9dgbp } from './_user_id@string';
import type { Methods as Methods_gbmss1 } from './_user_id@string/playlists';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/users';
  const PATH1 = '/playlists';
  const GET = 'GET';
  const POST = 'POST';

  return {
    _user_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        playlists: {
          /**
           * Get a list of the playlists owned or followed by a Spotify user.
           * @returns A paged set of playlists
           */
          get: (option?: { query?: Methods_gbmss1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gbmss1['get']['resBody'], BasicHeaders, Methods_gbmss1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * Get a list of the playlists owned or followed by a Spotify user.
           * @returns A paged set of playlists
           */
          $get: (option?: { query?: Methods_gbmss1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_gbmss1['get']['resBody'], BasicHeaders, Methods_gbmss1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * Create a playlist for a Spotify user. (The playlist will be empty until
           * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
           * @returns A playlist
           */
          post: (option: { body: Methods_gbmss1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_gbmss1['post']['resBody'], BasicHeaders, Methods_gbmss1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * Create a playlist for a Spotify user. (The playlist will be empty until
           * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
           * @returns A playlist
           */
          $post: (option: { body: Methods_gbmss1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_gbmss1['post']['resBody'], BasicHeaders, Methods_gbmss1['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_gbmss1['get']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get public profile information about a Spotify user.
         * @returns A user
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1r9dgbp['get']['resBody'], BasicHeaders, Methods_1r9dgbp['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get public profile information about a Spotify user.
         * @returns A user
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1r9dgbp['get']['resBody'], BasicHeaders, Methods_1r9dgbp['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
