/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get the current user's followed artists. */
  get: {
    query: Types.QueryLimit & {
      type: 'artist'
      after?: string | undefined
    }

    status: 200

    /** A paged set of artists */
    resBody: {
      artists: Types.CursorPagingSimplifiedArtistObject
    }
  }

  /** Add the current user as a follower of one or more artists or other Spotify users. */
  put: {
    query: {
      type: 'artist' | 'user'
      ids: string
    }

    status: 204

    reqBody: {
      /**
       * A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).
       * For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids: string[]
      [key: string]: any
    }
  }

  /** Remove the current user as a follower of one or more artists or other Spotify users. */
  delete: {
    query: {
      type: 'artist' | 'user'
      ids: string
    }

    status: 200

    reqBody: {
      /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
      ids: string[]
      [key: string]: any
    }
  }
}
