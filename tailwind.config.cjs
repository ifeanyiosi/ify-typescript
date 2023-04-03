/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "button-primary": "#0c1825",
        success: {
          1: "#00EE8A",
          2: "#EBFFF6",
        },
        warning: {
          1: "#FFF7EB",
          2: "#FA710F",
        },
        error: {
          1: "#EE0000",
          2: "#FFF5F5",
        },
      },

      fontFamily: {
        Syne: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      content: {
        logotext: "IFEANYIOSI",
      },
    },
  },
  plugins: [],
};
