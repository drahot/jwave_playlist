/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
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

    reqBody: {
      /**
       * A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  
       * A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*
       */
      ids: string[]
    }
  }

  /** Delete one or more shows from current Spotify user's library. */
  delete: {
    query: Types.QueryShowIds & Types.QueryMarket
    status: 200

    reqBody: {
      /**
       * A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).  
       * A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.*
       */
      ids: string[]
    }
  }
}
