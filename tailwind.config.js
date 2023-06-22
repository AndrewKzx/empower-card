/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scbBlue': '#2B69F5',
        'scbBlue2': '#1965BF',
      },
    },
  },
  plugins: [],
}

