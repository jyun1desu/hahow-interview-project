import { globalCss } from "./stitches.config";

const reset = {
  body: {
    margin: 0,
  },
  p: {
    margin: 0,
  },
  ul: {
    padding: 0,
    margin: 0,
  },
};

const globalStyle = globalCss({
  ...reset,
});

export default globalStyle;
