'use client'
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    pink: Palette['primary'];
    brown: Palette['primary'];
  }

  interface PaletteOptions {
    pink?: PaletteOptions['primary'];
    brown?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
interface ButtonPropsColorOverrides {
    pink: true;
    brown: true;
}
}

declare module '@mui/material/TextField' {
interface TextFieldPropsColorOverrides {
    pink: true;
    brown: true;
}
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
      pink: true;
      brown:true;
  }
  }


const theme = createTheme({
    palette: {
      pink: {
        main: '#ec407a',
        light: '#f8bbd0',
        dark: '#d81b60',
        contrastText: '#242105',
      },
      brown: {
        main: '#ddbea9',
        light: '#ddbea9',
        dark: '#ddbea9',
        contrastText: '#242105',
      },
    },
  });

export default theme