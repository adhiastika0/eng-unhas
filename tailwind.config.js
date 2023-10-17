module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "navy": "#1F3576",
        "red": "#EB2629",
        "gray": "#222222"
      }
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
      Inter: ["Inter, sans-serif"]
    },
    screens: {
      width: "1280px"
    }
  },
  plugins: [],
}

