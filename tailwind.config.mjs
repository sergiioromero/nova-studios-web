/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        obsidian: '#0A0A0B',
        charcoal: '#111113',
        graphite: '#1A1A1E',
        gold: '#C8A96E',
        'gold-light': '#E2C98A',
        'gold-dim': '#8B6F3E',
        mist: '#E8E6E1',
        fog: '#9B9890',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};
