import { getOnAirList } from './lib/jwave'
import { authenticate } from './lib/spotify_auth'
import * as process from 'process'

const main = async () => {
  const authResult = await authenticate()

  if (authResult.error) {
    console.error(authResult.error.message)
    process.exit(1)
  }

  if (!authResult.auth) {
    console.error('authResult.auth is undefined')
    process.exit(1)
  }

  const auth = authResult.auth
  console.log(auth.access_token)
  console.log(auth.token_type)
  console.log(auth.expires_in)

  const list = await getOnAirList()

  console.log(list)
  process.exit()
}

main().then(console.log).then(console.error)
