/* eslint-disable */
export type Methods = {
  /** Seeks to the given position in the user’s currently playing track. */
  put: {
    query: {
      position_ms: number
      device_id?: string | undefined
    }

    status: 204
  }
}
