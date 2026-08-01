import { useState } from "react"
import { Link } from "react-router"
import { useLogin } from "../../features/auth/hooks"

const Login = () => {
  const [email, setEmail] = useState("samal@gearup.com")
  const [password, setPassword] = useState("Samal123")
  const { mutate, isPending, isError, error } = useLogin()

  return (
    <section className="container-page py-12">
      <div className="card mx-auto w-full max-w-md p-6 sm:p-8">
        <h1 className="font-bold text-2xl text-slate-900">Welcome Back</h1>
        <p className="mt-2 text-slate-600 text-sm">Sign in to continue to GearUp.</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault()
            mutate({ email, password })
          }}
        >
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
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            />
          </div>

          {isError && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-700 text-sm">
              {error instanceof Error ? error.message : "Login failed. Please try again."}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="btn-primary w-full cursor-pointer px-4 py-2.5 font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-5 text-center text-slate-600 text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-semibold text-cyan-700 hover:text-cyan-600">
            Register
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login
