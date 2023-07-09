/* eslint-disable */
export type Methods = {
  /** Start a new context or resume current playback on the user's active device. */
  put: {
    query?: {
      device_id?: string | undefined
    } | undefined

    status: 204

    reqBody: {
      /**
       * Optional. Spotify URI of the context to play.
       * Valid contexts are albums, artists & playlists.
       * `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
       */
      context_uri: {
        [key: string]: any
      }

      /**
       * Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
       * "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`
       * "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
       */
      offset: {
        [key: string]: any
      }

      /** integer */
      position_ms: {
        [key: string]: any
      }

      /**
       * Optional. A JSON array of the Spotify track URIs to play.
       * For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
       */
      uris: string[]
      [key: string]: any
    }
  }
}
