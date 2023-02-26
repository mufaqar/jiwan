/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        AdobCaslonRegular: ['Adobe-Caslon-Pro-Regular', 'sans-serif'],
        ITCGaramondLightCondensed: ['ITCGaramondLightCondensed', 'sans-serif'],
        ITCGaramondLightCondensedItalic: [
          'ITCGaramondLightCondensedItalic',
          'sans-serif',
        ],
      },
      boxShadow: {
        '3xl': '0 0 49px 0 rgb(0 0 0 / 16.1%)',
      },
    },
  },
  plugins: [],
};
