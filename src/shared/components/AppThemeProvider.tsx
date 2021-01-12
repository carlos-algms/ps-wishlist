import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import type { FC, ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

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

const AppThemeProvider: FC<Props> = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={appTheme}>
        <StyledComponentsThemeProvider theme={appTheme}>{children}</StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default AppThemeProvider;
