const plugin = require("tailwindcss/plugin");

const colorTokens = {
  "surface-dim": "",
  "surface-bright": "",
  "surface-container-lowest": "",
  "surface-container-low": "",
  "surface-container": "",
  "surface-container-high": "",
  "surface-container-highest": "",
  primary: "",
  "on-primary": "",
  "primary-container": "",
  "on-primary-container": "",
  error: "",
  "on-error": "",
  "error-container": "",
  "on-error-container": "",
  secondary: "",
  "on-secondary": "",
  "secondary-container": "",
  "on-secondary-container": "",
  surface: "",
  "on-surface": "",
  "surface-variant": "",
  "on-surface-variant": "",
  tertiary: "",
  "on-tertiary": "",
  "tertiary-container": "",
  "on-tertiary-container": "",
  background: "",
  "on-background": "",
  outline: "",
  shadow: "",
  "inverse-on-surface": "",
  "inverse-primary": "",
  "inverse-surface": "",
};

const themeColors = () => {
  Object.keys(colorTokens).forEach((tokenKey) => {
    colorTokens[tokenKey] = `var(--md-sys-color-${tokenKey})`;
  });
  return colorTokens;
};

const unit = (/** @type {number} */ size) => {
  return `${size / 16}rem`;
};

const typography = plugin(({ addComponents, theme }) => {
  addComponents({
    "text-stroke-3": {
      webkitTextStroke: "3px var(--md-sys-color-primary)",
    },
    ".font-Lobster": {
      fontFamily: "Lobster,sans-serif",
    },
    ".font-Roboto": {
      fontFamily: "Roboto,sans-serif",
    },
    ".font-SmileySans": {
      fontFamily: "SmileySans,sans-serif",
    },
    ".display-xxl": {
      lineHeight: unit(112),
      fontSize: unit(112),
      fontWeight: 400,
    },
    ".display-xl": {
      lineHeight: unit(96),
      fontSize: unit(88),
      fontWeight: 400,
    },
    ".display-large": {
      lineHeight: unit(64),
      fontSize: unit(57),
      fontWeight: 400,
    },
    ".display-medium": {
      lineHeight: unit(52),
      fontSize: unit(45),
      fontWeight: 400,
    },
    ".display-small": {
      lineHeight: unit(44),
      fontSize: unit(36),
      fontWeight: 400,
    },
    ".headline-large": {
      lineHeight: unit(40),
      fontSize: unit(32),
      fontWeight: 400,
    },
    ".headline-medium": {
      lineHeight: unit(36),
      fontSize: unit(28),
      fontWeight: 400,
    },
    ".headline-small": {
      lineHeight: unit(32),
      fontSize: unit(24),
      fontWeight: 400,
    },
    ".title-large": {
      lineHeight: unit(28),
      fontSize: unit(22),
      fontWeight: 400,
    },
    ".title-medium": {
      lineHeight: unit(24),
      fontSize: unit(16),
      fontWeight: 500,

      letterSpacing: unit(0.15),
    },
    ".title-small": {
      lineHeight: unit(20),
      fontSize: unit(14),
      fontWeight: 500,

      letterSpacing: unit(0.1),
    },
    ".label-large": {
      lineHeight: unit(20),
      fontSize: unit(14),
      fontWeight: 400,

      letterSpacing: unit(0.1),
    },
    ".label-medium": {
      lineHeight: unit(16),
      fontSize: unit(12),
      fontWeight: 500,

      letterSpacing: unit(0.5),
    },
    ".label-small": {
      lineHeight: unit(6),
      fontSize: unit(11),
      fontWeight: 500,

      letterSpacing: unit(0.5),
    },
    ".body-large": {
      lineHeight: unit(24),
      fontSize: unit(16),
      fontWeight: 500,

      letterSpacing: unit(0.15),
    },
    ".body-medium": {
      lineHeight: unit(20),
      fontSize: unit(14),
      fontWeight: 500,

      letterSpacing: unit(0.25),
    },
    ".body-small": {
      lineHeight: unit(16),
      fontSize: unit(12),
      fontWeight: 500,

      letterSpacing: unit(0.4),
    },
  });
});

module.exports = {
  colorTokens,
  themeColors,
  unit,
  typography,
};
