// TS Training Round 2 (difficulty 2/5)
// Rule for this file: keep only current round tasks.

// Task 1: unknown narrowing
// Implement:
// function toTrimmedString(value: unknown): string
// Rules:
// 1) string -> trimmed lowercase
// 2) number/boolean -> String(value), then trimmed lowercase
// 3) everything else -> "invalid"
export function toTrimmedString(value: unknown): string {
  // TODO: your solution
  void value
  return ""
}

// Task 2: custom type guard
export type AdminUser = { role: "admin"; permissions: string[] }
export type RegularUser = { role: "user"; email: string }

// Implement:
// function isAdminUser(value: unknown): value is AdminUser
export function isAdminUser(value: unknown): value is AdminUser {
  // TODO: your solution
  void value
  return false
}

// Implement:
// function getUserLabel(value: unknown): string
// Rules:
// 1) Admin -> "Admin (<count> perms)"
// 2) RegularUser -> "User (<email>)"
// 3) else -> "Unknown user"
export function getUserLabel(value: unknown): string {
  // TODO: your solution
  void value
  return ""
}

// Task 3: discriminated union + exhaustiveness check
export type ApiSuccess = { status: "success"; data: { id: number; name: string } }
export type ApiError = { status: "error"; error: string }
export type ApiLoading = { status: "loading" }
export type ApiResponse = ApiSuccess | ApiError | ApiLoading

// Implement:
// function renderApiState(res: ApiResponse): string
// Rules:
// success -> "Car: <name> (#<id>)"
// error -> "Error: <error>"
// loading -> "Loading..."
// Use switch + never exhaustiveness check
export function renderApiState(res: ApiResponse): string {
  // TODO: your solution
  void res
  return ""
}

// Optional quick checks (uncomment after solving)
// console.log(toTrimmedString("  HELLO ")); // hello
// console.log(toTrimmedString(123)); // 123
// console.log(toTrimmedString(true)); // true
// console.log(toTrimmedString(null)); // invalid
// console.log(toTrimmedString({ a: 1 })); // invalid

// console.log(getUserLabel({ role: "admin", permissions: ["cars.read", "cars.write"] })); // Admin (2 perms)
// console.log(getUserLabel({ role: "user", email: "a@b.com" })); // User (a@b.com)
// console.log(getUserLabel({ role: "admin", permissions: "all" })); // Unknown user

// console.log(renderApiState({ status: "success", data: { id: 7, name: "Civic" } })); // Car: Civic (#7)
// console.log(renderApiState({ status: "error", error: "Network" })); // Error: Network
// console.log(renderApiState({ status: "loading" })); // Loading...
