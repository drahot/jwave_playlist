// noinspection JSUnresolvedReference

import aspida from '@aspida/axios'
import * as searchApi from '../../spotify/search/$api'
import * as usersApi from '../../spotify/users/$api'
import * as playlistsApi from '../../spotify/playlists/$api'
import * as meApi from '../../spotify/me/$api'

import { TrackObject } from '../../spotify/@types'
import { Result } from './result'
import * as process from 'process'

const userId = process.env.SPOTIFY_USER_ID ?? ''

export const spotify = (accessToken: string) => {
  return {
    // トラックを検索する
    searchTrack: async (
      artist: string,
      song: string
    ): Promise<Result<TrackObject[]>> => {
      const client = searchApi.default(aspida())

      const query = `remaster track:${song} artist:${artist}`.replace(
        / /g,
        '%20'
      )
      const data = await client.get({
        query: { q: query, type: 'track', limit: 50 },
        config: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      })

      const { body, status } = data

      if (status !== 200) {
        return { data: undefined, error: new Error('search error') }
      }

      const tracks =
        body.tracks.items?.filter((item) => {
          if ((item.album?.artists.length ?? 0) === 0) {
            return false
          }

          const artistName = item.album?.artists[0].name?.toLowerCase() ?? ''
          if (artistName !== artist.toLowerCase()) {
            // 80% of artist name should match
            const matchLength = Math.round(artist.length * 0.8)
            const partialArtistName = artistName.slice(0, matchLength)
            if (!artistName.startsWith(partialArtistName)) {
              return false
            }
          }

          return song.toLowerCase() === item.name?.toLowerCase()
        }) ?? []

      return { data: tracks, error: undefined }
    },
    // プレイリストを作成する
    createPlaylist: async (
      name: string,
      description?: string,
      isPublic = false
    ) => {
      try {
        const client = usersApi.default(aspida())
        const data = await client._user_id(userId).playlists.post({
          body: { name, description: description ?? '', public: isPublic },
          config: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        })
        const { body, status } = data

        if (status !== 201) {
          return {
            data: undefined,
            error: new Error(`create playlist error: statusCode=${status}`),
          }
        }

        return { data: body, error: undefined }
      } catch (e) {
        const error = e as Error
        return { data: undefined, error: error }
      }
    },
    //
    addItemsToPlaylist: async (playlistId: string, trackUris: string[]) => {
      const client = playlistsApi.default(aspida())
      const data = await client._playlist_id(playlistId).tracks.post({
        body: { position: 0, uris: trackUris },
        config: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      })

      const { body, status } = data

      if (status !== 201) {
        return {
          data: undefined,
          error: new Error(`add playlist error: statusCode=${status}`),
        }
      }

      return { data: body, error: undefined }
    },
    me: async () => {
      const client = meApi.default(aspida())
      const data = await client.get({
        config: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      })
      const { body, status } = data

      if (status !== 200) {
        return {
          data: undefined,
          error: new Error(`add playlist error: statusCode=${status}`),
        }
      }

      return { data: body, error: undefined }
    },
  }
}
