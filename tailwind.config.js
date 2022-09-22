const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [forms, lineClamp],
};
