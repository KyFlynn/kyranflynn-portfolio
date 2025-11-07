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
    extend: {
      colors: {
        neutral: {
          850: '#1b1b1b', // between 800 and 900 for soft contrast
        },
      },
    },
  },
  plugins: [],
};