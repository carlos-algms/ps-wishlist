/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

declare module '@material-ui/core/styles/createMuiTheme' {
  export interface Theme {}
}

declare module '@material-ui/core/styles/createPalette' {
  export interface PaletteOptions {}
}

declare module 'styled-components' {
  // eslint-disable-next-line no-restricted-imports
  import { Theme } from '@material-ui/core/styles/createMuiTheme';
  export interface DefaultTheme extends Theme {}
}
