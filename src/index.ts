/* eslint-disable @typescript-eslint/no-explicit-any */
import { authorize } from './lib/spotify-auth'
import { getOnAirList as getJwaveOnAirList } from './lib/jwave'
import { getOnAirList as getFM802OnAirList } from './lib/fm802'
import { spotify } from './lib/spotify'
import dayjs from 'dayjs'
import { SimplifiedPlaylistObject } from '../spotify/@types'
import { Result } from 'result-type-ts'
import { Song } from './lib/types'

type SpotifyClient = ReturnType<typeof spotify>
const RadioStation = {
  JWave: 'J-WAVE',
  FM802: 'FM802',
}

type RadioStationType = (typeof RadioStation)[keyof typeof RadioStation]

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

const getOrCreatePlaylist = async (
  client: SpotifyClient,
  playlistName: string
): Promise<Result<string, Error>> => {
  const listResult = await getPlaylist(client, playlistName)
  return await listResult.match(
    async (playlist) => {
      const idResult = playlist
        ? Result.success(playlist.id)
        : await createPlaylist(client, playlistName)

      return idResult.flatMap((id) => {
        if (!id) {
          return Result.failure(new Error('playlistId is undefined'))
        }
        return Result.success(id ?? '')
      })
    },
    (error) => Result.failure(error)
  )
}

const filterTrackUris = async (
  client: SpotifyClient,
  playlistId: string,
  trackUris: string[]
) =>
  (await getPlaylistTrackUris(client, playlistId)).map((uris) =>
    trackUris.filter((uri) => !uris.includes(uri) && uri !== '')
  )

const savePlaylist = async (
  client: SpotifyClient,
  playlistName: string,
  trackUris: string[]
) => {
  const today = dayjs().format('YYYY-MM-DD')
  const fullPlaylistName = `${playlistName} ${today}`

  const idResult = await getOrCreatePlaylist(client, fullPlaylistName)
  return idResult.match(
    async (id) => {
      const urisResult = await filterTrackUris(client, id, trackUris)
      return urisResult.match(
        async (uris) =>
          (await client.addItemsToPlaylist(id, uris)).map(() => id),
        (error) => Result.failure(error)
      )
    },
    (error) => Result.failure(error)
  )
}

const registerOnAirList = async (
  client: SpotifyClient,
  radioStation: RadioStationType,
  songs: Song[]
): Promise<void> => {
  const trackUris = await searchTracks(client, songs.slice(0, 100))

  if (trackUris.length === 0) {
    console.debug('no tracks')
  } else {
    console.debug(`uris.length: ${trackUris.length}`)
    const name = `${radioStation} On Air`
    const result = await savePlaylist(client, name, trackUris)
    result.match(
      (value) => {
        console.log(value)
      },
      (error) => {
        console.error(error.message)
      }
    )
  }
}

const main = async () => {
  const result = await authorize()
  await result.match(
    async (auth) => {
      console.debug(`auth_token: ${auth.access_token}`)

      const client = spotify(auth?.access_token ?? '')
      await registerOnAirList(
        client,
        RadioStation.JWave,
        await getJwaveOnAirList()
      )
      await registerOnAirList(
        client,
        RadioStation.FM802,
        await getFM802OnAirList()
      )
    },
    (error) => {
      console.error(error.message)
    }
  )
}

main().then(console.log).catch(console.error)
