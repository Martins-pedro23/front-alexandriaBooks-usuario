/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#10403B",

        "primary-light-100": "#135750",
        "primary-light-200": "#0e4d46",
        "primary-dark-100": "#061c1a",
        "primary-dark-200": "#061413",
      },
    },
    fontFamily: {
      montserrat: ["'Montserrat'", "sans-serif"],
    },
  },
  plugins: [],
};
