/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/). */
  get: {
    status: 200

    /** A set of artists */
    resBody: {
      artists: Types.ArtistObject[]
    }
  }
}
