/* eslint-disable */
export type Methods = {
  /** Check to see if the current user is following one or more artists or other Spotify users. */
  get: {
    query: {
      type: 'artist' | 'user'
      ids: string
    }

    status: 200
    /** Array of booleans */
    resBody: boolean[]
  }
}
