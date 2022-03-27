const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addComponents }) {
      const className = options.className ?? "markdown";

      addComponents({
        [`.${className}`]: {
          // ...
        },
      });
    };
  },
  function (options) {
    return {
      theme: {
        markdown: {},
      },
    };
  }
);
