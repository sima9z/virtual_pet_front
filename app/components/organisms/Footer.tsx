"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CssBaseline,createTheme,ThemeProvider, } from '@mui/material';
import { blue } from '@mui/material/colors';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#f8bbd0',
    },
},
});

const Footer = () => {
  return(
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0, height: '7%' }}>
            <Toolbar>
              <Typography variant="body1" color="white" sx={{ height: '50%' }}>
                © 2024 Shimadu Yu
              </Typography>
            </Toolbar>
          </AppBar>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default Footer;