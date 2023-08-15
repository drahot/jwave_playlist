export type AuthResult = {
  code: string
}

export type Methods = {
  get: {
    query: {
      client_id: string
      response_type: 'code'
      redirect_uri: string
      state: string
      scope: string
      show_dialog: false
    }

    resBody: AuthResult
  }
}
