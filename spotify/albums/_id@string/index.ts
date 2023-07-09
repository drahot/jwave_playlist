/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get Spotify catalog information for a single album. */
  get: {
    query?: Types.QueryMarket | undefined
    status: 200
    /** An album */
    resBody: Types.AlbumObject
  }
}
