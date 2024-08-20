/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,ts,html,js}"],
  theme: {
    extend: {
      colors: {
        'lime': "hsl(61, 70%, 52%)",
        'lime-light': "hsla(61, 70%, 52%, 0.5)",
        'red': "hsl(4, 69%, 50%)",
        'slate100': "hsl(202, 86%, 94%)",
        'slate300': "hsl(203, 41%, 72%)",
        'slate500': "hsl(200, 26%, 54%)",
        'slate700': "hsl(200, 24%, 40%)",
        'slate900': "hsl(202, 55%, 16%)",
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

