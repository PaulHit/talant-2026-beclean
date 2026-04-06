/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d5dfe9',
          500: '#3a5f8a',
          700: '#1a3a5c',
          900: '#0B1E35',
          950: '#071224',
        },
        gold: {
          300: '#f0d080',
          400: '#e2b84a',
          500: '#C9A44C',
          600: '#a8832e',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        body: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [],
};
