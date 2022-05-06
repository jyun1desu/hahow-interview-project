import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "#D9D9D9",
      gray500: "#F3F3F3",
    },
  },
  media: {
    mb: "(min-width: 576px)",
    tb: "(min-width: 996px)",
  },
});
