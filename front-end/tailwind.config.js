/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Formula1", "Display-Bold"],
        wideFont: ["Formula1", "Display-Wide"],
        regularFont: ["Formula1", "Display-Regular"],
      },
    },
  },
  plugins: [],
};
