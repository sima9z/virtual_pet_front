"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Button, Typography } from '@mui/material';

const cache = createCache({ key: 'css', prepend: true });
const theme = createTheme();

export default function Preparation() {
  const router = useRouter();

  const goToMainPage = () => {
    router.push('/main');
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h1">Preparation Page</Typography>
        <Button variant="contained" color="primary" onClick={goToMainPage}>
          Go to Main Page
        </Button>
      </ThemeProvider>
    </CacheProvider>
  );
}