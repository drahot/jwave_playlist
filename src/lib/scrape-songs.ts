import { Song } from './types'
import { chromium } from 'playwright-core'

export const scrapeSongs = async (
  url: string,
  songsSelector: string,
  artistSelector: string,
  songSelector: string
): Promise<Song[]> => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    slowMo: 500,
  })

  try {
    const page = await browser.newPage()
    await page.goto(url)

    return await page.evaluate(
      ([songsSelector, artistSelector, songSelector]) => {
        const songInfos = document.querySelectorAll(songsSelector)
        return Array.from(songInfos.values()).map((songInfo) => {
          const artistName = (
            songInfo.querySelector(artistSelector)?.textContent ?? ''
          ).trim()
          const songName = (
            songInfo.querySelector(songSelector)?.textContent ?? ''
          ).trim()
          return {
            songName,
            artistName,
          }
        })
      },
      [songsSelector, artistSelector, songSelector]
    )
  } finally {
    await browser.close()
  }
}
