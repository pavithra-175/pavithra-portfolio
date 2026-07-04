import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#050505",
        surface: "#0E0E0E",
        border: "rgba(255,255,255,.08)",
        accent: {
          violet: "#7C3AED",
          sky: "#38BDF8",
        },
        muted: "#8A8A8E",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out infinite 1s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
