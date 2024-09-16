"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Box } from '@mui/material';
import Image from 'next/image';
import { Button } from '@mui/material';

import { mainTheme } from '../styles/theme'
import ThemeWrapper from '../styles/ThemeWrapper';

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <ThemeWrapper theme={mainTheme}>
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
        </Box>
      </Container>
    </ThemeWrapper>
  );
}