/* eslint-disable */
export type Methods = {
  /** Check to see if one or more Spotify users are following a specified playlist. */
  get: {
    query: {
      ids: string
    }

    status: 200
    /** Array of booleans */
    resBody: boolean[]
  }
}
