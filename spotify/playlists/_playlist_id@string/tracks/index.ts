/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get full details of the items of a playlist owned by a Spotify user. */
  get: {
    query?: Types.QueryMarket & Types.QueryOffset & Types.QueryAdditionalTypes & {
      fields?: string | undefined
      limit?: number | undefined
    } | undefined

    status: 200
    /** Pages of tracks */
    resBody: Types.PagingPlaylistTrackObject
  }

  /** Add one or more items to a user's playlist. */
  post: {
    query?: {
      position?: number | undefined
      uris?: string | undefined
    } | undefined

    status: 201

    /** A snapshot ID for the playlist */
    resBody: {
      snapshot_id: string
    }

    reqBody: {
      /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._ */
      uris: string[]
      /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}` */
      position: number
      [key: string]: any
    }
  }

  /**
   * Either reorder or replace items in a playlist depending on the request's parameters.
   * To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
   * To replace items, include `uris` as either a query parameter or in the request's body.
   * Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
   * <br/>
   * **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
   * These operations can't be applied together in a single request.
   */
  put: {
    query?: {
      uris?: string | undefined
    } | undefined

    status: 200

    /** A snapshot ID for the playlist */
    resBody: {
      snapshot_id: string
    }

    reqBody: {
      uris: string[]
      /** The position of the first item to be reordered. */
      range_start: number
      /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0. */
      insert_before: number
      /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2. */
      range_length: number
      /** The playlist's snapshot ID against which you want to make the changes. */
      snapshot_id: string
      [key: string]: any
    }
  }

  /** Remove one or more items from a user's playlist. */
  delete: {
    status: 200

    /** A snapshot ID for the playlist */
    resBody: {
      snapshot_id: string
    }

    reqBody: {
      /**
       * An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
       * For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.
       */
      tracks: {
        /** Spotify URI */
        uri: string
      }[]
      /**
       * The playlist's snapshot ID against which you want to make the changes.
       * The API will validate that the specified items exist and in the specified positions and make the changes,
       * even if more recent changes have been made to the playlist.
       */
      snapshot_id?: string | undefined
    }
  }
}
