import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import React, { FC, ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

const appTheme = createMuiTheme({});

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
