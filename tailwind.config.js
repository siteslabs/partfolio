module.exports = {
  mode: "jit",
  // purge: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx}",
  // ],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/images/header-background.jpg')",
      }),
      colors: {
        project: "#0F1625",
      },
    },
    boxShadow: {
      lg_white:
        "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
