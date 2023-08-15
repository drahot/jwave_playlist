/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * Get tracks from the current user's recently played tracks.
   * _**Note**: Currently doesn't support podcast episodes._
   */
  get: {
    query?: Types.QueryLimit & {
      after?: number | undefined
      before?: number | undefined
    } | undefined

    status: 200
    /** A paged set of tracks */
    resBody: Types.CursorPagingPlayHistoryObject
  }
}
