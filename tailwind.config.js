/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        grey: {
          700: "#5F6368",
          100: "#F1F3F4",
        },
        red: {
          300: "#EE928A",
          500: "#EA4335",
          600: "#E94335",
        },
        yellow: {
          300: "#EED28A",
          500: "#FBBC04",
          600: "F9AB00",
        },
        green: {
          300: "#92E3A9",
          500: "#34A853",
          600: "#0F9D58",
        },
        blue: {
          300: "#8AA9EE",
          500: "#4285F4",
        },
      },
      fontFamily: {
        GSD_Bold: "GSD-Bold",
        GSD_Regular: "GSD-Regular",
      },
    },
  },
  plugins: [],
};
