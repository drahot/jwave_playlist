import env from 'dotenv'

env.config()

const clientId = process.env.SPOTIFY_CLIENT_ID ?? ''
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? ''
