import aspida from '@aspida/axios'
import api from '../../spotify/users/$api'

// noinspection JSUnresolvedReference
const userId = process.env.SPOITFY_USER_ID ?? ''

type CreatePlayListParams = {
  accessToken: string
  name: string
  description?: string
  isPublic: boolean
}

export const createPlayList = async ({
  accessToken,
  name,
  description,
  isPublic = false,
}: CreatePlayListParams) => {
  const client = api(aspida())

  const data = await client._user_id(userId).playlists.post({
    body: { name, description, public: isPublic },
    config: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  })

  const { body, status } = data

  if (status !== 201) {
    return {
      data: undefined,
      error: new Error(`create playlist error: statusCode=${status}`),
    }
  }

  return { data: body, error: undefined }
}
