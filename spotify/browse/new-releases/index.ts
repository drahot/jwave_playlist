/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab). */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset & {
      country?: string | undefined
    } | undefined

    status: 200

    /** A paged set of albums */
    resBody: {
      albums: Types.PagingSimplifiedAlbumObject
    }
  }
}
