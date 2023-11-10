import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        WhiteSmoke: '#F5F5F5',
        BabyBlue: '#E4F6F9',
        MidnightBlue: '#050142',
        RoyalPurple: '#3A21D4',
        LemonYellow: '#FCFF56',
        LightSkyBlue: '#75EEFF',
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px', max: '1535px' },
        xxl: { min: '1536px' },
      },
      animation: {
        movingLine: 'movingLine 8s linear infinite',
        movingLineDelay1: 'movingLine 9s linear infinite',
        movingLineDelay2: 'movingLine 10s linear infinite',
        movingLineDelay3: 'movingLine 7s linear infinite',
      },
      keyframes: {
        movingLine: {
          '0%': {
            '-moz-transform': 'translateX(-100%)',
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)',
          },
          '100%': {
            '-moz-transform': 'translateX(100%)',
            '-webkit-transform': 'translateX(100%)',
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
