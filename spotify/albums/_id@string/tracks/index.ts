/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * Get Spotify catalog information about an album’s tracks.
   * Optional parameters can be used to limit the number of tracks returned.
   */
  get: {
    query?: Types.QueryMarket & Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of tracks */
    resBody: Types.PagingSimplifiedTrackObject
  }
}
