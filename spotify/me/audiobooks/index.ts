/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Remove one or more audiobooks from the Spotify user's library. */
  delete: {
    query: Types.QueryAudiobookIds
    status: 200
  }

  /** Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library. */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of audiobooks */
    resBody: Types.PagingSimplifiedAudiobookObject
  }

  /** Save one or more audiobooks to the current Spotify user's library. */
  put: {
    query: Types.QueryAudiobookIds
    status: 200
  }
}
