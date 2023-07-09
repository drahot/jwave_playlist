/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get the list of objects that make up the user's queue. */
  get: {
    status: 200
    /** Information about the queue */
    resBody: Types.QueueObject
  }

  /** Add an item to the end of the user's current playback queue. */
  post: {
    query: {
      uri: string
      device_id?: string | undefined
    }

    status: 204
  }
}
