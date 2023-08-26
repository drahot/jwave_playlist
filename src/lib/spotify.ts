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

  const getResult = <T>(callback: () => Promise<Result<T>>) => {
    try {
      return callback()
    } catch (e) {
      return { data: undefined, error: e as Error }
    }
  }

  const partialMatch = (artistName: string, artist: string) => {
    const matchLength = Math.round(artist.length * 0.8)
    const partialArtistName = artistName.slice(0, matchLength)
    return artistName.startsWith(partialArtistName)
  }

  const splitMatch = (artistName: string, artist: string) => {
    const splitCharacters = ['/', 'feat', 'with', '&', 'and']
    for (const character of splitCharacters) {
      if (artist.includes(character)) {
        const [name] = artist.split(character)
        const result = artistName === name.trim()
        if (result) {
          return true
        }
      }
    }
    return false
  }

  return {
    // トラックを検索する
    searchTrack: async (
      artist: string,
      song: string
    ): Promise<Result<TrackObject[]>> =>
      getResult(async () => {
        const client = searchApi.default(aspida())

        const query = `remaster track:${song} artist:${artist}`.replace(
          / /g,
          '%20'
        )
        const data = await client.get({
          query: { q: query, type: ['track'], limit: 50 },
          config: config,
        })

        const { body } = data

        const tracks = body.tracks.items?.filter((item) => {
          if ((item.album?.artists.length ?? 0) === 0) {
            return false
          }

          const artistName = item.album?.artists[0].name?.toLowerCase() ?? ''
          const a = artist.toLowerCase()
          if (artistName !== a) {
            if (
              // 80% of artist name should match
              !partialMatch(artistName, a) &&
              !splitMatch(artistName, a)
            ) {
              return false
            }
          }

          return song.toLowerCase() === item.name?.toLowerCase()
        })

        return { data: tracks ?? [], error: undefined }
      }),
    // プレイリストを作成する
    createPlaylist: async (
      name: string,
      description?: string,
      isPublic = false
    ): Promise<Result<PlaylistObject>> =>
      getResult(async () => {
        const client = usersApi.default(aspida())
        const data = await client._user_id(userId).playlists.post({
          body: { name, description: description ?? '', public: isPublic },
          config: config,
        })
        const { body } = data
        return { data: body, error: undefined }
      }),
    // カレントユーザーのプレイリストを取得する
    getUserPlaylists: async (
      offset = 0,
      limit = 50
    ): Promise<Result<PagingPlaylistObject>> =>
      getResult(async () => {
        const client = usersApi.default(aspida())
        const data = await client._user_id(userId).playlists.get({
          query: { offset, limit },
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      }),
    getPlaylistTracks: async (
      playlistId: string,
      offset = 0,
      limit = 50
    ): Promise<Result<PagingPlaylistTrackObject>> =>
      getResult(async () => {
        const client = playlistsApi.default(aspida())
        const data = await client._playlist_id(playlistId).tracks.get({
          query: { offset, limit },
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      }),
    // プレイリストに曲を追加
    addItemsToPlaylist: async (
      playlistId: string,
      trackUris: string[]
    ): Promise<Result<{ snapshot_id: string }>> =>
      getResult(async () => {
        const client = playlistsApi.default(aspida())
        const data = await client._playlist_id(playlistId).tracks.post({
          body: { position: 0, uris: trackUris },
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      }),
    // meを取得する
    me: async (): Promise<Result<PrivateUserObject>> =>
      getResult(async () => {
        const client = meApi.default(aspida())
        const data = await client.get({
          config: config,
        })
        const { body } = data

        return { data: body, error: undefined }
      }),
  }
}
