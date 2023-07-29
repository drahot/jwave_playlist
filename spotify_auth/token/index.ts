export type AuthResult = {
  access_token: string
  token_type: string
  expires_in: number
}

export type Methods = {
  post: {
    reqFormat: URLSearchParams
    reqBody: {
      client_id: string
      client_secret: string
      grant_type: 'client_credentials'
    }

    resBody: AuthResult
  }
}
