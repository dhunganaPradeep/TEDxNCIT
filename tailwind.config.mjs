/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#FFFF",
        100: "#EB0028",
        400: "#EB0028",
        500: "#EB0028",
      }, // Accent colors, used mainly for star color, heading and buttons
      red: {
        100: "#FFE5E9", 
        200: "#FFB3BA",
        300: "#EB0028",
        400: "#EB0028",
        500: "#fc283c",
        600: "#EB0028",
      }, // Primary colors, used mainly for links, buttons and svg icons
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      animation: {
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
      },
      keyframes: {
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
