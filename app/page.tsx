"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CssBaseline, ThemeProvider, createTheme, Container, Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Image from 'next/image';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';

const cache = createCache({ key: 'css', prepend: true });

const CheckEnv = () => {
  useEffect(() => {
    console.log("API Base URL inside CheckEnv:", process.env.NEXT_PUBLIC_API_BASE_URL);
  }, []);

  return <div>Check the console for the API Base URL in CheckEnv</div>;
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
  }, []);

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
                width= {800} // 必要に応じて調整
                height={800} // 必要に応じて調整
                className="mx-auto w-7/10 h-auto"
              />
            <Button variant="contained" color="secondary" size="large" onClick={goToLogin} sx={{ color: 'white' }}>
              Login
            </Button>
            {/* <CheckEnv /> */}
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}