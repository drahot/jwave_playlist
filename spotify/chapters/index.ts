/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />
   * **Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   */
  get: {
    query: Types.QueryChapterIds & Types.QueryMarket
    status: 200

    /** A set of chapters */
    resBody: {
      chapters: Types.ChapterObject[]
    }
  }
}
