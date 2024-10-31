/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        hanken: ["Hanken Grotesk Variable", ...defaultTheme.fontFamily.sans],
        playfair: ["playfair Display", ...defaultTheme.fontFamily.serif],
        noto: ["Noto Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
