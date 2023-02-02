module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/@yext/search-ui-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4f91",
      },
      fontFamily: {
        sans: ["Gotham SSm A", "Gotham SSm B", "sans-serif"],
      }
    },
  },
  plugins: [],
}
