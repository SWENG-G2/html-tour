/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [{ pattern: /^grid/ }],
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
          150: "#F5F5F5",
          200: "#E3E3E3",
          300: "#D9D9D9",
          400: "#C5C5C5",
          500: "#934948",
          600: "#E89266",
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
