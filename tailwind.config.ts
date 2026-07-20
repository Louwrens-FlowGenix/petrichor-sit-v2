import type { Config } from "tailwindcss";

/**
 * Petrichor design tokens — "rain on stone"
 * Base is cool wet-stone (not cream), deep green carries the brand,
 * ochre is the single warm accent and is used sparingly.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#F4F4F1", // rain-washed paper (cool, not cream)
          100: "#EAEAE5",
          200: "#D8D9D2",
          300: "#B7B9B1",
          400: "#8A8F88", // wet-stone mist
          500: "#5C615B",
          600: "#40453F",
        },
        green: {
          700: "#28503A",
          800: "#1E3A2B", // primary deep green
          900: "#142A1F",
          950: "#0E1F16", // ink
        },
        ochre: {
          400: "#CE9459",
          500: "#B97E3C", // the one warm accent
          600: "#9A6630",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "72rem",
      },
      keyframes: {
        rainfall: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeup: {
          "0%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        rainfall: "rainfall 0.9s cubic-bezier(0.22,1,0.36,1) both",
        fadeup: "fadeup 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
