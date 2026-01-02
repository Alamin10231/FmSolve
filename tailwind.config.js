/** @type {import('tailwindcss').Config} */
export default {
  // Files Tailwind will scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      // Custom font
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Custom colors
      colors: {
        primary: "#1C64F2", // your main brand color
        secondary: "#EA580C", 
      },
    },
  },

  plugins: [],
    server: {
    port: 3001,
    host: true,
  }, // any plugins you want to add later
};
