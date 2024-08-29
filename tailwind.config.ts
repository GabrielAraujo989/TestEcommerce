import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#84A9FF',
          400: '#6690FF',
          500: '#3366FF',
          600: '#254EDB',
          700: '#1939B7',
          800: '#102693',
          900: '#091A7A',
        },
        success: {
          100: '#F5FDCE',
          200: '#EAFB9D',
          300: '#D7F46B',
          400: '#C3EA46',
          500: '#A6DD0F',
          600: '#89BE0A',
          700: '#6E9F07',
          800: '#558004',
          900: '#436A02',
        },
        info: {
          100: '#CEFEFA',
          200: '#9EFEFC',
          300: '#6EF6FE',
          400: '#4AE6FD',
          500: '#0FCCFC',
          600: '#0A9FD8',
          700: '#0778B5',
          800: '#045692',
          900: '#023E78',
        },
        warning: {
          100: '#FFF6D9',
          200: '#FFEBB3',
          300: '#FFDD8D',
          400: '#FFCF71',
          500: '#FFB942',
          600: '#DB9530',
          700: '#B77421',
          800: '#935615',
          900: '#7A410C',
        },
        danger: {
          100: '#FFE7D6',
          200: '#FFC8AE',
          300: '#FFA385',
          400: '#FF8067',
          500: '#FF4635',
          600: '#DB2726',
          700: '#B71A27',
          800: '#931026',
          900: '#7A0A25',
        },
      },
    },
  },
  plugins: [],
};
export default config;
