/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * Get detailed profile information about the current user (including the
   * current user's username).
   */
  get: {
    status: 200
    /** A user */
    resBody: Types.PrivateUserObject
  }
}
