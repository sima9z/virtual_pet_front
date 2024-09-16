import { logout } from '../../features/api/auth';
import React, { useState } from 'react';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useRouter } from 'next/navigation';

import { LogoutButtonProps } from '../../types/index'

import { logoutButtonTheme } from '../../styles/theme'

const cache = createCache({ key: 'css', prepend: true });

const LogoutButton = ({ physicalRecoveryIntervalId, statDecreaseIntervalId }:LogoutButtonProps) => {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // インターバルをクリアする
      if (physicalRecoveryIntervalId) {
        clearInterval(physicalRecoveryIntervalId);
      }
      if (statDecreaseIntervalId) {
        clearInterval(statDecreaseIntervalId);
      }

      await logout();
      console.log('Logged out');
      router.push('/');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (  
    <CacheProvider value={cache}>
      <ThemeProvider theme={logoutButtonTheme}>
        <CssBaseline />
        <Button onClick={handleLogout} variant="contained" color="primary" sx={{ color: 'white', fontSize: "24px" }}>
          ログアウト
        </Button>
        {error && <p>{error}</p>}
      </ThemeProvider>
    </CacheProvider>
  )
};

export default LogoutButton;