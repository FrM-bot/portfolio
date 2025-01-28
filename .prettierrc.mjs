/** @type {import("prettier").Config} */
import 'prettier-plugin-tailwindcss'

export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
}
