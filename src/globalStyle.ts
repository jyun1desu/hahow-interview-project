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
  button: {
    border: 'none',
    backgroundColor: 'transparent',
    padding: 0,

    "&:disabled": {
      pointerEvents: 'none',
    }
  },
  a: {
    textDecoration: 'none'
  }
};

const globalStyle = globalCss({
  ...reset,

  '*': {
    fontFamily: 'Zen Maru Gothic',
    fontWeight: 500,
  }
});

export default globalStyle;
