/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get the object currently being played on the user's Spotify account. */
  get: {
    query?: Types.QueryMarket & Types.QueryAdditionalTypes | undefined
    status: 200
    /** Information about the currently playing track */
    resBody: Types.CurrentlyPlayingContextObject
  }
}
