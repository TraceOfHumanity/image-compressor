/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "var(--mainBg)",
        mainText: "var(--mainText)",
        bodyBgFrom: "var(--bodyBgFrom)",
        bodyBgTo: "var(--bodyBgTo)",
      },
      fontFamily: {
        eduBeginner: ["Edu SA Beginner", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
