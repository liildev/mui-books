import type {} from '@mui/material/themeCssVarsAugmentation';
import { ThemeOptions, PaletteMode } from '@mui/material/styles';

import { getDesignTokens } from './primitives';
import {
  inputs,
  dataDisplay,
  feedback,
  navigation,
  surfaces,
} from './customizations';

export const theme = (mode: PaletteMode): ThemeOptions => {
  return {
    ...getDesignTokens(mode),
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      ...inputs,
      ...dataDisplay,
      ...feedback,
      ...navigation,
      ...surfaces,
    },
  };
};
