"use client";

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { subTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

import { useStandalone } from '../../contexts/StandaloneContext';

const isPWA = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

const NotPwaHeader = () => {
  const isStandalone = useStandalone();
  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const region = process.env.NEXT_PUBLIC_AWS_REGION;

  const pathname = usePathname(); // 現在のパスを取得
  const hideFooterPaths = ['/kiyaku', '/privacyPolicy']; // Footerを非表示にするパスを指定

  // 指定されたパスの場合、Footerを非表示にする
  if (hideFooterPaths.includes(pathname)) {
    return null;
  }

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
                  width={35}
                  height={35}
                  style={{ transform: 'translateY(-50%)', marginTop: '50%' }}
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