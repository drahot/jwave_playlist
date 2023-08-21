// noinspection JSUnresolvedReference

import aspida from '@aspida/axios'
import * as searchApi from '../../spotify/search/$api'
import * as usersApi from '../../spotify/users/$api'
import * as playlistsApi from '../../spotify/playlists/$api'
import * as meApi from '../../spotify/me/$api'

import {
  PagingPlaylistObject,
  PagingPlaylistTrackObject,
  PlaylistObject,
  PrivateUserObject,
  TrackObject,
} from '../../spotify/@types'
import { Result } from './result'
import * as process from 'process'

const userId = process.env.SPOTIFY_USER_ID ?? ''

export const spotify = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }

  const errorResult = (e: unknown) => ({ data: undefined, error: e as Error })

  return {
    // トラックを検索する
    searchTrack: async (
      artist: string,
      song: string
    ): Promise<Result<TrackObject[]>> => {
      const client = searchApi.default(aspida())

      try {
        const query = `remaster track:${song} artist:${artist}`.replace(
          / /g,
          '%20'
        )
        const data = await client.get({
          query: { q: query, type: ['track'], limit: 50 },
          config: config,
        })

        const { body } = data

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
      } catch (e) {
        return errorResult(e)
      }
    },
    // プレイリストを作成する
    createPlaylist: async (
      name: string,
      description?: string,
      isPublic = false
    ): Promise<Result<PlaylistObject>> => {
      const client = usersApi.default(aspida())
      try {
        const data = await client._user_id(userId).playlists.post({
          body: { name, description: description ?? '', public: isPublic },
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      } catch (e) {
        return errorResult(e)
      }
    },
    // カレントユーザーのプレイリストを取得する
    getUserPlaylists: async (
      offset = 0,
      limit = 50
    ): Promise<Result<PagingPlaylistObject>> => {
      const client = usersApi.default(aspida())
      try {
        const data = await client._user_id(userId).playlists.get({
          query: { offset, limit },
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      } catch (e) {
        return errorResult(e)
      }
    },
    getPlaylistTracks: async (
      playlistId: string,
      offset = 0,
      limit = 50
    ): Promise<Result<PagingPlaylistTrackObject>> => {
      const client = playlistsApi.default(aspida())
      try {
        const data = await client._playlist_id(playlistId).tracks.get({
          query: { offset, limit },
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      } catch (e) {
        return errorResult(e)
      }
    },
    // プレイリストに曲を追加
    addItemsToPlaylist: async (
      playlistId: string,
      trackUris: string[]
    ): Promise<Result<{ snapshot_id: string }>> => {
      try {
        const client = playlistsApi.default(aspida())
        const data = await client._playlist_id(playlistId).tracks.post({
          body: { position: 0, uris: trackUris },
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      } catch (e) {
        return errorResult(e)
      }
    },
    // meを取得する
    me: async (): Promise<Result<PrivateUserObject>> => {
      const client = meApi.default(aspida())
      try {
        const data = await client.get({
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      } catch (e) {
        return errorResult(e)
      }
    },
  }
}
