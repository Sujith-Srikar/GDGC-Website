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
          500: "#EA4335",
          600: "#E94335",
        },
        yellow: {
          500: "#FBBC04",
          600: "F9AB00",
        },
        green: {
          500: "#34A853",
          600: "#0F9D58",
        },
        blue: {
          500: "#4285F4",
        },
      },
      fontFamily: {
        google_sans_display: "Google Sans Display",
      },
    },
  },
  plugins: [],
};
