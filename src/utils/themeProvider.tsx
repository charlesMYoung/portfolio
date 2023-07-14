"use client";
import {
  type Theme,
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from "@material/material-color-utilities";
import { type ColorTokenType } from "./materialYouColorToken";
import { useEffect } from "react";

type ThemeType = {
  color?: string;
};

const getTokenColorFromScheme = (
  colorScheme: Record<string, number>
): Record<ColorTokenType, string> => {
  const tokenColorsMap: Record<string, string> = {};
  for (const [key, value] of Object.entries(colorScheme)) {
    const color = hexFromArgb(value);
    tokenColorsMap[key] = color;
  }
  return tokenColorsMap;
};

const setSchemeProperties = (
  target: HTMLElement,
  colorScheme: Record<string, number>,
  suffix = ""
) => {
  for (const [key, value] of Object.entries(colorScheme)) {
    const token = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    const color = hexFromArgb(value);
    target.style.setProperty(`--md-sys-color-${token}${suffix}`, color);
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const theme = themeFromSourceColor(argbFromHex("#06a7f8"));
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(theme, {
      target: document.body,
      dark: isDark,
    });
  }, []);
  return <>{children}</>;
};
