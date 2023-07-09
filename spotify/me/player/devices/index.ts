/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get information about a user’s available devices. */
  get: {
    status: 200

    /** A set of devices */
    resBody: {
      devices: Types.DeviceObject[]
    }
  }
}
