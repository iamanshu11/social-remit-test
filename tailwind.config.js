/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',

  ],
  theme: {
    extend: {
      spacing: {
        '120': '120px', // Add custom padding-top 120px
      },
      colors: {
        'primary': '#00A1CC',
        'secondary': '#0F8482',
      },
      backgroundImage: {
        'custom-image': "url('/images/hero-bg.png')",
      },
      boxShadow: {
        'left-right-gray': '-4px 0 10px rgba(128, 128, 128, 0.3), 4px 0 10px rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [],
}

