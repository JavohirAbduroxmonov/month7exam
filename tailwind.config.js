/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        readex: ["Readex Pro", "sans - serif"],
        hummisher: ["Hammersmith One", "sans-serif"],
      },
      colors: {
        navColor: "#0D2613",
        sliceColor: "#14FF00",
        navBorderColor: "#E9E7E7",
        filtered: "#0BA42D",
        filtredBack: "#D5F8CF",
        buttonColor: "#0BA42D",
        filterBorder: "#454444CC",
        prDetaiCol: "#190D26",
        spec: "#0D2612",
        bgBorder: "#F5F5F5",
        homeBtn: "#21D511",
      },
    },
  },
  plugins: [],
};
