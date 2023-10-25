/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Vazir",
        display: "Vazir",
      },
      colors: {
        palette: {
          lighter: "#F5F3FF",
          light: "#DDD6FE",
          primary: "#5B21B6",
          dark: "#4C1D95",
        },
      },
    },
  },
  plugins: [],
};
