"use client";

import React, {useState,useEffect} from 'react';
// import DogRandomAnimation from '../components/dogRandomAnimation';
import DogAnimation from '../components/DogAnimation';
import CatWalkAnimation from '../components/CatWalkAnimation';

import {getPetInfo} from '../api/getPetInfo'

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
  const [petType, setPetType] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPetInfo() {
      try {
        const petInfo = await getPetInfo();
        console.log('Pet type:', petInfo.petType); 
        setPetType(petInfo.petType);
      } catch (error) {
        console.error('Error fetching pet information:', error);
      }
    }

    fetchPetInfo();
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="relative h-[93vh] overflow-hidden">
          <div className="absolute top-0 right-0 m-4">
            <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
          </div>
          <div className="flex justify-center items-end h-full">
            {petType === 'dog' && <DogAnimation />}
            {petType === 'cat' && <CatWalkAnimation />}
            {petType === 'none' && <p>No pet found</p>}
            <BackgroundImage src='/ばーちゃるぺっと背景.jpg' />
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}