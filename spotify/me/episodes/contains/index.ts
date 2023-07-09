/* eslint-disable */
export type Methods = {
  /**
   * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
   * This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
   */
  get: {
    query: {
      ids: string
    }

    status: 200
    /** Array of booleans */
    resBody: boolean[]
  }
}
