module.exports = [
  {
    input: 'spotify',
    outputEachDir: true,
    baseURL: 'https://api.spotify.com/v1',
    openapi: {
      inputFile:
        'https://raw.githubusercontent.com/sonallux/spotify-web-api/main/fixed-spotify-open-api.yml',
    },
  },
  {
    input: 'spotify_auth',
    outputEachDir: true,
    baseURL: 'https://accounts.spotify.com',
  },
]
