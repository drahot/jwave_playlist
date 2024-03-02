import { Song } from './types'
import { scrapeSongs } from './scrape-songs'

const FM802_ON_AIR_URL = 'https://funky802.com/site/onairlist'

export const getOnAirList = async (): Promise<Song[]> => {
  return await scrapeSongs(
    FM802_ON_AIR_URL,
    '.c-infoOnair__list',
    '.c-infoOnair__list--artist',
    '.c-infoOnair__list--title'
  )
}
