/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // secondary: "#FF6600",
        // primary: "#FF4500",
        primary: "#022539",
        secondary: "#FB991C",
        primary_text: "#111111",
        background: "#FBF3F1",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
        inner_shadow: "inset 0 0 8px 1px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
