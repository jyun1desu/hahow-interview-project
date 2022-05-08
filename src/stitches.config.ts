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
      gray300: "#A8A8A8",
      gray400: "#D9D9D9",
      gray500: "#F3F3F3",
      pink: '#EEB0B0'
    },
  },
  media: {
    mb: "(max-width: 576px)",
    tb: "(max-width: 996px)",
  },
});
