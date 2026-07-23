import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { useAuth } from "../../context/IsAuthContext"
import { login } from "./api"
import { setToken } from "./token"

export const useLogin = () => {
  const navigate = useNavigate()
  const { authorize } = useAuth()

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: (data) => {
      setToken(data.token)
      authorize()
      navigate("/profile")
    },
  })
}
