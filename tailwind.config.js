/// ** @type {import('tailwindcss').Config} **/

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGrayishViolet: 'hsl(270, 3%, 87%)',
        darkGrayishViolet: 'hsl(279, 6%, 55%)',
        veryDarkViolet:   'hsl(278, 68%, 11%)'
      }
    },
  },
  plugins: [],
}

