import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        flame: {
          DEFAULT: "#FE5101",
          50: "#fff5f0",
          100: "#ffe8dc",
          200: "#ffd0b8",
          300: "#ffb08c",
          400: "#fe8452",
          500: "#fe5101",
          600: "#ea4000",
          700: "#c33000",
          800: "#9b2605",
          900: "#7c220a",
        },
        jet: {
          DEFAULT: "#000000",
          surface: "#080808",
          card: "#0d0d0d",
          border: "rgba(255, 255, 255, 0.08)",
        },
        "soft-white": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
