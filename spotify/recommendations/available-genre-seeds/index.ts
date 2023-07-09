/* eslint-disable */
export type Methods = {
  /** Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations). */
  get: {
    status: 200

    /** A set of genres */
    resBody: {
      genres: string[]
    }
  }
}
