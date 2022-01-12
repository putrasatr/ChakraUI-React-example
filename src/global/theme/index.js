import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

export const theme = extendTheme({
  breakpoints,
  fonts: {
    body: "Maven Pro, sans-serif",
  },
  fontSizes: {
    xl: "24px",
    lg: "20px",
    md: "16px",
    sm: "14px",
    xs: "12px",
    "2xs": "10px",
    "2xl": "32px",
    "3xl": "40px",
  },
});
