import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-black": "#111111",
        "forest-green": "#1A3E2F",
        "forest-green-light": "#254F3C",
        gold: "#C9A227",
        "gold-light": "#E8C766",
        walnut: "#7A4B32",
        ivory: "#F3EDE3",
        "near-black": "#161512",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top, rgba(201,162,39,0.12), transparent 60%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,162,39,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
