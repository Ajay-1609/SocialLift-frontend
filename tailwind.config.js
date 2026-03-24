/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#facc15", // your yellow
        dark: "#0f0f0f",
      },
    },
  },
  plugins: [],
};