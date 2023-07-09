/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * Get a list of the playlists owned or followed by the current Spotify
   * user.
   */
  get: {
    query?: Types.QueryLimit & {
      offset?: number | undefined
    } | undefined

    status: 200
    /** A paged set of playlists */
    resBody: Types.PagingPlaylistObject
  }
}
