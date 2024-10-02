/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0078CE',
        secondary: '#88CCFC',
        background: '#EDEFF0',
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        control: '#f7aaaa',
        white: '#fff',
        black: '#000',
        gray: '#C4C4C4',
        lightGray: '#f8f9fa',
        darkGray: '#343a40',
        overlay: 'rgba(0, 0, 0, 0.4)',
      },
      borderWidth: {
        '4': '4px',
      },
      borderColor: {
        'active': '#1E40AF',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transparent-scrollbar::-webkit-scrollbar': {
          width: '4px',
        },
        '.transparent-scrollbar::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.transparent-scrollbar::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '4px',
        },
        '.transparent-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(0, 0, 0, 0.3)',
        },
        '.transparent-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.transparent-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    },
  ],
}