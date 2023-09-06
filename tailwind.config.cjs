const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'rgba(var(--primary) / <alpha-value>)',
        secondary: 'rgba(var(--secondary) / <alpha-value>)',
        tertiary: 'rgba(var(--tertiary) / <alpha-value>)',
        'text-color': 'rgba(var(--text-color) / <alpha-value>)',
        'dark-v1': 'rgba(var(--dark-v1) / <alpha-value>)',
        'dark-v2': 'rgba(var(--dark-v2) / <alpha-value>)'
      },
    },
  },
  plugins: []
};
