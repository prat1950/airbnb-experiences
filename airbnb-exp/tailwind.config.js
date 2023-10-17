/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      },
      screens: {
        'xs': '300px',  // Custom extra-small screen size (and up)
        'sm': '640px',  // Default small screen size (and up)
        'md': '768px',  // Default medium screen size (and up)
        'lg': '950px',  // Custom large screen size (and up)
        'xl': '1280px', // Default extra-large screen size (and up)
      },
    },
  },
  plugins: [],
}

