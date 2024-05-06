import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fill, minmax(450px, 1fr))",
      },
    },
    colors: {
      blue: "#199BD7",
      skyBlue: "#32bcff",
      cream: "#F0F0F0",
      white: "#FFFFFF",
      grey: "#444444",
      red: "#FF4D4D",
      hot: "#FF0000",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
