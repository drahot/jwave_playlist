/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get Spotify catalog information for several artists based on their Spotify IDs. */
  get: {
    query: {
      ids: string
    }

    status: 200

    /** A set of artists */
    resBody: {
      artists: Types.ArtistObject[]
    }
  }
}
