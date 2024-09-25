import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        blur: "rgb(var(--blur))",
        accent1: "rgb(var(--accent1))",
        accent2: "rgb(var(--accent2))",
      },
      height: {
        hero: "calc(100vh - 80px)"
      },
      gridTemplateRows: {
        about: "repeat(auto-fil"
      },
    },
  },
  plugins: [],
};
export default config;
