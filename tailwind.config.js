/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3d5a45",
          light: "#eef3ef",
          dark: "#2c4232",
        },
      },
    },
  },
  plugins: [],
};
