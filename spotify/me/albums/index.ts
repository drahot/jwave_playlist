/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Remove one or more albums from the current user's 'Your Music' library. */
  delete: {
    query: Types.QueryAlbumIds
    status: 200

    reqBody: {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
      ids: string[]
      [key: string]: any
    }
  }

  /** Get a list of the albums saved in the current Spotify user's 'Your Music' library. */
  get: {
    query?: Types.QueryLimit & Types.QueryOffset & Types.QueryMarket | undefined
    status: 200
    /** Pages of albums */
    resBody: Types.PagingSavedAlbumObject
  }

  /** Save one or more albums to the current user's 'Your Music' library. */
  put: {
    query: Types.QueryAlbumIds
    status: 200

    reqBody: {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
      ids: string[]
      [key: string]: any
    }
  }
}
