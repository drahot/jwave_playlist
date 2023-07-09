/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get a playlist owned by a Spotify user. */
  get: {
    query?: Types.QueryMarket & Types.QueryAdditionalTypes & {
      fields?: string | undefined
    } | undefined

    status: 200
    /** A playlist */
    resBody: Types.PlaylistObject
  }

  /**
   * Change a playlist's name and public/private state. (The user must, of
   * course, own the playlist.)
   */
  put: {
    status: 200

    reqBody: {
      /**
       * If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>
       * _**Note**: You can only set `collaborative` to `true` on non-public playlists._
       */
      collaborative: boolean
      /** Value for playlist description as displayed in Spotify Clients and in the Web API. */
      description: string
      /** The new name for the playlist, for example `"My New Playlist Title"` */
      name: string
      /** If `true` the playlist will be public, if `false` it will be private. */
      public: boolean
      [key: string]: any
    }
  }
}
