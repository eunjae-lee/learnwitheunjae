/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        lwe: {
          primary: "#de4500",
          secondary: "#202d85",
          accent: "#a6e6db",
          neutral: "#061412",
          "base-100": "#fbf4ef",
          info: "#a6e6db",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
