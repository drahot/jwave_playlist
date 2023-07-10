import env from 'dotenv'
import api from '../../spotify_auth/$api'
import aspida from '@aspida/axios'
import { AuthResult } from '../../spotify_auth'

type AuthData =
  | {
      auth: AuthResult
      error: undefined
    }
  | {
      auth: undefined
      error: string
    }
env.config()

const authenticate = async (): Promise<AuthData> => {
  if (!process.env.SPOTIFY_CLIENT_ID) {
    return { auth: undefined, error: 'SPOTIFY_CLIENT_ID is not set' }
  }
  if (!process.env.SPOTIFY_CLIENT_SECRET) {
    return {
      auth: undefined,
      error: 'SPOTIFY_CLIENT_SECRET is not set',
    }
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  const client = api(aspida())
  const { body, status } = await client.post({
    body: {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    },
  })
  if (status !== 200) {
    return { auth: undefined, error: 'auth error' }
  }
  return { auth: body, error: undefined }
}
