/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#231F20",
        customRed: "#bb4430",
        customTeal: "#7ebdc2",
        customYellow: "#F3DFA2",
        customCream: "#EFE6DD",
      },
      fontFamily: {
        title: ["ADLaM Display", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-animatecss")],
};
