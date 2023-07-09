/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get public profile information about a Spotify user. */
  get: {
    status: 200
    /** A user */
    resBody: Types.PublicUserObject
  }
}
