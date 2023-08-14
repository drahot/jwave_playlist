// noinspection JSUnresolvedReference

import env from 'dotenv'
import api from '../../spotify_auth/$api'
import aspida from '@aspida/axios'
import { AuthResult } from '../../spotify_auth/api/token'
import { Result } from './result'

env.config()

export const token = async (): Promise<Result<AuthResult>> => {
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
    const { body } = await client.api.token.post({
      body: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      },
    })
    return { data: body, error: undefined }
  } catch (e) {
    return { data: undefined, error: e as Error }
  }
}

const BASE_CHARS =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const generateString = (length: number) => {
  const chars = Array.from({ length }, () => {
    const index = Math.floor(Math.random() * BASE_CHARS.length)
    return BASE_CHARS[index]
  })

  return chars.join('')
}

export const authorize = async (): Promise<Result<string>> => {
  if (!process.env.SPOTIFY_CLIENT_ID) {
    return { data: undefined, error: new Error('SPOTIFY_CLIENT_ID is not set') }
  }
  const clientId = process.env.SPOTIFY_CLIENT_ID ?? ''
  const state = generateString(16)

  const client = api(aspida())
  try {
    const { body } = await client.authorize.get({
      query: {
        client_id: clientId,
        response_type: 'code',
        state: state,
        redirect_uri: 'http://localhost',
        scope: 'user-read-currently-playing playlist-modify-private',
        show_dialog: false,
      },
    })

    const redirectUri = new TextDecoder().decode(body)
    const url = new URL(redirectUri)
    if (state !== url.searchParams.get('state') ?? '') {
      return {
        data: undefined,
        error: new Error('state is not matched'),
      }
    }
    const code = url.searchParams.get('code') ?? ''
    return { data: code, error: undefined }
  } catch (e) {
    console.log(e)
    return { data: undefined, error: e as Error }
  }
}
