/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Green-gradient":
          "linear-gradient(137deg, #00B6BD 5.28%, #ACFFAD 95.01%)",
      },
    },
  },
  plugins: [],
};
