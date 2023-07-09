/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get Spotify catalog information for several shows based on their Spotify IDs. */
  get: {
    query: Types.QueryMarket & Types.QueryShowIds
    status: 200

    /** A set of shows */
    resBody: {
      shows: Types.SimplifiedShowObject[]
    }
  }
}
