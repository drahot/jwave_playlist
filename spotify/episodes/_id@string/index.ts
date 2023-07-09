/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * Get Spotify catalog information for a single episode identified by its
   * unique Spotify ID.
   */
  get: {
    query?: Types.QueryMarket | undefined
    status: 200
    /** An episode */
    resBody: Types.EpisodeObject
  }
}
