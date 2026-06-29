import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { Link } from "react-router"
import { register } from "../../API/AUTH/register"

type RegisterPayload = {
  token?: string
}

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: ({ name, email, password }: { name: string; email: string; password: string }) =>
      register({ name, email, password }),
    onSuccess: (data: RegisterPayload) => {
      if (data.token) {
        localStorage.setItem("token", data.token)
      }
    },
  })

  return (
    <section className="container-page py-12">
      <div className="card mx-auto w-full max-w-md p-6 sm:p-8">
        <h1 className="font-bold text-2xl text-slate-900">Create Account</h1>
        <p className="mt-2 text-slate-600 text-sm">Join GearUp in a few quick steps.</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault()

            if (password !== confirmPassword) {
              setPasswordError("Passwords do not match.")
              return
            }

            setPasswordError(null)
            mutate({ name, email, password })
          }}
        >
          <div>
            <label htmlFor="name" className="mb-1 block font-medium text-slate-700 text-sm">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block font-medium text-slate-700 text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block font-medium text-slate-700 text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="mb-1 block font-medium text-slate-700 text-sm"
            >
              Confirm password
            </label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Re-enter your password"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          {passwordError && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-700 text-sm">
              {passwordError}
            </p>
          )}

          {isError && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-700 text-sm">
              {error instanceof Error ? error.message : "Registration failed. Please try again."}
            </p>
          )}

          {isSuccess && (
            <p className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-green-700 text-sm">
              Account created successfully. You can now sign in.
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="btn-primary w-full px-4 py-2.5 font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-5 text-center text-slate-600 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-brand-700 hover:text-brand-600">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Register
