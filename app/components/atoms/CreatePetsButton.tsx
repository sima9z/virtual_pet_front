import React from 'react';
import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const createPetsButton = ({ petName, selectedPetType, selectedPetLook, onSuccess }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = selectedPetType === '犬' ? 'users/dog' : 'users/cat';
    const petData = {
      name: petName,
      breed: selectedPetLook,
      age: 0,
      experience: 0,
      level: 1,
      hungry: 0,
      thirsty: 0,
      is_adult: false,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(petData),
      });

      if (response.ok) {
        onSuccess();
      } else {
        console.error('Failed to create pet');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
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
          <Button type="submit" variant="contained" color="primary" sx={{ color: 'white', marginTop: '30px' }} onClick={handleSubmit}>
            登録
          </Button>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default createPetsButton ;