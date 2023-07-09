/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get audio features for multiple tracks based on their Spotify IDs. */
  get: {
    query: {
      ids: string
    }

    status: 200

    /** A set of audio features */
    resBody: {
      audio_features: Types.AudioFeaturesObject[]
    }
  }
}
