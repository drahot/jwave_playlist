import { chromium } from 'playwright-core'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const main = async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true })
  const page = await browser.newPage()
  await page.goto('https://www.google.com')
  await page.screenshot({ path: './tmp/sample.png' })
  await browser.close()
}

// eslint-disable-next-line
main().then(console.log).then(console.error)
