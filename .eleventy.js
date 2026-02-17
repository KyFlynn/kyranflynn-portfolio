const { DateTime } = require("luxon");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
let mdLib;

module.exports = function (eleventyConfig) {
    // Capture Eleventy's Markdown instance
  eleventyConfig.amendLibrary("md", (md) => { mdLib = md; });

  // Allow YAML files in _data for structured content lists (e.g., NDA projects)
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // Load NDA homepage cards from projects/nda-projects.yaml
  eleventyConfig.addGlobalData("ndaProjects", () => {
    const ndaPath = path.join(__dirname, "projects", "nda-projects.yaml");
    if (!fs.existsSync(ndaPath)) {
      return [];
    }

    const data = yaml.load(fs.readFileSync(ndaPath, "utf8"));
    return Array.isArray(data) ? data : [];
  });

  // Define a shortcode that re-parses inner Markdown
  eleventyConfig.addPairedShortcode("card", (content) => {
    return `<div class="card">${mdLib.render(content)}</div>`;
  });

  // Add custom date filter
  eleventyConfig.addNunjucksFilter("date", (value, format = "yyyy") => {
    if (value === "now") {
      return DateTime.now().toFormat(format);
    }
    return DateTime.fromJSDate(value).toFormat(format);
  });

  // Ensure Tailwind output gets copied to the final site
  eleventyConfig.addPassthroughCopy("styles");

  // Create a collection for all project files
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("projects/*.md");
  });

  // Copy styles to output
  eleventyConfig.addPassthroughCopy("styles/output.css");

  // Copy images folder
  eleventyConfig.addPassthroughCopy("images");

  // Publish to correct domain
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
