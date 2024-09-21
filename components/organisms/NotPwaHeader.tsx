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
import { Box } from '@mui/material';
import Image from 'next/image';

import { subTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

const isPWA = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

const NotPwaHeader = () => {
  const [isStandalone, setIsStandalone] = useState(isPWA());

  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const region = process.env.NEXT_PUBLIC_AWS_REGION;


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
    <ThemeWrapper theme={subTheme}>
      {!isStandalone && (
        <AppBar position="fixed" color="secondary" sx={{ top: 0, height: '7vh' }}>
          <Toolbar>
            <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%">
              <Typography variant="body1" color="primary" sx={{ height: '50%' }} />
                <Box display="flex" alignItems="center" sx={{ height: '100%' }}>
                <Image
                    src={`https://${bucketName}.s3.${region}.amazonaws.com/ばつ.png`}
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
    </ThemeWrapper>
  );
};

export default NotPwaHeader;