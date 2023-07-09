/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /**
   * Get Spotify catalog information for a single chapter.<br />
   * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   */
  get: {
    query?: Types.QueryMarket | undefined
    status: 200
    /** A Chapter */
    resBody: Types.ChapterObject
  }
}
