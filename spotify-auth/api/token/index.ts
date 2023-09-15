export type AuthResult = {
  access_token: string
  token_type: string
  scope: string
  expires_in: number
  refresh_token: string
}

export type Methods = {
  post: {
    reqFormat: URLSearchParams
    reqBody: {
      code?: string
      redirect_uri: string
      grant_type: 'client_credentials' | 'authorization_code'
    }

    resBody: AuthResult
  }
}
