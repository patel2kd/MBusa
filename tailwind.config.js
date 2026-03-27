/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mbBlack: "#050608",
        mbDark: "#111216",
        mbGray: "#1c1d22",
        mbAccent: "#00A0FF"
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        subtle: "0 18px 45px rgba(0,0,0,0.45)"
      }
    },
  },
  plugins: [],
};


