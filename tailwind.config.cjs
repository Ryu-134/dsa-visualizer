/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
        colors: {
            'charcoal': '#264653ff',
            'persian-green': '#2a9d8fff',
            'saffron': '#e9c46aff',
            'sandy-brown': '#f4a261ff',
            'burnt-sienna': '#e76f51ff',
        }
    },
  },
  plugins: [],
}

