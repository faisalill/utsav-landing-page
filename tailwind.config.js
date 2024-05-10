/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        angel_raphsody: ['angel-raphsody'],
        voyage_bold: ['voyage-bold'],
        voyage_regular: ['voyage-regular'],
        kenyan_regular: ['kenyan-regular'],
        kenyan_bold: ['kenyan-bold'],
        pop: ['pop']
      },
    },
  },
  plugins: [],
}

