"use client";

import React from 'react';
import { Container, Box } from '@mui/material';
import Image from 'next/image';

import { mainTheme } from '../styles/theme'
import ThemeWrapper from '../styles/ThemeWrapper';

import NavigationLink from '../components/atoms/NavigationLink';

export default function Home() {

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
          <NavigationLink 
            href="/login" 
            label="Login" 
            componentType="button" 
            color="secondary" 
            sx={{ color: 'white' }} 
          />
        </Box>
      </Container>
    </ThemeWrapper>
  );
}