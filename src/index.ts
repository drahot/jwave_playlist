import { authenticate } from './lib/spotify_auth'
import * as process from 'process'
import { search } from './lib/spotify_search'

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
  console.log(auth.access_token)
  console.log(auth.token_type)
  console.log(auth.expires_in)

  const searchResult = await search({
    accessToken: auth?.access_token,
    artist: 'Bruno Majar',
    song: 'Tell her',
  })

  if (searchResult.error) {
    console.error(searchResult.error.message)
    process.exit(1)
  }

  if (searchResult.data) {
    if (searchResult.data.length) {
      const track = searchResult.data[0]
      console.log(track.artists?.[0].name ?? '')
      console.log(track.name)
      console.log(track.external_urls?.spotify)
    }
  }

  process.exit()
}

main().then(console.log).then(console.error)
