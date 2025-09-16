/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        small: "768px",
        normal: "1024px",
        medium: "1025px",
      },
    },
  },
  plugins: [],
};
