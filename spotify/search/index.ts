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
      type: ('album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode' | 'audiobook')[]
      limit?: number | undefined
      offset?: number | undefined
      include_external?: 'audio' | undefined
    }

    status: 200

    /** Search response */
    resBody: {
      tracks: Types.PagingTrackObject
      artists: Types.PagingArtistObject
      albums: Types.PagingSimplifiedAlbumObject
      playlists: Types.PagingPlaylistObject
      shows: Types.PagingSimplifiedShowObject
      episodes: Types.PagingSimplifiedEpisodeObject
      audiobooks: Types.PagingSimplifiedAudiobookObject
    }
  }
}
