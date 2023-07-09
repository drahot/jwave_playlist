import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './albums'
import type { Methods as Methods1 } from './albums/_id@string'
import type { Methods as Methods2 } from './albums/_id@string/tracks'
import type { Methods as Methods3 } from './artists'
import type { Methods as Methods4 } from './artists/_id@string'
import type { Methods as Methods5 } from './artists/_id@string/albums'
import type { Methods as Methods6 } from './artists/_id@string/related-artists'
import type { Methods as Methods7 } from './artists/_id@string/top-tracks'
import type { Methods as Methods8 } from './audio-analysis/_id@string'
import type { Methods as Methods9 } from './audio-features'
import type { Methods as Methods10 } from './audio-features/_id@string'
import type { Methods as Methods11 } from './audiobooks'
import type { Methods as Methods12 } from './audiobooks/_id@string'
import type { Methods as Methods13 } from './audiobooks/_id@string/chapters'
import type { Methods as Methods14 } from './browse/categories'
import type { Methods as Methods15 } from './browse/categories/_category_id@string'
import type { Methods as Methods16 } from './browse/categories/_category_id@string/playlists'
import type { Methods as Methods17 } from './browse/featured-playlists'
import type { Methods as Methods18 } from './browse/new-releases'
import type { Methods as Methods19 } from './chapters'
import type { Methods as Methods20 } from './chapters/_id@string'
import type { Methods as Methods21 } from './episodes'
import type { Methods as Methods22 } from './episodes/_id@string'
import type { Methods as Methods23 } from './markets'
import type { Methods as Methods24 } from './me'
import type { Methods as Methods25 } from './me/albums'
import type { Methods as Methods26 } from './me/albums/contains'
import type { Methods as Methods27 } from './me/audiobooks'
import type { Methods as Methods28 } from './me/audiobooks/contains'
import type { Methods as Methods29 } from './me/episodes'
import type { Methods as Methods30 } from './me/episodes/contains'
import type { Methods as Methods31 } from './me/following'
import type { Methods as Methods32 } from './me/following/contains'
import type { Methods as Methods33 } from './me/player'
import type { Methods as Methods34 } from './me/player/currently-playing'
import type { Methods as Methods35 } from './me/player/devices'
import type { Methods as Methods36 } from './me/player/next'
import type { Methods as Methods37 } from './me/player/pause'
import type { Methods as Methods38 } from './me/player/play'
import type { Methods as Methods39 } from './me/player/previous'
import type { Methods as Methods40 } from './me/player/queue'
import type { Methods as Methods41 } from './me/player/recently-played'
import type { Methods as Methods42 } from './me/player/repeat'
import type { Methods as Methods43 } from './me/player/seek'
import type { Methods as Methods44 } from './me/player/shuffle'
import type { Methods as Methods45 } from './me/player/volume'
import type { Methods as Methods46 } from './me/playlists'
import type { Methods as Methods47 } from './me/shows'
import type { Methods as Methods48 } from './me/shows/contains'
import type { Methods as Methods49 } from './me/top/_type'
import type { Methods as Methods50 } from './me/tracks'
import type { Methods as Methods51 } from './me/tracks/contains'
import type { Methods as Methods52 } from './playlists/_playlist_id@string'
import type { Methods as Methods53 } from './playlists/_playlist_id@string/followers'
import type { Methods as Methods54 } from './playlists/_playlist_id@string/followers/contains'
import type { Methods as Methods55 } from './playlists/_playlist_id@string/images'
import type { Methods as Methods56 } from './playlists/_playlist_id@string/tracks'
import type { Methods as Methods57 } from './recommendations'
import type { Methods as Methods58 } from './recommendations/available-genre-seeds'
import type { Methods as Methods59 } from './search'
import type { Methods as Methods60 } from './shows'
import type { Methods as Methods61 } from './shows/_id@string'
import type { Methods as Methods62 } from './shows/_id@string/episodes'
import type { Methods as Methods63 } from './tracks'
import type { Methods as Methods64 } from './tracks/_id@string'
import type { Methods as Methods65 } from './users/_user_id@string'
import type { Methods as Methods66 } from './users/_user_id@string/playlists'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/albums'
  const PATH1 = '/tracks'
  const PATH2 = '/artists'
  const PATH3 = '/related-artists'
  const PATH4 = '/top-tracks'
  const PATH5 = '/audio-analysis'
  const PATH6 = '/audio-features'
  const PATH7 = '/audiobooks'
  const PATH8 = '/chapters'
  const PATH9 = '/browse/categories'
  const PATH10 = '/playlists'
  const PATH11 = '/browse/featured-playlists'
  const PATH12 = '/browse/new-releases'
  const PATH13 = '/episodes'
  const PATH14 = '/markets'
  const PATH15 = '/me'
  const PATH16 = '/me/albums'
  const PATH17 = '/me/albums/contains'
  const PATH18 = '/me/audiobooks'
  const PATH19 = '/me/audiobooks/contains'
  const PATH20 = '/me/episodes'
  const PATH21 = '/me/episodes/contains'
  const PATH22 = '/me/following'
  const PATH23 = '/me/following/contains'
  const PATH24 = '/me/player'
  const PATH25 = '/me/player/currently-playing'
  const PATH26 = '/me/player/devices'
  const PATH27 = '/me/player/next'
  const PATH28 = '/me/player/pause'
  const PATH29 = '/me/player/play'
  const PATH30 = '/me/player/previous'
  const PATH31 = '/me/player/queue'
  const PATH32 = '/me/player/recently-played'
  const PATH33 = '/me/player/repeat'
  const PATH34 = '/me/player/seek'
  const PATH35 = '/me/player/shuffle'
  const PATH36 = '/me/player/volume'
  const PATH37 = '/me/playlists'
  const PATH38 = '/me/shows'
  const PATH39 = '/me/shows/contains'
  const PATH40 = '/me/top'
  const PATH41 = '/me/tracks'
  const PATH42 = '/me/tracks/contains'
  const PATH43 = '/followers'
  const PATH44 = '/followers/contains'
  const PATH45 = '/images'
  const PATH46 = '/recommendations'
  const PATH47 = '/recommendations/available-genre-seeds'
  const PATH48 = '/search'
  const PATH49 = '/shows'
  const PATH50 = '/users'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    albums: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          tracks: {
            /**
             * Get Spotify catalog information about an album’s tracks.
             * Optional parameters can be used to limit the number of tracks returned.
             * @returns Pages of tracks
             */
            get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an album’s tracks.
             * Optional parameters can be used to limit the number of tracks returned.
             * @returns Pages of tracks
             */
            $get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * Get Spotify catalog information for a single album.
           * @returns An album
           */
          get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single album.
           * @returns An album
           */
          $get: (option?: { query?: Methods1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
       * @returns A set of albums
       */
      get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
       * @returns A set of albums
       */
      $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    artists: {
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          albums: {
            /**
             * Get Spotify catalog information about an artist's albums.
             * @returns Pages of albums
             */
            get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an artist's albums.
             * @returns Pages of albums
             */
            $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          related_artists: {
            /**
             * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).
             * @returns A set of artists
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).
             * @returns A set of artists
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          top_tracks: {
            /**
             * Get Spotify catalog information about an artist's top tracks by country.
             * @returns A set of tracks
             */
            get: (option?: { query?: Methods7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an artist's top tracks by country.
             * @returns A set of tracks
             */
            $get: (option?: { query?: Methods7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
           * @returns An artist
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
           * @returns An artist
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * Get Spotify catalog information for several artists based on their Spotify IDs.
       * @returns A set of artists
       */
      get: (option: { query: Methods3['get']['query'], config?: T | undefined }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Get Spotify catalog information for several artists based on their Spotify IDs.
       * @returns A set of artists
       */
      $get: (option: { query: Methods3['get']['query'], config?: T | undefined }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    audio_analysis: {
      _id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          /**
           * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
           * @returns Audio analysis for one track
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
           * @returns Audio analysis for one track
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    audio_features: {
      _id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          /**
           * Get audio feature information for a single track identified by its unique
           * Spotify ID.
           * @returns Audio features for one track
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get audio feature information for a single track identified by its unique
           * Spotify ID.
           * @returns Audio features for one track
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * Get audio features for multiple tracks based on their Spotify IDs.
       * @returns A set of audio features
       */
      get: (option: { query: Methods9['get']['query'], config?: T | undefined }) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * Get audio features for multiple tracks based on their Spotify IDs.
       * @returns A set of audio features
       */
      $get: (option: { query: Methods9['get']['query'], config?: T | undefined }) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    audiobooks: {
      _id: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          chapters: {
            /**
             * Get Spotify catalog information about an audiobook's chapters.<br />
             * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
             * @returns Pages of chapters
             */
            get: (option?: { query?: Methods13['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an audiobook's chapters.<br />
             * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
             * @returns Pages of chapters
             */
            $get: (option?: { query?: Methods13['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods13['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * Get Spotify catalog information for a single audiobook.<br />
           * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns An Audiobook
           */
          get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single audiobook.<br />
           * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns An Audiobook
           */
          $get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods12['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of audiobooks
       */
      get: (option: { query: Methods11['get']['query'], config?: T | undefined }) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of audiobooks
       */
      $get: (option: { query: Methods11['get']['query'], config?: T | undefined }) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods11['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    browse: {
      categories: {
        _category_id: (val2: string) => {
          const prefix2 = `${PATH9}/${val2}`

          return {
            playlists: {
              /**
               * Get a list of Spotify playlists tagged with a particular category.
               * @returns A paged set of playlists
               */
              get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json(),
              /**
               * Get a list of Spotify playlists tagged with a particular category.
               * @returns A paged set of playlists
               */
              $get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods16['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            /**
             * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
             * @returns A category
             */
            get: (option?: { query?: Methods15['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
             * @returns A category
             */
            $get: (option?: { query?: Methods15['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods15['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        /**
         * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         * @returns A paged set of categories
         */
        get: (option?: { query?: Methods14['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         * @returns A paged set of categories
         */
        $get: (option?: { query?: Methods14['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods14['get']['query'] } | undefined) =>
          `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      featured_playlists: {
        /**
         * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
         * @returns A paged set of playlists
         */
        get: (option?: { query?: Methods17['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
         * @returns A paged set of playlists
         */
        $get: (option?: { query?: Methods17['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods17['get']['query'] } | undefined) =>
          `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      new_releases: {
        /**
         * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
         * @returns A paged set of albums
         */
        get: (option?: { query?: Methods18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH12, GET, option).json(),
        /**
         * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
         * @returns A paged set of albums
         */
        $get: (option?: { query?: Methods18['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods18['get']['query'] } | undefined) =>
          `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    chapters: {
      _id: (val1: string) => {
        const prefix1 = `${PATH8}/${val1}`

        return {
          /**
           * Get Spotify catalog information for a single chapter.<br />
           * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns A Chapter
           */
          get: (option?: { query?: Methods20['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single chapter.<br />
           * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns A Chapter
           */
          $get: (option?: { query?: Methods20['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods20['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
       * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of chapters
       */
      get: (option: { query: Methods19['get']['query'], config?: T | undefined }) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
       * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of chapters
       */
      $get: (option: { query: Methods19['get']['query'], config?: T | undefined }) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods19['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    episodes: {
      _id: (val1: string) => {
        const prefix1 = `${PATH13}/${val1}`

        return {
          /**
           * Get Spotify catalog information for a single episode identified by its
           * unique Spotify ID.
           * @returns An episode
           */
          get: (option?: { query?: Methods22['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single episode identified by its
           * unique Spotify ID.
           * @returns An episode
           */
          $get: (option?: { query?: Methods22['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods22['get']['resBody'], BasicHeaders, Methods22['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods22['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * Get Spotify catalog information for several episodes based on their Spotify IDs.
       * @returns A set of episodes
       */
      get: (option: { query: Methods21['get']['query'], config?: T | undefined }) =>
        fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH13, GET, option).json(),
      /**
       * Get Spotify catalog information for several episodes based on their Spotify IDs.
       * @returns A set of episodes
       */
      $get: (option: { query: Methods21['get']['query'], config?: T | undefined }) =>
        fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods21['get']['query'] } | undefined) =>
        `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    markets: {
      /**
       * Get the list of markets where Spotify is available.
       * @returns A markets object with an array of country codes
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH14, GET, option).json(),
      /**
       * Get the list of markets where Spotify is available.
       * @returns A markets object with an array of country codes
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH14}`
    },
    me: {
      albums: {
        contains: {
          /**
           * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods26['get']['query'], config?: T | undefined }) =>
            fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH17, GET, option).json(),
          /**
           * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods26['get']['query'], config?: T | undefined }) =>
            fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods26['get']['query'] } | undefined) =>
            `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Remove one or more albums from the current user's 'Your Music' library.
         */
        delete: (option: { body: Methods25['delete']['reqBody'], query: Methods25['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, PATH16, DELETE, option).send(),
        /**
         * Remove one or more albums from the current user's 'Your Music' library.
         */
        $delete: (option: { body: Methods25['delete']['reqBody'], query: Methods25['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, PATH16, DELETE, option).send().then(r => r.body),
        /**
         * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of albums
         */
        get: (option?: { query?: Methods25['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of albums
         */
        $get: (option?: { query?: Methods25['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        /**
         * Save one or more albums to the current user's 'Your Music' library.
         */
        put: (option: { body: Methods25['put']['reqBody'], query: Methods25['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods25['put']['status']>(prefix, PATH16, PUT, option).send(),
        /**
         * Save one or more albums to the current user's 'Your Music' library.
         */
        $put: (option: { body: Methods25['put']['reqBody'], query: Methods25['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods25['put']['status']>(prefix, PATH16, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods25['delete']['query'] } | { method?: 'get' | undefined; query: Methods25['get']['query'] } | { method: 'put'; query: Methods25['put']['query'] } | undefined) =>
          `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      audiobooks: {
        contains: {
          /**
           * Check if one or more audiobooks are already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods28['get']['query'], config?: T | undefined }) =>
            fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH19, GET, option).json(),
          /**
           * Check if one or more audiobooks are already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods28['get']['query'], config?: T | undefined }) =>
            fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods28['get']['query'] } | undefined) =>
            `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Remove one or more audiobooks from the Spotify user's library.
         */
        delete: (option: { query: Methods27['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, PATH18, DELETE, option).send(),
        /**
         * Remove one or more audiobooks from the Spotify user's library.
         */
        $delete: (option: { query: Methods27['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, PATH18, DELETE, option).send().then(r => r.body),
        /**
         * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of audiobooks
         */
        get: (option?: { query?: Methods27['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH18, GET, option).json(),
        /**
         * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of audiobooks
         */
        $get: (option?: { query?: Methods27['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
        /**
         * Save one or more audiobooks to the current Spotify user's library.
         */
        put: (option: { query: Methods27['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods27['put']['status']>(prefix, PATH18, PUT, option).send(),
        /**
         * Save one or more audiobooks to the current Spotify user's library.
         */
        $put: (option: { query: Methods27['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods27['put']['status']>(prefix, PATH18, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods27['delete']['query'] } | { method?: 'get' | undefined; query: Methods27['get']['query'] } | { method: 'put'; query: Methods27['put']['query'] } | undefined) =>
          `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      episodes: {
        contains: {
          /**
           * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
           * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
           * @returns Array of booleans
           */
          get: (option: { query: Methods30['get']['query'], config?: T | undefined }) =>
            fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH21, GET, option).json(),
          /**
           * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
           * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
           * @returns Array of booleans
           */
          $get: (option: { query: Methods30['get']['query'], config?: T | undefined }) =>
            fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods30['get']['query'] } | undefined) =>
            `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Remove one or more episodes from the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        delete: (option: { body: Methods29['delete']['reqBody'], query: Methods29['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods29['delete']['status']>(prefix, PATH20, DELETE, option).send(),
        /**
         * Remove one or more episodes from the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        $delete: (option: { body: Methods29['delete']['reqBody'], query: Methods29['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods29['delete']['status']>(prefix, PATH20, DELETE, option).send().then(r => r.body),
        /**
         * Get a list of the episodes saved in the current Spotify user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         * @returns Pages of episodes
         */
        get: (option?: { query?: Methods29['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH20, GET, option).json(),
        /**
         * Get a list of the episodes saved in the current Spotify user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         * @returns Pages of episodes
         */
        $get: (option?: { query?: Methods29['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
        /**
         * Save one or more episodes to the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        put: (option: { body: Methods29['put']['reqBody'], query: Methods29['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods29['put']['status']>(prefix, PATH20, PUT, option).send(),
        /**
         * Save one or more episodes to the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        $put: (option: { body: Methods29['put']['reqBody'], query: Methods29['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods29['put']['status']>(prefix, PATH20, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods29['delete']['query'] } | { method?: 'get' | undefined; query: Methods29['get']['query'] } | { method: 'put'; query: Methods29['put']['query'] } | undefined) =>
          `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      following: {
        contains: {
          /**
           * Check to see if the current user is following one or more artists or other Spotify users.
           * @returns Array of booleans
           */
          get: (option: { query: Methods32['get']['query'], config?: T | undefined }) =>
            fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, PATH23, GET, option).json(),
          /**
           * Check to see if the current user is following one or more artists or other Spotify users.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods32['get']['query'], config?: T | undefined }) =>
            fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods32['get']['query'] } | undefined) =>
            `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Remove the current user as a follower of one or more artists or other Spotify users.
         */
        delete: (option: { body: Methods31['delete']['reqBody'], query: Methods31['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods31['delete']['status']>(prefix, PATH22, DELETE, option).send(),
        /**
         * Remove the current user as a follower of one or more artists or other Spotify users.
         */
        $delete: (option: { body: Methods31['delete']['reqBody'], query: Methods31['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods31['delete']['status']>(prefix, PATH22, DELETE, option).send().then(r => r.body),
        /**
         * Get the current user's followed artists.
         * @returns A paged set of artists
         */
        get: (option: { query: Methods31['get']['query'], config?: T | undefined }) =>
          fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH22, GET, option).json(),
        /**
         * Get the current user's followed artists.
         * @returns A paged set of artists
         */
        $get: (option: { query: Methods31['get']['query'], config?: T | undefined }) =>
          fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
        /**
         * Add the current user as a follower of one or more artists or other Spotify users.
         */
        put: (option: { body: Methods31['put']['reqBody'], query: Methods31['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods31['put']['status']>(prefix, PATH22, PUT, option).send(),
        /**
         * Add the current user as a follower of one or more artists or other Spotify users.
         */
        $put: (option: { body: Methods31['put']['reqBody'], query: Methods31['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods31['put']['status']>(prefix, PATH22, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods31['delete']['query'] } | { method?: 'get' | undefined; query: Methods31['get']['query'] } | { method: 'put'; query: Methods31['put']['query'] } | undefined) =>
          `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      player: {
        currently_playing: {
          /**
           * Get the object currently being played on the user's Spotify account.
           * @returns Information about the currently playing track
           */
          get: (option?: { query?: Methods34['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH25, GET, option).json(),
          /**
           * Get the object currently being played on the user's Spotify account.
           * @returns Information about the currently playing track
           */
          $get: (option?: { query?: Methods34['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods34['get']['query'] } | undefined) =>
            `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        devices: {
          /**
           * Get information about a user’s available devices.
           * @returns A set of devices
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH26, GET, option).json(),
          /**
           * Get information about a user’s available devices.
           * @returns A set of devices
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH26}`
        },
        next: {
          /**
           * Skips to next track in the user’s queue.
           */
          post: (option?: { query?: Methods36['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods36['post']['status']>(prefix, PATH27, POST, option).send(),
          /**
           * Skips to next track in the user’s queue.
           */
          $post: (option?: { query?: Methods36['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods36['post']['status']>(prefix, PATH27, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods36['post']['query'] } | undefined) =>
            `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        pause: {
          /**
           * Pause playback on the user's account.
           */
          put: (option?: { query?: Methods37['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods37['put']['status']>(prefix, PATH28, PUT, option).send(),
          /**
           * Pause playback on the user's account.
           */
          $put: (option?: { query?: Methods37['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods37['put']['status']>(prefix, PATH28, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods37['put']['query'] } | undefined) =>
            `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        play: {
          /**
           * Start a new context or resume current playback on the user's active device.
           */
          put: (option: { body: Methods38['put']['reqBody'], query?: Methods38['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods38['put']['status']>(prefix, PATH29, PUT, option).send(),
          /**
           * Start a new context or resume current playback on the user's active device.
           */
          $put: (option: { body: Methods38['put']['reqBody'], query?: Methods38['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods38['put']['status']>(prefix, PATH29, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods38['put']['query'] } | undefined) =>
            `${prefix}${PATH29}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        previous: {
          /**
           * Skips to previous track in the user’s queue.
           */
          post: (option?: { query?: Methods39['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods39['post']['status']>(prefix, PATH30, POST, option).send(),
          /**
           * Skips to previous track in the user’s queue.
           */
          $post: (option?: { query?: Methods39['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods39['post']['status']>(prefix, PATH30, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods39['post']['query'] } | undefined) =>
            `${prefix}${PATH30}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        queue: {
          /**
           * Get the list of objects that make up the user's queue.
           * @returns Information about the queue
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH31, GET, option).json(),
          /**
           * Get the list of objects that make up the user's queue.
           * @returns Information about the queue
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
          /**
           * Add an item to the end of the user's current playback queue.
           */
          post: (option: { query: Methods40['post']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods40['post']['status']>(prefix, PATH31, POST, option).send(),
          /**
           * Add an item to the end of the user's current playback queue.
           */
          $post: (option: { query: Methods40['post']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods40['post']['status']>(prefix, PATH31, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods40['post']['query'] } | undefined) =>
            `${prefix}${PATH31}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        recently_played: {
          /**
           * Get tracks from the current user's recently played tracks.
           * _**Note**: Currently doesn't support podcast episodes._
           * @returns A paged set of tracks
           */
          get: (option?: { query?: Methods41['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, PATH32, GET, option).json(),
          /**
           * Get tracks from the current user's recently played tracks.
           * _**Note**: Currently doesn't support podcast episodes._
           * @returns A paged set of tracks
           */
          $get: (option?: { query?: Methods41['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, PATH32, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods41['get']['query'] } | undefined) =>
            `${prefix}${PATH32}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        repeat: {
          /**
           * Set the repeat mode for the user's playback. Options are repeat-track,
           * repeat-context, and off.
           */
          put: (option: { query: Methods42['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods42['put']['status']>(prefix, PATH33, PUT, option).send(),
          /**
           * Set the repeat mode for the user's playback. Options are repeat-track,
           * repeat-context, and off.
           */
          $put: (option: { query: Methods42['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods42['put']['status']>(prefix, PATH33, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods42['put']['query'] } | undefined) =>
            `${prefix}${PATH33}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        seek: {
          /**
           * Seeks to the given position in the user’s currently playing track.
           */
          put: (option: { query: Methods43['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods43['put']['status']>(prefix, PATH34, PUT, option).send(),
          /**
           * Seeks to the given position in the user’s currently playing track.
           */
          $put: (option: { query: Methods43['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods43['put']['status']>(prefix, PATH34, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods43['put']['query'] } | undefined) =>
            `${prefix}${PATH34}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        shuffle: {
          /**
           * Toggle shuffle on or off for user’s playback.
           */
          put: (option: { query: Methods44['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods44['put']['status']>(prefix, PATH35, PUT, option).send(),
          /**
           * Toggle shuffle on or off for user’s playback.
           */
          $put: (option: { query: Methods44['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods44['put']['status']>(prefix, PATH35, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods44['put']['query'] } | undefined) =>
            `${prefix}${PATH35}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        volume: {
          /**
           * Set the volume for the user’s current playback device.
           */
          put: (option: { query: Methods45['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods45['put']['status']>(prefix, PATH36, PUT, option).send(),
          /**
           * Set the volume for the user’s current playback device.
           */
          $put: (option: { query: Methods45['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods45['put']['status']>(prefix, PATH36, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods45['put']['query'] } | undefined) =>
            `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Get information about the user’s current playback state, including track or episode, progress, and active device.
         * @returns Information about playback
         */
        get: (option?: { query?: Methods33['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH24, GET, option).json(),
        /**
         * Get information about the user’s current playback state, including track or episode, progress, and active device.
         * @returns Information about playback
         */
        $get: (option?: { query?: Methods33['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
        /**
         * Transfer playback to a new device and determine if it should start playing.
         */
        put: (option: { body: Methods33['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods33['put']['status']>(prefix, PATH24, PUT, option).send(),
        /**
         * Transfer playback to a new device and determine if it should start playing.
         */
        $put: (option: { body: Methods33['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods33['put']['status']>(prefix, PATH24, PUT, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods33['get']['query'] } | undefined) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      playlists: {
        /**
         * Get a list of the playlists owned or followed by the current Spotify
         * user.
         * @returns A paged set of playlists
         */
        get: (option?: { query?: Methods46['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, PATH37, GET, option).json(),
        /**
         * Get a list of the playlists owned or followed by the current Spotify
         * user.
         * @returns A paged set of playlists
         */
        $get: (option?: { query?: Methods46['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, PATH37, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods46['get']['query'] } | undefined) =>
          `${prefix}${PATH37}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      shows: {
        contains: {
          /**
           * Check if one or more shows is already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods48['get']['query'], config?: T | undefined }) =>
            fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, PATH39, GET, option).json(),
          /**
           * Check if one or more shows is already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods48['get']['query'], config?: T | undefined }) =>
            fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, PATH39, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods48['get']['query'] } | undefined) =>
            `${prefix}${PATH39}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Delete one or more shows from current Spotify user's library.
         */
        delete: (option: { query: Methods47['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods47['delete']['status']>(prefix, PATH38, DELETE, option).send(),
        /**
         * Delete one or more shows from current Spotify user's library.
         */
        $delete: (option: { query: Methods47['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods47['delete']['status']>(prefix, PATH38, DELETE, option).send().then(r => r.body),
        /**
         * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
         * @returns Pages of shows
         */
        get: (option?: { query?: Methods47['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, PATH38, GET, option).json(),
        /**
         * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
         * @returns Pages of shows
         */
        $get: (option?: { query?: Methods47['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, PATH38, GET, option).json().then(r => r.body),
        /**
         * Save one or more shows to current Spotify user's library.
         */
        put: (option: { query: Methods47['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods47['put']['status']>(prefix, PATH38, PUT, option).send(),
        /**
         * Save one or more shows to current Spotify user's library.
         */
        $put: (option: { query: Methods47['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods47['put']['status']>(prefix, PATH38, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods47['delete']['query'] } | { method?: 'get' | undefined; query: Methods47['get']['query'] } | { method: 'put'; query: Methods47['put']['query'] } | undefined) =>
          `${prefix}${PATH38}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      top: {
        _type: (val2: number | string) => {
          const prefix2 = `${PATH40}/${val2}`

          return {
            /**
             * Get the current user's top artists or tracks based on calculated affinity.
             * @returns Pages of artists or tracks
             */
            get: (option?: { query?: Methods49['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Get the current user's top artists or tracks based on calculated affinity.
             * @returns Pages of artists or tracks
             */
            $get: (option?: { query?: Methods49['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods49['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      tracks: {
        contains: {
          /**
           * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods51['get']['query'], config?: T | undefined }) =>
            fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, PATH42, GET, option).json(),
          /**
           * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods51['get']['query'], config?: T | undefined }) =>
            fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, PATH42, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods51['get']['query'] } | undefined) =>
            `${prefix}${PATH42}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        /**
         * Remove one or more tracks from the current user's 'Your Music' library.
         */
        delete: (option: { body: Methods50['delete']['reqBody'], query: Methods50['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, PATH41, DELETE, option).send(),
        /**
         * Remove one or more tracks from the current user's 'Your Music' library.
         */
        $delete: (option: { body: Methods50['delete']['reqBody'], query: Methods50['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, PATH41, DELETE, option).send().then(r => r.body),
        /**
         * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of tracks
         */
        get: (option?: { query?: Methods50['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, PATH41, GET, option).json(),
        /**
         * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of tracks
         */
        $get: (option?: { query?: Methods50['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, PATH41, GET, option).json().then(r => r.body),
        /**
         * Save one or more tracks to the current user's 'Your Music' library.
         */
        put: (option: { body: Methods50['put']['reqBody'], query: Methods50['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods50['put']['status']>(prefix, PATH41, PUT, option).send(),
        /**
         * Save one or more tracks to the current user's 'Your Music' library.
         */
        $put: (option: { body: Methods50['put']['reqBody'], query: Methods50['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods50['put']['status']>(prefix, PATH41, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods50['delete']['query'] } | { method?: 'get' | undefined; query: Methods50['get']['query'] } | { method: 'put'; query: Methods50['put']['query'] } | undefined) =>
          `${prefix}${PATH41}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      /**
       * Get detailed profile information about the current user (including the
       * current user's username).
       * @returns A user
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH15, GET, option).json(),
      /**
       * Get detailed profile information about the current user (including the
       * current user's username).
       * @returns A user
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH15}`
    },
    playlists: {
      _playlist_id: (val1: string) => {
        const prefix1 = `${PATH10}/${val1}`

        return {
          followers: {
            contains: {
              /**
               * Check to see if one or more Spotify users are following a specified playlist.
               * @returns Array of booleans
               */
              get: (option: { query: Methods54['get']['query'], config?: T | undefined }) =>
                fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, `${prefix1}${PATH44}`, GET, option).json(),
              /**
               * Check to see if one or more Spotify users are following a specified playlist.
               * @returns Array of booleans
               */
              $get: (option: { query: Methods54['get']['query'], config?: T | undefined }) =>
                fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, `${prefix1}${PATH44}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods54['get']['query'] } | undefined) =>
                `${prefix}${prefix1}${PATH44}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            /**
             * Remove the current user as a follower of a playlist.
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods53['delete']['status']>(prefix, `${prefix1}${PATH43}`, DELETE, option).send(),
            /**
             * Remove the current user as a follower of a playlist.
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods53['delete']['status']>(prefix, `${prefix1}${PATH43}`, DELETE, option).send().then(r => r.body),
            /**
             * Add the current user as a follower of a playlist.
             */
            put: (option: { body: Methods53['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods53['put']['status']>(prefix, `${prefix1}${PATH43}`, PUT, option).send(),
            /**
             * Add the current user as a follower of a playlist.
             */
            $put: (option: { body: Methods53['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods53['put']['status']>(prefix, `${prefix1}${PATH43}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH43}`
          },
          images: {
            /**
             * Get the current image associated with a specific playlist.
             * @returns A set of images
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, `${prefix1}${PATH45}`, GET, option).json(),
            /**
             * Get the current image associated with a specific playlist.
             * @returns A set of images
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, `${prefix1}${PATH45}`, GET, option).json().then(r => r.body),
            /**
             * Replace the image used to represent a specific playlist.
             */
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods55['put']['status']>(prefix, `${prefix1}${PATH45}`, PUT, option).send(),
            /**
             * Replace the image used to represent a specific playlist.
             */
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods55['put']['status']>(prefix, `${prefix1}${PATH45}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH45}`
          },
          tracks: {
            /**
             * Remove one or more items from a user's playlist.
             * @returns A snapshot ID for the playlist
             */
            delete: (option: { body: Methods56['delete']['reqBody'], config?: T | undefined }) =>
              fetch<Methods56['delete']['resBody'], BasicHeaders, Methods56['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).json(),
            /**
             * Remove one or more items from a user's playlist.
             * @returns A snapshot ID for the playlist
             */
            $delete: (option: { body: Methods56['delete']['reqBody'], config?: T | undefined }) =>
              fetch<Methods56['delete']['resBody'], BasicHeaders, Methods56['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          },
          /**
           * Get a playlist owned by a Spotify user.
           * @returns A playlist
           */
          get: (option?: { query?: Methods52['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get a playlist owned by a Spotify user.
           * @returns A playlist
           */
          $get: (option?: { query?: Methods52['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Change a playlist's name and public/private state. (The user must, of
           * course, own the playlist.)
           */
          put: (option: { body: Methods52['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods52['put']['status']>(prefix, prefix1, PUT, option).send(),
          /**
           * Change a playlist's name and public/private state. (The user must, of
           * course, own the playlist.)
           */
          $put: (option: { body: Methods52['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods52['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods52['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    recommendations: {
      available_genre_seeds: {
        /**
         * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
         * @returns A set of genres
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods58['get']['resBody'], BasicHeaders, Methods58['get']['status']>(prefix, PATH47, GET, option).json(),
        /**
         * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
         * @returns A set of genres
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods58['get']['resBody'], BasicHeaders, Methods58['get']['status']>(prefix, PATH47, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH47}`
      },
      /**
       * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
       *
       * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
       * @returns A set of recommendations
       */
      get: (option: { query: Methods57['get']['query'], config?: T | undefined }) =>
        fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, PATH46, GET, option).json(),
      /**
       * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
       *
       * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
       * @returns A set of recommendations
       */
      $get: (option: { query: Methods57['get']['query'], config?: T | undefined }) =>
        fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, PATH46, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods57['get']['query'] } | undefined) =>
        `${prefix}${PATH46}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    search: {
      /**
       * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
       * that match a keyword string.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns Search response
       */
      get: (option: { query: Methods59['get']['query'], config?: T | undefined }) =>
        fetch<Methods59['get']['resBody'], BasicHeaders, Methods59['get']['status']>(prefix, PATH48, GET, option).json(),
      /**
       * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
       * that match a keyword string.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns Search response
       */
      $get: (option: { query: Methods59['get']['query'], config?: T | undefined }) =>
        fetch<Methods59['get']['resBody'], BasicHeaders, Methods59['get']['status']>(prefix, PATH48, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods59['get']['query'] } | undefined) =>
        `${prefix}${PATH48}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    shows: {
      _id: (val1: string) => {
        const prefix1 = `${PATH49}/${val1}`

        return {
          episodes: {
            /**
             * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
             * @returns Pages of episodes
             */
            get: (option?: { query?: Methods62['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods62['get']['resBody'], BasicHeaders, Methods62['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
             * @returns Pages of episodes
             */
            $get: (option?: { query?: Methods62['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods62['get']['resBody'], BasicHeaders, Methods62['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods62['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * Get Spotify catalog information for a single show identified by its
           * unique Spotify ID.
           * @returns A show
           */
          get: (option?: { query?: Methods61['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods61['get']['resBody'], BasicHeaders, Methods61['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single show identified by its
           * unique Spotify ID.
           * @returns A show
           */
          $get: (option?: { query?: Methods61['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods61['get']['resBody'], BasicHeaders, Methods61['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods61['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * Get Spotify catalog information for several shows based on their Spotify IDs.
       * @returns A set of shows
       */
      get: (option: { query: Methods60['get']['query'], config?: T | undefined }) =>
        fetch<Methods60['get']['resBody'], BasicHeaders, Methods60['get']['status']>(prefix, PATH49, GET, option).json(),
      /**
       * Get Spotify catalog information for several shows based on their Spotify IDs.
       * @returns A set of shows
       */
      $get: (option: { query: Methods60['get']['query'], config?: T | undefined }) =>
        fetch<Methods60['get']['resBody'], BasicHeaders, Methods60['get']['status']>(prefix, PATH49, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods60['get']['query'] } | undefined) =>
        `${prefix}${PATH49}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    tracks: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * Get Spotify catalog information for a single track identified by its
           * unique Spotify ID.
           * @returns A track
           */
          get: (option?: { query?: Methods64['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods64['get']['resBody'], BasicHeaders, Methods64['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single track identified by its
           * unique Spotify ID.
           * @returns A track
           */
          $get: (option?: { query?: Methods64['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods64['get']['resBody'], BasicHeaders, Methods64['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods64['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
       * @returns A set of tracks
       */
      get: (option: { query: Methods63['get']['query'], config?: T | undefined }) =>
        fetch<Methods63['get']['resBody'], BasicHeaders, Methods63['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
       * @returns A set of tracks
       */
      $get: (option: { query: Methods63['get']['query'], config?: T | undefined }) =>
        fetch<Methods63['get']['resBody'], BasicHeaders, Methods63['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods63['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users: {
      _user_id: (val1: string) => {
        const prefix1 = `${PATH50}/${val1}`

        return {
          playlists: {
            /**
             * Get a list of the playlists owned or followed by a Spotify user.
             * @returns A paged set of playlists
             */
            get: (option?: { query?: Methods66['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods66['get']['resBody'], BasicHeaders, Methods66['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json(),
            /**
             * Get a list of the playlists owned or followed by a Spotify user.
             * @returns A paged set of playlists
             */
            $get: (option?: { query?: Methods66['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods66['get']['resBody'], BasicHeaders, Methods66['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json().then(r => r.body),
            /**
             * Create a playlist for a Spotify user. (The playlist will be empty until
             * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
             * @returns A playlist
             */
            post: (option: { body: Methods66['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods66['post']['resBody'], BasicHeaders, Methods66['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json(),
            /**
             * Create a playlist for a Spotify user. (The playlist will be empty until
             * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
             * @returns A playlist
             */
            $post: (option: { body: Methods66['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods66['post']['resBody'], BasicHeaders, Methods66['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods66['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          /**
           * Get public profile information about a Spotify user.
           * @returns A user
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods65['get']['resBody'], BasicHeaders, Methods65['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get public profile information about a Spotify user.
           * @returns A user
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods65['get']['resBody'], BasicHeaders, Methods65['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
