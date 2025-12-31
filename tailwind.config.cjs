/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        //sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        // sans: ["Darker Grotesque", ...defaultTheme.fontFamily.sans],
        sans: ["Segoe UI", ...defaultTheme.fontFamily.sans],
        playfair: ["playfair Display", ...defaultTheme.fontFamily.serif],
        noto: ["Noto Serif", ...defaultTheme.fontFamily.serif],
        jetbrains: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        plex: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bg: "#161617",
        fg: "#c9c7cd",
        bgDark: "#131314",
        black: "#27272a",

        subtext1: "#b4b1ba",
        subtext2: "#9f9ca6",
        subtext3: "#8b8693",
        subtext4: "#6c6874",

        red: "#c45570",
        green: "#90b99f",
        yellow: "#bc9781",
        purple: "#8787bf",
        magenta: "#b882a5",
        orange: "#c88477",
        blue: "#6a8cbc",
        cyan: "#85b5ba",

        brightBlack: "#353539",
        brightRed: "#d17286",
        brightGreen: "#9dc6ac",
        brightYellow: "#ebc4ad",
        brightPurple: "#b9aeda",
        brightMagenta: "#e8aed3",
        brightOrange: "#f9b1a3",
        brightBlue: "#a6b6e9",
        brightCyan: "#99c9ce",

        // Xbox green palette
        xboxGreen: "#107c10",
        xboxGreenLight: "#4ec34e",
        xboxGreenDark: "#0e6b0e",
        xboxGreenBright: "#8dd68d",

        gray0: "#18181a",
        gray1: "#1b1b1c",
        gray2: "#2a2a2c",
        gray3: "#313134",
        gray4: "#3b3b3e",
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              'code::before': {
                content: 'none', // don’t generate the pseudo-element
              },
              'code::after': {
                content: 'none'
              },
              code: {
                backgroundColor: theme('colors.stone.300'),
                borderRadius: theme('borderRadius.DEFAULT'),
                paddingLeft: theme('spacing[1.5]'),
                paddingRight: theme('spacing[1.5]'),
                paddingTop: theme('spacing.1'),
                paddingBottom: theme('spacing.1'),
              },
            }
          }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
