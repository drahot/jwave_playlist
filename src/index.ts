/* eslint-disable @typescript-eslint/no-explicit-any */
import { authorize } from './lib/spotify-auth'
import { getOnAirList, Song } from './lib/jwave'
import { spotify } from './lib/spotify'
import dayjs from 'dayjs'
import { SimplifiedPlaylistObject } from '../spotify/@types'
import { Result } from 'result-type-ts'

type SpotifyClient = ReturnType<typeof spotify>

const searchTracks = async (client: SpotifyClient, songs: Song[]) => {
  const tracks: Promise<Result<string, Error>>[] = songs.map(
    async (item, i) => {
      if (i !== 0 && i % 30 === 0) {
        // Rate Limit 30 requests per 30 seconds
        await sleep(30000)
      }

      const result = await client.searchTrack(item.artistName, item.songName)
      return result.flatMap((tracks) => {
        if (tracks.length > 0) {
          const track = tracks[0]

          console.debug(track.artists?.[0].name ?? '')
          console.debug(track.name)
          console.debug(track.external_urls?.spotify)
          console.debug(track.uri)

          return Result.success(track.uri ?? '')
        } else {
          return Result.failure(
            new Error(
              `artist: ${item.artistName} song: ${item.songName}, no data`
            )
          )
        }
      })
    }
  )

  const result = await Promise.all(tracks)

  const [uris, errors] = result.reduce<[string[], Error[]]>(
    (previousValue, currentValue) => {
      const [uris, errors] = previousValue
      return currentValue.isFailure
        ? [uris, [...errors, currentValue.error]]
        : [[...uris, currentValue.value], errors]
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

const createPlaylist = async (
  client: SpotifyClient,
  playlistName: string
): Promise<Result<string | undefined, Error>> => {
  const result = await client.createPlaylist(playlistName)
  return result.map((value) => value.id)
}

const getPlaylist = async (
  client: SpotifyClient,
  playlistName: string,
  offset = 0
): Promise<Result<SimplifiedPlaylistObject | undefined, Error>> => {
  const result = await client.getUserPlaylists(offset)
  return await result.match(
    async (value) => {
      const playlist = value.items?.find((item) => item.name === playlistName)
      if (playlist) {
        return Result.success(playlist)
      } else {
        return !value.next
          ? Result.success(undefined)
          : await getPlaylist(client, playlistName, offset + 50)
      }
    },
    (error) => Result.failure(error)
  )
}

const getPlaylistTrackUris = async (
  client: SpotifyClient,
  playlistId: string,
  offset = 0
): Promise<Result<string[], Error>> => {
  const result = await client.getPlaylistTracks(playlistId, offset, 50)

  return result.match(
    async (value) => {
      const tracks = value?.items?.map((item) => item.track?.uri ?? '') ?? []

      const result = !value?.next
        ? Result.success([])
        : await getPlaylistTrackUris(client, playlistId, offset + 50)

      return result.map((nextTracks) => [...tracks, ...nextTracks])
    },
    (error) => Result.failure(error)
  )
}

const savePlaylist = async (client: SpotifyClient, trackUris: string[]) => {
  const today = dayjs().format('YYYY-MM-DD')
  const jWavePlaylistName = `J-WAVE On Air ${today}`

  const playlistResult = await getPlaylist(client, jWavePlaylistName)
  if (playlistResult.isFailure) {
    return playlistResult
  }
  console.log(playlistResult.value)

  const playlistIdResult = playlistResult.value
    ? Result.success(playlistResult.value.id)
    : await createPlaylist(client, jWavePlaylistName)

  if (playlistIdResult.isFailure) {
    return playlistIdResult
  }

  const playlistTrackUrisResult = await getPlaylistTrackUris(
    client,
    playlistIdResult.value ?? ''
  )

  if (playlistTrackUrisResult.isFailure) {
    return playlistTrackUrisResult
  }

  const filterTrackUris = trackUris.filter(
    (uri) => !playlistTrackUrisResult.value?.includes(uri) && uri !== ''
  )

  await client.addItemsToPlaylist(playlistIdResult.value ?? '', filterTrackUris)

  return playlistIdResult
}

const main = async () => {
  const result = await authorize()
  await result.match(
    async (auth) => {
      console.debug(`auth_token: ${auth.access_token}`)

      const client = spotify(auth?.access_token ?? '')
      const songs = await getOnAirList()
      const trackUris = await searchTracks(client, songs.slice(0, 100))

      if (trackUris.length === 0) {
        console.debug('no tracks')
      } else {
        console.debug(`uris.length: ${trackUris.length}`)
        const result = await savePlaylist(client, trackUris)
        result.match(
          (value) => {
            console.log(value)
          },
          (error) => {
            console.error(error.message)
          }
        )
      }
    },
    (error) => {
      console.error(error.message)
    }
  )
}

main().then(console.log).catch(console.error)
