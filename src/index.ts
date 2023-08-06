import { authenticate } from './lib/spotify_auth'
import * as process from 'process'
import { getOnAirList, Song } from './lib/jwave'
import { spotify } from './lib/spotify'
import dayjs from 'dayjs'

type spotifyResult = ReturnType<typeof spotify>

const searchTracks = async (client: spotifyResult, songs: Song[]) => {
  const tracks = songs
    .map(async (item) => {
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
      console.debug(track.artists?.[0].name ?? '')
      console.debug(track.name)
      console.debug(track.external_urls?.spotify)
      console.debug(track.uri)
      return track.uri ?? ''
    })
    .filter(async (item) => ((await item) ?? '') !== '')
  return Promise.all(tracks)
}

const createPlaylist = async (client: spotifyResult, trackUris: string[]) => {
  const today = dayjs().format('YYYY年MM月DD')
  const jWavePlaylistName = `J-WAVE On Air ${today}`

  const createResult = await client.createPlaylist(jWavePlaylistName)
  if (createResult.error) {
    console.error(createResult.error.message)
    return
  }

  const playlist = createResult.data

  const addItemResult = await client.addItemsToPlaylist(
    playlist.id ?? '',
    trackUris
  )
  if (addItemResult.error) {
    console.error(addItemResult.error.message)
    return
  }
  console.log(addItemResult.data)
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
  const client = spotify(auth.access_token)

  const list = await getOnAirList()
  const trackUris = await searchTracks(client, list)
  await createPlaylist(client, trackUris)
  process.exit()
}

main().then(console.log).then(console.error)
