import aspida from '@aspida/axios'
import api from '../../spotify/search/$api'

type SearchParams = {
  accessToken: string
  artist: string
  song: string
}

export const search = async ({ accessToken, artist, song }: SearchParams) => {
  const client = api(aspida())

  const query = `remaster track:${song} artist:${artist}`.replace(/ /g, '%20')
  const data = await client.get({
    query: { q: query, type: 'track', limit: 10 },
    config: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  })

  const { body, status } = data

  if (status !== 200) {
    return { data: undefined, error: new Error('search error') }
  }

  return { data: body, error: undefined }
}
