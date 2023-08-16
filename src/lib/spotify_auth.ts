// noinspection JSUnresolvedReference

import env from 'dotenv'
import api from '../../spotify_auth/$api'
import aspida from '@aspida/axios'
import express, { Express } from 'express'
import http from 'http'
import { AuthResult } from '../../spotify_auth/api/token'
import { Result } from './result'
import * as querystring from 'querystring'
import { chromium } from 'playwright-core'

env.config()

const BASE_URL = process.env.SPOTIFY_AUTH_URL ?? ''
const PORT = process.env.SPOTIFY_AUTH_URL_PORT ?? ''
const AUTH_BASE_URL = BASE_URL + (PORT ? `:${PORT}` : '')
const SCOPE = 'playlist-modify-private'

const BASE_CHARS =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const generateString = (length: number) => {
  const chars = Array.from({ length }, () => {
    const index = Math.floor(Math.random() * BASE_CHARS.length)
    return BASE_CHARS[index]
  })
  return chars.join('')
}

const loginPage = async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto(`${AUTH_BASE_URL}/login`)
  await page.fill('#login-username', process.env.SPOTIFY_USER_NAME ?? '')
  await page.fill('#login-password', process.env.SPOTIFY_USER_PASSWORD ?? '')
  await page.click('#login-button')
  return browser
}

const loginAction = (app: Express, state: string) => {
  app.get('/login', (req, res) => {
    res.redirect(
      'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
          scope: SCOPE,
          redirect_uri: `${AUTH_BASE_URL}/callback`,
          state: state,
        })
    )
  })
}

const callbackAction = (app: Express, state: string) => {
  let resolve: (code: string) => void
  let reject: (error: Error) => void
  const promise = new Promise<string>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })

  app.get('/callback', (req, res) => {
    const code = req.query.code || null
    const s = req.query.state || null
    if (state !== s) {
      reject(new Error('state is not matched'))
      res.status(400)
      return
    }

    res.status(200)
    resolve(code as string)
    res.send('OK')
  })
  return promise
}

// noinspection JSUnusedGlobalSymbols
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

export const authorize = async (): Promise<Result<string>> => {
  if (!process.env.SPOTIFY_USER_NAME) {
    return {
      data: undefined,
      error: new Error('SPOTIFY_USER_NAME is not set'),
    }
  }
  if (!process.env.SPOTIFY_USER_PASSWORD) {
    return {
      data: undefined,
      error: new Error('SPOTIFY_USER_PASSWORD is not set'),
    }
  }

  const app = express()
  const server = http.createServer(app)
  const state = generateString(16)

  try {
    loginAction(app, state)
    const getResultCode = callbackAction(app, state)
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })

    const browser = await loginPage()
    const code = await getResultCode
    await browser.close()

    return { data: code, error: undefined }
    // return { data: body.code, error: undefined }
  } catch (e) {
    console.log(e)
    return { data: undefined, error: e as Error }
  } finally {
    server.close()
  }
}
