
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
          DEFAULT: "#111A23", // Azul escuro do logo
          foreground: "var(--secondary-foreground)",
          50: "#e5e7e9",
          100: "#cccfd2",
          200: "#9a9fa6",
          300: "#676e79",
          400: "#353e4d",
          500: "#111A23",
          600: "#0e151c",
          700: "#0a1015",
          800: "#070a0e",
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
