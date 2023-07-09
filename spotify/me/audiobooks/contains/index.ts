/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Check if one or more audiobooks are already saved in the current Spotify user's library. */
  get: {
    query: Types.QueryAudiobookIds
    status: 200
    /** Array of booleans */
    resBody: boolean[]
  }
}
