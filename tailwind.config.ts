/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        dark_color: "#030303",
        lighter_color: "#101010",
        blue_color: "#00FFF0",
        white_color: "#FFFFFF",
        semi_white_color: "#D9D9D9",
      },
      boxShadow: {
        navbar: "0px 4px 14px 2px rgba(14, 14, 14, 0.5)",
      },
    },
  },
  plugins: [],
};
