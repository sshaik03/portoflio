module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradientAnimation 15s ease infinite',
      },
      keyframes: {
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      colors: {
        'accent': '#00d8ff',
        'accent-dark': '#00a8c5',
      }
    },
  },
  plugins: [],
}