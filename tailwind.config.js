/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#0F172A',
        surface: '#1E293B',
        surface2: '#263347',
        accent: '#F59E0B',
      },
    },
  },
  plugins: [],
}
