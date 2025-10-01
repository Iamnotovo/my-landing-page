/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatBig: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.9 },
          '50%': { transform: 'scale(1.04)', opacity: 1 },
        },
        pulsePop: {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.06)', filter: 'brightness(1.08)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInScale: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        floatBig: 'floatBig 7s ease-in-out infinite',
        floatSlow: 'float 12s ease-in-out infinite',
        pulseSoft: 'pulseSoft 10s ease-in-out infinite',
        pulsePop: 'pulsePop 9s ease-in-out infinite',
        rotateSlow: 'rotateSlow 60s linear infinite',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeInScale: 'fadeInScale 0.6s ease-out forwards',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}