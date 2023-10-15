// noinspection JSUnresolvedReference

import api from '../../spotify-auth/$api'
import aspida from '@aspida/fetch'
import express, { Express } from 'express'
import http from 'http'
import { AuthResult } from '../../spotify-auth/api/token'
import * as querystring from 'querystring'
import { chromium } from 'playwright-core'
import env from 'dotenv'
import { Result } from 'result-type-ts'

env.config()

const BASE_URL = process.env.SPOTIFY_AUTH_URL ?? ''
const PORT = process.env.SPOTIFY_AUTH_URL_PORT ?? ''
const AUTH_BASE_URL = BASE_URL + (PORT ? `:${PORT}` : '')
const SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'
const SCOPE =
  'playlist-read-private playlist-modify-private playlist-modify-public'
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
    SPOTIFY_AUTHORIZE_URL +
    '?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
      scope: SCOPE,
      redirect_uri: AUTH_REDIRECT_URL,
      state: state,
    })

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false,
  })
  const page = await browser.newPage()
  await page.goto(url)
  await page.fill('#login-username', process.env.SPOTIFY_USER_NAME ?? '')
  await page.fill('#login-password', process.env.SPOTIFY_USER_PASSWORD ?? '')
  await page.locator('#login-button').click()
  await page.waitForTimeout(1000)
  const [locator] = await Promise.all([page.locator('button')])
  const buttons = await locator.all()
  for (const button of buttons) {
    const testId = await button.getAttribute('data-testid')
    if (testId === 'auth-accept') {
      await button.click()
    }
  }
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
): Promise<Result<AuthResult, Error>> => {
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
    return Result.success(body)
  } catch (e) {
    return Result.failure(e as Error)
  }
}

export const authorize = async (): Promise<Result<AuthResult, Error>> => {
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
    return Result.failure(e as Error)
  } finally {
    server.close()
  }
}
