"use client"

import React, { useState } from 'react';

import { CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

const TestUserIdFetch = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUserId = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/current_user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include', // クッキーの送信を許可
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User ID:', data.id); // コンソールログを追加
        setUserId(data.id);
      } else {
        const errorMessage = await response.json();
        console.error('Failed to fetch user ID:', errorMessage.message);
        setError(errorMessage.message);
      }
    } catch (error) {
      console.error('An error occurred while fetching user ID:', error);
      setError('An error occurred while fetching user ID');
    }
    setLoading(false);
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Button  onClick={fetchUserId} disabled={loading} variant="contained" color="secondary" sx={{ color: 'white', marginTop: '50px' }}>
            User_ID_test
          </Button>
        {loading ? 'Loading...' : 'Fetch User ID'}
        {userId && <p>User ID: {userId}</p>}
        {error && <p>Error: {error}</p>}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default TestUserIdFetch;