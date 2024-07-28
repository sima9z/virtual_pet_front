import React,{useState,useEffect} from 'react';
import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });



interface CreatePetsButtonProps  {
  petName: string;
  selectedPetType: string;
  selectedPetLook: string;
  onSuccess: () => void;
};



  const theme = createTheme({
    palette: {
      primary: {
        main: '#f8bbd0',
      }
    },
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

      </ThemeProvider>
    </CacheProvider>
  );


export default CreatePetsButton ;