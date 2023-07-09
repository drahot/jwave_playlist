/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Remove one or more tracks from the current user's 'Your Music' library. */
  delete: {
    query: Types.QueryTrackIds
    status: 200

    reqBody: {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
      ids: string[]
      [key: string]: any
    }
  }

  /** Get a list of the songs saved in the current Spotify user's 'Your Music' library. */
  get: {
    query?: Types.QueryMarket & Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of tracks */
    resBody: Types.PagingSavedTrackObject
  }

  /** Save one or more tracks to the current user's 'Your Music' library. */
  put: {
    query: Types.QueryTrackIds
    status: 200

    reqBody: {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
      ids?: string[] | undefined
      [key: string]: any
    }
  }
}
