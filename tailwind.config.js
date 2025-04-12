/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scans all JSX/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      // No need to add custom spacing values as px-5 is already included in Tailwind v3
    },
  },
  plugins: [],
};