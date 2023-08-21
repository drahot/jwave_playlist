import { authorize } from './lib/spotify_auth'
import * as process from 'process'
import { getOnAirList, Song } from './lib/jwave'
import { spotify } from './lib/spotify'
import dayjs from 'dayjs'
import { Result } from './lib/result'
import { SimplifiedPlaylistObject } from '../spotify/@types'

type SpotifyClient = ReturnType<typeof spotify>

const searchTracks = async (client: SpotifyClient, songs: Song[]) => {
  const tracks = songs.map(async (item, i) => {
    if (i !== 0 && i % 20 === 0) {
      await sleep(1000)
    }
    const searchResult = await client.searchTrack(
      item.artistName,
      item.songName
    )
    if (searchResult.error) {
      console.error(searchResult.error.message)
      return ''
    }
    if (!searchResult.data) {
      return ''
    }

    const track = searchResult.data[0]
    if (!track) {
      return ''
    }
    console.log(track.artists?.[0].name ?? '')
    console.log(track.name)
    console.log(track.external_urls?.spotify)
    console.log(track.uri)

    return track.uri ?? ''
  })
  return Promise.all(tracks)
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

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

  return playlists.next
    ? getPlaylist(client, playlistName, offset + 50)
    : { data: undefined, error: undefined }
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

  const nextResult: Result<string[]> = playlistTracksResult.data?.next
    ? await getPlaylistTrackUris(client, playlistId, offset + 50)
    : { data: [], error: undefined }

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

  if (!authResult.data) {
    console.error('authResult.auth is undefined')
    process.exit(1)
  }

  const auth = authResult.data
  console.log('auth_token: ', auth?.access_token)
  console.log('scope: ', auth?.scope)
  console.log('refresh_token: ', auth?.refresh_token)
  console.log('expires_in: ', auth?.expires_in)

  const songs = await getOnAirList()

  const client = spotify(auth?.access_token ?? '')
  const trackUris = await searchTracks(client, songs.slice(0, 100))
  const uris = trackUris.filter((uri) => uri !== '')

  console.log('uris.length: ', uris.length)
  const createPlaylistResult = await savePlaylist(client, uris)

  if (createPlaylistResult.error) {
    console.error(createPlaylistResult.error.message)
    process.exit(1)
  }

  console.log(createPlaylistResult.data)
  process.exit()
}

main().then(console.log).then(console.error)
