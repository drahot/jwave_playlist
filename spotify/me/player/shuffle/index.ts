/* eslint-disable */
export type Methods = {
  /** Toggle shuffle on or off for user’s playback. */
  put: {
    query: {
      state: boolean
      device_id?: string | undefined
    }

    status: 204
  }
}
