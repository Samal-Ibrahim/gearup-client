import { useQuery } from "@tanstack/react-query"
import { profile } from "../features/profile/api"

const Profile = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: () => profile(),
  })

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm sm:p-8">
          <p className="font-medium text-red-700">{error.message}</p>
        </div>
      </section>
    )
  }

  if (!data) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-gray-600">No profile data found.</p>
        </div>
      </section>
    )
  }

  const initials = data.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

  return (
    <section className="container mx-auto space-y-8 px-4 py-12">
      <header className="space-y-2">
        <p className="font-semibold text-brand-700 text-sm uppercase tracking-[0.2em]">Account</p>
        <h1 className="font-black text-4xl text-gray-900 sm:text-5xl">Your Profile</h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 font-black text-brand-800 text-xl">
              {initials || "U"}
            </div>
            <div>
              <h2 className="font-black text-2xl text-gray-900">{data.name}</h2>
              <p className="text-gray-500 text-sm">{data.email}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 p-4">
            <p className="font-semibold text-gray-500 text-xs uppercase">Role</p>
            <p className="mt-1 font-bold text-gray-900 text-lg">{data.role}</p>
          </div>
        </aside>

        <div className="space-y-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="font-black text-2xl text-gray-900">Account Details</h3>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Email</p>
              <p className="mt-1 break-all font-medium text-gray-900 text-sm">{data.email}</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Role</p>
              <p className="mt-1 font-medium text-gray-900 text-sm">{data.role}</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Member Since</p>
              <p className="mt-1 font-medium text-gray-900 text-sm">
                {new Date(data.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-500 text-xs uppercase">Last Updated</p>
              <p className="mt-1 font-medium text-gray-900 text-sm">
                {new Date(data.updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
