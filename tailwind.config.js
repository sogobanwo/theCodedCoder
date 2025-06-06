/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        'background-light': '#0e1124',
        primary: '#151030',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        accent: '#915EFF',
        'accent-blue': '#00BFFF',
        'accent-green': '#00ff95',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        'radial-gradient': 'radial-gradient(circle, rgba(145, 94, 255, 0.15) 0%, rgba(5, 8, 22, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};