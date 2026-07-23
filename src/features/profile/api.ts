import { GET_PROFILE } from "../../config/constants"
import type { ApiResponse } from "../../types/api"
import { getToken } from "../auth/token";

type Profile = {
  name: string
  email: string
  role: string
  createdAt: string
  updatedAt: string
}


export const profile = async () => {
  const token = getToken()
  const res = await fetch(`${GET_PROFILE}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) {
    throw new Error("failed to fetch profile")
  }
  const json: ApiResponse<Profile> = await res.json()
  return json.data
}
