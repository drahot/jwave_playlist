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
import { Err, Ok, Result } from 'ts-results'
import * as process from 'process'

const userId = process.env.SPOTIFY_USER_ID ?? ''

export const spotify = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }

  const getResult = <T>(callback: () => Promise<T>) =>
    callback()
      .then((data) => Ok(data))
      .catch((e) => Err(e))

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
    ): Promise<Result<TrackObject[], Error>> =>
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

        const tracks = data.body.tracks.items?.filter((item) => {
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

        return tracks ?? []
      }),
    // プレイリストを作成する
    createPlaylist: async (
      name: string,
      description?: string,
      isPublic = false
    ): Promise<Result<PlaylistObject, Error>> =>
      getResult(async () => {
        const client = usersApi.default(aspida())
        const data = await client._user_id(userId).playlists.post({
          body: { name, description: description ?? '', public: isPublic },
          config: config,
        })
        return data.body
      }),
    // カレントユーザーのプレイリストを取得する
    getUserPlaylists: async (
      offset = 0,
      limit = 50
    ): Promise<Result<PagingPlaylistObject, Error>> =>
      getResult(async () => {
        const client = usersApi.default(aspida())
        const data = await client._user_id(userId).playlists.get({
          query: { offset, limit },
          config: config,
        })
        return data.body
      }),
    getPlaylistTracks: async (
      playlistId: string,
      offset = 0,
      limit = 50
    ): Promise<Result<PagingPlaylistTrackObject, Error>> =>
      getResult(async () => {
        const client = playlistsApi.default(aspida())
        const data = await client._playlist_id(playlistId).tracks.get({
          query: { offset, limit },
          config: config,
        })
        return data.body
      }),
    // プレイリストに曲を追加
    addItemsToPlaylist: async (
      playlistId: string,
      trackUris: string[]
    ): Promise<Result<{ snapshot_id: string }, Error>> =>
      getResult(async () => {
        const client = playlistsApi.default(aspida())
        const data = await client._playlist_id(playlistId).tracks.post({
          body: { position: 0, uris: trackUris },
          config: config,
        })
        return data.body
      }),
    // meを取得する
    me: async (): Promise<Result<PrivateUserObject, Error>> =>
      getResult(async () => {
        const client = meApi.default(aspida())
        const data = await client.get({
          config: config,
        })
        return data.body
      }),
  }
}
