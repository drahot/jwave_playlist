/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Check if one or more shows is already saved in the current Spotify user's library. */
  get: {
    query: Types.QueryShowIds
    status: 200
    /** Array of booleans */
    resBody: boolean[]
  }
}
