module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D0BF91',
        // primary: '#E37302',
        // primary: '#ffbf00',
        // secondary: '#C18700',
        // secondary: '#0040FF',
        grayish: "#DFE0DF ",
        backg: "#4C4637",
        // backg: "#0F4C5C",
        // backg: "#08262e",
        secondary: "#135F72",
        // dark: "#0c1a32",
        // dark: "#BBA89C",
        // dark: "#9EB0A2",
        // primaryDark: '#2167B4',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/line-clamp"), 
    require("daisyui"),
    require("prettier-plugin-tailwindcss")
  ],
};
