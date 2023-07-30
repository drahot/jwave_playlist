/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
   * that match a keyword string.<br />
   * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   */
  get: {
    query: Types.QueryMarket & {
      q: string
      type: string
      limit?: number | undefined
      offset?: number | undefined
      include_external?: 'audio' | undefined
    }

    status: 200

    /** Search response */
    resBody: {
      albums: Types.PagingSimplifiedAlbumObject
      artists: Types.PagingArtistObject
      audiobooks: Types.PagingSimplifiedAudiobookObject
      episodes: Types.PagingSimplifiedEpisodeObject
      playlists: Types.PagingPlaylistObject
      shows: Types.PagingSimplifiedShowObject
      tracks: Types.PagingTrackObject
    }
  }
}
