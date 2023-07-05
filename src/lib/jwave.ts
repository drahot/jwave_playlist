import { chromium } from 'playwright-core'

interface Song {
  songName: string
  artistName: string
}

export const getOnAirList = async (): Promise<Song[]> => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    slowMo: 500,
  })
  const page = await browser.newPage()
  await page.goto('https://www.j-wave.co.jp/songlist/')
  try {
    return await page.evaluate(() => {
      const songInfos = document.querySelectorAll(
        '.list_songs > .song > .song_wrap > .song_inner > .col_l > .song_info'
      )
      return Array.from(songInfos.values()).map((songInfo) => {
        const songName = songInfo.querySelector('h4')?.textContent ?? ''
        const artistName =
          songInfo.querySelector('.txt_artist > span')?.textContent ?? ''

        return {
          songName,
          artistName,
        }
      })
    })
  } finally {
    await browser.close()
  }
}
