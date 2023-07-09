/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get Spotify catalog information about an artist's top tracks by country. */
  get: {
    query?: Types.QueryMarket | undefined
    status: 200

    /** A set of tracks */
    resBody: {
      tracks: Types.TrackObject[]
    }
  }
}
