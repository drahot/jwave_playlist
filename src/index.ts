import { authenticate } from './lib/spotify_auth'
import * as process from 'process'
import { getOnAirList, Song } from './lib/jwave'
import { spotify } from './lib/spotify'
import dayjs from 'dayjs'

type spotifyClient = ReturnType<typeof spotify>

const searchTracks = async (client: spotifyClient, songs: Song[]) => {
  const tracks = songs
    .map(async (item, i) => {
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
      console.debug(track.artists?.[0].name ?? '')
      console.debug(track.name)
      console.debug(track.external_urls?.spotify)
      console.debug(track.uri)

      return track.uri ?? ''
    })
    .filter(async (item) => ((await item) ?? '') !== '')
  return Promise.all(tracks)
}

const chunkArray = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = []

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const createPlaylist = async (client: spotifyClient, trackUris: string[]) => {
  const today = dayjs().format('YYYY-MM-DD')
  const jWavePlaylistName = `J-WAVE On Air ${today}`

  const createResult = await client.createPlaylist(jWavePlaylistName)
  if (createResult.error) {
    console.error(createResult.error.message)
    return
  }

  const playlist = createResult.data

  for (const uris of chunkArray(trackUris, 100)) {
    await client.addItemsToPlaylist(playlist.id ?? '', uris)
    await sleep(1000)
  }
  return playlist
}

const main = async () => {
  const authResult = await authenticate()

  if (authResult.error) {
    console.error(authResult.error.message)
    process.exit(1)
  }

  if (!authResult.data) {
    console.error('authResult.auth is undefined')
    process.exit(1)
  }

  const auth = authResult.data
  console.log('auth_token: ', auth.access_token)
  console.log('expires_in: ', auth?.expires_in)

  const client = spotify(auth.access_token)

  const songs = await getOnAirList()

  const trackUris = await searchTracks(client, songs.slice(0, 50))
  console.log(trackUris.length)
  const playlist = await createPlaylist(client, trackUris)
  console.log(playlist?.external_urls?.spotify)
  process.exit()
}

main().then(console.log).then(console.error)
