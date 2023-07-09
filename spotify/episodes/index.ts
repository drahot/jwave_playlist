/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get Spotify catalog information for several episodes based on their Spotify IDs. */
  get: {
    query: Types.QueryMarket & {
      ids: string
    }

    status: 200

    /** A set of episodes */
    resBody: {
      episodes: Types.EpisodeObject[]
    }
  }
}
