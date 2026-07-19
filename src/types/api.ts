export type ApiResponse<T> = { sucsess: boolean; data: T }

export type RegisterRequest = {
  name: string
  email: string
  password: string
}
