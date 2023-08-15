import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './albums'
import type { Methods as Methods2 } from './albums/contains'
import type { Methods as Methods3 } from './audiobooks'
import type { Methods as Methods4 } from './audiobooks/contains'
import type { Methods as Methods5 } from './episodes'
import type { Methods as Methods6 } from './episodes/contains'
import type { Methods as Methods7 } from './following'
import type { Methods as Methods8 } from './following/contains'
import type { Methods as Methods9 } from './player'
import type { Methods as Methods10 } from './player/currently-playing'
import type { Methods as Methods11 } from './player/devices'
import type { Methods as Methods12 } from './player/next'
import type { Methods as Methods13 } from './player/pause'
import type { Methods as Methods14 } from './player/play'
import type { Methods as Methods15 } from './player/previous'
import type { Methods as Methods16 } from './player/queue'
import type { Methods as Methods17 } from './player/recently-played'
import type { Methods as Methods18 } from './player/repeat'
import type { Methods as Methods19 } from './player/seek'
import type { Methods as Methods20 } from './player/shuffle'
import type { Methods as Methods21 } from './player/volume'
import type { Methods as Methods22 } from './playlists'
import type { Methods as Methods23 } from './shows'
import type { Methods as Methods24 } from './shows/contains'
import type { Methods as Methods25 } from './top/artists'
import type { Methods as Methods26 } from './top/tracks'
import type { Methods as Methods27 } from './tracks'
import type { Methods as Methods28 } from './tracks/contains'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/me'
  const PATH1 = '/me/albums'
  const PATH2 = '/me/albums/contains'
  const PATH3 = '/me/audiobooks'
  const PATH4 = '/me/audiobooks/contains'
  const PATH5 = '/me/episodes'
  const PATH6 = '/me/episodes/contains'
  const PATH7 = '/me/following'
  const PATH8 = '/me/following/contains'
  const PATH9 = '/me/player'
  const PATH10 = '/me/player/currently-playing'
  const PATH11 = '/me/player/devices'
  const PATH12 = '/me/player/next'
  const PATH13 = '/me/player/pause'
  const PATH14 = '/me/player/play'
  const PATH15 = '/me/player/previous'
  const PATH16 = '/me/player/queue'
  const PATH17 = '/me/player/recently-played'
  const PATH18 = '/me/player/repeat'
  const PATH19 = '/me/player/seek'
  const PATH20 = '/me/player/shuffle'
  const PATH21 = '/me/player/volume'
  const PATH22 = '/me/playlists'
  const PATH23 = '/me/shows'
  const PATH24 = '/me/shows/contains'
  const PATH25 = '/me/top/artists'
  const PATH26 = '/me/top/tracks'
  const PATH27 = '/me/tracks'
  const PATH28 = '/me/tracks/contains'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    albums: {
      contains: {
        /**
         * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods2['get']['query'], config?: T | undefined }) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
        /**
         * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods2['get']['query'], config?: T | undefined }) =>
          fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of albums
       */
      get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of albums
       */
      $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Save one or more albums to the current user's 'Your Music' library.
       */
      put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, PATH1, PUT, option).send(),
      /**
       * Save one or more albums to the current user's 'Your Music' library.
       */
      $put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, PATH1, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more albums from the current user's 'Your Music' library.
       */
      delete: (option: { body: Methods1['delete']['reqBody'], query: Methods1['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option).send(),
      /**
       * Remove one or more albums from the current user's 'Your Music' library.
       */
      $delete: (option: { body: Methods1['delete']['reqBody'], query: Methods1['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, PATH1, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | { method: 'put'; query: Methods1['put']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    audiobooks: {
      contains: {
        /**
         * Check if one or more audiobooks are already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * Check if one or more audiobooks are already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of saved audiobooks
       */
      get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of saved audiobooks
       */
      $get: (option?: { query?: Methods3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * Save one or more audiobooks to the current Spotify user's library.
       */
      put: (option: { query: Methods3['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, PATH3, PUT, option).send(),
      /**
       * Save one or more audiobooks to the current Spotify user's library.
       */
      $put: (option: { query: Methods3['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, PATH3, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more audiobooks from the Spotify user's library.
       */
      delete: (option: { query: Methods3['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, PATH3, DELETE, option).send(),
      /**
       * Remove one or more audiobooks from the Spotify user's library.
       */
      $delete: (option: { query: Methods3['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, PATH3, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | { method: 'put'; query: Methods3['put']['query'] } | { method: 'delete'; query: Methods3['delete']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    episodes: {
      contains: {
        /**
         * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
         * @returns Array of booleans
         */
        get: (option: { query: Methods6['get']['query'], config?: T | undefined }) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
         * @returns Array of booleans
         */
        $get: (option: { query: Methods6['get']['query'], config?: T | undefined }) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | undefined) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get a list of the episodes saved in the current Spotify user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       * @returns Pages of episodes
       */
      get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * Get a list of the episodes saved in the current Spotify user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       * @returns Pages of episodes
       */
      $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * Save one or more episodes to the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      put: (option: { body: Methods5['put']['reqBody'], query: Methods5['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, PATH5, PUT, option).send(),
      /**
       * Save one or more episodes to the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      $put: (option: { body: Methods5['put']['reqBody'], query: Methods5['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, PATH5, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more episodes from the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      delete: (option: { body: Methods5['delete']['reqBody'], query: Methods5['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, PATH5, DELETE, option).send(),
      /**
       * Remove one or more episodes from the current user's library.<br/>
       * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
       */
      $delete: (option: { body: Methods5['delete']['reqBody'], query: Methods5['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, PATH5, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | { method: 'delete'; query: Methods5['delete']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    following: {
      contains: {
        /**
         * Check to see if the current user is following one or more artists or other Spotify users.
         * @returns Array of booleans
         */
        get: (option: { query: Methods8['get']['query'], config?: T | undefined }) =>
          fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json(),
        /**
         * Check to see if the current user is following one or more artists or other Spotify users.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods8['get']['query'], config?: T | undefined }) =>
          fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get the current user's followed artists.
       * @returns A paged set of artists
       */
      get: (option: { query: Methods7['get']['query'], config?: T | undefined }) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * Get the current user's followed artists.
       * @returns A paged set of artists
       */
      $get: (option: { query: Methods7['get']['query'], config?: T | undefined }) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * Add the current user as a follower of one or more artists or other Spotify users.
       */
      put: (option: { body: Methods7['put']['reqBody'], query: Methods7['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7['put']['status']>(prefix, PATH7, PUT, option).send(),
      /**
       * Add the current user as a follower of one or more artists or other Spotify users.
       */
      $put: (option: { body: Methods7['put']['reqBody'], query: Methods7['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7['put']['status']>(prefix, PATH7, PUT, option).send().then(r => r.body),
      /**
       * Remove the current user as a follower of one or more artists or other Spotify users.
       */
      delete: (option: { body: Methods7['delete']['reqBody'], query: Methods7['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, PATH7, DELETE, option).send(),
      /**
       * Remove the current user as a follower of one or more artists or other Spotify users.
       */
      $delete: (option: { body: Methods7['delete']['reqBody'], query: Methods7['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, PATH7, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | { method: 'put'; query: Methods7['put']['query'] } | { method: 'delete'; query: Methods7['delete']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    player: {
      currently_playing: {
        /**
         * Get the object currently being played on the user's Spotify account.
         * @returns Information about the currently playing track
         */
        get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json(),
        /**
         * Get the object currently being played on the user's Spotify account.
         * @returns Information about the currently playing track
         */
        $get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
          `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      devices: {
        /**
         * Get information about a user’s available devices.
         * @returns A set of devices
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * Get information about a user’s available devices.
         * @returns A set of devices
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH11}`
      },
      next: {
        /**
         * Skips to next track in the user’s queue.
         */
        post: (option?: { query?: Methods12['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, PATH12, POST, option).send(),
        /**
         * Skips to next track in the user’s queue.
         */
        $post: (option?: { query?: Methods12['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods12['post']['status']>(prefix, PATH12, POST, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods12['post']['query'] } | undefined) =>
          `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      pause: {
        /**
         * Pause playback on the user's account.
         */
        put: (option?: { query?: Methods13['put']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods13['put']['status']>(prefix, PATH13, PUT, option).send(),
        /**
         * Pause playback on the user's account.
         */
        $put: (option?: { query?: Methods13['put']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods13['put']['status']>(prefix, PATH13, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods13['put']['query'] } | undefined) =>
          `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      play: {
        /**
         * Start a new context or resume current playback on the user's active device.
         */
        put: (option: { body: Methods14['put']['reqBody'], query?: Methods14['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods14['put']['status']>(prefix, PATH14, PUT, option).send(),
        /**
         * Start a new context or resume current playback on the user's active device.
         */
        $put: (option: { body: Methods14['put']['reqBody'], query?: Methods14['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods14['put']['status']>(prefix, PATH14, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods14['put']['query'] } | undefined) =>
          `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      previous: {
        /**
         * Skips to previous track in the user’s queue.
         */
        post: (option?: { query?: Methods15['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods15['post']['status']>(prefix, PATH15, POST, option).send(),
        /**
         * Skips to previous track in the user’s queue.
         */
        $post: (option?: { query?: Methods15['post']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods15['post']['status']>(prefix, PATH15, POST, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods15['post']['query'] } | undefined) =>
          `${prefix}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      queue: {
        /**
         * Get the list of objects that make up the user's queue.
         * @returns Information about the queue
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * Get the list of objects that make up the user's queue.
         * @returns Information about the queue
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        /**
         * Add an item to the end of the user's current playback queue.
         */
        post: (option: { query: Methods16['post']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['post']['status']>(prefix, PATH16, POST, option).send(),
        /**
         * Add an item to the end of the user's current playback queue.
         */
        $post: (option: { query: Methods16['post']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['post']['status']>(prefix, PATH16, POST, option).send().then(r => r.body),
        $path: (option?: { method: 'post'; query: Methods16['post']['query'] } | undefined) =>
          `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      recently_played: {
        /**
         * Get tracks from the current user's recently played tracks.
         * _**Note**: Currently doesn't support podcast episodes._
         * @returns A paged set of tracks
         */
        get: (option?: { query?: Methods17['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH17, GET, option).json(),
        /**
         * Get tracks from the current user's recently played tracks.
         * _**Note**: Currently doesn't support podcast episodes._
         * @returns A paged set of tracks
         */
        $get: (option?: { query?: Methods17['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods17['get']['query'] } | undefined) =>
          `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      repeat: {
        /**
         * Set the repeat mode for the user's playback. Options are repeat-track,
         * repeat-context, and off.
         */
        put: (option: { query: Methods18['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods18['put']['status']>(prefix, PATH18, PUT, option).send(),
        /**
         * Set the repeat mode for the user's playback. Options are repeat-track,
         * repeat-context, and off.
         */
        $put: (option: { query: Methods18['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods18['put']['status']>(prefix, PATH18, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods18['put']['query'] } | undefined) =>
          `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      seek: {
        /**
         * Seeks to the given position in the user’s currently playing track.
         */
        put: (option: { query: Methods19['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods19['put']['status']>(prefix, PATH19, PUT, option).send(),
        /**
         * Seeks to the given position in the user’s currently playing track.
         */
        $put: (option: { query: Methods19['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods19['put']['status']>(prefix, PATH19, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods19['put']['query'] } | undefined) =>
          `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      shuffle: {
        /**
         * Toggle shuffle on or off for user’s playback.
         */
        put: (option: { query: Methods20['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods20['put']['status']>(prefix, PATH20, PUT, option).send(),
        /**
         * Toggle shuffle on or off for user’s playback.
         */
        $put: (option: { query: Methods20['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods20['put']['status']>(prefix, PATH20, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods20['put']['query'] } | undefined) =>
          `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      volume: {
        /**
         * Set the volume for the user’s current playback device.
         */
        put: (option: { query: Methods21['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21['put']['status']>(prefix, PATH21, PUT, option).send(),
        /**
         * Set the volume for the user’s current playback device.
         */
        $put: (option: { query: Methods21['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21['put']['status']>(prefix, PATH21, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods21['put']['query'] } | undefined) =>
          `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get information about the user’s current playback state, including track or episode, progress, and active device.
       * @returns Information about playback
       */
      get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json(),
      /**
       * Get information about the user’s current playback state, including track or episode, progress, and active device.
       * @returns Information about playback
       */
      $get: (option?: { query?: Methods9['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      /**
       * Transfer playback to a new device and determine if it should start playing.
       */
      put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods9['put']['status']>(prefix, PATH9, PUT, option).send(),
      /**
       * Transfer playback to a new device and determine if it should start playing.
       */
      $put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods9['put']['status']>(prefix, PATH9, PUT, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    playlists: {
      /**
       * Get a list of the playlists owned or followed by the current Spotify
       * user.
       * @returns A paged set of playlists
       */
      get: (option?: { query?: Methods22['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, PATH22, GET, option).json(),
      /**
       * Get a list of the playlists owned or followed by the current Spotify
       * user.
       * @returns A paged set of playlists
       */
      $get: (option?: { query?: Methods22['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods22['get']['query'] } | undefined) =>
        `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    shows: {
      contains: {
        /**
         * Check if one or more shows is already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods24['get']['query'], config?: T | undefined }) =>
          fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH24, GET, option).json(),
        /**
         * Check if one or more shows is already saved in the current Spotify user's library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods24['get']['query'], config?: T | undefined }) =>
          fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods24['get']['query'] } | undefined) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
       * @returns Pages of shows
       */
      get: (option?: { query?: Methods23['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH23, GET, option).json(),
      /**
       * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
       * @returns Pages of shows
       */
      $get: (option?: { query?: Methods23['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
      /**
       * Save one or more shows to current Spotify user's library.
       */
      put: (option: { body: Methods23['put']['reqBody'], query: Methods23['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods23['put']['status']>(prefix, PATH23, PUT, option).send(),
      /**
       * Save one or more shows to current Spotify user's library.
       */
      $put: (option: { body: Methods23['put']['reqBody'], query: Methods23['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods23['put']['status']>(prefix, PATH23, PUT, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods23['get']['query'] } | { method: 'put'; query: Methods23['put']['query'] } | undefined) =>
        `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    top: {
      artists: {
        /**
         * Get the current user's top artists based on calculated affinity.
         * @returns Pages of artists
         */
        get: (option?: { query?: Methods25['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH25, GET, option).json(),
        /**
         * Get the current user's top artists based on calculated affinity.
         * @returns Pages of artists
         */
        $get: (option?: { query?: Methods25['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods25['get']['query'] } | undefined) =>
          `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      tracks: {
        /**
         * Get the current user's top tracks based on calculated affinity.
         * @returns Pages of tracks
         */
        get: (option?: { query?: Methods26['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH26, GET, option).json(),
        /**
         * Get the current user's top tracks based on calculated affinity.
         * @returns Pages of tracks
         */
        $get: (option?: { query?: Methods26['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods26['get']['query'] } | undefined) =>
          `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    tracks: {
      contains: {
        /**
         * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        get: (option: { query: Methods28['get']['query'], config?: T | undefined }) =>
          fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH28, GET, option).json(),
        /**
         * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
         * @returns Array of booleans
         */
        $get: (option: { query: Methods28['get']['query'], config?: T | undefined }) =>
          fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH28, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods28['get']['query'] } | undefined) =>
          `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of tracks
       */
      get: (option?: { query?: Methods27['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH27, GET, option).json(),
      /**
       * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
       * @returns Pages of tracks
       */
      $get: (option?: { query?: Methods27['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
      /**
       * Save one or more tracks to the current user's 'Your Music' library.
       */
      put: (option: { body: Methods27['put']['reqBody'], query: Methods27['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods27['put']['status']>(prefix, PATH27, PUT, option).send(),
      /**
       * Save one or more tracks to the current user's 'Your Music' library.
       */
      $put: (option: { body: Methods27['put']['reqBody'], query: Methods27['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods27['put']['status']>(prefix, PATH27, PUT, option).send().then(r => r.body),
      /**
       * Remove one or more tracks from the current user's 'Your Music' library.
       */
      delete: (option: { body: Methods27['delete']['reqBody'], query: Methods27['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, PATH27, DELETE, option).send(),
      /**
       * Remove one or more tracks from the current user's 'Your Music' library.
       */
      $delete: (option: { body: Methods27['delete']['reqBody'], query: Methods27['delete']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, PATH27, DELETE, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods27['get']['query'] } | { method: 'put'; query: Methods27['put']['query'] } | { method: 'delete'; query: Methods27['delete']['query'] } | undefined) =>
        `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * Get detailed profile information about the current user (including the
     * current user's username).
     * @returns A user
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get detailed profile information about the current user (including the
     * current user's username).
     * @returns A user
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
