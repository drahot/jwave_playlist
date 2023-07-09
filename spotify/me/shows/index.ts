/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Delete one or more shows from current Spotify user's library. */
  delete: {
    query: Types.QueryShowIds & Types.QueryMarket
    status: 200
  }

  /** Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned. */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of shows */
    resBody: Types.PagingSavedShowObject
  }

  /** Save one or more shows to current Spotify user's library. */
  put: {
    query: Types.QueryShowIds
    status: 200
  }
}
