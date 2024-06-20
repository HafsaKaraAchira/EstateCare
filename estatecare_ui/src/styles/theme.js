// src/theme.js
import { createTheme,  responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#335145', // Brunswick Green
      light: '#4a6e57', // Light Brunswick Green
      dark: '#233a30', // Dark Brunswick Green
    },
    secondary: {
      main: '#cd9071', // Persian Orange
      light: '#dba98a', // Light Persian Orange
      dark: '#ac745b', // Dark Persian Orange
    },
    background: {
      default: '#fffffc', // Baby Powder
      dark: '#767699', // Cool Gray
      paper: '#fffffc', // Baby Powder
    },
    text: {
      primary: '#000000', // Black
      secondary: '#767699', // Cool Gray
      disabled: '#a8a8a8', // Light Gray (disabled text)
    },
    error: {
      main: '#d32f2f', // Error Red
      light: '#ef5350', // Light Error Red
      dark: '#c62828', // Dark Error Red
    },
    warning: {
      main: '#ffa000', // Warning Orange
      light: '#ffca28', // Light Warning Orange
      dark: '#ff8f00', // Dark Warning Orange
    },
    info: {
      main: '#1976d2', // Info Blue
      light: '#64b5f6', // Light Info Blue
      dark: '#1565c0', // Dark Info Blue
    },
    success: {
      main: '#388e3c', // Success Green
      light: '#81c784', // Light Success Green
      dark: '#2e7d32', // Dark Success Green
    },
  },
});

theme = responsiveFontSizes(theme,
  {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    factor: 2, // Adjust the factor based on your needs
  }
);

export default theme;
