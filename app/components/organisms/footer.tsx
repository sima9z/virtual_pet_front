"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CssBaseline, createTheme, ThemeProvider, Link, Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

const theme = createTheme({
  palette: {
    primary: {
      main: '#AD8B8B',
    },
    secondary: {
      main: '#FFE1E1',
    },
  },
});

const Footer = () => {
  const router = useRouter();

  const goToPreparation = () => {
    router.push('/kiyaku');
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0, height: '7vh' }}>
          <Toolbar>
            <Box width="100%" display="flex" justifyContent="space-between" sx={{ height: '50%' }}>
              <Typography variant="body1" color="primary">
                © 2024 Shimadu Yu
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="flex-end" gap="10px">
                <Link href="#" color="primary" underline="hover" onClick={goToPreparation}>
                    利用規約
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Footer;