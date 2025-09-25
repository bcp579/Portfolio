/** @type {import('tailwindcss').Config} */
export default {
  // Make sure this line exists and is set to 'class'
  darkMode: 'class', 
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}