export type AuthResult = {
  code: string
  status: string
}

export type Methods = {
  get: {
    reqFormat: URLSearchParams
    reqBody: {
      client_id: string
      response_type: 'code'
      redirect_uri: string
      state: string
      scope: string
    }

    resBody: ArrayBuffer
  }
}
