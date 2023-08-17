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
const AUTH_REDIRECT_URL = `${AUTH_BASE_URL}/callback`
const BASE_CHARS =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const generateString = (length: number) => {
  const chars = Array.from({ length }, () => {
    const index = Math.floor(Math.random() * BASE_CHARS.length)
    return BASE_CHARS[index]
  })
  return chars.join('')
}

const state = generateString(16)

const loginPage = async () => {
  const url =
    'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
      scope: SCOPE,
      redirect_uri: AUTH_REDIRECT_URL,
      state: state,
    })

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto(url)
  await page.fill('#login-username', process.env.SPOTIFY_USER_NAME ?? '')
  await page.fill('#login-password', process.env.SPOTIFY_USER_PASSWORD ?? '')
  await page.click('#login-button')
  return browser
}

const callbackAction = (app: Express, state: string) =>
  new Promise<string>((resolve, reject) => {
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
  })

const validateValueSet = (
  value: string | null | undefined,
  message: string
) => {
  if (!value) {
    throw new Error(message)
  }
}

// noinspection JSUnusedGlobalSymbols
const token = async (
  code: string,
  redirectUri: string
): Promise<Result<AuthResult>> => {
  const client = api(aspida())

  try {
    validateValueSet(
      process.env.SPOTIFY_CLIENT_ID,
      'SPOTIFY_CLIENT_ID is not set'
    )
    validateValueSet(
      process.env.SPOTIFY_CLIENT_SECRET,
      'SPOTIFY_CLIENT_SECRET is not set'
    )

    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
      'base64'
    )

    const { body } = await client.api.token.post({
      body: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      },
      config: {
        headers: {
          Authorization: `Basic ${basicAuth}`,
        },
      },
    })
    return { data: body, error: undefined }
  } catch (e) {
    return { data: undefined, error: e as Error }
  }
}

export const authorize = async (): Promise<Result<AuthResult>> => {
  const app = express()
  const server = http.createServer(app)

  try {
    validateValueSet(
      process.env.SPOTIFY_USER_NAME,
      'SPOTIFY_USER_NAME is not set'
    )
    validateValueSet(
      process.env.SPOTIFY_USER_PASSWORD,
      'SPOTIFY_USER_PASSWORD is not set'
    )

    // エンドポイントの作成
    const getCode = callbackAction(app, state)

    // サーバーの起動
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })

    // ログイン処理
    const browser = await loginPage()

    // Promiseの結果を待つ
    const code = await getCode
    await browser.close()

    // codeを使ってtokenを取得
    return await token(code, AUTH_REDIRECT_URL)
  } catch (e) {
    console.log(e)
    return { data: undefined, error: e as Error }
  } finally {
    server.close()
  }
}
