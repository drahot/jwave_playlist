/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * Get audio feature information for a single track identified by its unique
   * Spotify ID.
   */
  get: {
    status: 200
    /** Audio features for one track */
    resBody: Types.AudioFeaturesObject
  }
}
