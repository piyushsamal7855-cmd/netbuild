/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafeGold: "#C5A059", // Gold color from your image
        cafeBrown: "#2D1B14", // Dark brown/chocolate
        cafeDark: "#1A0F0A",  // Deep blackish brown
      },
    },
  },
  plugins: [],
}
