/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /**
   * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
   * 
   * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
   */
  get: {
    query?: Types.QueryMarket & {
      limit?: number | undefined
      seed_artists?: string | undefined
      seed_genres?: string | undefined
      seed_tracks?: string | undefined
      min_acousticness?: number | undefined
      max_acousticness?: number | undefined
      target_acousticness?: number | undefined
      min_danceability?: number | undefined
      max_danceability?: number | undefined
      target_danceability?: number | undefined
      min_duration_ms?: number | undefined
      max_duration_ms?: number | undefined
      target_duration_ms?: number | undefined
      min_energy?: number | undefined
      max_energy?: number | undefined
      target_energy?: number | undefined
      min_instrumentalness?: number | undefined
      max_instrumentalness?: number | undefined
      target_instrumentalness?: number | undefined
      min_key?: number | undefined
      max_key?: number | undefined
      target_key?: number | undefined
      min_liveness?: number | undefined
      max_liveness?: number | undefined
      target_liveness?: number | undefined
      min_loudness?: number | undefined
      max_loudness?: number | undefined
      target_loudness?: number | undefined
      min_mode?: number | undefined
      max_mode?: number | undefined
      target_mode?: number | undefined
      min_popularity?: number | undefined
      max_popularity?: number | undefined
      target_popularity?: number | undefined
      min_speechiness?: number | undefined
      max_speechiness?: number | undefined
      target_speechiness?: number | undefined
      min_tempo?: number | undefined
      max_tempo?: number | undefined
      target_tempo?: number | undefined
      min_time_signature?: number | undefined
      max_time_signature?: number | undefined
      target_time_signature?: number | undefined
      min_valence?: number | undefined
      max_valence?: number | undefined
      target_valence?: number | undefined
    } | undefined

    status: 200
    /** A set of recommendations */
    resBody: Types.RecommendationsObject
  }
}
