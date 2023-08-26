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
        lighter_color: "#25252c",
        blue_color: "#2743F5",
        white_color: "#FFFFFF",
        semi_white_color: "#D9D9D9",
        footer_background_color: "#1B1A1A",
      },
      boxShadow: {
        navbar: "0px 4px 14px 2px rgba(14, 14, 14, 0.5)",
        project: "0px 0px 14px 0px #272727",
      },
    },
  },
  plugins: [],
};
