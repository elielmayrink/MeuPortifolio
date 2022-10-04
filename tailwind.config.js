const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "skewY(-360deg)" },
        "0%": { transform: "skewY(30deg)" },
      },
    },
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
    screens: {
      md: "920px",
      lg: "1410px",
    },
    extend: {},
  },
  plugins: [forms, lineClamp],
};
