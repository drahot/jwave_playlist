import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1bbtxgw } from './_playlist_id@string';
import type { Methods as Methods_1nzy11w } from './_playlist_id@string/followers';
import type { Methods as Methods_1jaabx0 } from './_playlist_id@string/followers/contains';
import type { Methods as Methods_175v5bn } from './_playlist_id@string/images';
import type { Methods as Methods_z5yzat } from './_playlist_id@string/tracks';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/playlists';
  const PATH1 = '/followers';
  const PATH2 = '/followers/contains';
  const PATH3 = '/images';
  const PATH4 = '/tracks';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _playlist_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        followers: {
          contains: {
            /**
             * Check to see if one or more Spotify users are following a specified playlist.
             * @returns Array of booleans
             */
            get: (option: { query: Methods_1jaabx0['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1jaabx0['get']['resBody'], BasicHeaders, Methods_1jaabx0['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
            /**
             * Check to see if one or more Spotify users are following a specified playlist.
             * @returns Array of booleans
             */
            $get: (option: { query: Methods_1jaabx0['get']['query'], config?: T | undefined }) =>
              fetch<Methods_1jaabx0['get']['resBody'], BasicHeaders, Methods_1jaabx0['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1jaabx0['get']['query'] } | undefined) =>
              `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Add the current user as a follower of a playlist.
           */
          put: (option: { body: Methods_1nzy11w['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1nzy11w['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).send(),
          /**
           * Add the current user as a follower of a playlist.
           */
          $put: (option: { body: Methods_1nzy11w['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1nzy11w['put']['status']>(prefix, `${prefix0}${PATH1}`, PUT, option).send().then(r => r.body),
          /**
           * Remove the current user as a follower of a playlist.
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1nzy11w['delete']['status']>(prefix, `${prefix0}${PATH1}`, DELETE, option).send(),
          /**
           * Remove the current user as a follower of a playlist.
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1nzy11w['delete']['status']>(prefix, `${prefix0}${PATH1}`, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        images: {
          /**
           * Get the current image associated with a specific playlist.
           * @returns A set of images
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_175v5bn['get']['resBody'], BasicHeaders, Methods_175v5bn['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
          /**
           * Get the current image associated with a specific playlist.
           * @returns A set of images
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_175v5bn['get']['resBody'], BasicHeaders, Methods_175v5bn['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
          /**
           * Replace the image used to represent a specific playlist.
           */
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_175v5bn['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).send(),
          /**
           * Replace the image used to represent a specific playlist.
           */
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_175v5bn['put']['status']>(prefix, `${prefix0}${PATH3}`, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`,
        },
        tracks: {
          /**
           * Get full details of the items of a playlist owned by a Spotify user.
           * @returns Pages of tracks
           */
          get: (option?: { query?: Methods_z5yzat['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_z5yzat['get']['resBody'], BasicHeaders, Methods_z5yzat['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
          /**
           * Get full details of the items of a playlist owned by a Spotify user.
           * @returns Pages of tracks
           */
          $get: (option?: { query?: Methods_z5yzat['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_z5yzat['get']['resBody'], BasicHeaders, Methods_z5yzat['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
          /**
           * Add one or more items to a user's playlist.
           * @returns A snapshot ID for the playlist
           */
          post: (option: { body: Methods_z5yzat['post']['reqBody'], query?: Methods_z5yzat['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_z5yzat['post']['resBody'], BasicHeaders, Methods_z5yzat['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
          /**
           * Add one or more items to a user's playlist.
           * @returns A snapshot ID for the playlist
           */
          $post: (option: { body: Methods_z5yzat['post']['reqBody'], query?: Methods_z5yzat['post']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_z5yzat['post']['resBody'], BasicHeaders, Methods_z5yzat['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body),
          /**
           * Either reorder or replace items in a playlist depending on the request's parameters.
           * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
           * To replace items, include `uris` as either a query parameter or in the request's body.
           * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
           * <br/>
           * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
           * These operations can't be applied together in a single request.
           * @returns A snapshot ID for the playlist
           */
          put: (option: { body: Methods_z5yzat['put']['reqBody'], query?: Methods_z5yzat['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_z5yzat['put']['resBody'], BasicHeaders, Methods_z5yzat['put']['status']>(prefix, `${prefix0}${PATH4}`, PUT, option).json(),
          /**
           * Either reorder or replace items in a playlist depending on the request's parameters.
           * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
           * To replace items, include `uris` as either a query parameter or in the request's body.
           * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
           * <br/>
           * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
           * These operations can't be applied together in a single request.
           * @returns A snapshot ID for the playlist
           */
          $put: (option: { body: Methods_z5yzat['put']['reqBody'], query?: Methods_z5yzat['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<Methods_z5yzat['put']['resBody'], BasicHeaders, Methods_z5yzat['put']['status']>(prefix, `${prefix0}${PATH4}`, PUT, option).json().then(r => r.body),
          /**
           * Remove one or more items from a user's playlist.
           * @returns A snapshot ID for the playlist
           */
          delete: (option: { body: Methods_z5yzat['delete']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_z5yzat['delete']['resBody'], BasicHeaders, Methods_z5yzat['delete']['status']>(prefix, `${prefix0}${PATH4}`, DELETE, option).json(),
          /**
           * Remove one or more items from a user's playlist.
           * @returns A snapshot ID for the playlist
           */
          $delete: (option: { body: Methods_z5yzat['delete']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_z5yzat['delete']['resBody'], BasicHeaders, Methods_z5yzat['delete']['status']>(prefix, `${prefix0}${PATH4}`, DELETE, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_z5yzat['get']['query'] } | { method: 'post'; query: Methods_z5yzat['post']['query'] } | { method: 'put'; query: Methods_z5yzat['put']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get a playlist owned by a Spotify user.
         * @returns A playlist
         */
        get: (option?: { query?: Methods_1bbtxgw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bbtxgw['get']['resBody'], BasicHeaders, Methods_1bbtxgw['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * Get a playlist owned by a Spotify user.
         * @returns A playlist
         */
        $get: (option?: { query?: Methods_1bbtxgw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1bbtxgw['get']['resBody'], BasicHeaders, Methods_1bbtxgw['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * Change a playlist's name and public/private state. (The user must, of
         * course, own the playlist.)
         */
        put: (option: { body: Methods_1bbtxgw['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bbtxgw['put']['status']>(prefix, prefix0, PUT, option).send(),
        /**
         * Change a playlist's name and public/private state. (The user must, of
         * course, own the playlist.)
         */
        $put: (option: { body: Methods_1bbtxgw['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1bbtxgw['put']['status']>(prefix, prefix0, PUT, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1bbtxgw['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
