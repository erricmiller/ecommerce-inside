import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        xs:'12px',
        sm: '14px',
        base: '16px',
        base2: '16px',
        p: '16px',
        h1: '42px',
        h2: '36px',
        h3: '30px',
        h4: '24px',
        h5: '18px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        darkblue: '#201949',
        caribbeangreen: '#00E2A1',
      },
      boxShadow:{
        'leafShadow': '0 6px 13px 0 rgb(0 0 0 / 10%)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-10px)'
          },
        },
        'grow-shrink': {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(0.7)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        },
        'circle-spin': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(45deg)'
          },
          '100%': {
            transform: 'rotate(0deg)'
          },
        },
        'circle-rotate': {
          '0%': {
            background: 'rotate(0deg)'
          },
          '50%': {
            background: 'rotate(45deg)'
          },
          '100%': {
            background: 'rotate(0deg)'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'grow-shrink': 'grow-shrink 1.8s infinite',
        'circle-spin': 'circle-spin 8s ease infinite',
        'circle-rotate': 'circle-rotate 8s ease infinite'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
} satisfies Config;
