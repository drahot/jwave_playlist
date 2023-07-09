/* eslint-disable */
export type Methods = {
  /** Set the volume for the user’s current playback device. */
  put: {
    query: {
      volume_percent: number
      device_id?: string | undefined
    }

    status: 204
  }
}
