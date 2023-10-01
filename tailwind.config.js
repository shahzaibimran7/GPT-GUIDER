/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Green-gradient":
          "linear-gradient(137deg, #00B6BD 5.28%, #ACFFAD 95.01%)",
        "Blue-gradient": "linear-gradient(to bottom right, #642cb6, #2cb49f)",
        "Green-gradient-2":
          "linear-gradient(148deg, #2CB49F -24.15%, #39F29B 84.3%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
