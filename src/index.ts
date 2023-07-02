import { chromium } from 'playwright-core'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const main = async () => {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    slowMo: 1000,
  })
  const page = await browser.newPage()
  await page.goto('https://www.j-wave.co.jp/songlist/')
  const list = await page.evaluate(() => {
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
  console.log(list)
  await browser.close()
}

// eslint-disable-next-line
main().then(console.log).then(console.error)
