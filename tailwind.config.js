module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Inter", "sans-serif"],
      display: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
