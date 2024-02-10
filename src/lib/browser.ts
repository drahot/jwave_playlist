import { chromium } from 'playwright-core'
import { Song } from './types'

export type GetSongs = () => Promise<Song[]>

export const getBrowser = async (url: string) => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    slowMo: 500,
  })
  const page = await browser.newPage()
  await page.goto(url)
  return { browser, page }
}
