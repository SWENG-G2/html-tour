/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./public/*.js"],
  safelist: [{ pattern: /^grid/ }],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster"', "sans-serif"],
        righteous: ['"Righteous"', "segoe-ui"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      colors: {
        palette: {
          100: "#FFF",
          150: "#F5F5F5",
          200: "#F0F0F0",
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
