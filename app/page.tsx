"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme, Container, Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Image from 'next/image';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';

const cache = createCache({ key: 'css', prepend: true });
const theme = createTheme();

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

const theme = createTheme({
    palette: {
      primary: blue,
      secondary: {
        main: '#f8bbd0',
      },
  },
});

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
              <Image
                src="/ばーちゃるぺっとロゴ.png" // アップロードした画像のパスを指定
                alt="Virtual Pet App Logo"
                width= {1000} // 必要に応じて調整
                height={1000} // 必要に応じて調整
                className="mx-auto w-7/10 h-auto"
              />
            <Button variant="contained" color="secondary" size="large" onClick={goToLogin} sx={{ color: 'white' }}>
              Login
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}