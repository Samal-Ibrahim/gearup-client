import type { ReactNode } from "react"

type ErrorHandlersProps = {
  message: ReactNode
  styling?: string
}
const ErrorHandlers = ({
  message,
  styling = "flex flex-col items-center justify-center gap-4",
}: ErrorHandlersProps) => {
  return (
    <div className={styling}>
      <p>{message}</p>
    </div>
  )
}

export default ErrorHandlers
