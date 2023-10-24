const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "navy": "#1F3576",
        "red": "#EB2629",
        "gray": "#222222",
        "gray2": "#6C6C6C"
      },
      textShadow: {
        sm: '0 1px 6px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      }
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
      Inter: ["Inter, sans-serif"]
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ]
}