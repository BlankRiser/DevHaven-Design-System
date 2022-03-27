const plugin = require("tailwindcss/plugin");

const midasColors = {
  transparent: "transparent",
  current: "currentColor",
  white: "#ffffff",
  black: "#000000",
  gray: {
    "01": "#F4F4F4",
    "02": "#E0E0E0",
    "03": "#C6C6C6",
    "04": "#A8A8A8",
    "05": "#8D8D8D",
    "06": "#6F6F6F",
    "07": "#525252",
    "08": "#393939",
    "09": "#262626",
    10: "#161616",
  },
  red: {
    "01": "#FFF1F1",
    "02": "#FFD7D9",
    "03": "#FFB3B8",
    "04": "#FF8389",
    "05": "#FA4D56",
    "06": "#DA1E28",
    "07": "#A2191F",
    "08": "#750E13",
    "09": "#520408",
    10: "#2D0709",
  },
  blue: {
    "01": "#EDF5FF",
    "02": "#D0E2FF",
    "03": "#A6C8FF",
    "04": "#78A9FF",
    "05": "#4589FF",
    "06": "#0F62FE",
    "07": "#0043CE",
    "08": "#002D9C",
    "09": "#001D6C",
    10: "#001141",
  },
};

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./wrappers/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./members/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
      cursive: ["'Quicksand'"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
    },
    extend: {
      colors: midasColors,
      fontSize: {
        "6xl": [
          "4rem",
          {
            fontWeight: "500",
            lineHeight: "130%",
          },
        ],
        "5xl": {
          fontWeight: "400",
          lineHeight: "130%",
        },
        "4xl": [
          "2rem",
          {
            fontWeight: "400",
            lineHeight: "130%",
          },
        ],
        "2xl": {
          fontWeight: "400",
          lineHeight: "130%",
        },
        xl: {
          fontWeight: "500",
          lineHeight: "130%",
          letterSpacing: "0.01em",
        },
        "sub-01": [
          "1.125rem",
          {
            fontWeight: "400",
            lineHeight: "130%",
            letterSpacing: "0.008em",
          },
        ],
        "sub-02": [
          "1 rem",
          {
            fontWeight: "500",
            lineHeight: "130%",
            letterSpacing: "0.009em",
          },
        ],
        "sub-03": [
          "0.875rem",
          {
            fontWeight: "600",
            lineHeight: "130%",
          },
        ],
        "body-01": [
          "1.125rem",
          {
            fontWeight: "400",
            lineHeight: "130%",
          },
        ],
        "body-02": [
          "1 rem",
          {
            fontWeight: "400",
            lineHeight: "130%",
          },
        ],
        "body-03": [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "130%",
          },
        ],
        caption: [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "130%",
          },
        ],
        label: [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "140%",
          },
        ],
        helper: [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      addUtilities,
      addComponents,
      e,
      prefix,
      config,
    }) {
      addBase({
        h1: {
          fontSize: config("theme.fontSize.[4rem]"),
          fontWeight: config("theme.fontWeight.medium"),
          lineHeight: config("theme.lineHeight.tight"),
        },
      });
    }),
  ],
};
