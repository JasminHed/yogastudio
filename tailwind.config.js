/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a2024",
        muted: "#62707a",
        line: "#e1ebf1",
        accent: "#2f6d91",
        accentsoft: "#eaf4f9",
      },
    },
  },
  plugins: [],
};
