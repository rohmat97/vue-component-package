/** @type {import('tailwindcss').Config} */
const nuxtUiPreset = require('@nuxt/ui/tailwind.config').default;

module.exports = {
  presets: [nuxtUiPreset],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
