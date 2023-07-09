/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get Spotify catalog information about an artist's albums. */
  get: {
    query?: Types.QueryIncludeGroups & Types.QueryMarket & Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of albums */
    resBody: Types.PagingSimplifiedAlbumObject
  }
}
