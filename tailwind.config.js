/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
      'aliceblue': '#F0F8FF',
      'merahgelap': '#7E0404'
    },
    fontSize: {
      '12': '12px',   // Contoh ukuran font 12px
      '16': '16px',   // Contoh ukuran font 16px
      // Tambahkan ukuran font lain jika diperlukan
    },
  },
  },
  plugins: [],
}

