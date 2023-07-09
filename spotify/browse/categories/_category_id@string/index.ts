/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab). */
  get: {
    query?: {
      country?: string | undefined
      locale?: string | undefined
    } | undefined

    status: 200
    /** A category */
    resBody: Types.CategoryObject
  }
}
