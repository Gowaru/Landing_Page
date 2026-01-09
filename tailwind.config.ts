import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          deep: "#0a192f",
          light: "#112240",
          lighter: "#233554",
        },
        cyan: {
          accent: "#64ffda",
          glow: "#00d9ff",
        },
        violet: {
          accent: "#8b5cf6",
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { "box-shadow": "0 0 5px rgba(100, 255, 218, 0.2)" },
          "100%": { "box-shadow": "0 0 20px rgba(100, 255, 218, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
