/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get Spotify catalog information for multiple albums identified by their Spotify IDs. */
  get: {
    query: Types.QueryAlbumIds & Types.QueryMarket
    status: 200

    /** A set of albums */
    resBody: {
      albums: Types.AlbumObject[]
    }
  }
}
