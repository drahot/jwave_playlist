import { Song } from './types'
import { scrapeSongs } from './scrape-songs'

const JWAVE_ON_AIR_URL = 'https://www.j-wave.co.jp/songlist/'

export const getOnAirList = async (): Promise<Song[]> => {
  return await scrapeSongs(
    JWAVE_ON_AIR_URL,
    '.list_songs > .song > .song_wrap > .song_inner > .col_l > .song_info',
    '.txt_artist > span',
    'h4'
  )
}
