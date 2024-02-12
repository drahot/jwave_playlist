import { Song } from './types'
import { getBrowser } from './browser'

const FM802_ON_AIR_URL = 'https://funky802.com/site/onairlist'

export const getOnAirList = async (): Promise<Song[]> => {
  const { browser, page } = await getBrowser(FM802_ON_AIR_URL)

  try {
    return await page.evaluate(() => {
      const songInfos = document.querySelectorAll('.c-infoOnair__list')
      return Array.from(songInfos.values()).map((songInfo) => {
        const artistName =
          songInfo.querySelector('.c-infoOnair__list--artist')?.textContent ??
          ''
        const songName =
          songInfo.querySelector('.c-infoOnair__list--title')?.textContent ?? ''
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
