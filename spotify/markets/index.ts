/* eslint-disable */
export type Methods = {
  /** Get the list of markets where Spotify is available. */
  get: {
    status: 200

    /** A markets object with an array of country codes */
    resBody: {
      markets: string[]
    }
  }
}
