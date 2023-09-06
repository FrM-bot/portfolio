module.exports = {
  plugins: [
    require.resolve("prettier-plugin-tailwindcss", "prettier-plugin-astro"),
  ],
  tailwindConfig: "./tailwind.config.js",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  useTabs: false,
  singleQuote: true,
  tabWidth: 2
};
