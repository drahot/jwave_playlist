/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get the current user's top artists based on calculated affinity. */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset & {
      time_range?: string | undefined
    } | undefined

    status: 200
    /** Pages of artists */
    resBody: Types.PagingArtistObject
  }
}
