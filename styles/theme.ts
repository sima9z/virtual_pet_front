import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#E8AFAF',
    },
    secondary: {
      main: '#f8bbd0',
    },
  },
  typography: {
    fontFamily: `'Yusei Magic', sans-serif`,
  },
});

export const subTheme = createTheme({
  palette: {
    primary: {
      main: '#AD8B8B',
    },
    secondary: {
      main: '#FFE1E1',
    },
  },
  typography: {
    fontFamily: `'Yusei Magic', sans-serif`,
  },
});

export const logoutButtonTheme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    }
  },
  typography: {
    fontFamily: `'Yusei Magic', sans-serif`,
  },
});