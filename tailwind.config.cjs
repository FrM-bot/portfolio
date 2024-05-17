/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        tertiary: 'hsl(var(--tertiary))',
        'primary-white': 'hsl(var(--primary-white))',
        'primary-dark': 'hsl(var(--primary-dark))',
        'secondary-dark': 'hsl(var(--secondary-dark))',
      },
    },
  },
  plugins: []
}
