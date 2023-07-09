/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** Get a list of Spotify playlists tagged with a particular category. */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset & {
      country?: string | undefined
    } | undefined

    status: 200
    /** A paged set of playlists */
    resBody: Types.PagingFeaturedPlaylistObject
  }
}
