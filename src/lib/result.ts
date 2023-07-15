export type Result<T> =
  | {
      auth: T
      error: undefined
    }
  | {
      auth: undefined
      error: Error
    }
