const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add custom date filter
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    if (value === "now") {
      return DateTime.now().toFormat(format);
    }
    return DateTime.fromJSDate(value).toFormat(format);
  });

  // Copy styles to output
  eleventyConfig.addPassthroughCopy("styles/output.css");

    // Collection: all Markdown files tagged "projects"
  eleventyConfig.addCollection("projects", (collection) => {
    return collection.getFilteredByTag("projects");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
