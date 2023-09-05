import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_vbdq2m } from './albums';
import type { Methods as Methods_1jl35vi } from './albums/_id@string';
import type { Methods as Methods_14ypn2b } from './albums/_id@string/tracks';
import type { Methods as Methods_47458q } from './artists';
import type { Methods as Methods_y68fqq } from './artists/_id@string';
import type { Methods as Methods_5rc2tz } from './artists/_id@string/albums';
import type { Methods as Methods_1o0lzq7 } from './artists/_id@string/related-artists';
import type { Methods as Methods_ht2rsx } from './artists/_id@string/top-tracks';
import type { Methods as Methods_15e8acr } from './audio-analysis/_id@string';
import type { Methods as Methods_g6h6l0 } from './audio-features';
import type { Methods as Methods_4ohdl4 } from './audio-features/_id@string';
import type { Methods as Methods_zzs2n2 } from './audiobooks';
import type { Methods as Methods_1du4qhq } from './audiobooks/_id@string';
import type { Methods as Methods_cxd0w5 } from './audiobooks/_id@string/chapters';
import type { Methods as Methods_eva34t } from './browse/categories';
import type { Methods as Methods_1wyvrb6 } from './browse/categories/_category_id@string';
import type { Methods as Methods_hdarhy } from './browse/categories/_category_id@string/playlists';
import type { Methods as Methods_1eu9u2d } from './browse/featured-playlists';
import type { Methods as Methods_1i71nku } from './browse/new-releases';
import type { Methods as Methods_1w9ar4w } from './chapters';
import type { Methods as Methods_12awye4 } from './chapters/_id@string';
import type { Methods as Methods_xioq18 } from './episodes';
import type { Methods as Methods_ags3mo } from './episodes/_id@string';
import type { Methods as Methods_1ke2bsz } from './markets';
import type { Methods as Methods_1uc1f5c } from './me';
import type { Methods as Methods_15ycmmt } from './me/albums';
import type { Methods as Methods_1gvoevv } from './me/albums/contains';
import type { Methods as Methods_tbrgtx } from './me/audiobooks';
import type { Methods as Methods_1yfczi3 } from './me/audiobooks/contains';
import type { Methods as Methods_p499uj } from './me/episodes';
import type { Methods as Methods_1p5fxmd } from './me/episodes/contains';
import type { Methods as Methods_lu129c } from './me/following';
import type { Methods as Methods_7zkaps } from './me/following/contains';
import type { Methods as Methods_t7i20 } from './me/player';
import type { Methods as Methods_129nxc2 } from './me/player/currently-playing';
import type { Methods as Methods_2cewn4 } from './me/player/devices';
import type { Methods as Methods_10rcug8 } from './me/player/next';
import type { Methods as Methods_1xqr7wt } from './me/player/pause';
import type { Methods as Methods_1m2bqn7 } from './me/player/play';
import type { Methods as Methods_4j9wmg } from './me/player/previous';
import type { Methods as Methods_yqy41k } from './me/player/queue';
import type { Methods as Methods_8h4883 } from './me/player/recently-played';
import type { Methods as Methods_1daqesq } from './me/player/repeat';
import type { Methods as Methods_z92odt } from './me/player/seek';
import type { Methods as Methods_dt4lu6 } from './me/player/shuffle';
import type { Methods as Methods_1ioa37z } from './me/player/volume';
import type { Methods as Methods_6eirb4 } from './me/playlists';
import type { Methods as Methods_lwhck5 } from './me/shows';
import type { Methods as Methods_5fe3a3 } from './me/shows/contains';
import type { Methods as Methods_1uyhcm3 } from './me/top/artists';
import type { Methods as Methods_ijvttt } from './me/top/tracks';
import type { Methods as Methods_ql1uk5 } from './me/tracks';
import type { Methods as Methods_yqau2j } from './me/tracks/contains';
import type { Methods as Methods_10aj0n0 } from './playlists/_playlist_id@string';
import type { Methods as Methods_siltcg } from './playlists/_playlist_id@string/followers';
import type { Methods as Methods_199irts } from './playlists/_playlist_id@string/followers/contains';
import type { Methods as Methods_yl7u7b } from './playlists/_playlist_id@string/images';
import type { Methods as Methods_1uljbm1 } from './playlists/_playlist_id@string/tracks';
import type { Methods as Methods_3lvt1m } from './recommendations';
import type { Methods as Methods_3irejr } from './recommendations/available-genre-seeds';
import type { Methods as Methods_4ofto2 } from './search';
import type { Methods as Methods_1m02nw4 } from './shows';
import type { Methods as Methods_2zlvxk } from './shows/_id@string';
import type { Methods as Methods_1bz933n } from './shows/_id@string/episodes';
import type { Methods as Methods_m6qvv2 } from './tracks';
import type { Methods as Methods_1r7a8mm } from './tracks/_id@string';
import type { Methods as Methods_1m2ih5q } from './users/_user_id@string';
import type { Methods as Methods_13dxyle } from './users/_user_id@string/playlists';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.spotify.com/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/albums';
  const PATH1 = '/tracks';
  const PATH2 = '/artists';
  const PATH3 = '/related-artists';
  const PATH4 = '/top-tracks';
  const PATH5 = '/audio-analysis';
  const PATH6 = '/audio-features';
  const PATH7 = '/audiobooks';
  const PATH8 = '/chapters';
  const PATH9 = '/browse/categories';
  const PATH10 = '/playlists';
  const PATH11 = '/browse/featured-playlists';
  const PATH12 = '/browse/new-releases';
  const PATH13 = '/episodes';
  const PATH14 = '/markets';
  const PATH15 = '/me';
  const PATH16 = '/me/albums';
  const PATH17 = '/me/albums/contains';
  const PATH18 = '/me/audiobooks';
  const PATH19 = '/me/audiobooks/contains';
  const PATH20 = '/me/episodes';
  const PATH21 = '/me/episodes/contains';
  const PATH22 = '/me/following';
  const PATH23 = '/me/following/contains';
  const PATH24 = '/me/player';
  const PATH25 = '/me/player/currently-playing';
  const PATH26 = '/me/player/devices';
  const PATH27 = '/me/player/next';
  const PATH28 = '/me/player/pause';
  const PATH29 = '/me/player/play';
  const PATH30 = '/me/player/previous';
  const PATH31 = '/me/player/queue';
  const PATH32 = '/me/player/recently-played';
  const PATH33 = '/me/player/repeat';
  const PATH34 = '/me/player/seek';
  const PATH35 = '/me/player/shuffle';
  const PATH36 = '/me/player/volume';
  const PATH37 = '/me/playlists';
  const PATH38 = '/me/shows';
  const PATH39 = '/me/shows/contains';
  const PATH40 = '/me/top/artists';
  const PATH41 = '/me/top/tracks';
  const PATH42 = '/me/tracks';
  const PATH43 = '/me/tracks/contains';
  const PATH44 = '/followers';
  const PATH45 = '/followers/contains';
  const PATH46 = '/images';
  const PATH47 = '/recommendations';
  const PATH48 = '/recommendations/available-genre-seeds';
  const PATH49 = '/search';
  const PATH50 = '/shows';
  const PATH51 = '/users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    albums: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          tracks: {
            /**
             * Get Spotify catalog information about an album’s tracks.
             * Optional parameters can be used to limit the number of tracks returned.
             * @returns Pages of tracks
             */
            get: (option?: { query?: Methods_14ypn2b['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14ypn2b['get']['resBody'], BasicHeaders, Methods_14ypn2b['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an album’s tracks.
             * Optional parameters can be used to limit the number of tracks returned.
             * @returns Pages of tracks
             */
            $get: (option?: { query?: Methods_14ypn2b['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_14ypn2b['get']['resBody'], BasicHeaders, Methods_14ypn2b['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_14ypn2b['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get Spotify catalog information for a single album.
           * @returns An album
           */
          get: (option?: { query?: Methods_1jl35vi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1jl35vi['get']['resBody'], BasicHeaders, Methods_1jl35vi['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single album.
           * @returns An album
           */
          $get: (option?: { query?: Methods_1jl35vi['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1jl35vi['get']['resBody'], BasicHeaders, Methods_1jl35vi['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1jl35vi['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
       * @returns A set of albums
       */
      get: (option: { query: Methods_vbdq2m['get']['query'], config?: T | undefined }) =>
        fetch<Methods_vbdq2m['get']['resBody'], BasicHeaders, Methods_vbdq2m['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
       * @returns A set of albums
       */
      $get: (option: { query: Methods_vbdq2m['get']['query'], config?: T | undefined }) =>
        fetch<Methods_vbdq2m['get']['resBody'], BasicHeaders, Methods_vbdq2m['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_vbdq2m['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    artists: {
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          albums: {
            /**
             * Get Spotify catalog information about an artist's albums.
             * @returns Pages of albums
             */
            get: (option?: { query?: Methods_5rc2tz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_5rc2tz['get']['resBody'], BasicHeaders, Methods_5rc2tz['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an artist's albums.
             * @returns Pages of albums
             */
            $get: (option?: { query?: Methods_5rc2tz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_5rc2tz['get']['resBody'], BasicHeaders, Methods_5rc2tz['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_5rc2tz['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          related_artists: {
            /**
             * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
             * @returns A set of artists
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1o0lzq7['get']['resBody'], BasicHeaders, Methods_1o0lzq7['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
             * @returns A set of artists
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1o0lzq7['get']['resBody'], BasicHeaders, Methods_1o0lzq7['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`,
          },
          top_tracks: {
            /**
             * Get Spotify catalog information about an artist's top tracks by country.
             * @returns A set of tracks
             */
            get: (option?: { query?: Methods_ht2rsx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_ht2rsx['get']['resBody'], BasicHeaders, Methods_ht2rsx['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an artist's top tracks by country.
             * @returns A set of tracks
             */
            $get: (option?: { query?: Methods_ht2rsx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_ht2rsx['get']['resBody'], BasicHeaders, Methods_ht2rsx['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_ht2rsx['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
           * @returns An artist
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_y68fqq['get']['resBody'], BasicHeaders, Methods_y68fqq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
           * @returns An artist
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_y68fqq['get']['resBody'], BasicHeaders, Methods_y68fqq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get Spotify catalog information for several artists based on their Spotify IDs.
       * @returns A set of artists
       */
      get: (option: { query: Methods_47458q['get']['query'], config?: T | undefined }) =>
        fetch<Methods_47458q['get']['resBody'], BasicHeaders, Methods_47458q['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Get Spotify catalog information for several artists based on their Spotify IDs.
       * @returns A set of artists
       */
      $get: (option: { query: Methods_47458q['get']['query'], config?: T | undefined }) =>
        fetch<Methods_47458q['get']['resBody'], BasicHeaders, Methods_47458q['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_47458q['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    audio_analysis: {
      _id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
           * @returns Audio analysis for one track
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_15e8acr['get']['resBody'], BasicHeaders, Methods_15e8acr['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
           * @returns Audio analysis for one track
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_15e8acr['get']['resBody'], BasicHeaders, Methods_15e8acr['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    audio_features: {
      _id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
          /**
           * Get audio feature information for a single track identified by its unique
           * Spotify ID.
           * @returns Audio features for one track
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_4ohdl4['get']['resBody'], BasicHeaders, Methods_4ohdl4['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get audio feature information for a single track identified by its unique
           * Spotify ID.
           * @returns Audio features for one track
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_4ohdl4['get']['resBody'], BasicHeaders, Methods_4ohdl4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Get audio features for multiple tracks based on their Spotify IDs.
       * @returns A set of audio features
       */
      get: (option: { query: Methods_g6h6l0['get']['query'], config?: T | undefined }) =>
        fetch<Methods_g6h6l0['get']['resBody'], BasicHeaders, Methods_g6h6l0['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * Get audio features for multiple tracks based on their Spotify IDs.
       * @returns A set of audio features
       */
      $get: (option: { query: Methods_g6h6l0['get']['query'], config?: T | undefined }) =>
        fetch<Methods_g6h6l0['get']['resBody'], BasicHeaders, Methods_g6h6l0['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_g6h6l0['get']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    audiobooks: {
      _id: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          chapters: {
            /**
             * Get Spotify catalog information about an audiobook's chapters.<br />
             * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
             * @returns Pages of chapters
             */
            get: (option?: { query?: Methods_cxd0w5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_cxd0w5['get']['resBody'], BasicHeaders, Methods_cxd0w5['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an audiobook's chapters.<br />
             * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
             * @returns Pages of chapters
             */
            $get: (option?: { query?: Methods_cxd0w5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_cxd0w5['get']['resBody'], BasicHeaders, Methods_cxd0w5['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_cxd0w5['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get Spotify catalog information for a single audiobook.<br />
           * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns An Audiobook
           */
          get: (option?: { query?: Methods_1du4qhq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1du4qhq['get']['resBody'], BasicHeaders, Methods_1du4qhq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single audiobook.<br />
           * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns An Audiobook
           */
          $get: (option?: { query?: Methods_1du4qhq['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1du4qhq['get']['resBody'], BasicHeaders, Methods_1du4qhq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1du4qhq['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of audiobooks
       */
      get: (option: { query: Methods_zzs2n2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_zzs2n2['get']['resBody'], BasicHeaders, Methods_zzs2n2['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of audiobooks
       */
      $get: (option: { query: Methods_zzs2n2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_zzs2n2['get']['resBody'], BasicHeaders, Methods_zzs2n2['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_zzs2n2['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    browse: {
      categories: {
        _category_id: (val2: string) => {
          const prefix2 = `${PATH9}/${val2}`;

          return {
            playlists: {
              /**
               * Get a list of Spotify playlists tagged with a particular category.
               * @returns A paged set of playlists
               */
              get: (option?: { query?: Methods_hdarhy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_hdarhy['get']['resBody'], BasicHeaders, Methods_hdarhy['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json(),
              /**
               * Get a list of Spotify playlists tagged with a particular category.
               * @returns A paged set of playlists
               */
              $get: (option?: { query?: Methods_hdarhy['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_hdarhy['get']['resBody'], BasicHeaders, Methods_hdarhy['get']['status']>(prefix, `${prefix2}${PATH10}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_hdarhy['get']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            /**
             * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
             * @returns A category
             */
            get: (option?: { query?: Methods_1wyvrb6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1wyvrb6['get']['resBody'], BasicHeaders, Methods_1wyvrb6['get']['status']>(prefix, prefix2, GET, option).json(),
            /**
             * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
             * @returns A category
             */
            $get: (option?: { query?: Methods_1wyvrb6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1wyvrb6['get']['resBody'], BasicHeaders, Methods_1wyvrb6['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1wyvrb6['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        /**
         * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         * @returns A paged set of categories
         */
        get: (option?: { query?: Methods_eva34t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_eva34t['get']['resBody'], BasicHeaders, Methods_eva34t['get']['status']>(prefix, PATH9, GET, option).json(),
        /**
         * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         * @returns A paged set of categories
         */
        $get: (option?: { query?: Methods_eva34t['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_eva34t['get']['resBody'], BasicHeaders, Methods_eva34t['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_eva34t['get']['query'] } | undefined) =>
          `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      featured_playlists: {
        /**
         * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
         * @returns A paged set of playlists
         */
        get: (option?: { query?: Methods_1eu9u2d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1eu9u2d['get']['resBody'], BasicHeaders, Methods_1eu9u2d['get']['status']>(prefix, PATH11, GET, option).json(),
        /**
         * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
         * @returns A paged set of playlists
         */
        $get: (option?: { query?: Methods_1eu9u2d['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1eu9u2d['get']['resBody'], BasicHeaders, Methods_1eu9u2d['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1eu9u2d['get']['query'] } | undefined) =>
          `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      new_releases: {
        /**
         * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
         * @returns A paged set of albums
         */
        get: (option?: { query?: Methods_1i71nku['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1i71nku['get']['resBody'], BasicHeaders, Methods_1i71nku['get']['status']>(prefix, PATH12, GET, option).json(),
        /**
         * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
         * @returns A paged set of albums
         */
        $get: (option?: { query?: Methods_1i71nku['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1i71nku['get']['resBody'], BasicHeaders, Methods_1i71nku['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1i71nku['get']['query'] } | undefined) =>
          `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    chapters: {
      _id: (val1: string) => {
        const prefix1 = `${PATH8}/${val1}`;

        return {
          /**
           * Get Spotify catalog information for a single chapter.<br />
           * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns A Chapter
           */
          get: (option?: { query?: Methods_12awye4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12awye4['get']['resBody'], BasicHeaders, Methods_12awye4['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single chapter.<br />
           * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
           * @returns A Chapter
           */
          $get: (option?: { query?: Methods_12awye4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_12awye4['get']['resBody'], BasicHeaders, Methods_12awye4['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_12awye4['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
       * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of chapters
       */
      get: (option: { query: Methods_1w9ar4w['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1w9ar4w['get']['resBody'], BasicHeaders, Methods_1w9ar4w['get']['status']>(prefix, PATH8, GET, option).json(),
      /**
       * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
       * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns A set of chapters
       */
      $get: (option: { query: Methods_1w9ar4w['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1w9ar4w['get']['resBody'], BasicHeaders, Methods_1w9ar4w['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1w9ar4w['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    episodes: {
      _id: (val1: string) => {
        const prefix1 = `${PATH13}/${val1}`;

        return {
          /**
           * Get Spotify catalog information for a single episode identified by its
           * unique Spotify ID.
           * @returns An episode
           */
          get: (option?: { query?: Methods_ags3mo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ags3mo['get']['resBody'], BasicHeaders, Methods_ags3mo['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single episode identified by its
           * unique Spotify ID.
           * @returns An episode
           */
          $get: (option?: { query?: Methods_ags3mo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ags3mo['get']['resBody'], BasicHeaders, Methods_ags3mo['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_ags3mo['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Get Spotify catalog information for several episodes based on their Spotify IDs.
       * @returns A set of episodes
       */
      get: (option: { query: Methods_xioq18['get']['query'], config?: T | undefined }) =>
        fetch<Methods_xioq18['get']['resBody'], BasicHeaders, Methods_xioq18['get']['status']>(prefix, PATH13, GET, option).json(),
      /**
       * Get Spotify catalog information for several episodes based on their Spotify IDs.
       * @returns A set of episodes
       */
      $get: (option: { query: Methods_xioq18['get']['query'], config?: T | undefined }) =>
        fetch<Methods_xioq18['get']['resBody'], BasicHeaders, Methods_xioq18['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_xioq18['get']['query'] } | undefined) =>
        `${prefix}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    markets: {
      /**
       * Get the list of markets where Spotify is available.
       * @returns A markets object with an array of country codes
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1ke2bsz['get']['resBody'], BasicHeaders, Methods_1ke2bsz['get']['status']>(prefix, PATH14, GET, option).json(),
      /**
       * Get the list of markets where Spotify is available.
       * @returns A markets object with an array of country codes
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1ke2bsz['get']['resBody'], BasicHeaders, Methods_1ke2bsz['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH14}`,
    },
    me: {
      albums: {
        contains: {
          /**
           * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods_1gvoevv['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1gvoevv['get']['resBody'], BasicHeaders, Methods_1gvoevv['get']['status']>(prefix, PATH17, GET, option).json(),
          /**
           * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods_1gvoevv['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1gvoevv['get']['resBody'], BasicHeaders, Methods_1gvoevv['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1gvoevv['get']['query'] } | undefined) =>
            `${prefix}${PATH17}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of albums
         */
        get: (option?: { query?: Methods_15ycmmt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_15ycmmt['get']['resBody'], BasicHeaders, Methods_15ycmmt['get']['status']>(prefix, PATH16, GET, option).json(),
        /**
         * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of albums
         */
        $get: (option?: { query?: Methods_15ycmmt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_15ycmmt['get']['resBody'], BasicHeaders, Methods_15ycmmt['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
        /**
         * Save one or more albums to the current user's 'Your Music' library.
         */
        put: (option: { body: Methods_15ycmmt['put']['reqBody'], query: Methods_15ycmmt['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_15ycmmt['put']['status']>(prefix, PATH16, PUT, option).send(),
        /**
         * Save one or more albums to the current user's 'Your Music' library.
         */
        $put: (option: { body: Methods_15ycmmt['put']['reqBody'], query: Methods_15ycmmt['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_15ycmmt['put']['status']>(prefix, PATH16, PUT, option).send().then(r => r.body),
        /**
         * Remove one or more albums from the current user's 'Your Music' library.
         */
        delete: (option: { body: Methods_15ycmmt['delete']['reqBody'], query: Methods_15ycmmt['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_15ycmmt['delete']['status']>(prefix, PATH16, DELETE, option).send(),
        /**
         * Remove one or more albums from the current user's 'Your Music' library.
         */
        $delete: (option: { body: Methods_15ycmmt['delete']['reqBody'], query: Methods_15ycmmt['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_15ycmmt['delete']['status']>(prefix, PATH16, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_15ycmmt['get']['query'] } | { method: 'put'; query: Methods_15ycmmt['put']['query'] } | { method: 'delete'; query: Methods_15ycmmt['delete']['query'] } | undefined) =>
          `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      audiobooks: {
        contains: {
          /**
           * Check if one or more audiobooks are already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods_1yfczi3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1yfczi3['get']['resBody'], BasicHeaders, Methods_1yfczi3['get']['status']>(prefix, PATH19, GET, option).json(),
          /**
           * Check if one or more audiobooks are already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods_1yfczi3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1yfczi3['get']['resBody'], BasicHeaders, Methods_1yfczi3['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1yfczi3['get']['query'] } | undefined) =>
            `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of saved audiobooks
         */
        get: (option?: { query?: Methods_tbrgtx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_tbrgtx['get']['resBody'], BasicHeaders, Methods_tbrgtx['get']['status']>(prefix, PATH18, GET, option).json(),
        /**
         * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of saved audiobooks
         */
        $get: (option?: { query?: Methods_tbrgtx['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_tbrgtx['get']['resBody'], BasicHeaders, Methods_tbrgtx['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
        /**
         * Save one or more audiobooks to the current Spotify user's library.
         */
        put: (option: { query: Methods_tbrgtx['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_tbrgtx['put']['status']>(prefix, PATH18, PUT, option).send(),
        /**
         * Save one or more audiobooks to the current Spotify user's library.
         */
        $put: (option: { query: Methods_tbrgtx['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_tbrgtx['put']['status']>(prefix, PATH18, PUT, option).send().then(r => r.body),
        /**
         * Remove one or more audiobooks from the Spotify user's library.
         */
        delete: (option: { query: Methods_tbrgtx['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_tbrgtx['delete']['status']>(prefix, PATH18, DELETE, option).send(),
        /**
         * Remove one or more audiobooks from the Spotify user's library.
         */
        $delete: (option: { query: Methods_tbrgtx['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_tbrgtx['delete']['status']>(prefix, PATH18, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_tbrgtx['get']['query'] } | { method: 'put'; query: Methods_tbrgtx['put']['query'] } | { method: 'delete'; query: Methods_tbrgtx['delete']['query'] } | undefined) =>
          `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      episodes: {
        contains: {
          /**
           * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
           * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
           * @returns Array of booleans
           */
          get: (option: { query: Methods_1p5fxmd['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1p5fxmd['get']['resBody'], BasicHeaders, Methods_1p5fxmd['get']['status']>(prefix, PATH21, GET, option).json(),
          /**
           * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
           * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
           * @returns Array of booleans
           */
          $get: (option: { query: Methods_1p5fxmd['get']['query'], config?: T | undefined }) =>
            fetch<Methods_1p5fxmd['get']['resBody'], BasicHeaders, Methods_1p5fxmd['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1p5fxmd['get']['query'] } | undefined) =>
            `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get a list of the episodes saved in the current Spotify user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         * @returns Pages of episodes
         */
        get: (option?: { query?: Methods_p499uj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_p499uj['get']['resBody'], BasicHeaders, Methods_p499uj['get']['status']>(prefix, PATH20, GET, option).json(),
        /**
         * Get a list of the episodes saved in the current Spotify user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         * @returns Pages of episodes
         */
        $get: (option?: { query?: Methods_p499uj['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_p499uj['get']['resBody'], BasicHeaders, Methods_p499uj['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
        /**
         * Save one or more episodes to the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        put: (option: { body: Methods_p499uj['put']['reqBody'], query: Methods_p499uj['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_p499uj['put']['status']>(prefix, PATH20, PUT, option).send(),
        /**
         * Save one or more episodes to the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        $put: (option: { body: Methods_p499uj['put']['reqBody'], query: Methods_p499uj['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_p499uj['put']['status']>(prefix, PATH20, PUT, option).send().then(r => r.body),
        /**
         * Remove one or more episodes from the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        delete: (option: { body: Methods_p499uj['delete']['reqBody'], query: Methods_p499uj['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_p499uj['delete']['status']>(prefix, PATH20, DELETE, option).send(),
        /**
         * Remove one or more episodes from the current user's library.<br/>
         * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         */
        $delete: (option: { body: Methods_p499uj['delete']['reqBody'], query: Methods_p499uj['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_p499uj['delete']['status']>(prefix, PATH20, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_p499uj['get']['query'] } | { method: 'put'; query: Methods_p499uj['put']['query'] } | { method: 'delete'; query: Methods_p499uj['delete']['query'] } | undefined) =>
          `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      following: {
        contains: {
          /**
           * Check to see if the current user is following one or more artists or other Spotify users.
           * @returns Array of booleans
           */
          get: (option: { query: Methods_7zkaps['get']['query'], config?: T | undefined }) =>
            fetch<Methods_7zkaps['get']['resBody'], BasicHeaders, Methods_7zkaps['get']['status']>(prefix, PATH23, GET, option).json(),
          /**
           * Check to see if the current user is following one or more artists or other Spotify users.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods_7zkaps['get']['query'], config?: T | undefined }) =>
            fetch<Methods_7zkaps['get']['resBody'], BasicHeaders, Methods_7zkaps['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_7zkaps['get']['query'] } | undefined) =>
            `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get the current user's followed artists.
         * @returns A paged set of artists
         */
        get: (option: { query: Methods_lu129c['get']['query'], config?: T | undefined }) =>
          fetch<Methods_lu129c['get']['resBody'], BasicHeaders, Methods_lu129c['get']['status']>(prefix, PATH22, GET, option).json(),
        /**
         * Get the current user's followed artists.
         * @returns A paged set of artists
         */
        $get: (option: { query: Methods_lu129c['get']['query'], config?: T | undefined }) =>
          fetch<Methods_lu129c['get']['resBody'], BasicHeaders, Methods_lu129c['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
        /**
         * Add the current user as a follower of one or more artists or other Spotify users.
         */
        put: (option: { body: Methods_lu129c['put']['reqBody'], query: Methods_lu129c['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lu129c['put']['status']>(prefix, PATH22, PUT, option).send(),
        /**
         * Add the current user as a follower of one or more artists or other Spotify users.
         */
        $put: (option: { body: Methods_lu129c['put']['reqBody'], query: Methods_lu129c['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lu129c['put']['status']>(prefix, PATH22, PUT, option).send().then(r => r.body),
        /**
         * Remove the current user as a follower of one or more artists or other Spotify users.
         */
        delete: (option: { body: Methods_lu129c['delete']['reqBody'], query: Methods_lu129c['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lu129c['delete']['status']>(prefix, PATH22, DELETE, option).send(),
        /**
         * Remove the current user as a follower of one or more artists or other Spotify users.
         */
        $delete: (option: { body: Methods_lu129c['delete']['reqBody'], query: Methods_lu129c['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lu129c['delete']['status']>(prefix, PATH22, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_lu129c['get']['query'] } | { method: 'put'; query: Methods_lu129c['put']['query'] } | { method: 'delete'; query: Methods_lu129c['delete']['query'] } | undefined) =>
          `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      player: {
        currently_playing: {
          /**
           * Get the object currently being played on the user's Spotify account.
           * @returns Information about the currently playing track
           */
          get: (option?: { query?: Methods_129nxc2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_129nxc2['get']['resBody'], BasicHeaders, Methods_129nxc2['get']['status']>(prefix, PATH25, GET, option).json(),
          /**
           * Get the object currently being played on the user's Spotify account.
           * @returns Information about the currently playing track
           */
          $get: (option?: { query?: Methods_129nxc2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_129nxc2['get']['resBody'], BasicHeaders, Methods_129nxc2['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_129nxc2['get']['query'] } | undefined) =>
            `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        devices: {
          /**
           * Get information about a user’s available devices.
           * @returns A set of devices
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_2cewn4['get']['resBody'], BasicHeaders, Methods_2cewn4['get']['status']>(prefix, PATH26, GET, option).json(),
          /**
           * Get information about a user’s available devices.
           * @returns A set of devices
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_2cewn4['get']['resBody'], BasicHeaders, Methods_2cewn4['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH26}`,
        },
        next: {
          /**
           * Skips to next track in the user’s queue.
           */
          post: (option?: { query?: Methods_10rcug8['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_10rcug8['post']['status']>(prefix, PATH27, POST, option).send(),
          /**
           * Skips to next track in the user’s queue.
           */
          $post: (option?: { query?: Methods_10rcug8['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_10rcug8['post']['status']>(prefix, PATH27, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_10rcug8['post']['query'] } | undefined) =>
            `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        pause: {
          /**
           * Pause playback on the user's account.
           */
          put: (option?: { query?: Methods_1xqr7wt['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1xqr7wt['put']['status']>(prefix, PATH28, PUT, option).send(),
          /**
           * Pause playback on the user's account.
           */
          $put: (option?: { query?: Methods_1xqr7wt['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1xqr7wt['put']['status']>(prefix, PATH28, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_1xqr7wt['put']['query'] } | undefined) =>
            `${prefix}${PATH28}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        play: {
          /**
           * Start a new context or resume current playback on the user's active device.
           */
          put: (option: { body: Methods_1m2bqn7['put']['reqBody'], query?: Methods_1m2bqn7['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1m2bqn7['put']['status']>(prefix, PATH29, PUT, option).send(),
          /**
           * Start a new context or resume current playback on the user's active device.
           */
          $put: (option: { body: Methods_1m2bqn7['put']['reqBody'], query?: Methods_1m2bqn7['put']['query'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1m2bqn7['put']['status']>(prefix, PATH29, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_1m2bqn7['put']['query'] } | undefined) =>
            `${prefix}${PATH29}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        previous: {
          /**
           * Skips to previous track in the user’s queue.
           */
          post: (option?: { query?: Methods_4j9wmg['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_4j9wmg['post']['status']>(prefix, PATH30, POST, option).send(),
          /**
           * Skips to previous track in the user’s queue.
           */
          $post: (option?: { query?: Methods_4j9wmg['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_4j9wmg['post']['status']>(prefix, PATH30, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_4j9wmg['post']['query'] } | undefined) =>
            `${prefix}${PATH30}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        queue: {
          /**
           * Get the list of objects that make up the user's queue.
           * @returns Information about the queue
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_yqy41k['get']['resBody'], BasicHeaders, Methods_yqy41k['get']['status']>(prefix, PATH31, GET, option).json(),
          /**
           * Get the list of objects that make up the user's queue.
           * @returns Information about the queue
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_yqy41k['get']['resBody'], BasicHeaders, Methods_yqy41k['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
          /**
           * Add an item to the end of the user's current playback queue.
           */
          post: (option: { query: Methods_yqy41k['post']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_yqy41k['post']['status']>(prefix, PATH31, POST, option).send(),
          /**
           * Add an item to the end of the user's current playback queue.
           */
          $post: (option: { query: Methods_yqy41k['post']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_yqy41k['post']['status']>(prefix, PATH31, POST, option).send().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods_yqy41k['post']['query'] } | undefined) =>
            `${prefix}${PATH31}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        recently_played: {
          /**
           * Get tracks from the current user's recently played tracks.
           * _**Note**: Currently doesn't support podcast episodes._
           * @returns A paged set of tracks
           */
          get: (option?: { query?: Methods_8h4883['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_8h4883['get']['resBody'], BasicHeaders, Methods_8h4883['get']['status']>(prefix, PATH32, GET, option).json(),
          /**
           * Get tracks from the current user's recently played tracks.
           * _**Note**: Currently doesn't support podcast episodes._
           * @returns A paged set of tracks
           */
          $get: (option?: { query?: Methods_8h4883['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_8h4883['get']['resBody'], BasicHeaders, Methods_8h4883['get']['status']>(prefix, PATH32, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_8h4883['get']['query'] } | undefined) =>
            `${prefix}${PATH32}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        repeat: {
          /**
           * Set the repeat mode for the user's playback. Options are repeat-track,
           * repeat-context, and off.
           */
          put: (option: { query: Methods_1daqesq['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1daqesq['put']['status']>(prefix, PATH33, PUT, option).send(),
          /**
           * Set the repeat mode for the user's playback. Options are repeat-track,
           * repeat-context, and off.
           */
          $put: (option: { query: Methods_1daqesq['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1daqesq['put']['status']>(prefix, PATH33, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_1daqesq['put']['query'] } | undefined) =>
            `${prefix}${PATH33}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        seek: {
          /**
           * Seeks to the given position in the user’s currently playing track.
           */
          put: (option: { query: Methods_z92odt['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_z92odt['put']['status']>(prefix, PATH34, PUT, option).send(),
          /**
           * Seeks to the given position in the user’s currently playing track.
           */
          $put: (option: { query: Methods_z92odt['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_z92odt['put']['status']>(prefix, PATH34, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_z92odt['put']['query'] } | undefined) =>
            `${prefix}${PATH34}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        shuffle: {
          /**
           * Toggle shuffle on or off for user’s playback.
           */
          put: (option: { query: Methods_dt4lu6['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_dt4lu6['put']['status']>(prefix, PATH35, PUT, option).send(),
          /**
           * Toggle shuffle on or off for user’s playback.
           */
          $put: (option: { query: Methods_dt4lu6['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_dt4lu6['put']['status']>(prefix, PATH35, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_dt4lu6['put']['query'] } | undefined) =>
            `${prefix}${PATH35}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        volume: {
          /**
           * Set the volume for the user’s current playback device.
           */
          put: (option: { query: Methods_1ioa37z['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1ioa37z['put']['status']>(prefix, PATH36, PUT, option).send(),
          /**
           * Set the volume for the user’s current playback device.
           */
          $put: (option: { query: Methods_1ioa37z['put']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1ioa37z['put']['status']>(prefix, PATH36, PUT, option).send().then(r => r.body),
          $path: (option?: { method: 'put'; query: Methods_1ioa37z['put']['query'] } | undefined) =>
            `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get information about the user’s current playback state, including track or episode, progress, and active device.
         * @returns Information about playback
         */
        get: (option?: { query?: Methods_t7i20['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_t7i20['get']['resBody'], BasicHeaders, Methods_t7i20['get']['status']>(prefix, PATH24, GET, option).json(),
        /**
         * Get information about the user’s current playback state, including track or episode, progress, and active device.
         * @returns Information about playback
         */
        $get: (option?: { query?: Methods_t7i20['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_t7i20['get']['resBody'], BasicHeaders, Methods_t7i20['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
        /**
         * Transfer playback to a new device and determine if it should start playing.
         */
        put: (option: { body: Methods_t7i20['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_t7i20['put']['status']>(prefix, PATH24, PUT, option).send(),
        /**
         * Transfer playback to a new device and determine if it should start playing.
         */
        $put: (option: { body: Methods_t7i20['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_t7i20['put']['status']>(prefix, PATH24, PUT, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_t7i20['get']['query'] } | undefined) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      playlists: {
        /**
         * Get a list of the playlists owned or followed by the current Spotify
         * user.
         * @returns A paged set of playlists
         */
        get: (option?: { query?: Methods_6eirb4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_6eirb4['get']['resBody'], BasicHeaders, Methods_6eirb4['get']['status']>(prefix, PATH37, GET, option).json(),
        /**
         * Get a list of the playlists owned or followed by the current Spotify
         * user.
         * @returns A paged set of playlists
         */
        $get: (option?: { query?: Methods_6eirb4['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_6eirb4['get']['resBody'], BasicHeaders, Methods_6eirb4['get']['status']>(prefix, PATH37, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_6eirb4['get']['query'] } | undefined) =>
          `${prefix}${PATH37}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      shows: {
        contains: {
          /**
           * Check if one or more shows is already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods_5fe3a3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_5fe3a3['get']['resBody'], BasicHeaders, Methods_5fe3a3['get']['status']>(prefix, PATH39, GET, option).json(),
          /**
           * Check if one or more shows is already saved in the current Spotify user's library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods_5fe3a3['get']['query'], config?: T | undefined }) =>
            fetch<Methods_5fe3a3['get']['resBody'], BasicHeaders, Methods_5fe3a3['get']['status']>(prefix, PATH39, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_5fe3a3['get']['query'] } | undefined) =>
            `${prefix}${PATH39}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
         * @returns Pages of shows
         */
        get: (option?: { query?: Methods_lwhck5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_lwhck5['get']['resBody'], BasicHeaders, Methods_lwhck5['get']['status']>(prefix, PATH38, GET, option).json(),
        /**
         * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
         * @returns Pages of shows
         */
        $get: (option?: { query?: Methods_lwhck5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_lwhck5['get']['resBody'], BasicHeaders, Methods_lwhck5['get']['status']>(prefix, PATH38, GET, option).json().then(r => r.body),
        /**
         * Save one or more shows to current Spotify user's library.
         */
        put: (option: { body: Methods_lwhck5['put']['reqBody'], query: Methods_lwhck5['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lwhck5['put']['status']>(prefix, PATH38, PUT, option).send(),
        /**
         * Save one or more shows to current Spotify user's library.
         */
        $put: (option: { body: Methods_lwhck5['put']['reqBody'], query: Methods_lwhck5['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lwhck5['put']['status']>(prefix, PATH38, PUT, option).send().then(r => r.body),
        /**
         * Delete one or more shows from current Spotify user's library.
         */
        delete: (option: { body: Methods_lwhck5['delete']['reqBody'], query: Methods_lwhck5['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lwhck5['delete']['status']>(prefix, PATH38, DELETE, option).send(),
        /**
         * Delete one or more shows from current Spotify user's library.
         */
        $delete: (option: { body: Methods_lwhck5['delete']['reqBody'], query: Methods_lwhck5['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_lwhck5['delete']['status']>(prefix, PATH38, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_lwhck5['get']['query'] } | { method: 'put'; query: Methods_lwhck5['put']['query'] } | { method: 'delete'; query: Methods_lwhck5['delete']['query'] } | undefined) =>
          `${prefix}${PATH38}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      top: {
        artists: {
          /**
           * Get the current user's top artists based on calculated affinity.
           * @returns Pages of artists
           */
          get: (option?: { query?: Methods_1uyhcm3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1uyhcm3['get']['resBody'], BasicHeaders, Methods_1uyhcm3['get']['status']>(prefix, PATH40, GET, option).json(),
          /**
           * Get the current user's top artists based on calculated affinity.
           * @returns Pages of artists
           */
          $get: (option?: { query?: Methods_1uyhcm3['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1uyhcm3['get']['resBody'], BasicHeaders, Methods_1uyhcm3['get']['status']>(prefix, PATH40, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1uyhcm3['get']['query'] } | undefined) =>
            `${prefix}${PATH40}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        tracks: {
          /**
           * Get the current user's top tracks based on calculated affinity.
           * @returns Pages of tracks
           */
          get: (option?: { query?: Methods_ijvttt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ijvttt['get']['resBody'], BasicHeaders, Methods_ijvttt['get']['status']>(prefix, PATH41, GET, option).json(),
          /**
           * Get the current user's top tracks based on calculated affinity.
           * @returns Pages of tracks
           */
          $get: (option?: { query?: Methods_ijvttt['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_ijvttt['get']['resBody'], BasicHeaders, Methods_ijvttt['get']['status']>(prefix, PATH41, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_ijvttt['get']['query'] } | undefined) =>
            `${prefix}${PATH41}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      },
      tracks: {
        contains: {
          /**
           * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          get: (option: { query: Methods_yqau2j['get']['query'], config?: T | undefined }) =>
            fetch<Methods_yqau2j['get']['resBody'], BasicHeaders, Methods_yqau2j['get']['status']>(prefix, PATH43, GET, option).json(),
          /**
           * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
           * @returns Array of booleans
           */
          $get: (option: { query: Methods_yqau2j['get']['query'], config?: T | undefined }) =>
            fetch<Methods_yqau2j['get']['resBody'], BasicHeaders, Methods_yqau2j['get']['status']>(prefix, PATH43, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_yqau2j['get']['query'] } | undefined) =>
            `${prefix}${PATH43}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
        /**
         * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of tracks
         */
        get: (option?: { query?: Methods_ql1uk5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_ql1uk5['get']['resBody'], BasicHeaders, Methods_ql1uk5['get']['status']>(prefix, PATH42, GET, option).json(),
        /**
         * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
         * @returns Pages of tracks
         */
        $get: (option?: { query?: Methods_ql1uk5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_ql1uk5['get']['resBody'], BasicHeaders, Methods_ql1uk5['get']['status']>(prefix, PATH42, GET, option).json().then(r => r.body),
        /**
         * Save one or more tracks to the current user's 'Your Music' library.
         */
        put: (option: { body: Methods_ql1uk5['put']['reqBody'], query: Methods_ql1uk5['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_ql1uk5['put']['status']>(prefix, PATH42, PUT, option).send(),
        /**
         * Save one or more tracks to the current user's 'Your Music' library.
         */
        $put: (option: { body: Methods_ql1uk5['put']['reqBody'], query: Methods_ql1uk5['put']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_ql1uk5['put']['status']>(prefix, PATH42, PUT, option).send().then(r => r.body),
        /**
         * Remove one or more tracks from the current user's 'Your Music' library.
         */
        delete: (option: { body: Methods_ql1uk5['delete']['reqBody'], query: Methods_ql1uk5['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_ql1uk5['delete']['status']>(prefix, PATH42, DELETE, option).send(),
        /**
         * Remove one or more tracks from the current user's 'Your Music' library.
         */
        $delete: (option: { body: Methods_ql1uk5['delete']['reqBody'], query: Methods_ql1uk5['delete']['query'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_ql1uk5['delete']['status']>(prefix, PATH42, DELETE, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_ql1uk5['get']['query'] } | { method: 'put'; query: Methods_ql1uk5['put']['query'] } | { method: 'delete'; query: Methods_ql1uk5['delete']['query'] } | undefined) =>
          `${prefix}${PATH42}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      /**
       * Get detailed profile information about the current user (including the
       * current user's username).
       * @returns A user
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH15, GET, option).json(),
      /**
       * Get detailed profile information about the current user (including the
       * current user's username).
       * @returns A user
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1uc1f5c['get']['resBody'], BasicHeaders, Methods_1uc1f5c['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH15}`,
    },
    playlists: {
      _playlist_id: (val1: string) => {
        const prefix1 = `${PATH10}/${val1}`;

        return {
          followers: {
            contains: {
              /**
               * Check to see if one or more Spotify users are following a specified playlist.
               * @returns Array of booleans
               */
              get: (option: { query: Methods_199irts['get']['query'], config?: T | undefined }) =>
                fetch<Methods_199irts['get']['resBody'], BasicHeaders, Methods_199irts['get']['status']>(prefix, `${prefix1}${PATH45}`, GET, option).json(),
              /**
               * Check to see if one or more Spotify users are following a specified playlist.
               * @returns Array of booleans
               */
              $get: (option: { query: Methods_199irts['get']['query'], config?: T | undefined }) =>
                fetch<Methods_199irts['get']['resBody'], BasicHeaders, Methods_199irts['get']['status']>(prefix, `${prefix1}${PATH45}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_199irts['get']['query'] } | undefined) =>
                `${prefix}${prefix1}${PATH45}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            /**
             * Add the current user as a follower of a playlist.
             */
            put: (option: { body: Methods_siltcg['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_siltcg['put']['status']>(prefix, `${prefix1}${PATH44}`, PUT, option).send(),
            /**
             * Add the current user as a follower of a playlist.
             */
            $put: (option: { body: Methods_siltcg['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_siltcg['put']['status']>(prefix, `${prefix1}${PATH44}`, PUT, option).send().then(r => r.body),
            /**
             * Remove the current user as a follower of a playlist.
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_siltcg['delete']['status']>(prefix, `${prefix1}${PATH44}`, DELETE, option).send(),
            /**
             * Remove the current user as a follower of a playlist.
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_siltcg['delete']['status']>(prefix, `${prefix1}${PATH44}`, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH44}`,
          },
          images: {
            /**
             * Get the current image associated with a specific playlist.
             * @returns A set of images
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_yl7u7b['get']['resBody'], BasicHeaders, Methods_yl7u7b['get']['status']>(prefix, `${prefix1}${PATH46}`, GET, option).json(),
            /**
             * Get the current image associated with a specific playlist.
             * @returns A set of images
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_yl7u7b['get']['resBody'], BasicHeaders, Methods_yl7u7b['get']['status']>(prefix, `${prefix1}${PATH46}`, GET, option).json().then(r => r.body),
            /**
             * Replace the image used to represent a specific playlist.
             */
            put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_yl7u7b['put']['status']>(prefix, `${prefix1}${PATH46}`, PUT, option).send(),
            /**
             * Replace the image used to represent a specific playlist.
             */
            $put: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_yl7u7b['put']['status']>(prefix, `${prefix1}${PATH46}`, PUT, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH46}`,
          },
          tracks: {
            /**
             * Get full details of the items of a playlist owned by a Spotify user.
             * @returns Pages of tracks
             */
            get: (option?: { query?: Methods_1uljbm1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1uljbm1['get']['resBody'], BasicHeaders, Methods_1uljbm1['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Get full details of the items of a playlist owned by a Spotify user.
             * @returns Pages of tracks
             */
            $get: (option?: { query?: Methods_1uljbm1['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1uljbm1['get']['resBody'], BasicHeaders, Methods_1uljbm1['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            /**
             * Add one or more items to a user's playlist.
             * @returns A snapshot ID for the playlist
             */
            post: (option: { body: Methods_1uljbm1['post']['reqBody'], query?: Methods_1uljbm1['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1uljbm1['post']['resBody'], BasicHeaders, Methods_1uljbm1['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json(),
            /**
             * Add one or more items to a user's playlist.
             * @returns A snapshot ID for the playlist
             */
            $post: (option: { body: Methods_1uljbm1['post']['reqBody'], query?: Methods_1uljbm1['post']['query'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1uljbm1['post']['resBody'], BasicHeaders, Methods_1uljbm1['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option).json().then(r => r.body),
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
            put: (option: { body: Methods_1uljbm1['put']['reqBody'], query?: Methods_1uljbm1['put']['query'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1uljbm1['put']['resBody'], BasicHeaders, Methods_1uljbm1['put']['status']>(prefix, `${prefix1}${PATH1}`, PUT, option).json(),
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
            $put: (option: { body: Methods_1uljbm1['put']['reqBody'], query?: Methods_1uljbm1['put']['query'] | undefined, config?: T | undefined }) =>
              fetch<Methods_1uljbm1['put']['resBody'], BasicHeaders, Methods_1uljbm1['put']['status']>(prefix, `${prefix1}${PATH1}`, PUT, option).json().then(r => r.body),
            /**
             * Remove one or more items from a user's playlist.
             * @returns A snapshot ID for the playlist
             */
            delete: (option: { body: Methods_1uljbm1['delete']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1uljbm1['delete']['resBody'], BasicHeaders, Methods_1uljbm1['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).json(),
            /**
             * Remove one or more items from a user's playlist.
             * @returns A snapshot ID for the playlist
             */
            $delete: (option: { body: Methods_1uljbm1['delete']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1uljbm1['delete']['resBody'], BasicHeaders, Methods_1uljbm1['delete']['status']>(prefix, `${prefix1}${PATH1}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1uljbm1['get']['query'] } | { method: 'post'; query: Methods_1uljbm1['post']['query'] } | { method: 'put'; query: Methods_1uljbm1['put']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get a playlist owned by a Spotify user.
           * @returns A playlist
           */
          get: (option?: { query?: Methods_10aj0n0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_10aj0n0['get']['resBody'], BasicHeaders, Methods_10aj0n0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get a playlist owned by a Spotify user.
           * @returns A playlist
           */
          $get: (option?: { query?: Methods_10aj0n0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_10aj0n0['get']['resBody'], BasicHeaders, Methods_10aj0n0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Change a playlist's name and public/private state. (The user must, of
           * course, own the playlist.)
           */
          put: (option: { body: Methods_10aj0n0['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_10aj0n0['put']['status']>(prefix, prefix1, PUT, option).send(),
          /**
           * Change a playlist's name and public/private state. (The user must, of
           * course, own the playlist.)
           */
          $put: (option: { body: Methods_10aj0n0['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_10aj0n0['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_10aj0n0['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
    },
    recommendations: {
      available_genre_seeds: {
        /**
         * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
         * @returns A set of genres
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_3irejr['get']['resBody'], BasicHeaders, Methods_3irejr['get']['status']>(prefix, PATH48, GET, option).json(),
        /**
         * Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
         * @returns A set of genres
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_3irejr['get']['resBody'], BasicHeaders, Methods_3irejr['get']['status']>(prefix, PATH48, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH48}`,
      },
      /**
       * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
       *
       * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
       * @returns A set of recommendations
       */
      get: (option?: { query?: Methods_3lvt1m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_3lvt1m['get']['resBody'], BasicHeaders, Methods_3lvt1m['get']['status']>(prefix, PATH47, GET, option).json(),
      /**
       * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
       *
       * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
       * @returns A set of recommendations
       */
      $get: (option?: { query?: Methods_3lvt1m['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_3lvt1m['get']['resBody'], BasicHeaders, Methods_3lvt1m['get']['status']>(prefix, PATH47, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_3lvt1m['get']['query'] } | undefined) =>
        `${prefix}${PATH47}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    search: {
      /**
       * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
       * that match a keyword string.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns Search response
       */
      get: (option: { query: Methods_4ofto2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_4ofto2['get']['resBody'], BasicHeaders, Methods_4ofto2['get']['status']>(prefix, PATH49, GET, option).json(),
      /**
       * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
       * that match a keyword string.<br />
       * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
       * @returns Search response
       */
      $get: (option: { query: Methods_4ofto2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_4ofto2['get']['resBody'], BasicHeaders, Methods_4ofto2['get']['status']>(prefix, PATH49, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_4ofto2['get']['query'] } | undefined) =>
        `${prefix}${PATH49}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    shows: {
      _id: (val1: string) => {
        const prefix1 = `${PATH50}/${val1}`;

        return {
          episodes: {
            /**
             * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
             * @returns Pages of episodes
             */
            get: (option?: { query?: Methods_1bz933n['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1bz933n['get']['resBody'], BasicHeaders, Methods_1bz933n['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json(),
            /**
             * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
             * @returns Pages of episodes
             */
            $get: (option?: { query?: Methods_1bz933n['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_1bz933n['get']['resBody'], BasicHeaders, Methods_1bz933n['get']['status']>(prefix, `${prefix1}${PATH13}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1bz933n['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get Spotify catalog information for a single show identified by its
           * unique Spotify ID.
           * @returns A show
           */
          get: (option?: { query?: Methods_2zlvxk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_2zlvxk['get']['resBody'], BasicHeaders, Methods_2zlvxk['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single show identified by its
           * unique Spotify ID.
           * @returns A show
           */
          $get: (option?: { query?: Methods_2zlvxk['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_2zlvxk['get']['resBody'], BasicHeaders, Methods_2zlvxk['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_2zlvxk['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Get Spotify catalog information for several shows based on their Spotify IDs.
       * @returns A set of shows
       */
      get: (option: { query: Methods_1m02nw4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m02nw4['get']['resBody'], BasicHeaders, Methods_1m02nw4['get']['status']>(prefix, PATH50, GET, option).json(),
      /**
       * Get Spotify catalog information for several shows based on their Spotify IDs.
       * @returns A set of shows
       */
      $get: (option: { query: Methods_1m02nw4['get']['query'], config?: T | undefined }) =>
        fetch<Methods_1m02nw4['get']['resBody'], BasicHeaders, Methods_1m02nw4['get']['status']>(prefix, PATH50, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1m02nw4['get']['query'] } | undefined) =>
        `${prefix}${PATH50}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    tracks: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Get Spotify catalog information for a single track identified by its
           * unique Spotify ID.
           * @returns A track
           */
          get: (option?: { query?: Methods_1r7a8mm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1r7a8mm['get']['resBody'], BasicHeaders, Methods_1r7a8mm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Spotify catalog information for a single track identified by its
           * unique Spotify ID.
           * @returns A track
           */
          $get: (option?: { query?: Methods_1r7a8mm['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1r7a8mm['get']['resBody'], BasicHeaders, Methods_1r7a8mm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1r7a8mm['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      /**
       * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
       * @returns A set of tracks
       */
      get: (option: { query: Methods_m6qvv2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_m6qvv2['get']['resBody'], BasicHeaders, Methods_m6qvv2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
       * @returns A set of tracks
       */
      $get: (option: { query: Methods_m6qvv2['get']['query'], config?: T | undefined }) =>
        fetch<Methods_m6qvv2['get']['resBody'], BasicHeaders, Methods_m6qvv2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_m6qvv2['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    users: {
      _user_id: (val1: string) => {
        const prefix1 = `${PATH51}/${val1}`;

        return {
          playlists: {
            /**
             * Get a list of the playlists owned or followed by a Spotify user.
             * @returns A paged set of playlists
             */
            get: (option?: { query?: Methods_13dxyle['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_13dxyle['get']['resBody'], BasicHeaders, Methods_13dxyle['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json(),
            /**
             * Get a list of the playlists owned or followed by a Spotify user.
             * @returns A paged set of playlists
             */
            $get: (option?: { query?: Methods_13dxyle['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_13dxyle['get']['resBody'], BasicHeaders, Methods_13dxyle['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json().then(r => r.body),
            /**
             * Create a playlist for a Spotify user. (The playlist will be empty until
             * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
             * @returns A playlist
             */
            post: (option: { body: Methods_13dxyle['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_13dxyle['post']['resBody'], BasicHeaders, Methods_13dxyle['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json(),
            /**
             * Create a playlist for a Spotify user. (The playlist will be empty until
             * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
             * @returns A playlist
             */
            $post: (option: { body: Methods_13dxyle['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_13dxyle['post']['resBody'], BasicHeaders, Methods_13dxyle['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_13dxyle['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Get public profile information about a Spotify user.
           * @returns A user
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1m2ih5q['get']['resBody'], BasicHeaders, Methods_1m2ih5q['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get public profile information about a Spotify user.
           * @returns A user
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1m2ih5q['get']['resBody'], BasicHeaders, Methods_1m2ih5q['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
