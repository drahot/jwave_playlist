/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get a list of the playlists owned or followed by a Spotify user. */
  get: {
    query?: Types.QueryLimit & {
      offset?: number | undefined
    } | undefined

    status: 200
    /** A paged set of playlists */
    resBody: Types.PagingPlaylistObject
  }

  /**
   * Create a playlist for a Spotify user. (The playlist will be empty until
   * you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
   */
  post: {
    status: 201
    /** A playlist */
    resBody: Types.PlaylistObject

    reqBody: {
      /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._ */
      collaborative?: boolean | undefined
      /** value for playlist description as displayed in Spotify Clients and in the Web API. */
      description?: string | undefined
      /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name. */
      name: string
      /** Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes) */
      public?: boolean | undefined
      [key: string]: any
    }
  }
}
