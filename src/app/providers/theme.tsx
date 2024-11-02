import { FC, PropsWithChildren } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { useAppStore } from '@/lib/store';
import { theme } from '@/theme';

export const Theme: FC<PropsWithChildren> = ({ children }) => {
  const { mode } = useAppStore();
  const appTheme = createTheme(theme(mode));

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};
