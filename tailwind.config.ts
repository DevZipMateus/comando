
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
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1400px",
        "3xl": "1920px",
      },
    },
    extend: {
      screens: {
        'fullhd': '1920px',
        '4k': '2560px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
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
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '3.25rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
        '7xl': ['4.5rem', { lineHeight: '4.75rem' }],
        '8xl': ['6rem', { lineHeight: '6.25rem' }],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
