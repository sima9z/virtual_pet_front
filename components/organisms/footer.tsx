"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CssBaseline, ThemeProvider, Link, Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { subTheme } from '../../styles/theme'

const cache = createCache({ key: 'css', prepend: true });

const Footer = () => {
  const router = useRouter();

  const goToPreparation = () => {
    router.push('/kiyaku');
  };
  const goToPreparation2 = () => {
    router.push('https://kiyac.app/privacypolicy/3QB6GsYYlo7FzDYekrOB');
  };
  const goToPreparation3 = () => {
    router.push('https://docs.google.com/forms/d/e/1FAIpQLScbwBebtL1O1Oxz2XG5sX_DVSsyzQL6FDzS0gTk1p0jkSJxig/viewform?usp=sf_link');
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={subTheme}>
        <CssBaseline />
        <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0, height: '7vh' }}>
          <Toolbar>
            <Box width="100%" display="flex" justifyContent="space-between" sx={{ height: '50%' }}>
              <Typography variant="body1" color="primary">
                © 2024 Shimadu Yu
              </Typography>
              <Box display="flex" justifyContent="space-between" gap="20px">
                <Link href="#" color="primary" underline="hover" onClick={goToPreparation}>
                    利用規約
                </Link>
                <Link href="#" color="primary" underline="hover" onClick={goToPreparation2}>
                    プライバシーポリシー
                </Link>
                <Link href="#" color="primary" underline="hover" onClick={goToPreparation3}>
                    お問い合わせ
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Footer;