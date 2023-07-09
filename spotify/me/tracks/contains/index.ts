/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library. */
  get: {
    query: Types.QueryTrackIds
    status: 200
    /** Array of booleans */
    resBody: boolean[]
  }
}
