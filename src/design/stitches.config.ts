import { createStitches } from '@stitches/react';
import { reset, utilityClass, commonStyle } from './stitches.global';
import typography, { globalTypo } from './stitches.typography';
import sizes from './stitches.sizes';
import color from './stitches.color';
import utils from './stitches.utils';


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
    ...color,
    ...sizes,
    ...typography,
  },
  media: {
    mobile: '(max-width: 640px)',
    tablet: '(max-width: 1024px)',
    fine: "(pointer: fine)",
    hover: "(hover: hover)",
    hoverNone: "(hover: none)"
  }
});

export const darkTheme = createTheme({
  colors: {},
});

export const globalStyle = globalCss({
  ...reset,
  ...commonStyle,
  ...utilityClass,
  ...globalTypo,
});

export const shakingAppear = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(30px)"
  },
  "25%": {
    opacity: .2,
    transform: "translateX(-20px)"
  },
  "50%": {
    opacity: .7,
    transform: "translateX(18px)"

  },
  "75%": {
    opacity: 1,
    transform: "translateX(-10px)"
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0px)"
  }
})
