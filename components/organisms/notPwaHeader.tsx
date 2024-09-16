"use client";

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

import React, {useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CssBaseline, ThemeProvider,Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Image from 'next/image';

import { subTheme } from '../../styles/theme'

const cache = createCache({ key: 'css', prepend: true });

const isPWA = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

const NotPwaHeader = () => {
  const [isStandalone, setIsStandalone] = useState(isPWA());

  useEffect(() => {
    const handler = () => setIsStandalone(isPWA());

    window.addEventListener('resize', handler);
    window.addEventListener('orientationchange', handler);

    return () => {
      window.removeEventListener('resize', handler);
      window.removeEventListener('orientationchange', handler);
    };
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={subTheme}>
        <CssBaseline />
        {!isStandalone && (
        <AppBar position="fixed" color="secondary" sx={{ top: 0, height: '7vh' }}>
          <Toolbar>
            <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%">
              <Typography variant="body1" color="primary" sx={{ height: '50%' }} />
                <Box display="flex" alignItems="center" sx={{ height: '100%' }}>
                <Image
                    src="/ばつ.png"
                    alt="Virtual Pet App ✖"
                    width= {35}
                    height={35}
                    style={{ cursor: 'pointer', transform: 'translateY(-50%)', marginTop: '50%' }}
                    onClick={() => window.close()}
                  />
                </Box>
            </Box>
          </Toolbar>
        </AppBar>
        )}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default NotPwaHeader;