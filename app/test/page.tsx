"use client"

import React, {useState,useRef} from 'react';
import { Button, CssBaseline, ThemeProvider, createTheme, Drawer, Box, List, ListItem } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import TestUserIdFetch from '../api/TestUserIdFetch';

import PuppyDogAnimation from '../components/PuppyDogAnimation';

const cache = createCache({ key: 'css', prepend: true });

const theme = createTheme({
  palette: {
    primary: {
      main: '#E8AFAF',
    },
    secondary: {
      main: '#f8bbd0',
    },
  },
});

const TestPage = () => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Test User ID Fetch</h1>
        <TestUserIdFetch />
        <Button              
        variant="contained"
        color="secondary"
        sx={{ color: 'white', fontSize: "24px" }}>遊ぶ</Button>
        <PuppyDogAnimation />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default TestPage;