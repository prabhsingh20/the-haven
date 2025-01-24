/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F4F9",
          100: "#D9E2F1",
          200: "#A9B8D6",
          300: "#7A8FBF",
          400: "#4B5C97",
          500: "#2F3E71",
          600: "#243664",
          700: "#1A2C56",
          800: "#142039",
          900: "#0C1623",
          950: "#060E13",
        },
        accent: {
          50: "#FFF7E6",
          100: "#FFDF8E",
          200: "#FFD15C",
          300: "#FFBC2A",
          400: "#F8A600",
          500: "#E68A00",
          600: "#C87A00",
          700: "#A66A00",
          800: "#8C5900",
          900: "#734700",
          950: "#5A3A00",
        },
      },
    },
  },
  plugins: [],
};
