/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Mono"', "monospace"],
        franklin: ['"Libre Franklin"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        roboto: ["'Roboto Condensed'", "sans-serif"],
      },
      colors: {
        palette: {
          100: "#FFF",
          200: "#E3E3E3",
          300: "#D9D9D9",
          400: "#C5C5C5",
          500: "#DB6B5D",
          600: "#E47F07",
          700: "#383838",
        },
      },
      aspectRatio: {
        portrait: "9 / 16",
      },
    },
  },
  plugins: [],
};
