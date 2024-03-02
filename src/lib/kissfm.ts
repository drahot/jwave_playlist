import { Song } from './types'
import { scrapeSongs } from './scrape-songs'

const KISSFM_ON_AIR_URL = 'https://noa.audee.jp/search/view/iv/'

export const getOnAirList = async (): Promise<Song[]> => {
  return await scrapeSongs(
    KISSFM_ON_AIR_URL,
    '.entry',
    '.entryArtist',
    '.entryTxt > a'
  )
}
