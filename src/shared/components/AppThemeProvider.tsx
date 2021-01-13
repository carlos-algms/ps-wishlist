import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import type { FC } from 'react';

const appTheme = createMuiTheme({
  typography: {
    h1: {
      fontWeight: 100,
    },
    h2: {
      fontWeight: 100,
    },
    h3: {
      fontWeight: 100,
    },
    h4: {
      fontWeight: 100,
    },
    h5: {
      fontWeight: 100,
    },
    h6: {
      fontWeight: 100,
    },
  },
});

export type AppTheme = typeof appTheme;

const AppThemeProvider: FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>
    </StylesProvider>
  );
};

export default AppThemeProvider;
