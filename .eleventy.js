const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add custom date filter
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    if (value === "now") {
      return DateTime.now().toFormat(format);
    }
    return DateTime.fromJSDate(value).toFormat(format);
  });

  // Create a collection for all project files
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("projects/*.md");
  });

  // Copy styles to output
  eleventyConfig.addPassthroughCopy("styles/output.css");

  // Copy images folder
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
