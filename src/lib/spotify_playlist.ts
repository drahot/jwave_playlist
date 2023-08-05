// noinspection JSUnresolvedReference
import aspida from '@aspida/axios'
import api from '../../spotify/users/$api'

const userId = process.env.SPOITFY_USER_ID!

type CreatePlayListParams = {
  name: string
  description?: string
  isPublic: boolean
}

export const createPlayList = async ({
  name,
  description,
  isPublic = false,
}: CreatePlayListParams) => {
  const client = api(aspida())
  const data = await client
    ._user_id(userId)
    .playlists.post({ body: { name, description, public: isPublic } })

  const { body, status } = data
  if (status !== 201) {
    return {
      data: undefined,
      error: new Error(`create playlist error: statusCode=${status}`),
    }
  }

  return { data: body, error: undefined }
}
