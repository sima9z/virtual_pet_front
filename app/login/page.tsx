"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Button, Typography } from '@mui/material';

const cache = createCache({ key: 'css', prepend: true });
const theme = createTheme();

export default function Login() {
  const router = useRouter();

  const goToPreparation = () => {
    router.push('/preparation');
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h1">Login Page</Typography>
        <Button variant="contained" color="primary" onClick={goToPreparation}>
          Login
        </Button>
      </ThemeProvider>
    </CacheProvider>
  );
}