import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_50onwf } from './currently-playing';
import type { Methods as Methods_39vmi5 } from './devices';
import type { Methods as Methods_wayetz } from './next';
import type { Methods as Methods_1xtqjxo } from './pause';
import type { Methods as Methods_1k5vnpg } from './play';
import type { Methods as Methods_1vfn0sv } from './previous';
import type { Methods as Methods_u455e5 } from './queue';
import type { Methods as Methods_4en6vm } from './recently-played';
import type { Methods as Methods_2yfp11 } from './repeat';
import type { Methods as Methods_1084a76 } from './seek';
import type { Methods as Methods_1p0qm7n } from './shuffle';
import type { Methods as Methods_zihlkc } from './volume';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/me/player';
  const PATH1 = '/me/player/currently-playing';
  const PATH2 = '/me/player/devices';
  const PATH3 = '/me/player/next';
  const PATH4 = '/me/player/pause';
  const PATH5 = '/me/player/play';
  const PATH6 = '/me/player/previous';
  const PATH7 = '/me/player/queue';
  const PATH8 = '/me/player/recently-played';
  const PATH9 = '/me/player/repeat';
  const PATH10 = '/me/player/seek';
  const PATH11 = '/me/player/shuffle';
  const PATH12 = '/me/player/volume';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    currently_playing: {
      /**
       * Get the object currently being played on the user's Spotify account.
       * @returns Information about the currently playing track
       */
      get: (option?: { query?: Methods_50onwf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_50onwf['get']['resBody'], BasicHeaders, Methods_50onwf['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get the object currently being played on the user's Spotify account.
       * @returns Information about the currently playing track
       */
      $get: (option?: { query?: Methods_50onwf['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_50onwf['get']['resBody'], BasicHeaders, Methods_50onwf['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_50onwf['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    devices: {
      /**
       * Get information about a user’s available devices.
       * @returns A set of devices
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_39vmi5['get']['resBody'], BasicHeaders, Methods_39vmi5['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Get information about a user’s available devices.
       * @returns A set of devices
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_39vmi5['get']['resBody'], BasicHeaders, Methods_39vmi5['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    next: {
      /**
       * Skips to next track in the user’s queue.
       */
      post: (option?: { query?: Methods_wayetz['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_wayetz['post']['status']>(prefix, PATH3, POST, option).send(),
      /**
       * Skips to next track in the user’s queue.
       */
      $post: (option?: { query?: Methods_wayetz['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_wayetz['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_wayetz['post']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    pause: {
      /**
       * Pause playback on the user's account.
       */
      put: (option?: { query?: Methods_1xtqjxo['put']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1xtqjxo['put']['status']>(prefix, PATH4, PUT, option).send(),
      /**
       * Pause playback on the user's account.
       */
      $put: (option?: { query?: Methods_1xtqjxo['put']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1xtqjxo['put']['status']>(prefix, PATH4, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_1xtqjxo['put']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    play: {
      /**
       * Start a new context or resume current playback on the user's active device.
       */
      put: (option: { body: Methods_1k5vnpg['put']['reqBody'], query?: Methods_1k5vnpg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1k5vnpg['put']['status']>(prefix, PATH5, PUT, option).send(),
      /**
       * Start a new context or resume current playback on the user's active device.
       */
      $put: (option: { body: Methods_1k5vnpg['put']['reqBody'], query?: Methods_1k5vnpg['put']['query'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1k5vnpg['put']['status']>(prefix, PATH5, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_1k5vnpg['put']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    previous: {
      /**
       * Skips to previous track in the user’s queue.
       */
      post: (option?: { query?: Methods_1vfn0sv['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1vfn0sv['post']['status']>(prefix, PATH6, POST, option).send(),
      /**
       * Skips to previous track in the user’s queue.
       */
      $post: (option?: { query?: Methods_1vfn0sv['post']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods_1vfn0sv['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_1vfn0sv['post']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    queue: {
      /**
       * Get the list of objects that make up the user's queue.
       * @returns Information about the queue
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_u455e5['get']['resBody'], BasicHeaders, Methods_u455e5['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * Get the list of objects that make up the user's queue.
       * @returns Information about the queue
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_u455e5['get']['resBody'], BasicHeaders, Methods_u455e5['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * Add an item to the end of the user's current playback queue.
       */
      post: (option: { query: Methods_u455e5['post']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_u455e5['post']['status']>(prefix, PATH7, POST, option).send(),
      /**
       * Add an item to the end of the user's current playback queue.
       */
      $post: (option: { query: Methods_u455e5['post']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_u455e5['post']['status']>(prefix, PATH7, POST, option).send().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_u455e5['post']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    recently_played: {
      /**
       * Get tracks from the current user's recently played tracks.
       * _**Note**: Currently doesn't support podcast episodes._
       * @returns A paged set of tracks
       */
      get: (option?: { query?: Methods_4en6vm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_4en6vm['get']['resBody'], BasicHeaders, Methods_4en6vm['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * Get tracks from the current user's recently played tracks.
       * _**Note**: Currently doesn't support podcast episodes._
       * @returns A paged set of tracks
       */
      $get: (option?: { query?: Methods_4en6vm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_4en6vm['get']['resBody'], BasicHeaders, Methods_4en6vm['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_4en6vm['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    repeat: {
      /**
       * Set the repeat mode for the user's playback. Options are repeat-track,
       * repeat-context, and off.
       */
      put: (option: { query: Methods_2yfp11['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_2yfp11['put']['status']>(prefix, PATH9, PUT, option).send(),
      /**
       * Set the repeat mode for the user's playback. Options are repeat-track,
       * repeat-context, and off.
       */
      $put: (option: { query: Methods_2yfp11['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_2yfp11['put']['status']>(prefix, PATH9, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_2yfp11['put']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    seek: {
      /**
       * Seeks to the given position in the user’s currently playing track.
       */
      put: (option: { query: Methods_1084a76['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1084a76['put']['status']>(prefix, PATH10, PUT, option).send(),
      /**
       * Seeks to the given position in the user’s currently playing track.
       */
      $put: (option: { query: Methods_1084a76['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1084a76['put']['status']>(prefix, PATH10, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_1084a76['put']['query'] } | undefined) =>
        `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shuffle: {
      /**
       * Toggle shuffle on or off for user’s playback.
       */
      put: (option: { query: Methods_1p0qm7n['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1p0qm7n['put']['status']>(prefix, PATH11, PUT, option).send(),
      /**
       * Toggle shuffle on or off for user’s playback.
       */
      $put: (option: { query: Methods_1p0qm7n['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_1p0qm7n['put']['status']>(prefix, PATH11, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_1p0qm7n['put']['query'] } | undefined) =>
        `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    volume: {
      /**
       * Set the volume for the user’s current playback device.
       */
      put: (option: { query: Methods_zihlkc['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zihlkc['put']['status']>(prefix, PATH12, PUT, option).send(),
      /**
       * Set the volume for the user’s current playback device.
       */
      $put: (option: { query: Methods_zihlkc['put']['query'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_zihlkc['put']['status']>(prefix, PATH12, PUT, option).send().then(r => r.body),
      $path: (option?: { method: 'put'; query: Methods_zihlkc['put']['query'] } | undefined) =>
        `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * Get information about the user’s current playback state, including track or episode, progress, and active device.
     * @returns Information about playback
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * Get information about the user’s current playback state, including track or episode, progress, and active device.
     * @returns Information about playback
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * Transfer playback to a new device and determine if it should start playing.
     */
    put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send(),
    /**
     * Transfer playback to a new device and determine if it should start playing.
     */
    $put: (option: { body: Methods_by08hd['put']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
