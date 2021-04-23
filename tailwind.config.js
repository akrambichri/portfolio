module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      colors: {
        // Configure your color palette here
        brand: {
          light: "#78128a",
          DEFAULT: "#78128a",
          dark: "#78128a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
