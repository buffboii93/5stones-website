/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#bfb48f",
        plum: "#564e58",
        berry: "#904e55",
        cream: "#f2efe9",
        charcoal: "#252627",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(37, 38, 39, 0.08)",
      },
    },
  },
  plugins: [],
};
