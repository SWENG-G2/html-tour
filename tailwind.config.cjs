/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        palette: {
          100: "#F5F5F5",
          200: "#CED5EC",
          300: "#93DEFF",
          400: "#4591B2",
          500: "#606470",
          600: "#323643",
        },
      },
      fontFamily: {
        kameron: "Kameron, sans-serif",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  safelist: [
    {
      pattern: /(col|row)-span-[1-9]|1[0-1]]/,
      variants: ["lg"],
    },
  ],
  plugins: [],
};
