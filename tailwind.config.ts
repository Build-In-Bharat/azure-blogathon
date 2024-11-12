import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        'segoe': ['"Segoe UI"', 'sans-serif'], // Adds "Segoe UI" font
      },
      backgroundImage:{
        'faqbg':"url('../public/FAQ/faqBg.png')"
      }
    },
  },
  plugins: [],
} satisfies Config;
