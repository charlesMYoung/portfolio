const { themeColors, unit, typography } = require("./tailwind.theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...themeColors(),
      },
      boxShadow: {
        el1: `0px ${unit(1)} ${unit(1)} 0px rgba(0,0,0,0.05)`,
        el2: `0px ${unit(3)} ${unit(3)} 0px rgba(0,0,0,0.05)`,
        el3: `0px ${unit(6)} ${unit(6)} 0px rgba(0,0,0,0.05)`,
        el4: `0px ${unit(8)} ${unit(8)}  0px rgba(0,0,0,0.05)`,
        el5: `0px ${unit(12)} ${unit(12)}  0px rgba(0,0,0,0.05)`,
      },
    },
  },
  plugins: [typography],
};
