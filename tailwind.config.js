const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./sections/**/*.{js,ts,jsx,tsx}" ,"./pages/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class", 
  theme: {
    extend: {},
    //  colors: {
    //     primary: colors.indigo,
    //     secondary: colors.pink,
    //     ternary: colors.purple,
    //     dark: {
    //       100: '#A6A7AB',
    //       200: '#909296',
    //       300: '#5C5F66',
    //       400: '#373A40',
    //       500: '#2C2E33',
    //       600: '#25262B',
    //       700: '#1A1B1E',
    //       800: '#141517',
    //       900: '#101113',
    //     },
    //   },
    
  },
  plugins: [],
};
