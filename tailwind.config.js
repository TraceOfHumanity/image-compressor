/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "var(--mainBg)",
        mainText: "var(--mainText)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
