/* eslint-disable */
export type Methods = {
  /** Add the current user as a follower of a playlist. */
  put: {
    status: 200

    reqBody: {
      /** Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private. */
      public: boolean
      [key: string]: any
    }
  }

  /** Remove the current user as a follower of a playlist. */
  delete: {
    status: 200
  }
}
