module.exports = [
  {
    input: 'spotify',
    outputEachDir: true,
    baseURL: 'https://api.spotify.com/v1',
    openapi: {
      inputFile:
        'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/spotify.com/1.0.0/openapi.yaml',
    },
  },
  {
    input: 'spotify_auth',
    outputEachDir: true,
    baseURL: 'https://accounts.spotify.com',
  },
]
