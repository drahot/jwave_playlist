/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab). */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset & {
      country?: string | undefined
      locale?: string | undefined
      timestamp?: string | undefined
    } | undefined

    status: 200
    /** A paged set of playlists */
    resBody: Types.PagingFeaturedPlaylistObject
  }
}
