import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './currently-playing'
import type { Methods as Methods2 } from './devices'
import type { Methods as Methods3 } from './next'
import type { Methods as Methods4 } from './pause'
import type { Methods as Methods5 } from './play'
import type { Methods as Methods6 } from './previous'
import type { Methods as Methods7 } from './queue'
import type { Methods as Methods8 } from './recently-played'
import type { Methods as Methods9 } from './repeat'
import type { Methods as Methods10 } from './seek'
import type { Methods as Methods11 } from './shuffle'
import type { Methods as Methods12 } from './volume'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/me/player'
  const PATH1 = '/me/player/currently-playing'
  const PATH2 = '/me/player/devices'
  const PATH3 = '/me/player/next'
  const PATH4 = '/me/player/pause'
  const PATH5 = '/me/player/play'
  const PATH6 = '/me/player/previous'
  const PATH7 = '/me/player/queue'
  const PATH8 = '/me/player/recently-played'
  const PATH9 = '/me/player/repeat'
  const PATH10 = '/me/player/seek'
  const PATH11 = '/me/player/shuffle'
  const PATH12 = '/me/player/volume'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'

  return {
    currently_playing: {
      /**
       * Get the object currently being played on the user's Spotify account.
       * @returns Information about the currently playing track
       */
      get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get the object currently being played on the user's Spotify account.
       * @returns Information about the currently playing track
       */
      $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    devices: {
      /**
       * Get information about a user’s available devices.
       * @returns A set of devices
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Get information about a user’s available devices.
       * @returns A set of devices
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    next: {
      /**
       * Skips to next track in the user’s queue.
       */
      post: (option?: { query?: Methods3['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).send(),
      /**
       * Skips to next track in the user’s queue.
       */
      $post: (option?: { query?: Methods3['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods3['post']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    pause: {
      /**
       * Pause playback on the user's account.
       */
      put: (option?: { query?: Methods4['put']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, PATH4, PUT, option).send(),
      /**
       * Pause playback on the user's account.
       */
      $put: (option?: { query?: Methods4['put']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, PATH4, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods4['put']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    play: {
      /**
       * Start a new context or resume current playback on the user's active device.
       */
      put: (option: { body: Methods5['put']['reqBody'], query?: Methods5['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, PATH5, PUT, option).send(),
      /**
       * Start a new context or resume current playback on the user's active device.
       */
      $put: (option: { body: Methods5['put']['reqBody'], query?: Methods5['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, PATH5, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods5['put']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    previous: {
      /**
       * Skips to previous track in the user’s queue.
       */
      post: (option?: { query?: Methods6['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send(),
      /**
       * Skips to previous track in the user’s queue.
       */
      $post: (option?: { query?: Methods6['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods6['post']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    queue: {
      /**
       * Get the list of objects that make up the user's queue.
       * @returns Information about the queue
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * Get the list of objects that make up the user's queue.
       * @returns Information about the queue
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * Add an item to the end of the user's current playback queue.
       */
      post: (option: { query: Methods7['post']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).send(),
      /**
       * Add an item to the end of the user's current playback queue.
       */
      $post: (option: { query: Methods7['post']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).send().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods7['post']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    recently_played: {
      /**
       * Get tracks from the current user's recently played tracks.
       * _**Note**: Currently doesn't support podcast episodes._
       * @returns A paged set of tracks
       */
      get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * Get tracks from the current user's recently played tracks.
       * _**Note**: Currently doesn't support podcast episodes._
       * @returns A paged set of tracks
       */
      $get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    repeat: {
      /**
       * Set the repeat mode for the user's playback. Options are repeat-track,
       * repeat-context, and off.
       */
      put: (option: { query: Methods9['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods9['put']['status']>(prefix, PATH9, PUT, option).send(),
      /**
       * Set the repeat mode for the user's playback. Options are repeat-track,
       * repeat-context, and off.
       */
      $put: (option: { query: Methods9['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods9['put']['status']>(prefix, PATH9, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods9['put']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    seek: {
      /**
       * Seeks to the given position in the user’s currently playing track.
       */
      put: (option: { query: Methods10['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods10['put']['status']>(prefix, PATH10, PUT, option).send(),
      /**
       * Seeks to the given position in the user’s currently playing track.
       */
      $put: (option: { query: Methods10['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods10['put']['status']>(prefix, PATH10, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods10['put']['query'] } | undefined) =>
        `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    shuffle: {
      /**
       * Toggle shuffle on or off for user’s playback.
       */
      put: (option: { query: Methods11['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods11['put']['status']>(prefix, PATH11, PUT, option).send(),
      /**
       * Toggle shuffle on or off for user’s playback.
       */
      $put: (option: { query: Methods11['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods11['put']['status']>(prefix, PATH11, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods11['put']['query'] } | undefined) =>
        `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    volume: {
      /**
       * Set the volume for the user’s current playback device.
       */
      put: (option: { query: Methods12['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods12['put']['status']>(prefix, PATH12, PUT, option).send(),
      /**
       * Set the volume for the user’s current playback device.
       */
      $put: (option: { query: Methods12['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods12['put']['status']>(prefix, PATH12, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods12['put']['query'] } | undefined) =>
        `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * Get information about the user’s current playback state, including track or episode, progress, and active device.
     * @returns Information about playback
     */
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get information about the user’s current playback state, including track or episode, progress, and active device.
     * @returns Information about playback
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * Transfer playback to a new device and determine if it should start playing.
     */
    put: (option: { body: Methods0['put']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * Transfer playback to a new device and determine if it should start playing.
     */
    $put: (option: { body: Methods0['put']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
