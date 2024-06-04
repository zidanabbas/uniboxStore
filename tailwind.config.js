/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundColor: {
        Background: "#f2f7f5",
        Paragraph: "#475d5b", //grey
        Primary: "#00473e", //green
        Secondary: "#ffa8ba", //pink
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
