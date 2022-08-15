/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'krona' : ['"Krona One", sans-serif'],
        'poppins': ['Poppins, sans-serif'],
        'dynapuff': ['DynaPuff, cursive'],
      },
    },
    colors: {
      'transparent': "transparent",
      'current': "currentColor",
      'themeOrange': '#FFB200',
      'themeYellow': '#FFD880',
      'themeCian': '#B0D6EB',
      'themeMainBrown': '#6E382E',
      'themeDarkBrown': '#21110E',
      'themeLight': '#FAFAFA',
    }
  },
  plugins: [],
}
