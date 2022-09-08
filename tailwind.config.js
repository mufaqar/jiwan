/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ITCGaramondStdBold: ['ITCGaramondStd-Bd', 'sans-serif'],
        ITCGaramondStdLight: ['ITCGaramondStd-Lt', 'sans-serif'],
        AdobCaslonRegular: ['Adobe-Caslon-Pro-Regular', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 0 49px 0 rgb(0 0 0 / 16.1%)',
      },
    },
  },
  plugins: [],
}
