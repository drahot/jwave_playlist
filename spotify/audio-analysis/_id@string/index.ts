/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre. */
  get: {
    status: 200
    /** Audio analysis for one track */
    resBody: Types.AudioAnalysisObject
  }
}
