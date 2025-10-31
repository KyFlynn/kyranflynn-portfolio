/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.njk",
    "./**/*.md",
    "./_includes/**/*.{njk,html}",
    "./projects/**/*.md"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};