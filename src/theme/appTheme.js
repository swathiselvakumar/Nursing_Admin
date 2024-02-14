import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  background: {
    primary: "#1b3154",
    secondary: "#89b3f7",
    tertiary: "#46618e",
    whitePrimary: "#ffffff",
    whiteSecondary: "#fafcff",
    whiteTertiary: "#f5f9ff",
    lightgreen: "#31f09d",
    lightblue: "#E9F2FD",
    lightwhite: "#EBF2FD",
    transparent: "transparent",
    green: "#33C656",
    yellow: "#FFDD00",
    red: "#DF1D1D",
  },
  font: {
    greyPrimary: "#666",
    greySecondary: "#707070",
    greyTertiary: "#8F9AAD",
    primary: "#1b3154",
    tertiary: "#46618e",
    white: "#fff",
    whiteSecondary: "#fafcff",
    black: "#000",
    blackSecondary: "#222",
    lightBlue: "#4e67f1",
    lightViolet: "#4b5f83",
    darkBlue: "#536DFE",
    lightgreen: "#31f09d",
    lightGrey: "#bebcbc",
    green: "#219704",
  },
  icon: {
    primary: "#1b3154",
    secondary: "#8a8a8a",
    tertiary: "#46618e",
    white: "#fff",
    black: "#000",
  },
  border: {
    primary: "#777",
    secondary: "#d6d6d6",
    green: "#33C656",
    blue:"#46618e"
  },
  textbox: {
    primary: "#E2E4E6",
    greyPrimary: `rgba(226, 228, 230, 0.3)`,
  },
  typography: {
    fontFamily: ["Open Sans Variable", "sans-serif"].join(","),
  },
  table: {
    primary: "RGBA(255,255,255,0.95 )",
    hover: "#bbdefb",
  },
  activeButton: {
    backgroundColor: "#1b3154",
    color: "#fff",
  },
  inactiveButton: {
    backgroundColor: "#fff",
    color: "#1b3154",
  },
});
