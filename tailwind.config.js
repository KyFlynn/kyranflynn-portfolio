/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.njk",
    "./**/*.md",
    "./_includes/**/*.{njk,html}",
    "./projects/**/*.md"
  ],
  safelist: [
    'bullet-card',
    'card',
    'project-card',
    'education-grid',
    'experience-entry',
    'meta',
    'mt-6',
    'mt-8',
    'mt-10',
    'mt-12',
    'mb-6',
    'mb-8',
    'mb-10',
    'mb-12',
    'text-center',
    'text-blue-600',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          850: '#1b1b1b',
        },
      },
    },
  },
  plugins: [],
};
