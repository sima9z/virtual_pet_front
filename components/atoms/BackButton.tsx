"use client";

import React from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

import { mainTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

const BackButton = () => {
  const router = useRouter();

  return (
    <ThemeWrapper theme={mainTheme}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => router.back()}
        sx={{ color: 'white' }}
      >
        戻る
      </Button>
    </ThemeWrapper>
  );
}

export default BackButton;