import { Song } from './types'
import { getBrowser } from './browser'

const JWAVE_ON_AIR_URL = 'https://www.j-wave.co.jp/songlist/'

export const getOnAirList = async (): Promise<Song[]> => {
  const { browser, page } = await getBrowser(JWAVE_ON_AIR_URL)
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
