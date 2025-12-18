/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#675CFF",
        secondary: "#FF6F61",
        accent: "#4CAF50",
        info: "#2196F3",
        warning: "#FFC107",
        danger: "#F44336",
      },
    },
  },
  plugins: [],
};
