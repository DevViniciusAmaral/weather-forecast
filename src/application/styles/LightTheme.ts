import { sizes } from "./Sizes";
import { fonts } from "./Fonts";

export const lightTheme = {
  colors: {
    primary: {
      main: "#FAFBFD",
      dark: "#B8B9BB",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#6683FB",
      light: "#DDE4F8",
      dark: "#5470ED",
    },
    border: "#CCD8F5",
    text: "#141414",
  },
  sizes,
  fonts,
} as const;
