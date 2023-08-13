/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * Get a list of the episodes saved in the current Spotify user's library.<br/>
   * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   */
  get: {
    query?: Types.QueryMarket & Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of episodes */
    resBody: Types.PagingSavedEpisodeObject
  }

  /**
   * Save one or more episodes to the current user's library.<br/>
   * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   */
  put: {
    query: {
      ids: string
    }

    status: 200

    reqBody: {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
      ids: string[]
      [key: string]: any
    }
  }

  /**
   * Remove one or more episodes from the current user's library.<br/>
   * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   */
  delete: {
    query: Types.QueryTrackIds
    status: 200

    reqBody: {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._ */
      ids: string[]
      [key: string]: any
    }
  }
}
