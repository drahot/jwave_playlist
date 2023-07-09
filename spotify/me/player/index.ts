/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get information about the user’s current playback state, including track or episode, progress, and active device. */
  get: {
    query?: Types.QueryMarket & Types.QueryAdditionalTypes | undefined
    status: 200
    /** Information about playback */
    resBody: Types.CurrentlyPlayingContextObject
  }

  /** Transfer playback to a new device and determine if it should start playing. */
  put: {
    status: 204

    reqBody: {
      /** A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_ */
      device_ids: string[]

      /** **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state. */
      play?: {
        [key: string]: any
      } | undefined

      [key: string]: any
    }
  }
}
