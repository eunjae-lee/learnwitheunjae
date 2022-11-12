const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans KR Distilled",
          "Noto Sans KR Distilled fallback",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  daisyui: {
    themes: [
      {
        learnwitheunjae: {
          primary: "#de4500",
          secondary: "#202d85",
          accent: "#a6e6db",
          neutral: "#061412",
          "base-100": "#fbf4ef",
          info: "#a6e6db",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#DE0000",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
