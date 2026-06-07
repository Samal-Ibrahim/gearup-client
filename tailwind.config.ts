import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(15 23 42 / 0.06)",
        sm: "0 2px 8px 0 rgb(15 23 42 / 0.08)",
        md: "0 8px 24px 0 rgb(15 23 42 / 0.12)",
        lg: "0 16px 40px 0 rgb(15 23 42 / 0.14)",
      },
    },
  },
}

export default config
