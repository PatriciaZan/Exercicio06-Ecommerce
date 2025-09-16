/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        backgroundColor: "var(--backgroundColor)",
        textColor: "var(--textColor)",
        textColorNavBar: "var(--textColorNavBar)",
      },
    },
  },
  plugins: [],
};
