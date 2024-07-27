"use client";

import React from 'react';
// import DogRandomAnimation from '../components/dogRandomAnimation';
import CatWalkAnimation from '../components/CatWalkAnimation';
import BackgroundImage from "../components/atoms/BackgroundImage"
import AnchorTemporaryDrawer from "../components/organisms/menu"

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

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

export default function Main() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="relative h-[93vh]">
          <div className="absolute top-0 right-0 m-4">
            <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
          </div>
          <div className="flex justify-center items-end h-full">
            <CatWalkAnimation />
            <BackgroundImage src='/ばーちゃるぺっと背景.jpg' />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}