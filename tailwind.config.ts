
import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1ABFB9", // Turquesa do logo
          foreground: "var(--primary-foreground)",
          50: "#e6f7f7",
          100: "#ccf0ee",
          200: "#99e1de",
          300: "#66d2cd",
          400: "#33c3bc",
          500: "#1ABFB9",
          600: "#159994",
          700: "#11736f",
          800: "#0e4c4a",
          900: "#062625",
        },
        secondary: {
          DEFAULT: "#0f1a25", // Azul escuro do logo atualizado
          foreground: "var(--secondary-foreground)",
          50: "#e6e8ea",
          100: "#ccd0d4",
          200: "#99a1a9",
          300: "#66737f",
          400: "#334454",
          500: "#0f1a25",
          600: "#0c151e",
          700: "#091016",
          800: "#060a0f",
          900: "#030507",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
