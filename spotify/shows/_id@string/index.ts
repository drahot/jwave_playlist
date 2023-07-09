/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * Get Spotify catalog information for a single show identified by its
   * unique Spotify ID.
   */
  get: {
    query?: Types.QueryMarket | undefined
    status: 200
    /** A show */
    resBody: Types.ShowObject
  }
}
