const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        3: "0.75rem", //12px
        5: "1.125rem", //18px
        6: "1.25rem", //20px
        7: "1.5rem", //24px
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        deepBlue: "#000616",
        darkGray: "#1A2030",
        dark: {
          light: "#1A2030",
          DEFAULT: "#0E1322",
          dark: "#0E1322",
        },
        green: {
          light: "#35C31E",
          DEFAULT: "#35C31E",
          dark: "#039D09",
        },
        grey: "#404350",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
