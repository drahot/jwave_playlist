/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get Spotify catalog information for multiple tracks based on their Spotify IDs. */
  get: {
    query: Types.QueryMarket & Types.QueryTrackIds
    status: 200

    /** A set of tracks */
    resBody: {
      tracks: Types.TrackObject[]
    }
  }
}
