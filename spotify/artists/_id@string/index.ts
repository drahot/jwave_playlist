/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get Spotify catalog information for a single artist identified by their unique Spotify ID. */
  get: {
    status: 200
    /** An artist */
    resBody: Types.ArtistObject
  }
}
