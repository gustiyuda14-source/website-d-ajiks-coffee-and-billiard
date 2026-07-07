import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-black": "#111111",
        "forest-deep": "#0B0B0A",
        "forest-green": "#1A3E2F",
        "forest-green-light": "#254F3C",
        gold: "#C9A227",
        "gold-light": "#E8C766",
        "gold-deep": "#8F6F14",
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
        "gold-sheen":
          "linear-gradient(135deg, #E8C766 0%, #C9A227 45%, #8F6F14 100%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,162,39,0.35)",
        "gold-glow": "0 8px 32px -8px rgba(201,162,39,0.45)",
        card: "0 24px 48px -24px rgba(0,0,0,0.8)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.08) translateY(0)" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-hint": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "45%": { transform: "scaleY(1)", transformOrigin: "top" },
          "55%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.45" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out both",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        "scroll-hint": "scroll-hint 2.2s cubic-bezier(0.65,0,0.35,1) infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
