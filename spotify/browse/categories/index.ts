/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab). */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset & {
      country?: string | undefined
      locale?: string | undefined
    } | undefined

    status: 200

    /** A paged set of categories */
    resBody: {
      categories: Types.PagingObject
    }
  }
}
