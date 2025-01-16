/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      primary: '#6b46c1', // Customize primary color
      dark: '#0d1117', // Dark background
      accent: '#9333ea', // Accent for buttons and links
    },},
  },
  plugins: [],
}

