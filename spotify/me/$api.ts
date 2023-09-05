import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_vbdq2m } from './albums';
import type { Methods as Methods_z175t6 } from './albums/contains';
import type { Methods as Methods_zzs2n2 } from './audiobooks';
import type { Methods as Methods_hh68ne } from './audiobooks/contains';
import type { Methods as Methods_xioq18 } from './episodes';
import type { Methods as Methods_g3uop8 } from './episodes/contains';
import type { Methods as Methods_1o30snl } from './following';
import type { Methods as Methods_151anef } from './following/contains';
import type { Methods as Methods_qc8vpv } from './player';
import type { Methods as Methods_1je0jtx } from './player/currently-playing';
import type { Methods as Methods_c2tfqv } from './player/devices';
import type { Methods as Methods_1ij7gbx } from './player/next';
import type { Methods as Methods_flau4e } from './player/pause';
import type { Methods as Methods_7ze0gu } from './player/play';
import type { Methods as Methods_ktb021 } from './player/previous';
import type { Methods as Methods_152oi3f } from './player/queue';
import type { Methods as Methods_1518k70 } from './player/recently-played';
import type { Methods as Methods_6nhn } from './player/repeat';
import type { Methods as Methods_1lrwtr0 } from './player/seek';
import type { Methods as Methods_1cuu00d } from './player/shuffle';
import type { Methods as Methods_10z2gqu } from './player/volume';
import type { Methods as Methods_1xpabbh } from './playlists';
import type { Methods as Methods_1m02nw4 } from './shows';
import type { Methods as Methods_1q8xek4 } from './shows/contains';
import type { Methods as Methods_1p4y4se } from './top/artists';
import type { Methods as Methods_pivdnm } from './top/tracks';
import type { Methods as Methods_m6qvv2 } from './tracks';
import type { Methods as Methods_1pmi0ka } from './tracks/contains';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/me';
  const PATH1 = '/me/albums';
  const PATH2 = '/me/albums/contains';
  const PATH3 = '/me/audiobooks';
  const PATH4 = '/me/audiobooks/contains';
  const PATH5 = '/me/episodes';
  const PATH6 = '/me/episodes/contains';
  const PATH7 = '/me/following';
  const PATH8 = '/me/following/contains';
  const PATH9 = '/me/player';
  const PATH10 = '/me/player/currently-playing';
  const PATH11 = '/me/player/devices';
  const PATH12 = '/me/player/next';
  const PATH13 = '/me/player/pause';
  const PATH14 = '/me/player/play';
  const PATH15 = '/me/player/previous';
  const PATH16 = '/me/player/queue';
  const PATH17 = '/me/player/recently-played';
  const PATH18 = '/me/player/repeat';
  const PATH19 = '/me/player/seek';
  const PATH20 = '/me/player/shuffle';
  const PATH21 = '/me/player/volume';
  const PATH22 = '/me/playlists';
  const PATH23 = '/me/shows';
  const PATH24 = '/me/shows/contains';
  const PATH25 = '/me/top/artists';
  const PATH26 = '/me/top/tracks';
  const PATH27 = '/me/tracks';
  const PATH28 = '/me/tracks/contains';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    albums: {
      contains: {
        /**
         * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods_z175t6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_z175t6['get']['resBody'], BasicHeaders, Methods_z175t6['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods_z175t6['get']['query'], config?: T | undefined }) =>
          fetch<Methods_z175t6['get']['resBody'], BasicHeaders, Methods_z175t6['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_z175t6['get']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of albums
       */
      get: (option?: { query?: Methods_vbdq2m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_vbdq2m['get']['resBody'], BasicHeaders, Methods_vbdq2m['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of albums
       */
      $get: (option?: { query?: Methods_vbdq2m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_vbdq2m['get']['resBody'], BasicHeaders, Methods_vbdq2m['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Save one or more albums to the current user's 'Your Music' library.
       */
      put: (option: { body: Methods_vbdq2m['put']['reqBody'], query: Methods_vbdq2m['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_vbdq2m['put']['status']>(prefix, PATH1, PUT, option).send(),
      /**
       * Save one or more albums to the current user's 'Your Music' library.
       */
      $put: (option: { body: Methods_vbdq2m['put']['reqBody'], query: Methods_vbdq2m['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_vbdq2m['put']['status']>(prefix, PATH1, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more albums from the current user's 'Your Music' library.
       */
      delete: (option: { body: Methods_vbdq2m['delete']['reqBody'], query: Methods_vbdq2m['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_vbdq2m['delete']['status']>(prefix, PATH1, DELETE, option).send(),
      /**
       * Remove one or more albums from the current user's 'Your Music' library.
       */
      $delete: (option: { body: Methods_vbdq2m['delete']['reqBody'], query: Methods_vbdq2m['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_vbdq2m['delete']['status']>(prefix, PATH1, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_vbdq2m['get']['query'] } | { method: 'put'; query: Methods_vbdq2m['put']['query'] } | { method: 'delete'; query: Methods_vbdq2m['delete']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    audiobooks: {
      contains: {
        /**
         * Check if one or more audiobooks are already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods_hh68ne['get']['query'], config?: T | undefined }) =>
          fetch<Methods_hh68ne['get']['resBody'], BasicHeaders, Methods_hh68ne['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * Check if one or more audiobooks are already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods_hh68ne['get']['query'], config?: T | undefined }) =>
          fetch<Methods_hh68ne['get']['resBody'], BasicHeaders, Methods_hh68ne['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_hh68ne['get']['query'] } | undefined) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of saved audiobooks
       */
      get: (option?: { query?: Methods_zzs2n2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_zzs2n2['get']['resBody'], BasicHeaders, Methods_zzs2n2['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of saved audiobooks
       */
      $get: (option?: { query?: Methods_zzs2n2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_zzs2n2['get']['resBody'], BasicHeaders, Methods_zzs2n2['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * Save one or more audiobooks to the current Spotify user's library.
       */
      put: (option: { query: Methods_zzs2n2['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zzs2n2['put']['status']>(prefix, PATH3, PUT, option).send(),
      /**
       * Save one or more audiobooks to the current Spotify user's library.
       */
      $put: (option: { query: Methods_zzs2n2['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zzs2n2['put']['status']>(prefix, PATH3, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more audiobooks from the Spotify user's library.
       */
      delete: (option: { query: Methods_zzs2n2['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zzs2n2['delete']['status']>(prefix, PATH3, DELETE, option).send(),
      /**
       * Remove one or more audiobooks from the Spotify user's library.
       */
      $delete: (option: { query: Methods_zzs2n2['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zzs2n2['delete']['status']>(prefix, PATH3, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_zzs2n2['get']['query'] } | { method: 'put'; query: Methods_zzs2n2['put']['query'] } | { method: 'delete'; query: Methods_zzs2n2['delete']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    episodes: {
      contains: {
        /**
         * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
         * @returns Array of booleans
         */
        get: (option: { query: Methods_g3uop8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_g3uop8['get']['resBody'], BasicHeaders, Methods_g3uop8['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
         * @returns Array of booleans
         */
        $get: (option: { query: Methods_g3uop8['get']['query'], config?: T | undefined }) =>
          fetch<Methods_g3uop8['get']['resBody'], BasicHeaders, Methods_g3uop8['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_g3uop8['get']['query'] } | undefined) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get a list of the episodes saved in the current Spotify user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       * @returns Pages of episodes
       */
      get: (option?: { query?: Methods_xioq18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_xioq18['get']['resBody'], BasicHeaders, Methods_xioq18['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * Get a list of the episodes saved in the current Spotify user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       * @returns Pages of episodes
       */
      $get: (option?: { query?: Methods_xioq18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_xioq18['get']['resBody'], BasicHeaders, Methods_xioq18['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * Save one or more episodes to the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      put: (option: { body: Methods_xioq18['put']['reqBody'], query: Methods_xioq18['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_xioq18['put']['status']>(prefix, PATH5, PUT, option).send(),
      /**
       * Save one or more episodes to the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      $put: (option: { body: Methods_xioq18['put']['reqBody'], query: Methods_xioq18['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_xioq18['put']['status']>(prefix, PATH5, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more episodes from the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      delete: (option: { body: Methods_xioq18['delete']['reqBody'], query: Methods_xioq18['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_xioq18['delete']['status']>(prefix, PATH5, DELETE, option).send(),
      /**
       * Remove one or more episodes from the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      $delete: (option: { body: Methods_xioq18['delete']['reqBody'], query: Methods_xioq18['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_xioq18['delete']['status']>(prefix, PATH5, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_xioq18['get']['query'] } | { method: 'put'; query: Methods_xioq18['put']['query'] } | { method: 'delete'; query: Methods_xioq18['delete']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    following: {
      contains: {
        /**
         * Check to see if the current user is following one or more artists or other Spotify users.
         * @returns Array of booleans
         */
        get: (option: { query: Methods_151anef['get']['query'], config?: T | undefined }) =>
          fetch<Methods_151anef['get']['resBody'], BasicHeaders, Methods_151anef['get']['status']>(prefix, PATH8, GET, option).json(),
        /**
         * Check to see if the current user is following one or more artists or other Spotify users.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods_151anef['get']['query'], config?: T | undefined }) =>
          fetch<Methods_151anef['get']['resBody'], BasicHeaders, Methods_151anef['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_151anef['get']['query'] } | undefined) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get the current user's followed artists.
       * @returns A paged set of artists
       */
      get: (option: { query: Methods_1o30snl['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1o30snl['get']['resBody'], BasicHeaders, Methods_1o30snl['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * Get the current user's followed artists.
       * @returns A paged set of artists
       */
      $get: (option: { query: Methods_1o30snl['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1o30snl['get']['resBody'], BasicHeaders, Methods_1o30snl['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * Add the current user as a follower of one or more artists or other Spotify users.
       */
      put: (option: { body: Methods_1o30snl['put']['reqBody'], query: Methods_1o30snl['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1o30snl['put']['status']>(prefix, PATH7, PUT, option).send(),
      /**
       * Add the current user as a follower of one or more artists or other Spotify users.
       */
      $put: (option: { body: Methods_1o30snl['put']['reqBody'], query: Methods_1o30snl['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1o30snl['put']['status']>(prefix, PATH7, PUT, option).send().then(r => r.body),
      /**
       * Remove the current user as a follower of one or more artists or other Spotify users.
       */
      delete: (option: { body: Methods_1o30snl['delete']['reqBody'], query: Methods_1o30snl['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1o30snl['delete']['status']>(prefix, PATH7, DELETE, option).send(),
      /**
       * Remove the current user as a follower of one or more artists or other Spotify users.
       */
      $delete: (option: { body: Methods_1o30snl['delete']['reqBody'], query: Methods_1o30snl['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1o30snl['delete']['status']>(prefix, PATH7, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1o30snl['get']['query'] } | { method: 'put'; query: Methods_1o30snl['put']['query'] } | { method: 'delete'; query: Methods_1o30snl['delete']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    player: {
      currently_playing: {
        /**
         * Get the object currently being played on the user's Spotify account.
         * @returns Information about the currently playing track
         */
        get: (option?: { query?: Methods_1je0jtx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1je0jtx['get']['resBody'], BasicHeaders, Methods_1je0jtx['get']['status']>(prefix, PATH10, GET, option).json(),
        /**
         * Get the object currently being played on the user's Spotify account.
         * @returns Information about the currently playing track
         */
        $get: (option?: { query?: Methods_1je0jtx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1je0jtx['get']['resBody'], BasicHeaders, Methods_1je0jtx['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1je0jtx['get']['query'] } | undefined) =>
          `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      devices: {
        /**
         * Get information about a user’s available devices.
         * @returns A set of devices
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_c2tfqv['get']['resBody'], BasicHeaders, Methods_c2tfqv['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * Get information about a user’s available devices.
         * @returns A set of devices
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_c2tfqv['get']['resBody'], BasicHeaders, Methods_c2tfqv['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH11}`,
      },
      next: {
        /**
         * Skips to next track in the user’s queue.
         */
        post: (option?: { query?: Methods_1ij7gbx['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1ij7gbx['post']['status']>(prefix, PATH12, POST, option).send(),
        /**
         * Skips to next track in the user’s queue.
         */
        $post: (option?: { query?: Methods_1ij7gbx['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1ij7gbx['post']['status']>(prefix, PATH12, POST, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_1ij7gbx['post']['query'] } | undefined) =>
          `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      pause: {
        /**
         * Pause playback on the user's account.
         */
        put: (option?: { query?: Methods_flau4e['put']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_flau4e['put']['status']>(prefix, PATH13, PUT, option).send(),
        /**
         * Pause playback on the user's account.
         */
        $put: (option?: { query?: Methods_flau4e['put']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_flau4e['put']['status']>(prefix, PATH13, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_flau4e['put']['query'] } | undefined) =>
          `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      play: {
        /**
         * Start a new context or resume current playback on the user's active device.
         */
        put: (option: { body: Methods_7ze0gu['put']['reqBody'], query?: Methods_7ze0gu['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_7ze0gu['put']['status']>(prefix, PATH14, PUT, option).send(),
        /**
         * Start a new context or resume current playback on the user's active device.
         */
        $put: (option: { body: Methods_7ze0gu['put']['reqBody'], query?: Methods_7ze0gu['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_7ze0gu['put']['status']>(prefix, PATH14, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_7ze0gu['put']['query'] } | undefined) =>
          `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      previous: {
        /**
         * Skips to previous track in the user’s queue.
         */
        post: (option?: { query?: Methods_ktb021['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_ktb021['post']['status']>(prefix, PATH15, POST, option).send(),
        /**
         * Skips to previous track in the user’s queue.
         */
        $post: (option?: { query?: Methods_ktb021['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_ktb021['post']['status']>(prefix, PATH15, POST, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_ktb021['post']['query'] } | undefined) =>
          `${prefix}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      queue: {
        /**
         * Get the list of objects that make up the user's queue.
         * @returns Information about the queue
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_152oi3f['get']['resBody'], BasicHeaders, Methods_152oi3f['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * Get the list of objects that make up the user's queue.
         * @returns Information about the queue
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_152oi3f['get']['resBody'], BasicHeaders, Methods_152oi3f['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        /**
         * Add an item to the end of the user's current playback queue.
         */
        post: (option: { query: Methods_152oi3f['post']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_152oi3f['post']['status']>(prefix, PATH16, POST, option).send(),
        /**
         * Add an item to the end of the user's current playback queue.
         */
        $post: (option: { query: Methods_152oi3f['post']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_152oi3f['post']['status']>(prefix, PATH16, POST, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods_152oi3f['post']['query'] } | undefined) =>
          `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      recently_played: {
        /**
         * Get tracks from the current user's recently played tracks.
         * _**Note**: Currently doesn't support podcast episodes._
         * @returns A paged set of tracks
         */
        get: (option?: { query?: Methods_1518k70['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1518k70['get']['resBody'], BasicHeaders, Methods_1518k70['get']['status']>(prefix, PATH17, GET, option).json(),
        /**
         * Get tracks from the current user's recently played tracks.
         * _**Note**: Currently doesn't support podcast episodes._
         * @returns A paged set of tracks
         */
        $get: (option?: { query?: Methods_1518k70['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1518k70['get']['resBody'], BasicHeaders, Methods_1518k70['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1518k70['get']['query'] } | undefined) =>
          `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      repeat: {
        /**
         * Set the repeat mode for the user's playback. Options are repeat-track,
         * repeat-context, and off.
         */
        put: (option: { query: Methods_6nhn['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_6nhn['put']['status']>(prefix, PATH18, PUT, option).send(),
        /**
         * Set the repeat mode for the user's playback. Options are repeat-track,
         * repeat-context, and off.
         */
        $put: (option: { query: Methods_6nhn['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_6nhn['put']['status']>(prefix, PATH18, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_6nhn['put']['query'] } | undefined) =>
          `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      seek: {
        /**
         * Seeks to the given position in the user’s currently playing track.
         */
        put: (option: { query: Methods_1lrwtr0['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1lrwtr0['put']['status']>(prefix, PATH19, PUT, option).send(),
        /**
         * Seeks to the given position in the user’s currently playing track.
         */
        $put: (option: { query: Methods_1lrwtr0['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1lrwtr0['put']['status']>(prefix, PATH19, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_1lrwtr0['put']['query'] } | undefined) =>
          `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shuffle: {
        /**
         * Toggle shuffle on or off for user’s playback.
         */
        put: (option: { query: Methods_1cuu00d['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1cuu00d['put']['status']>(prefix, PATH20, PUT, option).send(),
        /**
         * Toggle shuffle on or off for user’s playback.
         */
        $put: (option: { query: Methods_1cuu00d['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_1cuu00d['put']['status']>(prefix, PATH20, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_1cuu00d['put']['query'] } | undefined) =>
          `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      volume: {
        /**
         * Set the volume for the user’s current playback device.
         */
        put: (option: { query: Methods_10z2gqu['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_10z2gqu['put']['status']>(prefix, PATH21, PUT, option).send(),
        /**
         * Set the volume for the user’s current playback device.
         */
        $put: (option: { query: Methods_10z2gqu['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_10z2gqu['put']['status']>(prefix, PATH21, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods_10z2gqu['put']['query'] } | undefined) =>
          `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get information about the user’s current playback state, including track or episode, progress, and active device.
       * @returns Information about playback
       */
      get: (option?: { query?: Methods_qc8vpv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_qc8vpv['get']['resBody'], BasicHeaders, Methods_qc8vpv['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * Get information about the user’s current playback state, including track or episode, progress, and active device.
       * @returns Information about playback
       */
      $get: (option?: { query?: Methods_qc8vpv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_qc8vpv['get']['resBody'], BasicHeaders, Methods_qc8vpv['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      /**
       * Transfer playback to a new device and determine if it should start playing.
       */
      put: (option: { body: Methods_qc8vpv['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_qc8vpv['put']['status']>(prefix, PATH9, PUT, option).send(),
      /**
       * Transfer playback to a new device and determine if it should start playing.
       */
      $put: (option: { body: Methods_qc8vpv['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_qc8vpv['put']['status']>(prefix, PATH9, PUT, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_qc8vpv['get']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    playlists: {
      /**
       * Get a list of the playlists owned or followed by the current Spotify
       * user.
       * @returns A paged set of playlists
       */
      get: (option?: { query?: Methods_1xpabbh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xpabbh['get']['resBody'], BasicHeaders, Methods_1xpabbh['get']['status']>(prefix, PATH22, GET, option).json(),
      /**
       * Get a list of the playlists owned or followed by the current Spotify
       * user.
       * @returns A paged set of playlists
       */
      $get: (option?: { query?: Methods_1xpabbh['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xpabbh['get']['resBody'], BasicHeaders, Methods_1xpabbh['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xpabbh['get']['query'] } | undefined) =>
        `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shows: {
      contains: {
        /**
         * Check if one or more shows is already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods_1q8xek4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1q8xek4['get']['resBody'], BasicHeaders, Methods_1q8xek4['get']['status']>(prefix, PATH24, GET, option).json(),
        /**
         * Check if one or more shows is already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods_1q8xek4['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1q8xek4['get']['resBody'], BasicHeaders, Methods_1q8xek4['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1q8xek4['get']['query'] } | undefined) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
       * @returns Pages of shows
       */
      get: (option?: { query?: Methods_1m02nw4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1m02nw4['get']['resBody'], BasicHeaders, Methods_1m02nw4['get']['status']>(prefix, PATH23, GET, option).json(),
      /**
       * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
       * @returns Pages of shows
       */
      $get: (option?: { query?: Methods_1m02nw4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1m02nw4['get']['resBody'], BasicHeaders, Methods_1m02nw4['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
      /**
       * Save one or more shows to current Spotify user's library.
       */
      put: (option: { body: Methods_1m02nw4['put']['reqBody'], query: Methods_1m02nw4['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1m02nw4['put']['status']>(prefix, PATH23, PUT, option).send(),
      /**
       * Save one or more shows to current Spotify user's library.
       */
      $put: (option: { body: Methods_1m02nw4['put']['reqBody'], query: Methods_1m02nw4['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1m02nw4['put']['status']>(prefix, PATH23, PUT, option).send().then(r => r.body),
      /**
       * Delete one or more shows from current Spotify user's library.
       */
      delete: (option: { body: Methods_1m02nw4['delete']['reqBody'], query: Methods_1m02nw4['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1m02nw4['delete']['status']>(prefix, PATH23, DELETE, option).send(),
      /**
       * Delete one or more shows from current Spotify user's library.
       */
      $delete: (option: { body: Methods_1m02nw4['delete']['reqBody'], query: Methods_1m02nw4['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1m02nw4['delete']['status']>(prefix, PATH23, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1m02nw4['get']['query'] } | { method: 'put'; query: Methods_1m02nw4['put']['query'] } | { method: 'delete'; query: Methods_1m02nw4['delete']['query'] } | undefined) =>
        `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    top: {
      artists: {
        /**
         * Get the current user's top artists based on calculated affinity.
         * @returns Pages of artists
         */
        get: (option?: { query?: Methods_1p4y4se['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1p4y4se['get']['resBody'], BasicHeaders, Methods_1p4y4se['get']['status']>(prefix, PATH25, GET, option).json(),
        /**
         * Get the current user's top artists based on calculated affinity.
         * @returns Pages of artists
         */
        $get: (option?: { query?: Methods_1p4y4se['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1p4y4se['get']['resBody'], BasicHeaders, Methods_1p4y4se['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1p4y4se['get']['query'] } | undefined) =>
          `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      tracks: {
        /**
         * Get the current user's top tracks based on calculated affinity.
         * @returns Pages of tracks
         */
        get: (option?: { query?: Methods_pivdnm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_pivdnm['get']['resBody'], BasicHeaders, Methods_pivdnm['get']['status']>(prefix, PATH26, GET, option).json(),
        /**
         * Get the current user's top tracks based on calculated affinity.
         * @returns Pages of tracks
         */
        $get: (option?: { query?: Methods_pivdnm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_pivdnm['get']['resBody'], BasicHeaders, Methods_pivdnm['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_pivdnm['get']['query'] } | undefined) =>
          `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    tracks: {
      contains: {
        /**
         * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods_1pmi0ka['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1pmi0ka['get']['resBody'], BasicHeaders, Methods_1pmi0ka['get']['status']>(prefix, PATH28, GET, option).json(),
        /**
         * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods_1pmi0ka['get']['query'], config?: T | undefined }) =>
          fetch<Methods_1pmi0ka['get']['resBody'], BasicHeaders, Methods_1pmi0ka['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1pmi0ka['get']['query'] } | undefined) =>
          `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of tracks
       */
      get: (option?: { query?: Methods_m6qvv2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_m6qvv2['get']['resBody'], BasicHeaders, Methods_m6qvv2['get']['status']>(prefix, PATH27, GET, option).json(),
      /**
       * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of tracks
       */
      $get: (option?: { query?: Methods_m6qvv2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_m6qvv2['get']['resBody'], BasicHeaders, Methods_m6qvv2['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
      /**
       * Save one or more tracks to the current user's 'Your Music' library.
       */
      put: (option: { body: Methods_m6qvv2['put']['reqBody'], query: Methods_m6qvv2['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_m6qvv2['put']['status']>(prefix, PATH27, PUT, option).send(),
      /**
       * Save one or more tracks to the current user's 'Your Music' library.
       */
      $put: (option: { body: Methods_m6qvv2['put']['reqBody'], query: Methods_m6qvv2['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_m6qvv2['put']['status']>(prefix, PATH27, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more tracks from the current user's 'Your Music' library.
       */
      delete: (option: { body: Methods_m6qvv2['delete']['reqBody'], query: Methods_m6qvv2['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_m6qvv2['delete']['status']>(prefix, PATH27, DELETE, option).send(),
      /**
       * Remove one or more tracks from the current user's 'Your Music' library.
       */
      $delete: (option: { body: Methods_m6qvv2['delete']['reqBody'], query: Methods_m6qvv2['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_m6qvv2['delete']['status']>(prefix, PATH27, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_m6qvv2['get']['query'] } | { method: 'put'; query: Methods_m6qvv2['put']['query'] } | { method: 'delete'; query: Methods_m6qvv2['delete']['query'] } | undefined) =>
        `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * Get detailed profile information about the current user (including the
     * current user's username).
     * @returns A user
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get detailed profile information about the current user (including the
     * current user's username).
     * @returns A user
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
