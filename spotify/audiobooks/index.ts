/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />
   * **Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**
   */
  get: {
    query: Types.QueryAudiobookIds & Types.QueryMarket
    status: 200

    /** A set of audiobooks */
    resBody: {
      audiobooks: Types.AudiobookObject[]
    }
  }
}
