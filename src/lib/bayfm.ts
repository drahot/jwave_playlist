import { Song } from './types'
import { scrapeSongs } from './scrape-songs'

const BAYFM_ON_AIR_URL = 'https://www.bayfm.co.jp/onair/'

export const getOnAirList = async (): Promise<Song[]> => {
  return await scrapeSongs(BAYFM_ON_AIR_URL, '.names', '.artist', '.title')
}
