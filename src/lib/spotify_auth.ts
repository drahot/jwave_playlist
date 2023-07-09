import env from 'dotenv'
import api from '../../spotify_auth/$api'
import aspida from '@aspida/axios'

env.config()

if (!process.env.SPOTIFY_CLIENT_ID) {
  throw new Error('SPOTIFY_CLIENT_ID is not set')
}

if (!process.env.SPOTIFY_CLIENT_SECRET) {
  throw new Error('SPOTIFY_CLIENT_SECRET is not set')
}

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

const authenticate = async () => {
  const client = api(aspida())
  return await client.post({
    body: {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    },
  })
}
