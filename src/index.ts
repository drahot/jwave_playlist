/* eslint-disable @typescript-eslint/no-explicit-any */
import { authorize } from './lib/spotifyAuth'
import * as process from 'process'
import { getOnAirList, Song } from './lib/jwave'
import { spotify } from './lib/spotify'
import dayjs from 'dayjs'
import { Result } from './lib/result'
import { SimplifiedPlaylistObject } from '../spotify/@types'

type SpotifyClient = ReturnType<typeof spotify>

const searchTracks = async (client: SpotifyClient, songs: Song[]) => {
  const tracks = songs.map(async (item, i) => {
    if (i !== 0 && i % 30 === 0) {
      // Rate Limit 30 requests per 30 seconds
      await sleep(30000)
    }

    const searchResult = await client.searchTrack(
      item.artistName,
      item.songName
    )

    if (searchResult.error) {
      return searchResult
    }

    if (!searchResult.data || searchResult.data.length === 0) {
      return {
        data: undefined,
        error: new Error(
          `artist: ${item.artistName} song: ${item.songName}, no data`
        ),
      }
    }

    const track = searchResult.data[0]

    console.debug(track.artists?.[0].name ?? '')
    console.debug(track.name)
    console.debug(track.external_urls?.spotify)
    console.debug(track.uri)

    return { data: track.uri ?? '', error: undefined }
  })

  const result = await Promise.all(tracks)

  const [uris, errors] = result.reduce<[string[], Error[]]>(
    ([uris, errors], result) => {
      return result.error
        ? [uris, [...errors, result.error]]
        : [[...uris, result.data], errors]
    },
    [[], []]
  )

  if (errors.length > 0) {
    console.error(errors.map((error) => error.message).join('\n'))
  }

  return uris
}

const sleep = (ms: number) =>
  new Promise((resolve: any) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })

const createPlaylist = async (client: SpotifyClient, playlistName: string) => {
  const createResult = await client.createPlaylist(playlistName)
  if (createResult.error) {
    return { data: undefined, error: createResult.error }
  }
  return { data: createResult.data.id, error: undefined }
}

const getPlaylist = async (
  client: SpotifyClient,
  playlistName: string,
  offset = 0
): Promise<Result<SimplifiedPlaylistObject | undefined>> => {
  const playlistsResult = await client.getUserPlaylists(offset)
  if (playlistsResult.error) {
    return { data: undefined, error: playlistsResult.error }
  }

  const playlists = playlistsResult.data
  const playlist = playlists.items?.find((item) => item.name === playlistName)
  if (playlist) {
    return { data: playlist, error: undefined }
  }

  return !playlists.next
    ? { data: undefined, error: undefined }
    : getPlaylist(client, playlistName, offset + 50)
}

const getPlaylistTrackUris = async (
  client: SpotifyClient,
  playlistId: string,
  offset = 0
): Promise<Result<string[]>> => {
  const playlistTracksResult = await client.getPlaylistTracks(
    playlistId,
    offset,
    50
  )

  if (playlistTracksResult.error) {
    return { data: undefined, error: playlistTracksResult.error }
  }

  const tracks =
    playlistTracksResult.data?.items?.map((item) => item.track?.uri ?? '') ?? []

  const nextResult: Result<string[]> = !playlistTracksResult.data?.next
    ? { data: [], error: undefined }
    : await getPlaylistTrackUris(client, playlistId, offset + 50)

  if (nextResult.error) {
    return nextResult
  }

  const nextTracks = nextResult.data ?? []
  const playlistTrackUris = [...tracks, ...nextTracks]

  return { data: playlistTrackUris, error: undefined }
}

const savePlaylist = async (client: SpotifyClient, trackUris: string[]) => {
  const today = dayjs().format('YYYY-MM-DD')
  const jWavePlaylistName = `J-WAVE On Air ${today}`

  const playlistResult = await getPlaylist(client, jWavePlaylistName)
  if (playlistResult.error) {
    return { data: undefined, error: playlistResult.error }
  }
  console.log(playlistResult.data)

  const playlistIdResult = playlistResult.data
    ? { data: playlistResult.data.id, error: undefined }
    : await createPlaylist(client, jWavePlaylistName)

  if (playlistIdResult.error) {
    return { data: undefined, error: playlistIdResult.error }
  }

  const playlistTrackUrisResult = await getPlaylistTrackUris(
    client,
    playlistIdResult.data ?? ''
  )

  if (playlistTrackUrisResult.error) {
    return { data: undefined, error: playlistTrackUrisResult.error }
  }

  const filterTrackUris = trackUris.filter(
    (uri) => !playlistTrackUrisResult.data?.includes(uri) && uri !== ''
  )

  await client.addItemsToPlaylist(playlistIdResult.data ?? '', filterTrackUris)

  return playlistIdResult
}

const main = async () => {
  const authResult = await authorize()
  if (authResult.error) {
    console.error(authResult.error.message)
    process.exit(1)
  }

  const auth = authResult.data
  console.debug('auth_token: ', auth?.access_token)

  const client = spotify(auth?.access_token ?? '')
  const songs = await getOnAirList()
  const trackUris = await searchTracks(client, songs.slice(0, 100))

  if (trackUris.length === 0) {
    console.log('no tracks')
    process.exit()
  }

  console.log('uris.length: ', trackUris.length)
  const createPlaylistResult = await savePlaylist(client, trackUris)

  if (createPlaylistResult.error) {
    console.error(createPlaylistResult.error.message)
    process.exit(1)
  }

  console.log(createPlaylistResult.data)
  process.exit()
}

main().then(console.log).then(console.error)
