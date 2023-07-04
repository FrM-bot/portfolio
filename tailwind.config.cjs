/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
			  },
			colors: {
				'custom-dark': 'rgba(var(--custom-dark) / <alpha-value>)',
				'custom-dark-v2': 'rgba(var(--custom-dark-v2) / <alpha-value>)',
				'custom-white': 'rgba(var(--custom-white) / <alpha-value>)',
				primary: 'rgba(var(--primary) / <alpha-value>)',
				'text-color': 'rgba(var(--text-color) / <alpha-value>)',
				secondary: 'rgba(var(--secondary) / <alpha-value>)',
				tertiary: 'rgba(var(--tertiary) / <alpha-value>)'
			}
		},
	},
	darkMode: ['class', '[data-theme="dark"]']
}
