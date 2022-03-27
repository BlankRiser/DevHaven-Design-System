const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, e, theme, variants }) {
  const customButton = theme("custom", {});
  const buttons = {
    ".btn": {
      padding: ".5rem 1rem !important",
      borderRadius: ".25rem !important",
      fontWeight: "600 !important",
      color: `${theme("colors.gray.10")} !important`,
    },
  };

  addComponents(buttons);
});
