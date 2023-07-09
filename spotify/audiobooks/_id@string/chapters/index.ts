/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /**
   * Get Spotify catalog information about an audiobook's chapters.<br />
   * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   */
  get: {
    query?: Types.QueryMarket & Types.QueryLimit & Types.QueryOffset | undefined
    status: 200
    /** Pages of chapters */
    resBody: Types.PagingSimplifiedChapterObject
  }
}
