/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  },
  important: '#root',
  theme: {
    colors: {
      slate: {
        900: '#050506',
        800: '#121212',
        700: '#1C1C1C',
        600: '#2A2A2A',
        500: '#5A5A5A',
        400: '#898989',
        300: '#9CA3AF'
      },
      blue: {
        900: '#14192A',
        500: '#0137C1',
        100: '#60A5FA'
      },
      orange: '#EBB305',
      white: '#FFFFFF'
    },
    screens: {
      xs: '384px',
      'max-xs': { max: '384px' },
      sm: '640px',
      'max-sm': { max: '640px' },
      md: '768px',
      'max-md': { max: '768px' },
      lg: '1024px',
      'max-lg': { max: '1024px' },
      xl: '1280px',
      'max-xl': { max: '1280px' },
      '2xl': '1536px',
      'max-2xl': { max: '1536px' }
    },
    extend: {}
  },
  plugins: []
}
