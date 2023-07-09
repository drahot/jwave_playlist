/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get the current image associated with a specific playlist. */
  get: {
    status: 200
    /** A set of images */
    resBody: Types.ImageObject[]
  }

  /** Replace the image used to represent a specific playlist. */
  put: {
    status: 202
  }
}
