/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Menyertakan semua file di dalam folder src dengan ekstensi js, jsx, ts, tsx
    './public/index.html',         // Jika menggunakan file HTML di dalam folder public
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
