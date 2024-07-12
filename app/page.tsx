"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Button, Typography } from '@mui/material';

const cache = createCache({ key: 'css', prepend: true });
const theme = createTheme();

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h1">Welcome to the Virtual Pet App</Typography>
        <Button variant="contained" color="primary" onClick={goToLogin}>
          Go to Login
        </Button>
      </ThemeProvider>
    </CacheProvider>
  );
}