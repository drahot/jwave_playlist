import { getOnAirList } from './lib/jwave'
import { authenticate } from './lib/spotify_auth'

const main = async () => {
  const authResult = await authenticate()

  if (authResult.error) {
    console.error(authResult.error.message)
    return
  }

  if (!authResult.auth) {
    console.error('authResult.auth is undefined')
    return
  }

  const auth = authResult.auth
  console.log(auth.access_token)
  console.log(auth.token_type)
  console.log(auth.expires_in)

  const list = await getOnAirList()

  console.log(list)
}

main().then(console.log).then(console.error)
