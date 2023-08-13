// noinspection JSUnresolvedReference

import env from 'dotenv'
import api from '../../spotify_auth/$api'
import aspida from '@aspida/axios'
import { AuthResult } from '../../spotify_auth/api/token'
import { Result } from './result'

env.config()

export const authenticate = async (): Promise<Result<AuthResult>> => {
  if (!process.env.SPOTIFY_CLIENT_ID) {
    return { data: undefined, error: new Error('SPOTIFY_CLIENT_ID is not set') }
  }
  if (!process.env.SPOTIFY_CLIENT_SECRET) {
    return {
      data: undefined,
      error: new Error('SPOTIFY_CLIENT_SECRET is not set'),
    }
  }
  if (!process.env.SPOTIFY_USER_ID) {
    return {
      data: undefined,
      error: new Error('SPOTIFY_USER_ID is not set'),
    }
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  const client = api(aspida())
  try {
    const { body, status } = await client.api.token.post({
      body: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      },
    })
    if (status !== 200) {
      return { data: undefined, error: new Error('auth error') }
    }
    return { data: body, error: undefined }
  } catch (error: unknown) {
    return { data: undefined, error: error as Error }
  }
}
