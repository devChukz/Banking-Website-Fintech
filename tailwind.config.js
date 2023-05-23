/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        "payMe-green": "#035d37",
        "payMe-lightGreen": "#a7c4c2"
      },
    },
  },
  plugins: [],
}

