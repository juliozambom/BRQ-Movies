/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'background': '#16171B',
        'foreground': '#A9A9A9',
        'primary': '#EC8B00',
        'secondary': '#FFFFFF',
        'tertiary': '#2E2F33'
      }
    },
  },
}