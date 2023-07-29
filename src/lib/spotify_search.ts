import aspida from '@aspida/axios'
import api from '../../spotify/search/$api'

type SearchParams = {
  accessToken: string
  artist: string
  song: string
}

export const search = async ({ accessToken, artist, song }: SearchParams) => {
  const client = api(aspida())
  const query = `track:${song} artist:${artist}`

  const { body, status } = await client.get({
    query: { q: query, type: ['track'] },
    config: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  })

  if (status !== 200) {
    return { data: undefined, error: new Error('search error') }
  }

  return { data: body, error: undefined }
}
