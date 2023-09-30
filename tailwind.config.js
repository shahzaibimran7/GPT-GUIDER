/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Green-gradient":
          "linear-gradient(137deg, #00B6BD 5.28%, #ACFFAD 95.01%)",
        "Blue-gradient": "linear-gradient(to bottom right, #642cb6, #2cb49f)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
