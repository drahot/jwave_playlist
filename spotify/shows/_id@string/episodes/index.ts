/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned. */
  get: {
    query?: Types.QueryMarket & Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of episodes */
    resBody: Types.PagingSimplifiedEpisodeObject
  }
}
