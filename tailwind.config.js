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

    },
  },
  plugins: [],
}
