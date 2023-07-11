import { getOnAirList } from './lib/jwave'
import { authenticate } from './lib/spotify_auth'

const main = async () => {
  const list = await getOnAirList()
  const authResult = await authenticate()
  if (authResult.error) {
    console.log(authResult.error)
    return
  }

  const auth = authResult.auth

  console.log(list)
}

main().then(console.log).then(console.error)
