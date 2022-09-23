const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      md: "920px",
      lg: "1410px",
    },
    extend: {},
  },
  plugins: [forms, lineClamp],
};
