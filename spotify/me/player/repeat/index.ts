/* eslint-disable */
export type Methods = {
  /**
   * Set the repeat mode for the user's playback. Options are repeat-track,
   * repeat-context, and off.
   */
  put: {
    query: {
      state: string
      device_id?: string | undefined
    }

    status: 204
  }
}
