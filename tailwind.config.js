/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#b9e7ff',
          300: '#89d9ff',
          400: '#4ac5ff',
          500: '#16a3e6',
          600: '#0980be',
          700: '#0c6899',
          800: '#11567d',
          900: '#134868',
          950: '#0b2e44'
        }
      }
    }
  },
  plugins: []
};
